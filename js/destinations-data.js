/**
 * Catálogo de Destinos Brasileiros - Antônio Carlos Consultoria
 * Foco exclusivo no território nacional
 */

const DESTINATIONS_DATA = [
  {
    id: 'rio',
    title: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    region: 'sudeste',
    categoryText: 'Capital, Búzios & Paraty Colonial',
    image: 'assets/img/dest-rio.jpg',
    description: 'Hotéis icônicos na orla de Copacabana e Ipanema, passeios de helicóptero privativo sobre a Baía de Guanabara e roteiros integrados a Búzios e Paraty colonial.',
    bestSeason: 'Ano inteiro (Março a Novembro clima ameno)',
    experience: 'Urbano & Litoral de Luxo'
  },
  {
    id: 'bahia',
    title: 'Bahia',
    state: 'Bahia',
    region: 'nordeste',
    categoryText: 'Trancoso, Península de Maraú & Salvador',
    image: 'assets/img/dest-bahia.jpg',
    description: 'Pousadas-boutique consagradas no Quadrado de Trancoso, praias preservadas do Sul da Bahia e gastronomia sensorial com o melhor da hospitalidade baiana.',
    bestSeason: 'Setembro a Maio',
    experience: 'Resorts & Praias Paradisíacas'
  },
  {
    id: 'alagoas',
    title: 'Alagoas',
    state: 'Alagoas',
    region: 'nordeste',
    categoryText: 'Rota dos Milagres, Maragogi & Piscinas Naturais',
    image: 'assets/img/dest-alagoas.jpg',
    description: 'Águas mornas e transparentes em São Miguel dos Milagres e Maragogi. Passeios exclusivos de jangada privativa e hospedagens de alto requinte pé na areia.',
    bestSeason: 'Outubro a Março (Águas mais cristalinas)',
    experience: 'Relax & Mares Transparentes'
  },
  {
    id: 'sergipe',
    title: 'Sergipe',
    state: 'Sergipe',
    region: 'nordeste',
    categoryText: 'Cânions do Xingó, Aracaju & Rio São Francisco',
    image: 'assets/img/dest-sergipe.jpg',
    description: 'A grandiosidade do quinto maior cânion navegável do planeta. Navegações em catamarãs privativos por águas esmeralda e hospitalidade sergipana.',
    bestSeason: 'Ano inteiro',
    experience: 'Ecoturismo & Paisagens Épicas'
  },
  {
    id: 'sp',
    title: 'São Paulo',
    state: 'São Paulo',
    region: 'sudeste',
    categoryText: 'Alta Gastronomia, Cultura & Litoral Norte',
    image: 'assets/img/dest-sp.jpg',
    description: 'Os melhores restaurantes estrelados Michelin da América Latina, hotéis cinco estrelas no Jardins e roteiros culturais privativos com curadoria artística.',
    bestSeason: 'Ano inteiro',
    experience: 'Gastronomia & Luxo Urbano'
  },
  {
    id: 'rs',
    title: 'Rio Grande do Sul',
    state: 'Rio Grande do Sul',
    region: 'sul',
    categoryText: 'Serra Gaúcha, Vale dos Vinhedos & Gramado',
    image: 'assets/img/dest-rs.jpg',
    description: 'Degustação de vinhos e espumantes premiados em vinícolas históricas, alta gastronomia italiana e refúgios acolhedores de inverno com lareiras e araucárias.',
    bestSeason: 'Abril a Agosto (Inverno) ou Jan/Fev (Vindima)',
    experience: 'Enogastronomia & Charme Serrano'
  },
  {
    id: 'brasilia',
    title: 'Distrito Federal',
    state: 'Distrito Federal',
    region: 'centro-oeste',
    categoryText: 'Brasília, Patrimônio Mundial & Arquitetura Ímpar',
    image: 'assets/img/dest-brasilia.jpg',
    description: 'Visita guiada privativa às obras monumentais de Oscar Niemeyer e Athos Bulcão, o pôr do sol no Lago Paranoá e o circuito gastronômico contemporâneo.',
    bestSeason: 'Maio a Agosto (Céu aberto e pôr do sol dourado)',
    experience: 'Arquitetura, Arte & História'
  },
  {
    id: 'noronha',
    title: 'Pernambuco',
    state: 'Pernambuco',
    region: 'ilhas',
    categoryText: 'Fernando de Noronha & Santuário Marinho',
    image: 'assets/img/dest-noronha.jpg',
    description: 'Mergulho com tartarugas na Baía do Sancho, pôr do sol no Mirante do Boldró e pousadas de charme com privacidade absoluta no paraíso brasileiro.',
    bestSeason: 'Agosto a Dezembro (Mar calmo e visibilidade máxima)',
    experience: 'Natureza Rara & Exclusividade'
  },
  {
    id: 'lencois',
    title: 'Maranhão',
    state: 'Maranhão',
    region: 'ilhas',
    categoryText: 'Lençóis Maranhenses & Dunas Cristalinas',
    image: 'assets/img/dest-lencois.jpg',
    description: 'Sobrevôos panorâmicos sobre as dunas imensas e expedições em 4x4 privativo até as lagoas mais intocadas e exclusivas de Atins e Santo Amaro.',
    bestSeason: 'Junho a Setembro (Lagoas cheias)',
    experience: 'Aventura Exclusiva & Cenários Únicos'
  }
];
