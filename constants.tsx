import React from 'react';
import { ItineraryData, PointOfInterest, Restaurant, AccordionItemData, NavigationTarget } from './types';

// IMPORTANT: Supabase constants have been moved to constants.ts to resolve module import issues.

export const SparklesIcon: React.FC = () => (
  <span role="img" aria-label="sparkles" className="mr-1.5">✨</span>
);

export const NAVIGATION_ITEMS: { label: string; target: NavigationTarget }[] = [
    { label: "Visão Geral", target: NavigationTarget.Overview },
    { label: "Roteiro Diário", target: NavigationTarget.DailyItinerary },
    { label: "Pontos de Interesse", target: NavigationTarget.PointsOfInterest },
    { label: "Gastronomia", target: NavigationTarget.Culinary },
    { label: "Transporte", target: NavigationTarget.Transport },
    { label: "Dicas Úteis", target: NavigationTarget.Tips },
    { label: "Comentários", target: NavigationTarget.Comments },
];

export const itineraryData: ItineraryData = {
    "14/07": { 
        day: "Segunda", 
        mainTitle: "Chegada e Dia da Bastilha", 
        themeIcon: "🎆",
        themeDescription: "Chegada emocionante em Paris durante as celebrações do Dia da Bastilha e instalação na magia da Disney.",
        mainPlan: {
            morning: "Chegada ao Aeroporto Charles de Gaulle (CDG). Recolha de bagagem e encontro com o motorista do transfer.", 
            afternoon: "Transfer para o Hotel Disney. Check-in e instalação nos quartos. Tempo para descanso e os mais novos explorarem as imediações do hotel (se aplicável).", 
            evening: "Jantar tranquilo no restaurante do hotel ou num dos restaurantes da Disney Village com reserva prévia. Opcional: Se houver visibilidade e disposição, tentar avistar os fogos de artifício da Bastilha à distância (sem sair do complexo Disney).",
            transport: "<h6>Como Chegar:</h6><p>🚕 <strong>Recomendado:</strong> Transfer privado pré-reservado em van (ex: Viator, GetYourGuide). Essencial devido ao Dia da Bastilha (trânsito intenso, muitas ruas fechadas em Paris, maior procura por serviços). Confirmar com o operador detalhes sobre o ponto de encontro e tempo estimado de viagem.</p><p><em>Alternativa:</em> Magical Shuttle (serviço oficial da Disney - verificar horários e necessidade de reserva para veículos adaptados) ou TGV do Terminal 2 do CDG para Marne-la-Vallée Chessy (estação da Disney - rápido, ~12 min, mas implica gerir bagagem em estações movimentadas).</p>",
        },
        considerations: "Dia da Bastilha: Esperar grandes multidões e perturbações nos transportes em Paris. O foco principal é uma chegada e instalação tranquilas no hotel Disney. Evitar deslocações ao centro de Paris neste dia.",
        alternativePlan: null 
    },
    "15/07": { 
        day: "Terça", 
        disney: true,
        mainTitle: "Disney: Primeiro Dia de Magia!", 
        themeIcon: "🏰✨",
        themeDescription: "Explorando os encantos clássicos do Disneyland Park, dos contos de fadas às aventuras emocionantes.",
        mainPlan: {
            morning: "🏰 Disneyland Park: Começar pela Main Street U.S.A. em direção ao Castelo da Bela Adormecida para fotos. Explorar Fantasyland: 'it's a small world', 'Peter Pan's Flight' (usar Premier Access se disponível), 'Dumbo the Flying Elephant'. Seguir para Discoveryland: 'Buzz Lightyear Laser Blast' (se reaberto) ou 'Orbitron'.", 
            afternoon: "Almoço no parque (ex: Pizzeria Bella Notte). Continuar em Adventureland: 'Pirates of the Caribbean'. Pausa para descanso no hotel a meio da tarde, especialmente para os membros mais velhos e as crianças.", 
            evening: "Regresso ao Disneyland Park para a 🎆 Disney Stars on Parade (verificar horário e bom local para assistir). Jantar (ex: Plaza Gardens com personagens - reservar com muita antecedência). Show Noturno sobre o Castelo (Fogo de Artifício/Disney Electrical Sky Parade - verificar programação).",
            transport: "<h6>Como Chegar:</h6><p>🚶‍♀️ A pé dentro do complexo Disney.</p><p>🚌 Shuttles gratuitos do hotel Disney para os parques (se o hotel não for o Disneyland Hotel, que é na entrada).</p>"
        },
        considerations: "Gerir alergia da Clara e seletividade da Beatriz nas refeições (consultar guias de alergia e menus). Usar a app Disneyland Paris para horários de shows, filas e reservas de restaurantes. Comprar Disney Premier Access para atrações populares pode ser útil.",
        alternativePlan: {
            title: "Foco em Walt Disney Studios e Relax",
            morning: "🎬 Walt Disney Studios Park: Começar por Worlds of Pixar: 'Crush's Coaster' (para os mais aventureiros, fila pode ser longa), 'Ratatouille: The Adventure'. Explorar Toon Studio.",
            afternoon: "Almoço no Studios (ex: Bistrot Chez Rémy - reservar!). Assistir ao show 'TOGETHER: A Pixar Musical Adventure'. Regresso ao hotel para descanso prolongado ou aproveitar a piscina.",
            evening: "Jantar mais cedo e informal na Disney Village (ex: Earl of Sandwich, Five Guys). Noite tranquila no hotel, preparando-se para o dia seguinte.",
            transport: "<h6>Como Chegar (Alternativa):</h6><p>🚶‍♀️ A pé dentro do complexo Disney.</p><p>🚌 Shuttles gratuitos do hotel Disney para os parques/Disney Village.</p>",
            notes: "Ideal se o grupo preferir um ritmo mais lento no primeiro dia completo ou se houver grande interesse nas atrações do Walt Disney Studios Park."
        }
    },
    "16/07": { 
        day: "Quarta", 
        disney: true,
        mainTitle: "Disney: Walt Disney Studios e Mais Magia",
        themeIcon: "🎬🦸",
        themeDescription: "Aventura no Walt Disney Studios com super-heróis e regresso aos clássicos do Disneyland Park.",
        mainPlan: {
            morning: "🎬 Walt Disney Studios Park: Explorar o Avengers Campus: 'Spider-Man W.E.B. Adventure', 'Avengers Assemble: Flight Force'. Fotos com Super-Heróis (verificar app).", 
            afternoon: "Almoço no Avengers Campus (ex: PYM Kitchen - buffet temático). Regresso ao Disneyland Park. Encontro com Mickey Mouse na Main Street, U.S.A. (verificar app para horários e local exato, pode ser necessário fila virtual). Explorar Frontierland: 'Big Thunder Mountain' (se todos se sentirem aventureiros).", 
            evening: "Jantar na Disney Village (ex: Billy Bob’s Buffet no La Grange - boa variedade para todos). Lojas na Disney Village.",
            transport: "<h6>Como Chegar:</h6><p>🚶‍♀️ A pé dentro do complexo Disney.</p><p>🚌 Shuttles gratuitos do hotel Disney para os parques/Disney Village.</p>"
        },
        considerations: "Verificar horários de shows e encontros com personagens na app. PYM Kitchen é uma experiência divertida, mas pode ser cara; Stark Factory é uma alternativa mais rápida no Avengers Campus.",
        alternativePlan: {
            title: "Dia Clássico no Disneyland Park com Foco em Shows",
            morning: "🏰 Disneyland Park: Main Street U.S.A. e Frontierland: 'Phantom Manor'. Assistir a um dos shows ao ar livre (ex: The Lion King: Rhythms of the Pride Lands - verificar se está em cartaz e horários).",
            afternoon: "Almoço no parque (ex: Cowboy Cookout Barbecue). Adventureland: 'Indiana Jones et le Temple du Péril' (para os mais corajosos). Discoveryland: 'Star Tours: The Adventures Continue'.",
            evening: "Jantar temático no Disneyland Park (ex: Captain Jack's - Restaurant des Pirates, mas CUIDADO EXTREMO com a alergia da Clara, verificar menu e falar com o chef). Aproveitar as atrações com menos fila durante o show noturno (se o grupo já o viu).",
            transport: "<h6>Como Chegar (Alternativa):</h6><p>🚶‍♀️ A pé dentro do complexo Disney.</p><p>🚌 Shuttles gratuitos do hotel Disney para os parques.</p>",
            notes: "Para quem prefere a atmosfera clássica do Disneyland Park e quer focar-se também nos espetáculos."
        }
    },
    "17/07": { 
        day: "Quinta", 
        disney: true,
        mainTitle: "Disney: Favoritos e Despedida",
        themeIcon: "💖🛍️",
        themeDescription: "Últimos momentos mágicos, revendo atrações favoritas e um jantar especial de despedida da Disney.",
        mainPlan: {
            morning: "✨ Revisitar as atrações favoritas em qualquer um dos parques. Se houver interesse, Encontros com Personagens no Princess Pavilion (para Valentina/Clara - usar app para verificar disponibilidade de fila virtual ou horários).", 
            afternoon: "🛍️ Compras de souvenirs de última hora. Desfrutar de um snack temático (ex: Mickey Premium Bar). Última oportunidade para ver a Disney Stars on Parade ou um show específico que o grupo tenha gostado.", 
            evening: "👑 Jantar especial de despedida da Disney. Sugestões: Auberge de Cendrillon (refeição com Princesas Disney) ou Royal Banquet no Disneyland Hotel (refeição com Reis e Rainhas Disney). Ambas requerem reserva com MUITA antecedência.",
            transport: "<h6>Como Chegar:</h6><p>🚶‍♀️ A pé dentro do complexo Disney.</p><p>🚌 Shuttles gratuitos do hotel Disney para os parques/Disney Village.</p>"
        },
        considerations: "Reservar jantares com personagens com meses de antecedência. Se o voo de regresso for no dia seguinte cedo, considerar organizar as malas à noite. Late check-out ou depósito de bagagem no hotel podem ser úteis.",
        alternativePlan: {
            title: "Manhã Relaxante, Disney Village e Preparativos",
            morning: "😴 Manhã mais tranquila, pequeno-almoço sem pressa no hotel. Aproveitar as instalações do hotel (piscina, se houver).",
            afternoon: "Explorar a Disney Village: World of Disney para compras finais, The LEGO Store. Almoço informal na Disney Village (ex: Annette's Diner para um ambiente anos 50, ou Vapiano para opções italianas).",
            evening: "Jantar mais cedo e simples na Disney Village. Começar a organizar as malas para a partida de Paris no dia seguinte. Talvez um último gelado ou crepe.",
            transport: "<h6>Como Chegar (Alternativa):</h6><p>🚌 Shuttles gratuitos do hotel para a Disney Village (se aplicável) ou a pé.</p>",
            notes: "Bom para um dia mais descansado antes da transição para Paris, ou se o grupo já estiver satisfeito com os parques e preferir um ritmo mais leve."
        }
    },
    "18/07": { 
        day: "Sexta", 
        mainTitle: "Adeus Disney, Bonjour Paris!",
        themeIcon: "👋🏙️",
        themeDescription: "Transição da magia da Disney para o charme parisiense, com instalação e primeiro contacto com a cidade.",
        mainPlan: {
            morning: "🏰 Manhã: Últimas atividades na Disney (se houver tempo e disposição, talvez uma volta rápida numa atração favorita ou compra de última hora). Check-out do hotel Disney (verificar horário limite).", 
            afternoon: "Chegada ao Hotel Havane em Paris. Check-in e instalação nos quartos. Tempo para descanso.", 
            evening: "🚶‍♀️ Passeio de orientação no 9º Arrondissement, perto do hotel. Observar a arquitetura, identificar cafés e lojas locais. Jantar numa brasserie tradicional do bairro para uma primeira experiência parisiense autêntica.",
            transport: `<h6>Como Chegar (Hotel Disney → Hotel Havane, Paris):</h6>
                <p>🚕 <strong>Opção 1 (Recomendada para conforto):</strong> Transfer privado pré-reservado (van para acomodar o grupo e bagagens). Tempo estimado: ~1h a 1h30, dependendo do trânsito.</p>
                <p>🚂 <strong>Opção 2 (Transporte Público):</strong></p>
                <p>   1. 🚶‍♀️ Do Hotel Disney até à estação Marne-la-Vallée Chessy.</p>
                <p>   2. 🚆 Apanhe o <strong>RER A</strong> (sentido Paris - ex: St-Germain-en-Laye, Poissy, Cergy) até à estação <strong>Auber</strong> (~40-45 min).</p>
                <p>   3. 🚶‍♀️ De Auber, pode apanhar um táxi até ao Hotel Havane (~10-15 min) ou:</p>
                <p>   4. 🚇 Caminhe até à estação Opéra (ligada a Auber) e apanhe a <strong>Linha 7</strong> do Metro (sentido La Courneuve) até à estação <strong>Cadet</strong> (2 paradas, ~5 min).</p>
                <p>   5. 🚶‍♀️ Da estação Cadet, caminhe ~2-3 min até ao Hotel Havane (44 rue de Trévise).</p>`
        },
        considerations: "Gerir o cansaço da transição. Comprar bilhetes de metro/passe Navigo Découverte se planeiam usar muito o transporte público em Paris. Verificar o Hotel Havane quanto a ar condicionado e potencial ruído.",
        alternativePlan: {
            title: "Chegada Tranquila e Jantar Próximo ao Hotel",
            morning: "Check-out do hotel Disney. Transfer direto para o Hotel Havane.",
            afternoon: "Instalação e descanso prolongado no Hotel Havane. Crianças podem ter um tempo mais calmo (leitura, jogos eletrónicos).",
            evening: "Jantar num restaurante muito próximo ao hotel, talvez uma pizzaria ou um bistrô com opções simples para agradar a todos, minimizando o esforço no primeiro dia em Paris.",
            transport: "<h6>Como Chegar (Alternativa - Hotel Disney → Hotel Havane, Paris):</h6><p>Conforme plano principal.</p>",
            notes: "Prioriza o descanso e uma transição suave, ideal se a manhã na Disney for cansativa ou se o grupo preferir um início mais calmo em Paris."
        }
    },
    "19/07": { 
        day: "Sábado", 
        mainTitle: "Montmartre Artística e Sacré-Cœur",
        themeIcon: "🎨⛪",
        themeDescription: "Explorando o bairro boémio de Montmartre, a arte da Place du Tertre e a majestosa Basílica do Sacré-Cœur.",
        mainPlan: {
            morning: "🎨 Montmartre: Visitar a Place du Tertre para ver os artistas a trabalhar. Explorar as ruas charmosas. Visita à Basílica do Sacré-Cœur (interior e, para quem quiser, vistas da cúpula - notar que são muitos degraus).",
            afternoon: "Passeio relaxado por Montmartre, visitando lojas de souvenirs e galerias. Almoço numa crêperie típica do bairro. À tarde, os membros mais idosos do grupo podem regressar ao hotel para descansar, enquanto os outros continuam a explorar ou visitam o Musée de Montmartre.",
            evening: "Jantar perto do Hotel Havane ou, para uma experiência diferente, explorar as Passages Couverts perto dos Grands Boulevards (ex: Passage des Panoramas, Galerie Vivienne).",
            transport: `<h6>Como Chegar (Hotel Havane → Montmartre/Sacré-Cœur):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido La Courneuve) até à estação <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas).</p>
                <p>🔄 Na Chaussée d'Antin - La Fayette, faça a transferência para a <strong>Linha 9</strong> (sentido Mairie de Montreuil) até à estação <strong>Anvers</strong> (4 paradas).</p>
                <p>🚶‍♀️ Da estação Anvers, caminhe ~5-7 min pela Rue de Steinkerque (rua turística) até à base do funicular de Montmartre.</p>
                <p>🚠 Apanhe o <strong>Funicular de Montmartre</strong> para subir até à Sacré-Cœur (usa um bilhete t+ de metro).</p>
                <p><em>Alternativa para Abbesses (coração de Montmartre):</em></p>
                <p>   🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>   🚇 Apanhe a <strong>Linha 7</strong> (sentido La Courneuve) até à estação <strong>Opéra</strong> (3 paradas).</p>
                <p>   🔄 Na Opéra, faça a transferência para a <strong>Linha 12</strong> (sentido Mairie d'Aubervilliers) até à estação <strong>Abbesses</strong> (5 paradas).</p>
                <p>   🚶‍♀️ Explore Montmartre a partir de Abbesses.</p>`
        },
        considerations: "Montmartre é uma colina com muitas ruas de paralelepípedos; usar calçado confortável. A Basílica do Sacré-Cœur tem entrada acessível para PMR na lateral. A Place du Tertre pode ser muito movimentada.",
        alternativePlan: {
            title: "Canal Saint-Martin e Parc de la Villette",
            morning: "🚤 Passeio de barco pelo Canal Saint-Martin (reservar com antecedência com empresas como Canauxrama ou Paris Canal) para ver as eclusas e a atmosfera boémia. Ou, uma caminhada tranquila ao longo das margens do canal.",
            afternoon: "🌳 Explorar o Parc de la Villette: Visitar a Cité des Sciences et de l'Industrie (especialmente se houver interesse em ciência e tecnologia, bom para as crianças mais velhas e adultos) ou simplesmente desfrutar dos jardins temáticos, áreas de lazer e da arquitetura moderna do parque (Philharmonie de Paris, Géode - verificar se está aberta).",
            evening: "Jantar num dos restaurantes modernos e animados perto do Canal Saint-Martin (Quai de Valmy/Jemmapes) ou em La Villette.",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Canal Saint-Martin/La Villette):</h6>
                <p><strong>Para o Canal Saint-Martin (ex: área de République/Jacques Bonsergent):</strong></p>
                <p>   🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>   🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até à estação <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas).</p>
                <p>   🔄 Mude para a <strong>Linha 9</strong> (sentido Mairie de Montreuil) até <strong>République</strong> (3 paradas) ou <strong>Oberkampf</strong> (4 paradas). Caminhe até ao canal.</p>
                <p>   <em>Ou:</em> Linha 7 até <strong>Poissonnière</strong> (1 parada), caminhe até à estação <strong>Gare de l'Est</strong> (~5 min), apanhe a <strong>Linha 5</strong> (sentido Place d'Italie) até <strong>Jacques Bonsergent</strong> (1 parada).</p>
                <p><strong>Para o Parc de la Villette:</strong></p>
                <p>   🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>   🚇 Apanhe a <strong>Linha 7</strong> (sentido La Courneuve) diretamente até à estação <strong>Porte de la Villette</strong> (9 paradas, serve a Cité des Sciences) ou <strong>Corentin Cariou</strong> (8 paradas).</p>`,
            notes: "Uma alternativa mais contemporânea e menos turística, ideal para um dia de verão, oferecendo uma mistura de relaxamento e cultura moderna."
        }
    },
     "20/07": { 
        day: "Domingo", 
        mainTitle: "Louvre e Jardin des Tuileries",
        themeIcon: "🖼️🌳",
        themeDescription: "Imersão na arte mundialmente famosa do Louvre, seguida de um relaxante passeio pelo histórico Jardin des Tuileries.",
        mainPlan: {
            morning: "🖼️ <strong>Visita agendada para as 10:30</strong> no Museu do Louvre (essencial chegar um pouco antes!). Foco nas obras-primas: Mona Lisa, Vénus de Milo, Vitória de Samotrácia. Explorar a ala das Antiguidades Egípcias. Papai Marcello: aproveitar os recursos de apoio e rotas calmas disponíveis, se desejar.", 
            afternoon: "🧺 Almoço: Piquenique no Jardin des Tuileries (comprar iguarias numa boulangerie/fromagerie local) ou num dos cafés do jardim. Passeio pelo Jardin des Tuileries, admirando as esculturas e fontes.", 
            evening: "🚢 Cruzeiro no Rio Sena ao pôr do sol ou à noite (reservar com antecedência, ex: Bateaux Mouches, Vedettes du Pont Neuf). Ideal para ver os monumentos iluminados de uma perspetiva diferente.",
            transport: `<h6>Como Chegar (Hotel Havane → Museu do Louvre):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) diretamente até à estação <strong>Palais Royal - Musée du Louvre</strong> (5 paradas, ~10-12 min).</p>
                <p>🚶‍♀️ Da estação, siga as indicações para a entrada da Pirâmide do Louvre (~4 min).</p>
                <h6>Como Chegar (Louvre/Jardin des Tuileries → Cais do Cruzeiro no Sena - ex: Pont de l'Alma para Bateaux Mouches):</h6>
                <p>🚶‍♀️ Do Jardin des Tuileries (lado Sena), caminhe ao longo do Quai des Tuileries ou Quai François Mitterrand em direção oeste (rio à sua esquerda) até à Pont Royal ou Pont de Solférino (~10-15 min).</p>
                <p>🚌 Apanhe o <strong>Autocarro 72</strong> (sentido Parc de Saint-Cloud) da paragem Pont Royal ou Musée d'Orsay até à paragem <strong>Alma-Marceau</strong> (perto do cais dos Bateaux Mouches).</p>
                <p><em>Alternativa Metro (mais demorada):</em></p>
                <p>   🚇 Da estação Tuileries (Linha 1, no jardim), apanhe a <strong>Linha 1</strong> (sentido La Défense) até <strong>Franklin D. Roosevelt</strong> (1 parada).</p>
                <p>   🔄 Mude para a <strong>Linha 9</strong> (sentido Pont de Sèvres) até <strong>Alma-Marceau</strong> (1 parada).</p>
                <p>   🚶‍♀️ Caminhe ~5 min até o cais.</p>
                <p><em>Para Vedettes du Pont Neuf (Square du Vert-Galant):</em> Caminhada de ~15-20 min do Louvre, atravessando a Pont des Arts e seguindo para a ponta da Île de la Cité.</p>`
        },
        considerations: "Louvre: Acessibilidade boa. Envolver crianças com 'caça ao tesouro' de obras. Reservar cruzeiro com antecedência, verificando o ponto de partida e acessibilidade do cais.",
        alternativePlan: {
            title: "Musée Rodin, Les Invalides e Bairro Charmoso",
            morning: "🗿 Musée Rodin: Explorar a coleção de esculturas de Auguste Rodin, incluindo 'O Pensador' e 'O Beijo', dispostas na mansão e nos belos jardins circundantes.",
            afternoon: "🏨 Les Invalides: Visitar o Musée de l'Armée (Museu do Exército) para ver as coleções de armaduras e história militar, e o Dôme des Invalides, onde se encontra o túmulo de Napoleão Bonaparte. Almoço num café perto de Les Invalides.",
            evening: "Jantar no charmoso 7º arrondissement, conhecido pelos seus restaurantes elegantes e ambiente tranquilo. Passeio noturno pela Esplanade des Invalides.",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Musée Rodin):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) até à estação <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 9</strong> (sentido Pont de Sèvres) até à estação <strong>Franklin D. Roosevelt</strong> (2 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 13</strong> (sentido Châtillon-Montrouge) até à estação <strong>Varenne</strong> (4 paradas, a mais próxima do Musée Rodin).</p>
                <p>🚶‍♀️ Caminhe ~2-3 min até o Musée Rodin.</p>
                <h6>Como Chegar (Alternativa - Musée Rodin → Les Invalides):</h6>
                <p>🚶‍♀️ Caminhada curta e agradável de ~5-7 minutos entre os dois locais.</p>`,
            notes: "Uma opção cultural focada em escultura e história, com a beleza serena dos jardins do Musée Rodin. O 7º arrondissement oferece uma atmosfera parisiense clássica para o jantar."
        }
    },
    "21/07": { 
        day: "Segunda", 
        mainTitle: "Evolução, Arte Impressionista e Quartier Latin",
        themeIcon: "🐘🖼️📚",
        themeDescription: "Uma jornada pela maravilha da evolução natural, a arte impressionista e o charme intelectual do Quartier Latin.",
        mainPlan: {
            morning: "🐘 <strong>Visita agendada para as 10:00</strong> na Grande Galerie de l’Évolution (Jardin des Plantes). Explorar a incrível parada de animais e aprender sobre a biodiversidade. Após a visita, um breve passeio pelo Jardin des Plantes.", 
            afternoon: "Almoço no Quartier Latin. 🖼️ Visita ao Museu d'Orsay (horário a reservar para a tarde). Admirar a vasta coleção de arte impressionista e pós-impressionista, alojada numa magnífica antiga estação de comboios.", 
            evening: "Jantar no Quartier Latin, explorando as suas ruas animadas e repletas de restaurantes.",
            transport: `<h6>Como Chegar (Hotel Havane → Grande Galerie de l’Évolution):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) diretamente até à estação <strong>Place Monge</strong> (9 paradas) ou <strong>Jussieu</strong> (8 paradas). Ambas estão a uma curta caminhada do Jardin des Plantes.</p>
                <h6>Como Chegar (Grande Galerie → Musée d'Orsay):</h6>
                <p>🚌 Da paragem Jardin des Plantes, apanhar o <strong>Autocarro 63</strong> (sentido Porte de la Muette) até à paragem <strong>Solférino - Bellechasse</strong> (perto do Musée d'Orsay, ~20-25 min).</p>
                <p>🚇 <em>Alternativa Metro:</em> Da estação <strong>Jussieu</strong>, apanhar a <strong>Linha 10</strong> (sentido Boulogne) até <strong>Sèvres-Babylone</strong> (5 paradas), mudar para a <strong>Linha 12</strong> (sentido Mairie d'Aubervilliers) até <strong>Solférino</strong> (1 parada).</p>
                <h6>Como Chegar (Musée d'Orsay → Jantar no Quartier Latin):</h6>
                <p>🚶‍♀️ Caminhada agradável de ~15-20 minutos, atravessando a Pont Royal ou a Pont du Carrousel e seguindo em direção à área de Saint-Michel.</p>`
        },
        considerations: "D'Orsay e Grande Galerie de l'Évolution são acessíveis. O Jardin des Plantes é um ótimo local para uma pausa. O Quartier Latin tem ruas de paralelepípedos.",
        alternativePlan: {
            title: "Île de la Cité, Sainte-Chapelle e Cruzeiro",
            morning: "⛪ Sainte-Chapelle (reservar bilhetes com antecedência!): Maravilhar-se com os deslumbrantes vitrais góticos. Visitar a Conciergerie (exterior ou visita completa).",
            afternoon: "💐 Passeio pela Île de la Cité: Ver a Catedral de Notre-Dame (exterior). Visitar o Marché aux Fleurs Reine Elizabeth II. Atravessar a Pont Neuf. Almoço na Île de la Cité.",
            evening: "🚢 Cruzeiro no Sena ao pôr do sol. Jantar perto da Île de la Cité ou no Quartier Latin.",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Sainte-Chapelle/Île de la Cité):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) até à estação <strong>Châtelet</strong> (6 paradas).</p>
                <p>🚶‍♀️ De Châtelet, caminhe ~5-7 min, atravessando a Pont au Change, até à Île de la Cité e à Sainte-Chapelle.</p>`,
            notes: "Foco na história medieval e na beleza arquitetónica no coração de Paris. A Sainte-Chapelle é uma joia."
        }
    },
    "22/07": { 
        day: "Terça", 
        mainTitle: "Dia Real em Versalhes",
        themeIcon: "👑🌳",
        themeDescription: "Uma imersão na opulência do Palácio de Versalhes e na vastidão dos seus jardins históricos.",
        mainPlan: {
            fullDay: "👑 Palácio de Versalhes e Jardins: Manhã: Chegada a Versalhes. Explorar os vastos Jardins à la française (desenhados por Le Nôtre), utilizando o pequeno comboio ou alugando um carrinho de golfe (útil para maior conforto). Visitar o Domínio de Maria Antonieta (Petit Trianon, Grand Trianon e Hameau de la Reine). Almoço: Opções incluem o restaurante La Flottille no Grand Canal, Angelina no Palácio, ou fazer um piquenique nos jardins (em áreas designadas). Tarde: <strong>Visita agendada para as 14:00</strong> ao Palácio de Versalhes. Explorar os Grandes Apartamentos do Rei e da Rainha, e a deslumbrante Galeria dos Espelhos.", 
            evening: "Regresso a Paris. Jantar relaxado perto do Hotel Havane, talvez experimentando um restaurante local diferente.",
            transport: `<h6>Como Chegar (Hotel Havane → Palácio de Versalhes):</h6>
                <p><strong>Opção 1 (RER C - Clássica):</strong></p>
                <p>   🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>   🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até <strong>Opéra</strong> (3 paradas).</p>
                <p>   🔄 Mude para o <strong>RER A</strong> (sentido Boissy-St-Léger/Marne-la-Vallée) até <strong>Charles de Gaulle - Étoile</strong> (2 paradas).</p>
                <p>   🔄 Mude para o <strong>RER C5</strong> (sentido Versailles Château - Rive Gauche) até ao terminal <strong>Versailles Château - Rive Gauche</strong> (~30-40 min). (Verificar se o comboio tem este destino final específico).</p>
                <p>   🚶‍♀️ Da estação Versailles Château - Rive Gauche, caminhe ~10-15 min até à entrada do Palácio.</p>
                <p>   <em>Nota:</em> Serviços de assistência como Assist'enGare podem ser úteis para quem necessita de apoio nas estações.</p>
                <p><strong>Opção 2 (Metro + Autocarro 171 - Alternativa Cénica):</strong></p>
                <p>   🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>   🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas).</p>
                <p>   🔄 Mude para a <strong>Linha 9</strong> (sentido Pont de Sèvres) até ao terminal <strong>Pont de Sèvres</strong> (~25 min).</p>
                <p>   🚌 Na estação de autocarros de Pont de Sèvres, apanhe o <strong>Autocarro 171</strong> (sentido Versailles Château) até à paragem <strong>Château de Versailles</strong> (viagem de autocarro ~30 min, deixa mesmo em frente aos portões).</p>
                <h6>Transporte dentro de Versalhes:</h6>
                <p>🚂 Pequeno Comboio (Le Petit Train): Faz paragens nos principais pontos dos jardins e Trianon.</p>
                <p>🚗 Carrinhos de Golfe Elétricos: Aluguer disponível para explorar os jardins ao seu ritmo (reservar com antecedência, especialmente os adaptados para PMR).</p>`
        },
        considerations: "Dia longo e potencialmente cansativo. Usar calçado muito confortável. Reservar bilhetes e transporte interno (carrinho de golfe) com antecedência. Carrinhos de golfe, incluindo modelos acessíveis, são recomendados para explorar os jardins confortavelmente. Verificar horários dos espetáculos das Fontes Musicais ou Jardins Musicais, se estiverem a decorrer e quiserem assistir (requer bilhete específico).",
        alternativePlan: {
            title: "Castelo de Fontainebleau e Floresta",
            fullDay: "🏰 Visita ao Château de Fontainebleau: Um dos maiores castelos reais franceses, com mais de 1500 divisões, testemunha de séculos de história francesa. Menos lotado que Versalhes, oferece uma experiência igualmente grandiosa. Passeio pelos seus pátios e jardins. Se o tempo e a disposição permitirem, um breve passeio pela vasta Floresta de Fontainebleau adjacente (ideal para amantes da nature e caminhadas).",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Château de Fontainebleau):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) até à estação <strong>Gare de Lyon</strong> (10 paradas, ~15-20 min).</p>
                <p>🚂 Na Gare de Lyon (Hall 1 ou 2, verificar painéis), apanhe um comboio <strong>Transilien Linha R</strong> (sentido Montargis Sens ou Montereau) até à estação <strong>Fontainebleau-Avon</strong> (~40 min).</p>
                <p>🚌 Da estação Fontainebleau-Avon, apanhe o <strong>Autocarro Linha 1</strong> (sentido Les Lilas) até à paragem <strong>Château</strong> (~10-15 min).</p>`,
            notes: "Fontainebleau oferece uma imersão histórica igualmente rica, mas geralmente com menos multidões. A floresta é um bónus para quem aprecia a nature."
        }
    },
    "23/07": {
        day: "Quarta",
        mainTitle: "Elegância, Arte e Doces",
        themeIcon: "🏛️🍰",
        themeDescription: "Um dia de requinte, explorando uma mansão histórica e sua arte, com pausas para delícias parisienses.",
        mainPlan: {
            morning: "Manhã livre para explorar a área dos Grands Boulevards ou fazer compras nas Galeries Lafayette / Printemps. Outra opção é um passeio relaxante no Parc Monceau, próximo à área da tarde.",
            afternoon: "Almoço na área da Opéra ou perto do Parc Monceau. 🏛️ <strong>Visita agendada para as 15:00</strong> ao Musée Jacquemart-André. Explore a magnífica mansão do século XIX e a sua coleção de arte, seguido por um chá da tarde opcional no elegante Café Jacquemart-André.",
            evening: "Jantar (casual, ex: Özlem Kebab – verificar adequação, ou outra opção dependendo da área da atividade da tarde).",
            transport: `<h6>Como Chegar (Hotel Havane → Musée Jacquemart-André):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 9</strong> (sentido Pont de Sèvres) até <strong>Saint-Augustin</strong> (3 paradas) ou <strong>Miromesnil</strong> (2 paradas).</p>
                <p>🚶‍♀️ De Saint-Augustin, caminhe ~7-10 min. De Miromesnil, caminhe ~5-8 min até o Musée Jacquemart-André.</p>
                <h6>Como Chegar (Atividades Combinadas - exemplos):</h6>
                <p>   🚶‍♀️ <strong>Do Jacquemart-André para Parc Monceau:</strong> Caminhada curta de ~5-10 minutos.</p>
                <p>   🚇🚌 <strong>Do Jacquemart-André para Galeries Lafayette (área Opéra):</strong> De Saint-Augustin (Linha 14, sentido Mairie de Saint-Ouen) até <strong>Madeleine</strong>, e depois a pé; ou Linha 9 até <strong>Havre - Caumartin</strong>, e caminhe até às lojas.</p>`
        },
        considerations: "Musée Jacquemart-André: verificar horários de abertura e se é necessário reservar bilhetes/mesa no café. É um museu mais íntimo e pode ser uma boa pausa dos grandes museus. Parc Monceau é ideal para um momento de tranquilidade.",
        alternativePlan: {
            title: "Jardin d'Acclimatation e Fundação Louis Vuitton",
            morning: "🎠 Jardin d'Acclimatation: Localizado no Bois de Boulogne, este parque de diversões histórico oferece atrações para todas as idades, desde carrosséis clássicos a pequenas montanhas-russas, um pequeno zoo e áreas de recreio. Ideal para as crianças.",
            afternoon: "🖼️ Fundação Louis Vuitton (adjacente ao Jardin d'Acclimatation): Para os adultos e Nicole, uma visita a este impressionante edifício de Frank Gehry para apreciar a arquitetura e as exposições de arte contemporânea. Almoço num dos cafés do Jardin d'Acclimatation ou no restaurante da Fundação.",
            evening: "Jantar no 16º arrondissement (área elegante perto do Bois de Boulogne) ou regressar ao centro de Paris para uma opção mais central.",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Jardin d'Acclimatation/Fondation Louis Vuitton):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até <strong>Palais Royal - Musée du Louvre</strong> (5 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 1</strong> (sentido La Défense) até <strong>Les Sablons</strong> (9 paradas).</p>
                <p>🚶‍♀️ Caminhe ~10-15 min até à Fundação/Jardin. O Petit Train parte de fora da estação Les Sablons para o Jardin d'Acclimatation.</p>
                 <p><em>Alternativa com o shuttle da Fundação:</em></p>
                <p>   🚇 Metro até <strong>Charles de Gaulle - Étoile</strong>. Apanhe o <strong>Shuttle da Fundação Louis Vuitton</strong> (verificar horários e ponto de partida exato perto do Arco do Triunfo).</p>`,
            notes: "Uma excelente combinação de diversão para as crianças e cultura/arquitetura de vanguarda para os adultos. O Bois de Boulogne oferece um ambiente verdejante."
        }
    },
    "24/07": {
        day: "Quinta",
        mainTitle: "Arte Moderna e Sonhos de Chocolate",
        themeIcon: "🎨🍫",
        themeDescription: "Um mergulho na arte moderna do Centre Pompidou, seguido por uma doce aventura no mundo do chocolate.",
        mainPlan: {
            morning: "🎨 Centre Pompidou: Explorar o Museu Nacional de Arte Moderna (coleções permanentes e temporárias). Apreciar as vistas panorâmicas de Paris a partir do terraço superior. Papai Marcello pode apreciar a estrutura arquitetónica única. A Galeria das Crianças oferece atividades interativas para Valentina e Clara.",
            afternoon: "🍫 Choco Story Paris (Musée du Chocolat): Mergulhar na história do cacau e do chocolate, ver demonstrações de fabrico e, claro, participar em degustações. Almoço: No Le Georges (restaurante no topo do Centre Pompidou, com vistas) ou num dos muitos cafés e bistrôs no charmoso bairro do Marais, nas proximidades.",
            evening: "Jantar no Le Marais, aproveitando a atmosfera vibrante do bairro, com as suas ruas históricas, boutiques e galerias.",
            transport: `<h6>Como Chegar (Hotel Havane → Centre Pompidou):</h6>
                 <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                 <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) até à estação <strong>Châtelet</strong> (6 paradas, ~10-12 min).</p>
                 <p>🚶‍♀️ De Châtelet, siga as indicações para o Centre Pompidou (saída Rambuteau ou Pompidou), caminhada de ~5-7 min.</p>
                 <h6>Como Chegar (Centre Pompidou → Choco Story Paris - 28 Bd de Bonne Nouvelle):</h6>
                 <p>🚶‍♀️ Caminhada de ~15-20 minutos em direção norte/noroeste, passando por Les Halles e subindo em direção aos Grands Boulevards.</p>
                 <p>🚇 <em>Alternativa Metro:</em></p>
                 <p>   Da estação <strong>Rambuteau</strong> (Linha 11, perto do Pompidou), apanhe a <strong>Linha 11</strong> (sentido Mairie des Lilas) até <strong>Arts et Métiers</strong> (1 parada).</p>
                 <p>   🔄 Mude para a <strong>Linha 4</strong> (sentido Porte de Clignancourt) até <strong>Strasbourg - Saint-Denis</strong> (1 parada).</p>
                 <p>   🚶‍♀️ Caminhe ~3-5 min até o Choco Story Paris.</p>`
        },
        considerations: "Centre Pompidou: acessível, verificar exposições temporárias. Choco Story: divertido para todas as idades, workshops podem necessitar de reserva. Le Marais é excelente para passear à noite.",
        alternativePlan: {
            title: "Musée de l'Orangerie, Cruzeiro e Saint-Germain",
            morning: "🖼️ Musée de l'Orangerie: Contemplar os painéis monumentais dos Nenúfares de Monet, uma experiência imersiva e serena. Explorar também a coleção Jean Walter e Paul Guillaume no piso inferior.",
            afternoon: "🧺 Piquenique no Jardin des Tuileries, adjacente ao museu. 🚢 Se ainda não fizeram um cruzeiro no Sena, ou se quiserem uma experiência diferente (ex: ao pôr do sol, ou com uma empresa diferente como Vedettes du Pont Neuf para um barco mais pequeno), esta é uma boa oportunidade.",
            evening: "Jantar no elegante bairro de Saint-Germain-des-Prés, conhecido pelos seus cafés literários (Les Deux Magots, Café de Flore - talvez apenas para uma bebida e observar o ambiente) e restaurantes sofisticados.",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Musée de l'Orangerie):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) até à estação <strong>Concorde</strong> (5 paradas, ~10 min).</p>
                <p>🚶‍♀️ Da estação Concorde, caminhe ~5 min através da Place de la Concorde em direção ao Jardin des Tuileries, onde se encontra o museu.</p>
                <h6>Como Chegar (Alternativa - Musée de l'Orangerie → Saint-Germain-des-Prés para jantar):</h6>
                <p>🚶‍♀️ Caminhada agradável de ~15-20 minutos, atravessando a Pont Royal ou Pont du Carrousel.</p>
                <p>🚇 <em>Alternativa Metro:</em> De Concorde (Linha 12) até Sèvres-Babylone (3 paradas), depois caminhe ou mude para Linha 10 até Mabillon ou Odéon.</p>`,
            notes: "Uma experiência artística mais intimista e um clássico parisiense no Sena, seguido de um jantar num dos bairros mais chiques de Paris."
        }
    },
    "25/07": {
        day: "Sexta",
        mainTitle: "Torre Eiffel, Alta Costura e Champs-Élysées",
        themeIcon: "🗼👗",
        themeDescription: "Um dia icónico, subindo à Torre Eiffel, visitando o templo da moda e passeando pela glamorosa Champs-Élysées.",
        mainPlan: {
            morning: "🗼 Torre Eiffel (bilhetes para o 1º e 2º andares pré-reservados para um horário específico!): Subir para apreciar as vistas panorâmicas de Paris. Tempo para fotos e explorar os diferentes níveis.",
            afternoon: "🍽️ Almoço na Madame Brasserie (1º andar da Torre Eiffel - reserva essencial!). Após o almoço, um breve passeio. 👗 <strong>Visita agendada para as 15:30</strong> à Galerie Dior (próximo aos Champs-Élysées, na Avenue Montaigne). Após a visita, continuar o passeio pela Avenue des Champs-Élysées até ao Arco do Triunfo (subida opcional para vistas).",
            evening: "🥂 Jantar especial: Le Fouquet's nos Champs-Élysées para uma experiência parisiense clássica e luxuosa (Vovó Lúcia irá adorar). Requer reserva antecipada.",
            transport: `<h6>Como Chegar (Hotel Havane → Torre Eiffel):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até <strong>Opéra</strong> (3 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 8</strong> (sentido Balard) até <strong>École Militaire</strong> (6 paradas).</p>
                <p>🚶‍♀️ Caminhe ~10-12 min através do Champ de Mars até à Torre Eiffel.</p>
                <p><em>Alternativa com vista icónica na chegada:</em></p>
                <p>   🚇 Linha 7 de Cadet até <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas). Mude para a <strong>Linha 9</strong> (sentido Pont de Sèvres) até <strong>Trocadéro</strong> (6 paradas). Saia em Trocadéro para vistas espetaculares da Torre Eiffel e depois caminhe descendo os jardins até à Torre (~10 min).</p>
                <h6>Como Chegar (Torre Eiffel → Galerie Dior / Champs-Élysées):</h6>
                <p>🚌 Apanhe o <strong>Autocarro 42</strong> (sentido Gare Saint-Lazare) da paragem Tour Eiffel, que sobe a Avenue Montaigne (perto da Galerie Dior) e os Champs-Élysées.</p>
                <p>🚇 Ou, da estação <strong>Bir-Hakeim</strong> (Linha 6), apanhe a <strong>Linha 6</strong> (sentido Charles de Gaulle - Étoile) até <strong>Charles de Gaulle - Étoile</strong> (5 paradas), no Arco do Triunfo, e desça a Champs-Élysées a pé.</p>
                <p>🚶‍♀️ Para quem gosta de caminhar, é um passeio agradável de ~25-30 minutos da Torre Eiffel, atravessando a Pont d'Iéna e seguindo pelos jardins do Trocadéro e Avenue Marceau/President Wilson até à Avenue Montaigne.</p>`
        },
        considerations: "Torre Eiffel: Cimeira não acessível para PMR. Madame Brasserie, Galerie Dior e Le Fouquet's: reservar com MUITA antecedência e informar sobre necessidades alimentares. O Arco do Triunfo tem elevador para acesso assistido.",
        alternativePlan: {
            title: "Palais Garnier, Grands Magasins e Passagens Cobertas",
            morning: "🎭 Visita guiada (ou áudio-guia) à Opéra Garnier (Palais Garnier): Explorar o interior deslumbrante, incluindo a grande escadaria, o auditório (se não houver ensaios) e os salões opulentos. Uma joia da arquitetura do Segundo Império.",
            afternoon: "🛍️ Compras ou simples 'lèche-vitrines' (ver montras) nas Galeries Lafayette e Printemps Haussmann. Subir aos terraços panorâmicos de ambos os armazéns para vistas gratuitas de Paris, incluindo a Opéra e a Torre Eiffel. Almoço numa das muitas opções de restauração dentro dos grandes armazéns.",
            evening: "Explorar as históricas Passages Couverts de Paris (ex: Galerie Vivienne, Passage des Panoramas, Passage Jouffroy) perto dos Grands Boulevards, com as suas lojas encantadoras e atmosfera de outrora. Jantar num restaurante tradicional numa das passagens ou na área da Opéra/Grands Boulevards (ex: Bouillon Chartier, se ainda não foram).",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Opéra Garnier):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry ou Villejuif) diretamente até à estação <strong>Opéra</strong> (3 paradas, ~5-7 min).</p>
                <p>🚶‍♀️ A Opéra Garnier fica em frente à saída do metro.</p>
                <h6>Como Chegar (Alternativa - Opéra Garnier ↔ Galeries Lafayette/Printemps ↔ Passages Couverts):</h6>
                <p>🚶‍♀️ Todas estas localizações estão a uma curta distância a pé umas das outras (5-15 minutos entre elas), na área dos Grands Boulevards.</p>`,
            notes: "Foco em arquitetura opulenta, na experiência de compras parisiense clássica e no charme histórico das passagens cobertas. Mais relaxado em termos de deslocamentos longos."
        }
    },
    "26/07": {
        day: "Sábado",
        mainTitle: "Dia de Escolha: Arredores ou Paris",
        themeIcon: "🗺️🤔",
        themeDescription: "Um dia flexível para explorar os arredores de Paris (Giverny/Chartres) ou desfrutar de um ritmo mais relaxado na cidade.",
        mainPlan: {
            fullDay: `
                <p><strong>Opção 1: 🌸 Giverny (Casa e Jardins de Monet)</strong> - Mergulhe no mundo impressionista de Claude Monet, visitando a sua casa colorida e os famosos jardins de nenúfares e a ponte japonesa que inspiraram tantas das suas obras-primas.</p>
                <p><strong>Opção 2: ⛪ Catedral de Chartres</strong> - Faça uma viagem a uma das mais belas catedrais góticas da Europa, famosa pelos seus vitrais medievais incrivelmente preservados e pela sua arquitetura imponente.</p>
                <p><strong>Opção 3: 🌳 Paris Relaxado</strong> - Desfrute de um dia mais tranquilo em Paris: um longo passeio pelo Jardin du Luxembourg (com os seus barcos à vela, marionetas e ambiente familiar), seguido de uma visita ao divertido e interativo Paradox Museum, que irá encantar todas as idades com as suas ilusões de ótica.</p>
            `,
            evening: "Jantar temático relacionado com a escolha do dia (ex: cozinha normanda se foram a Giverny) ou um restaurante favorito da família em Paris.",
            transport: `<h6>Transporte para Giverny (Opção 1):</h6>
                <p>1. 🚶‍♀️ Hotel Havane → Gare Saint-Lazare:</p>
                <p>   🚇 Metro Cadet (Linha 7, sentido La Courneuve) até <strong>Opéra</strong> (3 paradas). Mudar para <strong>Linha 3</strong> (sentido Pont de Levallois) ou <strong>Linha 14</strong> (sentido Saint-Denis Pleyel) ou <strong>Linha 12</strong> (sentido Mairie d'Issy) até <strong>Saint-Lazare</strong> (1-2 paradas).</p>
                <p>2. 🚂 Comboio SNCF da <strong>Gare Saint-Lazare</strong> para <strong>Vernon-Giverny</strong> (~50-75 min). Comprar bilhetes com antecedência.</p>
                <p>3. 🚌 De Vernon-Giverny: Shuttle (navette) sincronizado com os comboios ou táxi até Giverny (~15 min).</p>
                <h6>Transporte para Chartres (Opção 2):</h6>
                <p>1. 🚶‍♀️ Hotel Havane → Gare Montparnasse:</p>
                <p>   🚇 Metro Cadet (Linha 7, sentido La Courneuve) até <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas). Mudar para <strong>Linha 9</strong> (sentido Pont de Sèvres) até <strong>Montparnasse-Bienvenüe</strong> (9 paradas).</p>
                <p>2. 🚂 Comboio SNCF da <strong>Gare Montparnasse</strong> para <strong>Chartres</strong> (~1h - 1h15 min). Comprar bilhetes com antecedência.</p>
                <h6>Transporte para Paris Relaxado (Opção 3 - Jardin du Luxembourg):</h6>
                <p>🚶‍♀️ Hotel Havane → Jardin du Luxembourg:</p>
                <p>   🚇 Metro Cadet (Linha 7, sentido La Courneuve) até <strong>Opéra</strong> (3 paradas). Mudar para <strong>RER B</strong> (sentido Robinson/St-Rémy-lès-Chevreuse) até <strong>Luxembourg</strong> (3 paradas). Saída direta para o jardim.</p>
                <p>   <em>Para o Paradox Museum (97 Rue du Bac, 75007):</em> Do Jardin du Luxembourg, pode ser uma caminhada agradável de ~20-25 min ou apanhar o Metro Linha 12 de Rennes até Rue du Bac.</p>`
        },
        considerations: "Escolher com base na energia e interesse da família. Giverny: Casa não acessível para PMR, jardins parcialmente; verificar acessibilidade do shuttle. Chartres: Catedral acessível (rés-do-chão). Paris Relaxado é uma opção de baixo stress.",
        alternativePlan: {
            title: "Exploração Aprofundada do Marais e Place des Vosges",
            morning: "🛍️ Manhã no Marais: Começar pela Place des Vosges, uma das praças mais antigas e charmosas de Paris. Visitar as galerias de arte e lojas sob as arcadas. Explorar as ruas históricas como a Rue des Francs-Bourgeois e a Rue des Rosiers (antigo bairro judeu).",
            afternoon: "🖼️ Visita ao Musée Carnavalet - História de Paris (entrada gratuita para coleções permanentes) para aprender mais sobre a cidade. Almoço num dos muitos cafés ou bistrôs do Marais, ou no Marché des Enfants Rouges para uma experiência multicultural.",
            evening: "Jantar no Marais, talvez experimentando um restaurante com um pátio interior ou um ambiente mais íntimo.",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Le Marais / Place des Vosges):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até <strong>Châtelet</strong> (6 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 1</strong> (sentido Château de Vincennes) até <strong>Saint-Paul</strong> (2 paradas, ideal para o coração do Marais e perto da Place des Vosges).</p>
                <p>🚶‍♀️ Da estação Saint-Paul, caminhe ~5-10 min até a Place des Vosges ou outras partes do Marais.</p>
                <h6>Transporte dentro do Marais:</h6>
                <p>🚶‍♀️ O Marais é melhor explorado a pé.</p>`,
            notes: "Uma imersão mais profunda num dos bairros mais fascinantes de Paris, combinando história, cultura, compras e gastronomia."
        }
    },
    "27/07": {
        day: "Domingo",
        mainTitle: "Arte Moderna, Despedida de Clara e Marais",
        themeIcon: "🎨👋",
        themeDescription: "Um dia de arte contemporânea, seguido de momentos especiais de despedida e o charme do Marais.",
        mainPlan: {
            morning: "🌆 Centre Pompidou: Visita à coleção permanente de arte moderna e contemporânea. Explorar a área infantil interativa no mezzanino (ideal para Valentina). Subir ao terraço para vistas panorâmicas de Paris.",
            afternoon: "🎨 Musée Picasso Paris (Marais): Imersão na obra de Pablo Picasso, com pinturas, esculturas e cadernos. 🍦Lanche de despedida com Clara no Marais (Sugestões: Ladurée para macarons ou Glace Bachir para sorvete libanês, com opções sem lactose para Helda).",
            evening: "🎈 Tempo livre para fotos, afeto e um último passeio pelo Marais com Clara antes da sua partida para a programação separada. O resto da família pode desfrutar de um jantar no Marais ou regressar perto do hotel.",
            transport: `<h6>Como Chegar (Hotel Havane → Centre Pompidou):</h6>
                <p>🚶‍♀️ Caminhe até a estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Pegue a <strong>Linha 7</strong> (sentido Villejuif - Louis Aragon ou Mairie d'Ivry) até a estação <strong>Châtelet</strong> (~6 paradas, 10-12 min).</p>
                <p>🚶‍♀️ Da estação Châtelet, siga as indicações para o Centre Pompidou (saída Rambuteau ou Pompidou), caminhada de ~6 min.</p>
                <h6>Como Chegar (Centre Pompidou → Musée Picasso Paris - 5 Rue de Thorigny):</h6>
                <p>🚶‍♀️ Caminhada tranquila de ~10-15 min através do bairro do Marais.</p>
                <p>🚇 <em>Alternativa Metrô:</em></p>
                <p>   Da estação <strong>Rambuteau</strong> (Linha 11, perto do Pompidou), apanhe a <strong>Linha 11</strong> (sentido Mairie des Lilas) até <strong>Arts et Métiers</strong> (1 parada).</p>
                <p>   🔄 Mude para a <strong>Linha 3</strong> (sentido Gallieni) até <strong>Saint-Sébastien - Froissart</strong> (2 paradas).</p>
                <p>   🚶‍♀️ Caminhe ~5 min até o Musée Picasso.</p>
                <p>   <em>Ou:</em> Da estação <strong>Hôtel de Ville</strong> (Linha 1, perto do Pompidou), apanhe a <strong>Linha 1</strong> (sentido Château de Vincennes) até <strong>Saint-Paul</strong> (1 parada). Caminhe ~5-7 min até o Musée Picasso.</p>`
        },
        considerations: "Centre Pompidou: Aberto das 11h às 21h (fecha às terças). Musée Picasso: Aberto das 9h30 às 18h (fecha às segundas). Confirmar horários, pois podem variar. Glace Bachir é uma excelente opção para quem tem intolerância à lactose.",
        alternativePlan: {
            title: "Marché des Enfants Rouges, Place des Vosges e Compras no Marais",
            morning: "🛍️ Visita ao Marché des Enfants Rouges (o mercado coberto mais antigo de Paris, no Marais): Explorar as bancas de comida de todo o mundo, produtos frescos e flores. Ótimo para um almoço informal e multicultural.",
            afternoon: "🌳 Passeio pela Place des Vosges (uma das praças mais antigas e bonitas de Paris). Visitar as galerias de arte e lojas sob as arcadas. Tempo para compras no Marais, focando nas boutiques independentes e lojas de design que a Nicole poderá apreciar.",
            evening: "Jantar de despedida em família (sem Clara, que tem a sua programação) num restaurante charmoso do Marais.",
            transport: `<h6>Como Chegar (Alternativa - Hotel Havane → Marché des Enfants Rouges/Marais):</h6>
                <p>🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>🚇 Apanhe a <strong>Linha 7</strong> (sentido Mairie d'Ivry/Villejuif) até <strong>Chaussée d'Antin - La Fayette</strong> (2 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 9</strong> (sentido Mairie de Montreuil) até <strong>Oberkampf</strong> (5 paradas).</p>
                <p>🔄 Mude para a <strong>Linha 5</strong> (sentido Place d'Italie) até <strong>Richard-Lenoir</strong> (1 parada) e caminhe ~7 min, ou continue na Linha 9 até <strong>Saint-Ambroise</strong> e caminhe ~10 min.</p>
                <p><em>Alternativa para o coração do Marais (ex: Saint-Paul):</em></p>
                <p>   🚇 Linha 7 de Cadet até <strong>Châtelet</strong>. Mude para <strong>Linha 1</strong> (sentido Château de Vincennes) até <strong>Saint-Paul</strong> (2 paradas).</p>
                <h6>Como Chegar (Alternativa - Transporte dentro do Marais):</h6>
                <p>🚶‍♀️ O Marais é melhor explorado a pé.</p>`,
            notes: "Uma opção focada na atmosfera vibrante do Marais, com gastronomia, história e compras. O Marché des Enfants Rouges é uma experiência local autêntica."
        }
    },
    "28/07": {
        day: "Segunda",
        mainTitle: "Au Revoir, Paris! Retorno ao Brasil",
        themeIcon: "✈️🇧🇷",
        themeDescription: "Despedida de Paris e preparativos para a viagem de regresso ao Brasil.",
        mainPlan: {
            morning: "🥐 Pequeno-almoço tranquilo no hotel ou numa boulangerie próxima. Últimas arrumações das malas. Check-out do Hotel Havane (verificar horário limite).",
            afternoon: "✈️ Translado ao Aeroporto Charles de Gaulle (CDG). Recomenda-se sair do hotel com pelo menos 3h30 a 4h de antecedência em relação ao horário do voo, considerando o check-in, segurança e potencial trânsito.",
            evening: "(Viagem de regresso ao Brasil)",
            transport: `<h6>Como Chegar (Hotel Havane → Aeroporto Charles de Gaulle - CDG):</h6>
                <p>🚕 <strong>Opção 1 (Recomendada para conforto e grupo):</strong> Transfer privado pré-reservado (van). Tempo estimado: ~45-75 min, dependendo do trânsito.</p>
                <p>🚕 <strong>Opção 2 (Táxi):</strong> Pedir na receção do hotel ou usar uma app. Podem ser necessários dois táxis para o grupo e bagagens. Tempo estimado similar ao transfer privado.</p>
                <p>🚇🚆 <strong>Opção 3 (Transporte Público - Mais Económica, Menos Confortável com Bagagem):</strong></p>
                <p>   1. 🚶‍♀️ Caminhe até à estação <strong>Cadet</strong> (Linha 7) (~2 min).</p>
                <p>   2. 🚇 Apanhe a <strong>Linha 7</strong> (sentido La Courneuve) até à estação <strong>Gare de l'Est</strong> (3 paradas, ~5-7 min).</p>
                <p>   3. 🚶‍♀️ Na Gare de l'Est, siga as indicações para a <strong>Gare du Nord</strong> (caminhada interna de ~5-7 minutos, pode ser um pouco confuso com sinalização para RER B).</p>
                <p>   4. 🚆 Na Gare du Nord, apanhe o comboio <strong>RER B</strong> (direção Aéroport Charles de Gaulle 2 TGV) diretamente até o aeroporto (~35-40 min). Certifique-se de que o comboio vai para o CDG (nem todos os RER B vão).</p>
                <p>   ⏳ Tempo total estimado via RER B: ~1h10 - 1h30 (considerar tempo de espera, caminhadas entre estações e plataformas, e o desafio de gerir bagagens em comboios potencialmente lotados e com escadas em algumas estações).</p>`
        },
        considerations: "Confirmar o horário do voo e o terminal de partida no CDG. Se aplicável, tratar do reembolso de IVA (Détaxe) no aeroporto, o que pode levar tempo adicional. Pesar as malas no hotel, se possível, para evitar surpresas no aeroporto.",
        alternativePlan: null
    }
};

