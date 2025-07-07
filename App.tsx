
import React, { useState, useEffect, useCallback } from 'react';
import { itineraryData, pointsOfInterestData, restaurantData, transportData, usefulTipsData, NAVIGATION_ITEMS, SparklesIcon } from './constants.tsx';
import type { ItineraryData, PointOfInterest, Restaurant, AccordionItemData, Comment, ItineraryDay } from './types';
import { NavigationTarget } from './types';
import AccordionItem from './components/AccordionItem';
import LoadingSpinner from './components/LoadingSpinner';
import TripPhaseChart from './components/TripPhaseChart';
import { addComment as addSupabaseComment, loadComments as loadSupabaseComments, isSupabaseAvailable } from './services/supabaseService';
import { 
    generatePoiCuriosities as genPoiCuriosities, 
    suggestKidActivities as genKidActivities, 
    describeFrenchDish as genFrenchDish,
    isGeminiAvailable
} from './services/geminiService';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavigationTarget>(NavigationTarget.Overview);
  const [selectedDay, setSelectedDay] = useState<string>(Object.keys(itineraryData)[0] || '');
  
  // States for Points of Interest Section
  const [poiCuriosities, setPoiCuriosities] = useState<{[key: string]: string}>({});
  const [poiLoading, setPoiLoading] = useState<{[key: string]: boolean}>({});

  // States for Daily Itinerary Section
  const [kidActivities, setKidActivities] = useState<{[key: string]: string}>({});
  const [kidActivitiesLoading, setKidActivitiesLoading] = useState<{[key: string]: boolean}>({});
  
  // States for Culinary Section
  const [frenchDishInput, setFrenchDishInput] = useState<string>('');
  const [dishDescription, setDishDescription] = useState<string>('');
  const [dishLoading, setDishLoading] = useState<boolean>(false);

  // States for Comments Section
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentAuthor, setCommentAuthor] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');
  const [commentsLoading, setCommentsLoading] = useState<boolean>(true);
  const [commentError, setCommentError] = useState<string | null>(null);
  
  const geminiReady = isGeminiAvailable();
  const supabaseReady = isSupabaseAvailable();

  const fetchComments = useCallback(async () => {
    if (!supabaseReady) {
        setCommentsLoading(false);
        setCommentError("Funcionalidade de comentários desativada (Supabase não configurado).");
        return;
    }
    setCommentsLoading(true);
    setCommentError(null);
    try {
      const fetchedComments = await loadSupabaseComments();
      setComments(fetchedComments);
    } catch (error) {
      console.error("Failed to load comments:", error);
      setCommentError(error instanceof Error ? error.message : "Erro ao carregar comentários.");
    } finally {
      setCommentsLoading(false);
    }
  }, [supabaseReady]);

  useEffect(() => {
    if (activeSection === NavigationTarget.Comments) {
      fetchComments();
    }
  }, [activeSection, fetchComments]);

  const handleAddComment = async () => {
    if (!supabaseReady || !commentText.trim()) return;
    setCommentError(null);
    try {
      await addSupabaseComment(commentAuthor.trim() || 'Anónimo', commentText.trim());
      setCommentAuthor('');
      setCommentText('');
      fetchComments(); // Refresh comments list
    } catch (error) {
      console.error("Failed to add comment:", error);
      setCommentError(error instanceof Error ? error.message : "Erro ao adicionar comentário.");
    }
  };

  const handleGeneratePoiCuriosities = async (poiName: string) => {
    if (!geminiReady) return;
    setPoiLoading(prev => ({ ...prev, [poiName]: true }));
    setPoiCuriosities(prev => ({...prev, [poiName]: ''}));
    const result = await genPoiCuriosities(poiName);
    setPoiCuriosities(prev => ({ ...prev, [poiName]: result }));
    setPoiLoading(prev => ({ ...prev, [poiName]: false }));
  };

  const handleSuggestKidActivities = async (dateKey: string) => {
    if (!geminiReady) return;
    const dayData = itineraryData[dateKey];
    if (!dayData || !dayData.mainPlan?.schedule) return;

    setKidActivitiesLoading(prev => ({ ...prev, [dateKey]: true }));
    setKidActivities(prev => ({...prev, [dateKey]: ''}));

    const schedule = dayData.mainPlan.schedule;
    
    const morningPlan = schedule.filter(e => {
        const hour = parseInt(e.time.split(':')[0]);
        return e.time.toLowerCase().includes('manhã') || (!isNaN(hour) && hour < 12);
    }).map(e => e.description).join('; ');

    const afternoonPlan = schedule.filter(e => {
        const hour = parseInt(e.time.split(':')[0]);
        const timeLower = e.time.toLowerCase();
        return timeLower.includes('tarde') || timeLower.includes('almoço') || (!isNaN(hour) && hour >= 12 && hour < 18);
    }).map(e => e.description).join('; ');
    
    const eveningPlan = schedule.filter(e => {
        const hour = parseInt(e.time.split(':')[0]);
        return e.time.toLowerCase().includes('noite') || (!isNaN(hour) && hour >= 18);
    }).map(e => e.description).join('; ');

    const result = await genKidActivities(
      morningPlan || "N/A",
      afternoonPlan || "N/A",
      eveningPlan || "N/A"
    );
    setKidActivities(prev => ({ ...prev, [dateKey]: result }));
    setKidActivitiesLoading(prev => ({ ...prev, [dateKey]: false }));
  };
  
  const handleDescribeFrenchDish = async () => {
    if (!geminiReady || !frenchDishInput.trim()) return;
    setDishLoading(true);
    setDishDescription('');
    const result = await genFrenchDish(frenchDishInput);
    setDishDescription(result);
    setDishLoading(false);
  };


  const renderContent = () => {
    switch (activeSection) {
      case NavigationTarget.Overview:
        return (
          <section id="overview" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-cafe-rouge">🌟 Bem-vindos à Aventura Parisiense!</h2>
            <p className="mb-4">Esta aplicação interativa é o seu guia para a mágica viagem de 15 dias da família Barros-Bressan a Paris e Disneyland, de 14 a 28 de julho de 2025. Explore os planos diários, incluindo alternativas e informações de transporte detalhadas, e descubra dicas para tornar esta jornada multigeracional verdadeiramente inesquecível. Navegue pelas secções para aceder a todos os detalhes do seu roteiro personalizado.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-lavender-mist p-4 rounded-lg"> {/* Original: bg-amber-100 */}
                <h3 className="text-xl font-semibold text-cafe-rouge mb-2">Datas da Viagem</h3> {/* Original: text-orange-600 */}
                <p>📅 Saída: 14 de Julho de 2025</p>
                <p>🔙 Retorno: 28 de Julho de 2025</p>
                <p>⏳ Duração Total: 15 dias / 14 noites</p>
              </div>
              <div className="bg-[#E0FFFF] p-4 rounded-lg"> {/* Original: bg-sky-100 */}
                <h3 className="text-xl font-semibold text-royal-velvet mb-2">Fases da Viagem</h3> {/* Original: text-sky-700 */}
                <p>🏰 Disneyland Paris: 4 dias / 3 noites</p>
                <p>🏙️ Paris (cidade): 11 dias / 10 noites</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-cafe-rouge text-center my-4">Duração das Fases da Viagem (em noites)</h3>
            <TripPhaseChart />
            <p className="mt-6 text-sm text-parisian-gray">Este é um resumo visual da divisão da vossa estadia. Utilizem os botões de navegação acima para explorar cada secção em detalhe.</p>
          </section>
        );
      case NavigationTarget.DailyItinerary:
        const currentDayData = itineraryData[selectedDay];
        return (
          <section id="daily-itinerary" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-cafe-rouge">🗓️ Roteiro Diário Detalhado</h2>
            <p className="mb-6">Aqui encontrará o plano para cada dia da vossa aventura, incluindo uma opção alternativa e informações de transporte detalhadas, seguindo um formato passo a passo. Selecione um dia para ver as atividades programadas, sugestões de refeições e considerações especiais. Lembrem-se que a flexibilidade é chave, e este roteiro serve como um guia para maximizar a vossa diversão!</p>
            <div className="mb-4 flex flex-wrap gap-2 justify-center">
              {Object.keys(itineraryData).map((dateKey) => (
                <button
                  key={dateKey}
                  onClick={() => setSelectedDay(dateKey)}
                  className={`nav-button px-3 py-1.5 rounded-md text-sm transition-all duration-300 ease-in-out border
                    ${selectedDay === dateKey 
                      ? 'bg-royal-velvet text-marble-white font-semibold border-royal-velvet' 
                      : 'bg-cobblestone-beige text-twilight-black hover:bg-light-sky-blue-hover border-cobblestone-beige'}`}
                >
                  {`${dateKey} (${itineraryData[dateKey].day.substring(0,3)}) ${itineraryData[dateKey].disney ? '🏰' : '🏙️'}`}
                </button>
              ))}
            </div>
            {currentDayData && (
              <div className="mt-6 day-card">
                <h3 className="flex items-center text-2xl font-bold text-cafe-rouge mb-2 text-[1.75rem]">
                    <span className="text-3xl mr-3 text-gilded-gold">{currentDayData.themeIcon || '📅'}</span>
                    {currentDayData.mainTitle} - {selectedDay} ({currentDayData.day})
                </h3>
                {currentDayData.themeDescription && <p className="text-sm text-parisian-gray italic mb-5 text-[0.95em]">{currentDayData.themeDescription}</p>}
                
                {currentDayData.mainPlan && (
                  <div>
                    <h4 className="text-xl font-semibold text-cafe-rouge mt-4 mb-4 text-[1.25rem]">📋 Plano Principal</h4>
                    
                    <div className="mt-6 relative">
                        {/* The vertical timeline bar, with top/bottom padding to align with markers */}
                        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-plum-passion/40" aria-hidden="true"></div>

                        {/* Map through schedule events */}
                        <div className="space-y-8">
                            {currentDayData.mainPlan.schedule.map((event, index) => (
                                <div key={index} className="flex items-start">
                                    
                                    {/* Marker circle on the timeline */}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cobblestone-beige flex items-center justify-center text-2xl border-2 border-royal-velvet z-10">
                                        <span>{event.icon || '➡️'}</span>
                                    </div>

                                    {/* Event details to the right of the timeline */}
                                    <div className="ml-6 flex-grow"> 
                                        <div className="p-4 bg-lavender-mist/60 rounded-lg shadow-sm border border-plum-passion/20">
                                            <p className="font-bold text-royal-velvet mb-1 text-lg">{event.time}</p>
                                            <p className="text-twilight-black" dangerouslySetInnerHTML={{ __html: event.description }} />
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {geminiReady ? (
                        <button 
                            onClick={() => handleSuggestKidActivities(selectedDay)} 
                            disabled={kidActivitiesLoading[selectedDay]}
                            className="gemini-button mt-6 bg-purple-gemini text-white px-3 py-1.5 rounded text-sm hover:bg-purple-gemini-hover disabled:bg-disabled-gray disabled:cursor-not-allowed flex items-center"
                        >
                            {kidActivitiesLoading[selectedDay] ? <LoadingSpinner size="w-4 h-4 mr-2" /> : <SparklesIcon />} Sugerir Atividades Infantis
                        </button>
                    ) : <p className="text-sm text-parisian-gray mt-4">IA para sugestão de atividades indisponível.</p>}
                    {kidActivities[selectedDay] && (
                      <div className="kid-activities-results bg-lavender-mist p-3 rounded border-l-3 border-purple-gemini text-twilight-black text-sm leading-relaxed mt-2">
                        {kidActivities[selectedDay].split('\n').map((line, index) => (
                            <p key={index} className="mb-1">{line}</p>
                        ))}
                      </div>
                    )}

                    {currentDayData.mainPlan.transport && <div className="transport-details bg-gray-200 p-4 rounded-md mt-4 text-sm text-twilight-black border-l-4 border-royal-velvet" dangerouslySetInnerHTML={{ __html: currentDayData.mainPlan.transport }} />}
                  </div>
                )}

                {currentDayData.considerations && <div className="mt-4 pt-4 border-t border-parisian-gray"><h5 className="font-semibold text-lg text-gray-700">Considerações Especiais 💡:</h5><p className="text-twilight-black" dangerouslySetInnerHTML={{ __html: currentDayData.considerations }} /></div>}

                {currentDayData.alternativePlan && (
                  <div className="alternative-plan-container bg-lavender-mist border-t-2 border-dashed border-plum-passion mt-6 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-[#800080] mt-0 mb-2 border-b border-[#800080] pb-1 text-[1.25rem]">✨ Plano Alternativo: {currentDayData.alternativePlan.title}</h4>
                     <div className="mt-4 space-y-4">
                      {currentDayData.alternativePlan.schedule.map((event, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 bg-white/60 rounded-lg">
                          <div className="w-28 text-right flex-shrink-0">
                            <p className="font-semibold text-royal-velvet/90">{event.time}</p>
                          </div>
                          <div className="text-3xl pt-1 flex-shrink-0">{event.icon || '➡️'}</div>
                          <div className="flex-grow pt-1">
                            <p dangerouslySetInnerHTML={{ __html: event.description }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    {currentDayData.alternativePlan.transport && <div className="transport-details bg-gray-200 p-4 rounded-md mt-4 text-sm text-twilight-black border-l-4 border-royal-velvet" dangerouslySetInnerHTML={{ __html: currentDayData.alternativePlan.transport }} />}
                    {currentDayData.alternativePlan.notes && <div className="mt-3 pt-3 border-t border-plum-passion"><h5 className="font-semibold text-gray-700">Notas da Alternativa:</h5><p className="text-sm" dangerouslySetInnerHTML={{ __html: currentDayData.alternativePlan.notes }} /></div>}
                  </div>
                )}
              </div>
            )}
          </section>
        );
      case NavigationTarget.PointsOfInterest:
        return (
          <section id="points-of-interest" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-cafe-rouge">🗺️ Pontos de Interesse</h2>
            <p className="mb-6">Paris e arredores oferecem uma infinidade de atrações. Esta secção lista os principais pontos mencionados no vosso roteiro, com descrições visuais, ícones, links para os seus sites oficiais (quando disponível) e imagens de placeholder para dar uma ideia visual. Poderão encontrar aqui informações sobre museus, monumentos, parques e outros locais fascinantes que tornarão a vossa viagem ainda mais rica.</p>
            <div className="space-y-6">
              {pointsOfInterestData.map(poi => (
                <div key={poi.name} className="poi-item flex flex-col md:flex-row gap-4 bg-[#FAF0E6] p-4 rounded-md border border-[#D8CBA7]">
                  <div className="poi-image-container w-full md:w-1/3 max-w-xs h-48 bg-gray-300 rounded overflow-hidden mx-auto md:mx-0">
                    <img src={poi.imagePlaceholder} alt={`Imagem de ${poi.name}`} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://picsum.photos/300/200?random=' + Math.random())} />
                  </div>
                  <div className="poi-details flex-grow">
                    <h4 className="text-xl font-semibold text-cafe-rouge">
                      <span className="text-2xl mr-2 text-gilded-gold align-middle">{poi.icon || '📍'}</span>
                      {poi.link ? <a href={poi.link} target="_blank" rel="noopener noreferrer" className="text-royal-velvet hover:text-garden-green underline">{poi.name}</a> : poi.name}
                      <span className="text-sm text-[#87CEEB] ml-2">({poi.category})</span>
                    </h4>
                    <p className="text-sm mt-1">{poi.notes}</p>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(poi.name + ", Paris, France")}`} target="_blank" rel="noopener noreferrer" className="maps-button bg-garden-green text-marble-white px-4 py-2 rounded-md text-sm inline-block mt-3 hover:bg-[#3CB371] transition-colors">
                      Vamos lá! 🚀
                    </a>
                    {geminiReady ? (
                        <button 
                            onClick={() => handleGeneratePoiCuriosities(poi.name)} 
                            disabled={poiLoading[poi.name]}
                            className="gemini-button maps-button bg-purple-gemini text-white px-3 py-1.5 rounded text-sm mt-3 md:ml-2 hover:bg-purple-gemini-hover disabled:bg-disabled-gray disabled:cursor-not-allowed flex items-center"
                        >
                           {poiLoading[poi.name] ? <LoadingSpinner size="w-4 h-4 mr-2" /> : <SparklesIcon />} Gerar Curiosidades
                        </button>
                    ): <p className="text-sm text-parisian-gray mt-2">IA para curiosidades indisponível.</p>}
                    {poiCuriosities[poi.name] && (
                       <div className="poi-curiosities bg-lavender-mist p-3 rounded border-l-3 border-purple-gemini text-twilight-black text-sm leading-relaxed mt-2">
                        {poiCuriosities[poi.name].split('\n').map((line, index) => (
                            <p key={index} className="mb-1">{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case NavigationTarget.Culinary:
        return (
          <section id="culinary" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-cafe-rouge">🍽️ Delícias Gastronômicas</h2>
            <p className="mb-6">A culinária parisiense é uma experiência por si só! Esta secção é dedicada às vossas aventuras gastronómicas, com sugestões de restaurantes para que todos desfrutem dos sabores de Paris. Desde brasseries clássicas a patisseries de luxo, preparem-se para se deliciar.</p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mt-6 mb-3 text-cafe-rouge">Sugestões de Restaurantes (Resumo)</h3>
              <ul className="list-disc pl-5 space-y-2">
                {restaurantData.map(r => (
                  <li key={r.name}>
                    {r.link ? <a href={r.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-royal-velvet hover:text-garden-green underline">{r.name}</a> : <strong className="font-semibold">{r.name}</strong>}
                    {` (${r.type}, ${r.price}): ${r.notes}`}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2 text-cafe-rouge">✨ Curioso sobre um prato francês?</h4>
                <input 
                    type="text" 
                    value={frenchDishInput}
                    onChange={(e) => setFrenchDishInput(e.target.value)}
                    placeholder="Digite o nome do prato (ex: Coq au Vin)" 
                    className="w-full md:w-2/3 p-2 border border-parisian-gray rounded-md mb-2" 
                />
                {geminiReady ? (
                    <button 
                        onClick={handleDescribeFrenchDish}
                        disabled={dishLoading}
                        className="gemini-button maps-button bg-purple-gemini text-white px-4 py-2 rounded text-sm hover:bg-purple-gemini-hover disabled:bg-disabled-gray disabled:cursor-not-allowed flex items-center"
                    >
                        {dishLoading ? <LoadingSpinner size="w-4 h-4 mr-2" /> : <SparklesIcon />} Descrever Prato
                    </button>
                ): <p className="text-sm text-parisian-gray mt-2">IA para descrição de pratos indisponível.</p>}
                {dishDescription && (
                    <div className="dish-description-output bg-lavender-mist p-3 rounded border-l-3 border-purple-gemini text-twilight-black text-sm leading-relaxed mt-2">
                        {dishDescription.split('\n').map((line, index) => (
                            <p key={index} className="mb-1">{line}</p>
                        ))}
                    </div>
                )}
              </div>
            </div>
          </section>
        );
      case NavigationTarget.Transport:
        return (
          <section id="transport" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-cafe-rouge">🚌 Plano de Transporte Geral</h2>
            <p className="mb-6">Navegar por Paris e arredores requer um bom planeamento de transporte. Aqui estão os detalhes sobre os vossos transfers e as melhores formas de se locomoverem pela cidade, com foco na acessibilidade e conforto para toda a família. Instruções específicas e detalhadas para cada dia, incluindo alternativas, estão na secção "Roteiro Diário".</p>
            <div className="space-y-4">
              {transportData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} accordionStyle="transport" />
              ))}
            </div>
          </section>
        );
      case NavigationTarget.Tips:
        return (
          <section id="tips" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-cafe-rouge">💡 Dicas Úteis e Extras</h2>
            <p className="mb-6">Para garantir que a vossa viagem seja o mais tranquila e agradável possível, reunimos aqui algumas dicas sobre o que levar na mala, comunicação, compras, e sugestões para as melhores fotos. Pequenos detalhes que fazem uma grande diferença!</p>
            <div className="space-y-4">
              {usefulTipsData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} accordionStyle="tips" />
              ))}
            </div>
          </section>
        );
      case NavigationTarget.Comments:
        return (
          <section id="trip-comments" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-cafe-rouge">📝 Comentários da Viagem</h2>
            <p className="mb-6">Deixe aqui as suas memórias, dicas ou momentos favoritos da viagem para partilhar com a família!</p>
            <div className="bg-lavender-mist p-6 rounded-lg border border-plum-passion">
              <h3 className="text-xl font-semibold text-[#800080] mb-4">Deixe o seu Comentário:</h3>
              {supabaseReady ? (
                <>
                  <input 
                    id="comment-author" 
                    placeholder="O seu nome (opcional)" 
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    className="w-full p-2 border border-parisian-gray rounded-md mb-2 min-h-[40px] text-twilight-black"
                  />
                  <textarea 
                    id="comment-text" 
                    placeholder="Escreva o seu comentário aqui..." 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full p-2 border border-parisian-gray rounded-md mb-2 min-h-[80px] text-twilight-black"
                  />
                  <button 
                    onClick={handleAddComment}
                    className="bg-garden-green text-marble-white px-4 py-2 rounded-md hover:bg-[#3CB371] transition-colors"
                  >
                    Enviar Comentário
                  </button>
                </>
              ) : <p className="text-sm text-parisian-gray">Funcionalidade de adicionar comentários desativada (Supabase não configurado).</p>}
              
              <h3 className="text-xl font-semibold text-[#800080] mt-6 mb-3">Comentários Anteriores:</h3>
              {commentsLoading && <LoadingSpinner />}
              {commentError && <p className="text-cafe-rouge">{commentError}</p>}
              {!commentsLoading && !commentError && comments.length === 0 && <p>Ainda não há comentários. Seja o primeiro!</p>}
              {!commentsLoading && !commentError && comments.length > 0 && (
                <div id="comments-list" className="space-y-2">
                  {comments.map(comment => (
                    <div key={comment.id || comment.created_at} className="bg-marble-white p-3 rounded-md border border-cobblestone-beige">
                      <strong className="text-twilight-black">{comment.author}</strong>
                      <span className="text-xs text-parisian-gray ml-2">- {new Date(comment.created_at).toLocaleString('pt-PT')}</span>
                      <p className="mt-1 text-twilight-black">{comment.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-cafe-rouge">Paris em Família: Aventura 2025</h1>
        <p className="text-lg text-parisian-gray">Seu roteiro interativo para uma viagem inesquecível!</p>
      </header>

      <nav className="flex flex-wrap justify-center gap-2 mb-8">
        {NAVIGATION_ITEMS.map(item => (
          <button
            key={item.target}
            onClick={() => setActiveSection(item.target)}
            className={`nav-button px-4 py-2 rounded-md transition-all duration-300 ease-in-out border
              ${activeSection === item.target 
                ? 'bg-royal-velvet text-marble-white font-semibold border-royal-velvet' 
                : 'bg-cobblestone-beige text-twilight-black hover:bg-light-sky-blue-hover border-cobblestone-beige'}`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <main>
        {renderContent()}
      </main>

      <footer className="mt-12 pt-8 text-center border-t border-parisian-gray">
        <p className="text-parisian-gray">© 2025 Família Barros-Bressan em Paris. Roteiro por Seu Guia Especializado.</p>
        <p className="text-sm text-parisian-gray">Aplicação interativa desenvolvida para facilitar a sua aventura!</p>
      </footer>
    </div>
  );
};

export default App;
