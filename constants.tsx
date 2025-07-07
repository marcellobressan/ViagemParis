
import React from 'react';
import type { ItineraryData, PointOfInterest, Restaurant, AccordionItemData } from './types';
import { NavigationTarget } from './types';

// This file contains all the application's shared constants and data.
export const SUPABASE_URL_PLACEHOLDER = 'YOUR_SUPABASE_URL_HERE';
export const SUPABASE_ANON_KEY_PLACEHOLDER = 'YOUR_SUPABASE_ANON_KEY_HERE';

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
        mainTitle: "Início da Viagem: Rumo a Paris", 
        themeIcon: "✈️",
        themeDescription: "O grande dia da partida! A aventura começa com o voo de Recife para a Europa, com conexão em Lisboa.",
        mainPlan: {
            schedule: [
                { time: "16:55", icon: "🛫", description: "Voo TP016 - Partida de Recife para Lisboa." },
                { time: "Noite", icon: "🌃", description: "Voo noturno sobre o Atlântico. Tempo para descansar e sonhar com Paris." }
            ],
            transport: "<h6>Voos e Conexões:</h6><p>A viagem é operada pela TAP Air Portugal. O primeiro trecho é de Recife (REC) para Lisboa (LIS). Em Lisboa, haverá uma conexão para o voo seguinte para Paris.</p>",
        },
        considerations: "Certificar-se de que todos os documentos de viagem (passaportes, vistos se necessário) estão à mão. Manter-se hidratado durante o voo.",
        alternativePlan: null
    },
    "15/07": {
        day: "Terça", 
        disney: true,
        mainTitle: "Bonjour Paris! A Magia Começa na Disney", 
        themeIcon: "🛬🏰",
        themeDescription: "Chegada em Paris e transfer direto para o mundo dos sonhos. O primeiro dia na Disneyland Paris!",
        mainPlan: {
            schedule: [
                { time: "Manhã", icon: "✈️", description: "Conexão em Lisboa: Voo TP436 - Lisboa para Paris." },
                { time: "10:55", icon: "🛬", description: "Chegada ao Aeroporto de Paris (Orly)." },
                { time: "12:00", icon: "🚐", description: "Transfer do aeroporto para o hotel na Disneyland Paris." },
                { time: "14:00", icon: "🏨", description: "Check-in no hotel, instalação nos quartos e um breve descanso." },
                { time: "Tarde", icon: "✨", description: "Primeira exploração do Disneyland Park ou Disney Village, dependendo da disposição." }
            ],
            transport: "<h6>Como Chegar (Orly → Hotel Disney):</h6><p>🚐 <strong>Recomendado:</strong> Transfer privado pré-reservado para conveniência. Alternativa: Magical Shuttle (serviço oficial da Disney - verificar horários e necessidade de reserva).</p>"
        },
        considerations: "O primeiro dia é de adaptação. Um ritmo mais leve é recomendado. Usar a app da Disneyland Paris para verificar horários e planear os próximos dias.",
        alternativePlan: null
    },
    "16/07": {
        day: "Quarta", 
        disney: true,
        mainTitle: "Disneyland Paris – Dia 2",
        themeIcon: "🎢🎠",
        themeDescription: "Um dia inteiro dedicado a explorar a magia do Disneyland Park, dos contos de fadas às aventuras emocionantes.",
        mainPlan: {
            schedule: [
                { time: "09:00", icon: "🏰", description: "Entrada no Disneyland Park. Foco em áreas como <strong>Fantasyland</strong> ('it's a small world', 'Peter Pan's Flight') e <strong>Adventureland</strong> ('Pirates of the Caribbean')." },
                { time: "13:00", icon: "🍕", description: "Almoço no parque." },
                { time: "Tarde", icon: "🚀", description: "Explorar <strong>Discoveryland</strong> ('Buzz Lightyear Laser Blast', 'Star Wars Hyperspace Mountain')." },
                { time: "Noite", icon: "🎇", description: "Assistir à parada e ao show noturno sobre o Castelo." }
            ],
            transport: "<h6>Transporte:</h6><p>🚶‍♀️ A pé dentro do complexo Disney ou usando os shuttles gratuitos do hotel para os parques.</p>"
        },
        considerations: "Utilizar a app da Disneyland Paris para gerir filas (comprar Premier Access se necessário) e horários dos shows. Manter a flexibilidade para revisitar as atrações favoritas.",
        alternativePlan: null
    },
    "17/07": {
        day: "Quinta", 
        disney: true,
        mainTitle: "Disneyland Paris – Dia 3",
        themeIcon: "🎬🦸",
        themeDescription: "Aventura no Walt Disney Studios Park, com encontros de super-heróis e atrações cinematográficas.",
        mainPlan: {
            schedule: [
                { time: "09:00", icon: "🎬", description: "Entrada no Walt Disney Studios Park. Explorar o <strong>Avengers Campus</strong> e <strong>Worlds of Pixar</strong>." },
                { time: "13:00", icon: "🍽️", description: "Almoço temático no Studios (ex: PYM Kitchen ou Stark Factory)." },
                { time: "Tarde", icon: "🎭", description: "Assistir a um dos espetáculos ao vivo do parque, como 'TOGETHER: a Pixar Musical Adventure'." },
                { time: "Fim de Tarde", icon: "🛍️", description: "Explorar as lojas na Disney Village." }
            ],
            transport: "<h6>Transporte:</h6><p>🚶‍♀️ A pé dentro do complexo Disney ou usando os shuttles gratuitos do hotel para os parques.</p>"
        },
        considerations: "Verificar horários dos shows e encontros com personagens na app. Algumas atrações como 'Crush's Coaster' podem ter filas longas.",
        alternativePlan: null
    },
    "18/07": {
        day: "Sexta", 
        disney: true,
        mainTitle: "Disneyland Paris – Dia 4",
        themeIcon: "💖✨",
        themeDescription: "Último dia de magia, revisitando atrações favoritas e aproveitando a atmosfera única da Disney.",
        mainPlan: {
            schedule: [
                { time: "09:00", icon: "💖", description: "Dia para revisitar as atrações favoritas em qualquer um dos parques ou descobrir recantos ainda não explorados." },
                { time: "Almoço", icon: "🥨", description: "Desfrutar de um almoço especial ou snacks temáticos que ainda não experimentaram." },
                { time: "Tarde", icon: "🛍️", description: "Compras de última hora e despedida dos personagens." },
                { time: "Noite", icon: "🧳", description: "Jantar tranquilo e começar a organizar as malas para a transição para Paris no dia seguinte." }
            ],
            transport: "<h6>Transporte:</h6><p>🚶‍♀️ A pé dentro do complexo Disney.</p>"
        },
        considerations: "Um dia mais flexível para garantir que todos aproveitem ao máximo os seus momentos finais no resort.",
        alternativePlan: null
    },
    "19/07": {
        day: "Sábado", 
        mainTitle: "Adeus Disney, Olá Torre Eiffel!",
        themeIcon: "👋🗼",
        themeDescription: "Transição para o coração de Paris e subida ao seu monumento mais icónico para vistas deslumbrantes.",
        mainPlan: {
            schedule: [
                 { time: "Manhã", icon: "🚐", description: "Check-out do hotel Disney e transfer para o hotel em Paris." },
                { time: "09:00", icon: "🗼", description: "Visita à <strong>Torre Eiffel</strong> com bilhetes pré-reservados. A visita pode ocorrer antes ou depois do check-in no hotel, dependendo da logística." },
                { time: "Tarde", icon: "🏨", description: "Check-in e instalação no hotel em Paris, seguido de um passeio de reconhecimento pelo bairro."}
            ],
            transport: `<h6>Como Chegar (Hotel Disney → Hotel Paris):</h6>
                <p>🚕 <strong>Recomendado:</strong> Transfer privado pré-reservado para conforto e gestão de bagagens.</p>
                <p>🚂 <strong>Transporte Público:</strong> RER A de Marne-la-Vallée Chessy até ao centro de Paris, depois Metro até ao hotel.</p>`
        },
        considerations: "Logística do dia de transição. Coordenar o horário do transfer com o horário agendado para a Torre Eiffel. Deixar as malas no hotel se chegarem antes da hora do check-in.",
        alternativePlan: null
    },
    "20/07": {
        day: "Domingo", 
        mainTitle: "Arte Mundial no Louvre",
        themeIcon: "🖼️✨",
        themeDescription: "Imersão na arte mundialmente famosa do Louvre, focando nas suas obras-primas.",
        mainPlan: {
            schedule: [
                { time: "10:30", icon: "🖼️", description: "Visita agendada ao <strong>Museu do Louvre (entrada pela Pirâmide)</strong>. Foco nas obras-primas: Mona Lisa, Vénus de Milo, Vitória de Samotrácia e Antiguidades Egípcias." },
                { time: "13:30", icon: "🧺", description: "Almoço: Piquenique no Jardin des Tuileries ou num café próximo." },
                { time: "15:00", icon: "🌳", description: "Passeio relaxante pelo Jardin des Tuileries até à Place de la Concorde." },
                { time: "Noite", icon: "🚢", description: "Opcional: Cruzeiro no Rio Sena ao pôr do sol para ver os monumentos iluminados." }
            ],
            transport: `<h6>Como Chegar (Hotel → Museu do Louvre):</h6>
                <p>🚇 Usar o Metro. A estação <strong>Palais Royal - Musée du Louvre</strong> (Linhas 1 e 7) dá acesso direto ao museu.</p>`
        },
        considerations: "O Louvre é imenso. Ter um plano das alas a visitar é essencial. Comprar bilhetes online com antecedência é obrigatório.",
        alternativePlan: null
    },
    "21/07": {
        day: "Segunda", 
        mainTitle: "História Natural e Jardins",
        themeIcon: "🐘🌿",
        themeDescription: "Uma jornada pela maravilha da evolução natural na Grande Galerie de l’Évolution, rodeada pelo belo Jardin des Plantes.",
        mainPlan: {
            schedule: [
                { time: "09:45", icon: "🎟️", description: "Entrada permitida na área do Jardin des Plantes." },
                { time: "10:00", icon: "🐘", description: "Visita à <strong>Grande Galerie de l’Évolution</strong>. Explorar a incrível parada de animais e as exposições sobre biodiversidade." },
                { time: "12:30", icon: "🍽️", description: "Almoço no Quartier Latin, nas proximidades do jardim." },
                { time: "Tarde", icon: "🚶‍♀️", description: "Passeio pelo Jardin des Plantes, visitando a Ménagerie (zoológico) ou as estufas." }
            ],
            transport: `<h6>Como Chegar (Hotel → Jardin des Plantes):</h6>
                <p>🚇 Metro até à estação <strong>Jussieu</strong> (Linhas 7, 10), <strong>Place Monge</strong> (Linha 7) ou <strong>Gare d'Austerlitz</strong> (Linhas 5, 10, RER C).</p>`
        },
        considerations: "Ideal para um dia em família que combina ciência, natureza e história. A área oferece muitas opções de restauração.",
        alternativePlan: null
    },
    "22/07": {
        day: "Terça", 
        mainTitle: "Dia Real em Versalhes",
        themeIcon: "👑🌳",
        themeDescription: "Uma imersão na opulência do Palácio de Versalhes e na vastidão dos seus jardins históricos.",
        mainPlan: {
            schedule: [
                { time: "Manhã", icon: "🚂", description: "Viagem de comboio RER C de Paris para Versailles Château - Rive Gauche." },
                { time: "10:00", icon: "🌳", description: "Explorar os Jardins, o Domínio de Maria Antonieta (Petit Trianon, Hameau de la Reine)." },
                { time: "13:00", icon: "🍽️", description: "Almoço nos jardins (La Flottille, Angelina, ou piquenique)." },
                { time: "13:45", icon: "➡️", description: "Chegar à Entrada A (Pavillon Dufour) para a visita agendada." },
                { time: "14:00", icon: "👑", description: "Visita ao <strong>Palácio de Versalhes</strong>. Explorar os Grandes Apartamentos e a Galeria dos Espelhos." },
                { time: "Tarde", icon: "🚂", description: "Regresso a Paris no final da tarde." }
            ],
            transport: `<h6>Como Chegar (Paris → Versalhes):</h6>
                <p>🚂 <strong>RER C5</strong> (sentido Versailles Château - Rive Gauche). Apanhar numa estação como Saint-Michel Notre-Dame ou Invalides. A viagem dura cerca de 40 minutos.</p>`
        },
        considerations: "Dia longo e cansativo. Usar calçado muito confortável. Alugar um carrinho de golfe nos jardins é uma excelente opção para poupar energia.",
        alternativePlan: null
    },
    "23/07": {
        day: "Quarta",
        mainTitle: "Arte e Elegância",
        themeIcon: "🏛️🎨",
        themeDescription: "Um dia de requinte, explorando a mansão histórica do Musée Jacquemart-André e a exposição de Artemisia.",
        mainPlan: {
            schedule: [
                { time: "Manhã", icon: "🚶‍♀️", description: "Manhã livre para explorar a área dos Champs-Élysées ou o Parc Monceau." },
                { time: "13:00", icon: "🍽️", description: "Almoço na área." },
                { time: "15:00", icon: "🏛️", description: "Visita agendada ao <strong>Musée Jacquemart-André</strong> para ver a coleção permanente e a <strong>Exposição Artemisia</strong>." },
                { time: "16:30", icon: "☕", description: "Chá da tarde no elegante Café Jacquemart-André." }
            ],
            transport: `<h6>Como Chegar (Hotel → Musée Jacquemart-André):</h6>
                <p>🚇 Metro até às estações <strong>Saint-Augustin</strong> (Linha 9) ou <strong>Miromesnil</strong> (Linhas 9, 13). O museu fica a uma curta caminhada.</p>`
        },
        considerations: "Um museu mais íntimo e menos movimentado que o Louvre, oferecendo uma experiência cultural mais tranquila.",
        alternativePlan: null
    },
    "24/07": {
        day: "Quinta",
        mainTitle: "Coração de Paris: Ilhas e Livros",
        themeIcon: "📚⛪",
        themeDescription: "Explorando o berço histórico de Paris na Île de la Cité e a icónica livraria Shakespeare and Company.",
        mainPlan: {
            schedule: [
                { time: "10:00", icon: "⛪", description: "Visita à <strong>Île de la Cité</strong>. Admirar o exterior da <strong>Catedral de Notre-Dame</strong> e o seu progresso de reconstrução." },
                { time: "11:00", icon: "✨", description: "Visitar a <strong>Sainte-Chapelle</strong> (reservar bilhetes!) para ver os seus magníficos vitrais." },
                { time: "12:30", icon: "💐", description: "Passeio pelo Marché aux Fleurs (Mercado das Flores)." },
                { time: "13:30", icon: "🍽️", description: "Almoço na ilha ou no Quartier Latin adjacente." },
                { time: "15:00", icon: "📚", description: "Visita à famosa livraria <strong>Shakespeare and Company</strong>, em frente à Notre-Dame." }
            ],
            transport: `<h6>Como Chegar (Hotel → Île de la Cité):</h6>
                <p>🚇 Metro até à estação <strong>Cité</strong> (Linha 4) ou <strong>Châtelet</strong> (Linhas 1, 4, 7, 11, 14) e atravessar a ponte.</p>`
        },
        considerations: "A área pode ser muito movimentada. Reservar bilhetes para a Sainte-Chapelle com antecedência é crucial para evitar longas filas.",
        alternativePlan: null
    },
    "25/07": {
        day: "Sexta",
        mainTitle: "Alta Costura e Glamour",
        themeIcon: "👗✨",
        themeDescription: "Um dia dedicado à moda e ao luxo, com uma visita à Galerie Dior e um passeio pela icónica Avenue Montaigne.",
        mainPlan: {
            schedule: [
                { time: "Manhã", icon: "🛍️", description: "Passeio pela <strong>Avenue des Champs-Élysées</strong>, subindo em direção ao <strong>Arco do Triunfo</strong> (subida opcional)." },
                { time: "13:00", icon: "🍽️", description: "Almoço num café nos Champs-Élysées." },
                { time: "15:30", icon: "👗", description: "Visita agendada à <strong>La Galerie Dior</strong>, na 11 rue François Ier, para uma imersão na história da casa de moda." }
            ],
            transport: `<h6>Como Chegar (Hotel → Champs-Élysées / Galerie Dior):</h6>
                <p>🚇 Metro até <strong>Franklin D. Roosevelt</strong> (Linhas 1, 9) ou <strong>Alma-Marceau</strong> (Linha 9), que são centrais para a Avenue Montaigne e os Champs-Élysées.</p>`
        },
        considerations: "Reservar bilhetes para a Galerie Dior com muita antecedência, pois esgotam rapidamente. É uma experiência visualmente deslumbrante.",
        alternativePlan: null
    },
    "26/07": {
        day: "Sábado",
        mainTitle: "Viagem a Chartres",
        themeIcon: "⛪",
        themeDescription: "Uma viagem de um dia à cidade de Chartres para visitar a sua mundialmente famosa catedral gótica.",
        mainPlan: {
            schedule: [
                { time: "Manhã", icon: "🚂", description: "Viagem de comboio da Gare Montparnasse em Paris para Chartres." },
                { time: "10:00", icon: "⛪", description: "Chegada a Chartres e visita à <strong>Catedral de Chartres</strong>, Património Mundial da UNESCO. Admirar os vitrais medievais únicos." },
                { time: "13:00", icon: "🍽️", description: "Almoço no centro histórico de Chartres." },
                { time: "14:30", icon: "🚶‍♀️", description: "Passeio pela charmosa cidade velha." },
                { time: "Tarde", icon: "🚂", description: "Regresso a Paris no final da tarde." }
            ],
            transport: `<h6>Como Chegar (Paris → Chartres):</h6>
                <p>🚂 Comboio TER da <strong>Gare Montparnasse</strong> para <strong>Chartres</strong>. A viagem dura cerca de 1 hora. Comprar bilhetes com antecedência pode ser mais económico.</p>`
        },
        considerations: "Verificar os horários dos comboios de ida e volta. Chartres é uma cidade tranquila e uma excelente pausa da agitação de Paris.",
        alternativePlan: null
    },
    "27/07": {
        day: "Domingo",
        mainTitle: "Opulência da Ópera Garnier",
        themeIcon: "🎭🎶",
        themeDescription: "Um dia para se maravilhar com a arquitetura e o luxo do Palais Garnier, a famosa ópera de Paris.",
        mainPlan: {
            schedule: [
                { time: "10:00", icon: "🎭", description: "Visita (guiada ou com áudio-guia) ao interior deslumbrante da <strong>Opéra Garnier</strong>. Explorar o Grande Foyer, a escadaria principal e o teto pintado por Chagall." },
                { time: "13:00", icon: "🍽️", description: "Almoço nas proximidades, na área dos Grands Boulevards." },
                { time: "Tarde", icon: "🛍️", description: "Passeio e compras nas <strong>Galeries Lafayette</strong> e <strong>Printemps</strong>. Não esquecer de subir aos terraços para vistas gratuitas de Paris." },
                { time: "Noite", icon: "🍲", description: "Jantar de despedida num restaurante especial." }
            ],
            transport: `<h6>Como Chegar (Hotel → Opéra Garnier):</h6>
                <p>🚇 Metro até à estação <strong>Opéra</strong> (Linhas 3, 7, 8). A Opéra Garnier fica em frente à saída.</p>`
        },
        considerations: "A visita à Ópera é imperdível, mesmo para quem não assiste a um espetáculo. A beleza do edifício é uma atração por si só.",
        alternativePlan: null
    },
    "28/07": {
        day: "Segunda",
        mainTitle: "Au Revoir, Paris! Retorno ao Brasil",
        themeIcon: "✈️🇧🇷",
        themeDescription: "Despedida de Paris e preparativos para a viagem de regresso ao Brasil, com conexão em Lisboa.",
        mainPlan: {
            schedule: [
                { time: "Manhã", icon: "🥐", description: "Pequeno-almoço tranquilo e últimas arrumações das malas." },
                { time: "Até 11:00", icon: "🧳", description: "Check-out do hotel." },
                { time: "11:50", icon: "🛫", description: "Partida do Voo TP437 - Paris para Lisboa." },
                { time: "Tarde/Noite", icon: "✈️", description: "Conexão em Lisboa para o Voo TP015 - Lisboa para Recife." },
                { time: "20:50", icon: "🛬", description: "Chegada prevista a Recife." }
            ],
            transport: `<h6>Como Chegar (Hotel → Aeroporto de Paris):</h6>
                <p>🚕 <strong>Recomendado:</strong> Transfer privado pré-reservado para garantir pontualidade e conforto com as bagagens.</p>`
        },
        considerations: "Sair para o aeroporto com bastante antecedência (pelo menos 3-4 horas antes do voo). Confirmar o terminal de partida.",
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
    name: "Catedral de Chartres", 
    icon: "⛪", 
    category: "Monumento Religioso", 
    notes: "Catedral gótica famosa pelos seus vitrais medievais. Viagem de um dia a partir de Paris.",
    link: "https://www.cathedrale-chartres.org/",
    imagePlaceholder: "https://images.unsplash.com/photo-1594228919642-9902795db347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