export const pointsOfInterestData: PointOfInterest[] = [
  { 
    name: "Torre Eiffel", 
    icon: "🗼", 
    category: "Monumento", 
    notes: "Símbolo icónico de Paris, oferece vistas panorâmicas. Reservar bilhetes com antecedência.",
    link: "https://www.toureiffel.paris",
    imagePlaceholder: "https://images.unsplash.com/photo-1500099185813-62995ce78994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Museu do Louvre", 
    icon: "🖼️", 
    category: "Museu", 
    notes: "Lar da Mona Lisa e Vénus de Milo. Vasto e requer planeamento. Reservar bilhetes e horário.",
    link: "https://www.louvre.fr",
    imagePlaceholder: "https://images.unsplash.com/photo-1586295046379-61954991702a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Catedral de Notre-Dame", 
    icon: "⛪", 
    category: "Monumento Religioso", 
    notes: "Obra-prima gótica. Verificar estado de reabertura e acesso após o incêndio.",
    link: "https://www.notredamedeparis.fr/",
    imagePlaceholder: "https://images.unsplash.com/photo-1572000758635-541394710433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Palácio de Versalhes", 
    icon: "👑", 
    category: "Palácio", 
    notes: "Antiga residência real com jardins magníficos. Viagem de um dia a partir de Paris.",
    link: "https://www.chateauversailles.fr",
    imagePlaceholder: "https://images.unsplash.com/photo-1600624746638-817f57880976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Montmartre", 
    icon: "🎨", 
    category: "Bairro", 
    notes: "Bairro artístico com a Basílica de Sacré-Cœur e a Place du Tertre.",
    link: "",
    imagePlaceholder: "https://images.unsplash.com/photo-1530087897044-06b150a94821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Disneyland Park (Paris)",
    icon: "🏰",
    category: "Parque Temático",
    notes: "O parque principal da Disneyland Paris, com atrações clássicas e o Castelo da Bela Adormecida.",
    link: "https://www.disneylandparis.com/pt-pt/parques/disneyland-park/",
    imagePlaceholder: "https://images.unsplash.com/photo-1597544291886-5859a1570ae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Walt Disney Studios Park",
    icon: "🎬",
    category: "Parque Temático",
    notes: "Segundo parque da Disneyland Paris, focado em cinema, animação e áreas temáticas como Avengers Campus.",
    link: "https://www.disneylandparis.com/pt-pt/parques/walt-disney-studios-park/",
    imagePlaceholder: "https://images.unsplash.com/photo-1604970449499-4a6a9a164a33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

export const restaurantData: Restaurant[] = [
  { name: "Le Bouillon Chartier", type: "Tradicional Francês", price: "€", notes: "Ambiente clássico, comida tradicional a preços acessíveis. Pode ter fila.", link: "https://www.bouillon-chartier.com/en/" },
  { name: "Pink Mamma", type: "Italiano", price: "€€", notes: "Popular pela decoração e comida italiana. Reservar com antecedência.", link: "https://www.bigmammagroup.com/en/trattorias/pink-mamma" },
  { name: "Léon De Bruxelles", type: "Belga / Frutos do Mar", price: "€€", notes: "Famoso por 'moules-frites' (mexilhões com batatas fritas). Ótima opção casual perto da área da Opéra e dos Grands Boulevards. O endereço fornecido (30 Boulevard des Italiens) está próximo de várias atividades do roteiro.", link: "https://www.restaurantleon.fr/nos-restaurants" },
  { name: "L'As du Fallafel", type: "Médio Oriente", price: "€", notes: "Famoso falafel no Marais. Ideal para uma refeição rápida.", link: "" },
  { name: "Angelina", type: "Salão de Chá / Patisserie", price: "€€€", notes: "Conhecido pelo chocolate quente e Mont-Blanc. Sofisticado.", link: "https://angelina-paris.fr/en" },
  { name: "Bistrot Paul Bert", type: "Bistrô Francês", price: "€€€", notes: "Cozinha clássica de bistrô, ambiente animado. Reservar.", link: "" },
  { name: "Pizzeria Popolare", type: "Italiano / Pizza", price: "€€", notes: "Outro do grupo Big Mamma, pizzas napolitanas. Pode ter fila.", link: "https://www.bigmammagroup.com/en/trattorias/pizzeria-popolare"},
  { name: "Crêperie Josselin", type: "Crêperie", price: "€", notes: "Crêpes e galettes tradicionais da Bretanha, no bairro de Montparnasse.", link: ""},
];

export const transportData: AccordionItemData[] = [
  { 
    title: "Chegada e Saída do Aeroporto (CDG/Orly)", 
    content: `
      <p><strong>RER B:</strong> Liga ambos os aeroportos ao centro de Paris. Opção económica mas pode ser cheia e com escadas.</p>
      <p><strong>RoissyBus (CDG):</strong> Liga o CDG à Opéra Garnier.</p>
      <p><strong>OrlyBus (Orly):</strong> Liga o Orly à Denfert-Rochereau.</p>
      <p><strong>Táxi/VTC (Uber, Bolt):</strong> Mais confortável, preço varia com trânsito e horário. Taxas fixas para aeroportos.</p>
      <p><strong>Transfer Privado:</strong> Ideal para grupos/famílias com muita bagagem. Reservar com antecedência.</p>
      <p><strong>Magical Shuttle (para Disney):</strong> Autocarro direto dos aeroportos para os hotéis Disney.</p>
    `
  },
  { 
    title: "Metro de Paris", 
    content: `
      <p>Rede extensa e eficiente. Funciona das ~5:30 à ~1:15 (sextas, sábados e vésperas de feriado até ~2:15).</p>
      <p><strong>Bilhetes:</strong></p>
      <ul>
        <li><strong>t+:</strong> Bilhete único para uma viagem (metro, RER zona 1, autocarro, elétrico).</li>
        <li><strong>Carnet de 10 bilhetes t+:</strong> Mais económico que comprar individualmente (disponível no Passe Navigo Easy ou em papel para turistas).</li>
        <li><strong>Passe Navigo Découverte:</strong> Cartão recarregável semanal ou mensal (válido de segunda a domingo). Requer foto 3x2.5cm. Económico para estadias mais longas.</li>
        <li><strong>Passe Navigo Easy:</strong> Cartão recarregável para bilhetes t+, carnet, passes diários. Não nominal.</li>
        <li><strong>Paris Visite Pass:</strong> Passe turístico para 1, 2, 3 ou 5 dias. Inclui viagens ilimitadas e alguns descontos. Comparar se compensa face ao Navigo.</li>
      </ul>
      <p><strong>Acessibilidade:</strong> Muitas estações não são acessíveis para cadeiras de rodas ou carrinhos de bebé devido a escadas. Linha 14 é totalmente automática e acessível.</p>
      <p><strong>Planeador de Rotas:</strong> Use apps como Citymapper, Google Maps, ou o site da RATP.</p>
    `
  },
  { 
    title: "RER (Rede Expressa Regional)", 
    content: `
      <p>Comboios que ligam Paris aos subúrbios, incluindo Versalhes (RER C), Disneyland (RER A) e aeroportos (RER B).</p>
      <p>Requer bilhete específico (Origine-Destination) se viajar para fora da Zona 1 de Paris. Bilhete t+ é válido apenas na Zona 1.</p>
    `
  },
  { 
    title: "Autocarros (Ônibus)", 
    content: `
      <p>Ótima forma de ver a cidade. Mais lento que o metro, mas mais cénico.</p>
      <p>Usa o mesmo bilhete t+ do metro. Validar ao entrar.</p>
      <p><strong>Noctilien:</strong> Rede de autocarros noturnos quando o metro fecha.</p>
    `
  },
  { 
    title: "Elétricos (Tramways)", 
    content: `
      <p>Circulam principalmente na periferia de Paris. Usam o bilhete t+.</p>
    `
  },
];

export const usefulTipsData: AccordionItemData[] = [
  { 
    title: "O que levar na mala (Verão em Paris)", 
    content: `
      <ul>
        <li>Roupas leves e confortáveis para o dia (algodão, linho).</li>
        <li>Calçado muito confortável para caminhar (ténis, sapatilhas). Paris explora-se a pé!</li>
        <li>Um casaco leve ou cardigã para noites mais frescas ou locais com ar condicionado.</li>
        <li>Um lenço ou écharpe (útil para igrejas e estilo parisiense).</li>
        <li>Protetor solar, chapéu e óculos de sol.</li>
        <li>Adaptador de tomada universal (França usa tipo E).</li>
        <li>Power bank para carregar telemóveis.</li>
        <li>Uma pequena mochila ou bolsa transversal para levar o essencial durante o dia.</li>
        <li>Medicamentos pessoais e uma pequena farmácia de viagem.</li>
        <li>Garrafa de água reutilizável (há fontes de água potável em Paris).</li>
        <li>Cópia dos documentos importantes (passaporte, reservas).</li>
        <li>Se for à Disney: roupa e calçado extra confortáveis, capas de chuva leves.</li>
      </ul>
    `
  },
  { 
    title: "Comunicação e Wi-Fi", 
    content: `
      <p><strong>Língua:</strong> Francês. Muitos parisienses em zonas turísticas falam inglês, mas aprender algumas frases básicas em francês (bonjour, merci, s'il vous plaît) é sempre apreciado.</p>
      <p><strong>Wi-Fi:</strong> Disponível em muitos cafés, restaurantes, hotéis e alguns parques públicos (Paris Wi-Fi). Considerar um cartão SIM local/eSIM ou plano de roaming internacional para dados móveis.</p>
    `
  },
  { 
    title: "Dinheiro e Pagamentos", 
    content: `
      <p><strong>Moeda:</strong> Euro (€).</p>
      <p>Cartões de crédito/débito são amplamente aceites. É bom ter algum dinheiro em numerário para pequenas compras ou mercados.</p>
      <p>Contactless é muito comum.</p>
      <p><strong>Gorjetas (Pourboire):</strong> O serviço está geralmente incluído na conta ("service compris"). Se o serviço for excecional, pode deixar alguns euros extra, mas não é obrigatório como noutros países.</p>
    `
  },
  { 
    title: "Segurança", 
    content: `
      <p>Paris é geralmente segura, mas esteja atento a carteiristas (pickpockets), especialmente em locais turísticos movimentados, metro e RER.</p>
      <p>Mantenha os seus pertences seguros e próximos do corpo. Evite exibir objetos de valor.</p>
      <p>Cuidado com burlas comuns (ex: jogo da bolinha, petições falsas).</p>
      <p>Número de emergência europeu: 112.</p>
    `
  },
  {
    title: "Horários de Refeição e Reservas",
    content: `
      <p><strong>Pequeno-almoço (Petit déjeuner):</strong> Geralmente das 7:00 às 10:00.</p>
      <p><strong>Almoço (Déjeuner):</strong> Das 12:00 às 14:30. Muitos restaurantes oferecem "formules" (menus de preço fixo) ao almoço.</p>
      <p><strong>Jantar (Dîner):</strong> A partir das 19:00/19:30. Parisinos jantam mais tarde, por volta das 20:00 ou 21:00.</p>
      <p><strong>Reservas:</strong> Recomendadas, especialmente para restaurantes populares, jantares de fim de semana e grupos. Podem ser feitas online (ex: TheFork/LaFourchette, site do restaurante) ou por telefone.</p>
    `
  },
  {
    title: "Acessibilidade Geral (PMR)",
    content: `
      <p>Paris tem vindo a melhorar a acessibilidade, mas ainda há desafios.</p>
      <p><strong>Transportes:</strong> Metro tem muitas escadas; Linha 14 é a mais acessível. Autocarros são geralmente acessíveis. Verificar sites como Jaccede ou app da RATP para informações.</p>
      <p><strong>Museus e Atrações:</strong> A maioria dos grandes museus tem boa acessibilidade. Verificar sites oficiais para detalhes e entradas específicas.</p>
      <p><strong>Alojamento:</strong> Reservar hotéis com quartos adaptados com antecedência.</p>
    `
  }
];
