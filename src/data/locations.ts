export interface Location {
  slug: string;
  name: string;
  type: 'city' | 'neighborhood';
  description: string;
  highlights: string[];
  nearbyPlaces: string[];
  popularCourses: string[];
}

export const locations: Location[] = [
  // Cidades da Região Metropolitana
  {
    slug: "curitiba",
    name: "Curitiba",
    type: "city",
    description: "Capital paranaense e polo de estética e beleza do Sul do Brasil. Curitiba se destaca como um centro de excelência em capacitação profissional, com demanda crescente por profissionais qualificados em estética facial, corporal, micropigmentação e design de sobrancelhas. Nossa escola está estrategicamente localizada para atender toda a cidade com fácil acesso.",
    highlights: [
      "Capital do Paraná e polo de beleza",
      "Mercado aquecido com alta demanda",
      "Fácil acesso de todas as regiões",
      "Público sofisticado e exigente",
      "Oportunidades em clínicas e salões premium",
      "Networking com profissionais renomados",
      "Certificação reconhecida nacionalmente",
      "Suporte completo pós-formação"
    ],
    nearbyPlaces: ["Pinhais", "São José dos Pinhais", "Colombo", "Araucária", "Fazenda Rio Grande"],
    popularCourses: ["Micropigmentação", "Design de Sobrancelhas", "Lash Lifting", "Estética Facial Avançada", "Botox"]
  },
  {
    slug: "adrianopolis",
    name: "Adrianópolis",
    type: "city",
    description: "Localizada na região metropolitana de Curitiba, Adrianópolis apresenta crescimento constante no setor de beleza e bem-estar. Com população em expansão, a cidade oferece excelentes oportunidades para profissionais de estética que buscam atender uma clientela em crescimento. Nossos cursos são ideais para quem deseja empreender na região.",
    highlights: [
      "Cidade em crescimento na região metropolitana",
      "Mercado emergente em beleza",
      "Baixa concorrência qualificada",
      "Oportunidade para pioneirismo",
      "Público receptivo a novos serviços",
      "Fácil acesso desde Curitiba",
      "Cursos com foco em empreendedorismo",
      "Material completo incluído"
    ],
    nearbyPlaces: ["Curitiba", "Bocaiúva do Sul", "Rio Branco do Sul"],
    popularCourses: ["Design de Sobrancelhas", "Depilação Profissional", "Estética Facial", "Massagem Relaxante"]
  },
  {
    slug: "agudos-do-sul",
    name: "Agudos do Sul",
    type: "city",
    description: "Município paranaense conhecido por seu charme rural e crescimento no turismo. Agudos do Sul apresenta demanda crescente por serviços de beleza, especialmente para eventos e turismo. Nossos cursos preparam profissionais para atender este mercado específico com excelência e qualidade premium.",
    highlights: [
      "Mercado turístico em expansão",
      "Demanda para eventos e festas",
      "Oportunidades em spas e pousadas",
      "Público valoriza atendimento personalizado",
      "Baixa oferta de profissionais qualificados",
      "Potencial para serviços premium",
      "Certificação profissional reconhecida",
      "Apoio para abertura de negócios"
    ],
    nearbyPlaces: ["Quitandinha", "Campo do Tenente", "Piên"],
    popularCourses: ["Micropigmentação", "Maquiagem Profissional", "Design de Sobrancelhas", "Estética Facial"]
  },
  {
    slug: "almirante-tamandaré",
    name: "Almirante Tamandaré",
    type: "city",
    description: "Cidade vizinha de Curitiba com forte vocação comercial e população crescente. Almirante Tamandaré se consolida como polo de serviços na região metropolitana, oferecendo ótimas oportunidades para profissionais de estética. Oferecemos formação completa com certificação reconhecida e suporte para atuação no mercado local.",
    highlights: [
      "Cidade polo da região norte",
      "População de 120 mil habitantes",
      "Comércio forte e consolidado",
      "Proximidade com Curitiba",
      "Demanda por serviços de qualidade",
      "Mercado receptivo a inovações",
      "Oportunidades em clínicas e salões",
      "Investimento com retorno rápido"
    ],
    nearbyPlaces: ["Curitiba", "Colombo", "Campo Magro"],
    popularCourses: ["Estética Facial", "Depilação a Laser", "Drenagem Linfática", "Design de Sobrancelhas"]
  },
  {
    slug: "araucaria",
    name: "Araucária",
    type: "city",
    description: "Importante polo industrial da região metropolitana com economia forte e população de alta renda. Araucária possui mercado consolidado de beleza com público exigente e disposto a investir em serviços premium. Nossa formação prepara profissionais para atender este mercado sofisticado com excelência.",
    highlights: [
      "Polo industrial com economia forte",
      "População com bom poder aquisitivo",
      "Mercado de beleza consolidado",
      "Demanda por serviços de alto padrão",
      "Oportunidades em estética avançada",
      "Fácil acesso desde Curitiba",
      "Público valoriza qualificação profissional",
      "Networking com empresas locais"
    ],
    nearbyPlaces: ["Curitiba", "Fazenda Rio Grande", "Contenda"],
    popularCourses: ["Botox e Preenchimento", "Estética Corporal", "Micropigmentação", "Lash Lifting Premium"]
  },
  {
    slug: "balsa-nova",
    name: "Balsa Nova",
    type: "city",
    description: "Município paranaense em crescimento com vocação para turismo rural e eventos. Balsa Nova apresenta oportunidades únicas para profissionais de estética especializados em atendimentos para festas, casamentos e turismo. Nossos cursos focam em técnicas modernas e atendimento personalizado.",
    highlights: [
      "Cidade turística em crescimento",
      "Demanda para eventos e casamentos",
      "Mercado de luxo em desenvolvimento",
      "Oportunidades em spas rurais",
      "Público valoriza exclusividade",
      "Baixa concorrência qualificada",
      "Potencial para serviços VIP",
      "Suporte para empreendedorismo"
    ],
    nearbyPlaces: ["Campo Largo", "Curitiba", "Contenda"],
    popularCourses: ["Micropigmentação", "Maquiagem para Noivas", "Design de Sobrancelhas", "Lash Lifting"]
  },
  {
    slug: "bocaiuva-do-sul",
    name: "Bocaiúva do Sul",
    type: "city",
    description: "Município da região metropolitana com perfil residencial e crescimento populacional. Bocaiúva do Sul apresenta mercado emergente em beleza, com ótimas oportunidades para profissionais pioneiros. Oferecemos capacitação completa para quem deseja empreender na região.",
    highlights: [
      "Mercado emergente com potencial",
      "Baixa concorrência profissional",
      "População em crescimento",
      "Oportunidade para pioneirismo",
      "Proximidade com Curitiba",
      "Público receptivo a novidades",
      "Investimento acessível para início",
      "Retorno rápido do investimento"
    ],
    nearbyPlaces: ["Curitiba", "Colombo", "Tunas do Paraná"],
    popularCourses: ["Design de Sobrancelhas", "Depilação Profissional", "Estética Facial Básica", "Manicure e Pedicure"]
  },
  {
    slug: "campina-grande-do-sul",
    name: "Campina Grande do Sul",
    type: "city",
    description: "Cidade da região metropolitana conhecida por suas belezas naturais e crescimento urbano. Campina Grande do Sul oferece mercado promissor para profissionais de estética, com demanda crescente por serviços de qualidade. Nossa escola prepara profissionais completos para este mercado em expansão.",
    highlights: [
      "Cidade em desenvolvimento acelerado",
      "Mercado de beleza em crescimento",
      "Público jovem e antenado",
      "Oportunidades em clínicas modernas",
      "Proximidade com Curitiba e Pinhais",
      "Demanda por técnicas inovadoras",
      "Cursos alinhados ao mercado local",
      "Certificação profissional completa"
    ],
    nearbyPlaces: ["Pinhais", "Colombo", "Quatro Barras"],
    popularCourses: ["Micropigmentação", "Estética Facial", "Lash Lifting", "Drenagem Linfática"]
  },
  {
    slug: "campo-do-tenente",
    name: "Campo do Tenente",
    type: "city",
    description: "Município paranaense com perfil rural e turístico. Campo do Tenente apresenta oportunidades para profissionais de estética especializados em atendimento personalizado e serviços diferenciados. Nossos cursos preparam para atuar em pousadas, spas e atendimento domiciliar.",
    highlights: [
      "Mercado turístico regional",
      "Oportunidades em hospedagem e eventos",
      "Público valoriza atendimento VIP",
      "Baixa concorrência especializada",
      "Potencial para serviços premium",
      "Ambiente tranquilo para empreender",
      "Cursos com foco em qualidade",
      "Suporte para início de carreira"
    ],
    nearbyPlaces: ["Lapa", "Quitandinha", "Rio Negro"],
    popularCourses: ["Massagem Relaxante", "Estética Facial", "Design de Sobrancelhas", "Aromaterapia"]
  },
  {
    slug: "campo-largo",
    name: "Campo Largo",
    type: "city",
    description: "Segunda maior cidade da região metropolitana de Curitiba, Campo Largo é um importante polo comercial e industrial. Com população de mais de 130 mil habitantes, oferece mercado consolidado e aquecido para profissionais de estética. Nossa formação garante capacitação completa para atuar neste mercado competitivo.",
    highlights: [
      "Segunda maior cidade da RMC",
      "Polo comercial e industrial forte",
      "População de 130 mil habitantes",
      "Mercado consolidado de beleza",
      "Demanda por profissionais qualificados",
      "Oportunidades em grandes salões",
      "Público exigente e fidelizado",
      "Cursos reconhecidos regionalmente"
    ],
    nearbyPlaces: ["Curitiba", "Balsa Nova", "Araucária"],
    popularCourses: ["Estética Facial Avançada", "Micropigmentação", "Botox", "Depilação a Laser"]
  },
  {
    slug: "campo-magro",
    name: "Campo Magro",
    type: "city",
    description: "Município da região metropolitana com características rurais e urbanas. Campo Magro apresenta crescimento populacional e demanda crescente por serviços de beleza de qualidade. Oferecemos formação completa para profissionais que desejam atender este mercado em expansão.",
    highlights: [
      "Cidade em crescimento populacional",
      "Mercado emergente promissor",
      "Baixa oferta de serviços especializados",
      "Oportunidade para pioneiros",
      "Proximidade com Curitiba",
      "Público receptivo a inovações",
      "Investimento acessível",
      "Retorno rápido garantido"
    ],
    nearbyPlaces: ["Curitiba", "Almirante Tamandaré", "Colombo"],
    popularCourses: ["Design de Sobrancelhas", "Depilação", "Estética Facial", "Manicure Profissional"]
  },
  {
    slug: "cerro-azul",
    name: "Cerro Azul",
    type: "city",
    description: "Município histórico do Paraná com vocação turística e cultural. Cerro Azul oferece oportunidades para profissionais de estética especializados em atendimento diferenciado e serviços premium para turistas. Nossa capacitação foca em excelência e atendimento personalizado.",
    highlights: [
      "Cidade histórica e turística",
      "Mercado de turismo cultural",
      "Oportunidades em hotéis e pousadas",
      "Público valoriza exclusividade",
      "Baixa concorrência qualificada",
      "Potencial para serviços VIP",
      "Ambiente único para empreender",
      "Certificação reconhecida"
    ],
    nearbyPlaces: ["Doutor Ulysses", "Adrianópolis"],
    popularCourses: ["Massagem Relaxante", "Estética Facial", "Aromaterapia", "Design de Sobrancelhas"]
  },
  {
    slug: "colombo",
    name: "Colombo",
    type: "city",
    description: "Maior cidade da região metropolitana em população, Colombo é um importante polo comercial vizinho a Curitiba. Com mais de 240 mil habitantes, oferece mercado aquecido e oportunidades abundantes para profissionais de estética. Nossa escola prepara para este mercado competitivo e dinâmico.",
    highlights: [
      "Maior cidade da RMC em população",
      "Mais de 240 mil habitantes",
      "Forte comércio e serviços",
      "Proximidade imediata com Curitiba",
      "Mercado aquecido de beleza",
      "Demanda constante por profissionais",
      "Oportunidades em diversos segmentos",
      "Público diversificado e fiel"
    ],
    nearbyPlaces: ["Curitiba", "Pinhais", "Almirante Tamandaré", "Campina Grande do Sul"],
    popularCourses: ["Micropigmentação", "Estética Facial", "Lash Lifting", "Depilação a Laser"]
  },
  {
    slug: "contenda",
    name: "Contenda",
    type: "city",
    description: "Município da região metropolitana com perfil agroindustrial e crescimento populacional. Contenda apresenta mercado emergente para serviços de beleza, com ótimas oportunidades para profissionais qualificados. Oferecemos capacitação completa com foco no mercado local.",
    highlights: [
      "Cidade em desenvolvimento",
      "Mercado de beleza emergente",
      "Baixa concorrência profissional",
      "População jovem e moderna",
      "Oportunidades para empreendedores",
      "Proximidade com Araucária",
      "Investimento com retorno garantido",
      "Suporte completo pós-curso"
    ],
    nearbyPlaces: ["Araucária", "Lapa", "Mandirituba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Drenagem Linfática"]
  },
  {
    slug: "doutor-ulysses",
    name: "Doutor Ulysses",
    type: "city",
    description: "Município paranaense com características rurais e potencial turístico. Doutor Ulysses oferece oportunidades para profissionais de estética que buscam mercado diferenciado e atendimento personalizado. Nossos cursos preparam para diversos cenários de atuação.",
    highlights: [
      "Mercado rural com potencial",
      "Oportunidades em turismo local",
      "Baixíssima concorrência",
      "Público receptivo a serviços",
      "Potencial para pioneirismo",
      "Ambiente tranquilo para trabalhar",
      "Certificação profissional",
      "Apoio ao empreendedorismo"
    ],
    nearbyPlaces: ["Cerro Azul", "Adrianópolis"],
    popularCourses: ["Estética Facial Básica", "Design de Sobrancelhas", "Manicure", "Massagem"]
  },
  {
    slug: "fazenda-rio-grande",
    name: "Fazenda Rio Grande",
    type: "city",
    description: "Uma das cidades que mais cresce no Brasil, Fazenda Rio Grande é um mercado extremamente promissor para profissionais de estética. Com população jovem e em expansão, a demanda por serviços de beleza cresce exponencialmente. Nossa escola oferece formação completa para aproveitar este mercado aquecido.",
    highlights: [
      "Cidade que mais cresce no Brasil",
      "População jovem e moderna",
      "Mercado em expansão acelerada",
      "Demanda crescente por serviços",
      "Oportunidades para todos os níveis",
      "Proximidade com Curitiba",
      "Investimento com alto retorno",
      "Público receptivo a inovações"
    ],
    nearbyPlaces: ["Curitiba", "Araucária", "Mandirituba"],
    popularCourses: ["Micropigmentação", "Lash Lifting", "Design de Sobrancelhas", "Estética Corporal"]
  },
  {
    slug: "itaperucu",
    name: "Itaperuçu",
    type: "city",
    description: "Município da região metropolitana com vocação industrial e comercial. Itaperuçu apresenta mercado consolidado com oportunidades para profissionais qualificados em estética. Oferecemos capacitação completa reconhecida regionalmente.",
    highlights: [
      "Polo industrial da região",
      "Mercado consolidado de serviços",
      "População estável e fidelizada",
      "Demanda por profissionais certificados",
      "Oportunidades em clínicas estabelecidas",
      "Proximidade com Almirante Tamandaré",
      "Cursos alinhados ao mercado",
      "Certificação reconhecida"
    ],
    nearbyPlaces: ["Almirante Tamandaré", "Rio Branco do Sul", "Colombo"],
    popularCourses: ["Estética Facial", "Depilação", "Drenagem Linfática", "Design de Sobrancelhas"]
  },
  {
    slug: "lapa",
    name: "Lapa",
    type: "city",
    description: "Cidade histórica do Paraná com forte apelo turístico e cultural. A Lapa oferece mercado diferenciado para profissionais de estética, com oportunidades em turismo, eventos e serviços premium. Nossa formação prepara para atender este público exigente e diversificado.",
    highlights: [
      "Cidade histórica e turística",
      "Mercado de turismo consolidado",
      "Eventos históricos frequentes",
      "Oportunidades em hotéis e pousadas",
      "Público nacional e internacional",
      "Demanda por serviços premium",
      "Networking cultural e turístico",
      "Certificação profissional reconhecida"
    ],
    nearbyPlaces: ["Campo Largo", "Contenda", "Balsa Nova"],
    popularCourses: ["Maquiagem Profissional", "Micropigmentação", "Estética Facial", "Design de Sobrancelhas"]
  },
  {
    slug: "mandirituba",
    name: "Mandirituba",
    type: "city",
    description: "Município da região metropolitana em crescimento populacional e comercial. Mandirituba apresenta mercado emergente com ótimas oportunidades para profissionais de estética qualificados. Oferecemos formação completa para atuar neste mercado promissor.",
    highlights: [
      "Cidade em crescimento acelerado",
      "Mercado emergente promissor",
      "Baixa concorrência qualificada",
      "População jovem e moderna",
      "Proximidade com Fazenda Rio Grande",
      "Oportunidades para empreendedores",
      "Investimento com retorno rápido",
      "Suporte completo ao aluno"
    ],
    nearbyPlaces: ["Fazenda Rio Grande", "Quitandinha", "Tijucas do Sul"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Lash Lifting", "Depilação"]
  },
  {
    slug: "pien",
    name: "Piên",
    type: "city",
    description: "Município paranaense com perfil agrícola e turístico. Piên oferece oportunidades para profissionais de estética em mercado diferenciado, com foco em atendimento personalizado e serviços de qualidade.",
    highlights: [
      "Mercado turístico em crescimento",
      "Oportunidades em eventos rurais",
      "Baixa concorrência especializada",
      "Público valoriza qualidade",
      "Potencial para serviços VIP",
      "Ambiente tranquilo para trabalhar",
      "Certificação profissional",
      "Apoio ao empreendedorismo local"
    ],
    nearbyPlaces: ["Rio Negro", "Quitandinha", "Campo do Tenente"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Massagem Relaxante", "Depilação"]
  },
  {
    slug: "pinhais",
    name: "Pinhais",
    type: "city",
    description: "Cidade polo da região leste da RMC, Pinhais possui economia forte e população de alto padrão. Com mais de 130 mil habitantes, oferece mercado consolidado e sofisticado para profissionais de estética. Nossa escola prepara para este mercado exigente e competitivo.",
    highlights: [
      "Polo econômico da região leste",
      "População de alto poder aquisitivo",
      "Mercado consolidado e exigente",
      "Demanda por serviços premium",
      "Oportunidades em estética avançada",
      "Proximidade com Curitiba",
      "Público valoriza qualificação",
      "Networking com empresas locais"
    ],
    nearbyPlaces: ["Curitiba", "Colombo", "São José dos Pinhais"],
    popularCourses: ["Botox e Preenchimento", "Micropigmentação", "Estética Facial Avançada", "Lash Lifting Premium"]
  },
  {
    slug: "piraquara",
    name: "Piraquara",
    type: "city",
    description: "Município da região metropolitana conhecido pelas fontes de água mineral e belezas naturais. Piraquara apresenta mercado promissor para profissionais de estética, com oportunidades em spas, clínicas e atendimento domiciliar. Oferecemos formação completa e certificada.",
    highlights: [
      "Cidade das águas minerais",
      "Mercado de bem-estar em alta",
      "Oportunidades em spas e clínicas",
      "Público valoriza saúde e beleza",
      "Turismo de bem-estar crescente",
      "Proximidade com Curitiba",
      "Demanda por técnicas naturais",
      "Certificação profissional reconhecida"
    ],
    nearbyPlaces: ["Curitiba", "Pinhais", "Quatro Barras"],
    popularCourses: ["Drenagem Linfática", "Massagem Relaxante", "Estética Facial Natural", "Aromaterapia"]
  },
  {
    slug: "quatro-barras",
    name: "Quatro Barras",
    type: "city",
    description: "Município da região metropolitana com perfil residencial e alta qualidade de vida. Quatro Barras oferece mercado sofisticado para profissionais de estética, com público exigente e disposto a investir em serviços premium.",
    highlights: [
      "Alta qualidade de vida",
      "População de alto padrão",
      "Mercado sofisticado de beleza",
      "Demanda por serviços exclusivos",
      "Oportunidades em clínicas premium",
      "Proximidade com Curitiba e Pinhais",
      "Público fidelizado e exigente",
      "Cursos focados em excelência"
    ],
    nearbyPlaces: ["Pinhais", "Campina Grande do Sul", "Piraquara"],
    popularCourses: ["Micropigmentação Premium", "Estética Facial Avançada", "Botox", "Lash Lifting VIP"]
  },
  {
    slug: "quitandinha",
    name: "Quitandinha",
    type: "city",
    description: "Município paranaense com vocação turística e eventos. Quitandinha apresenta oportunidades para profissionais de estética especializados em atendimento para festas, casamentos e turismo de eventos.",
    highlights: [
      "Polo de eventos da região",
      "Turismo de festas e casamentos",
      "Oportunidades em buffets e espaços",
      "Demanda sazonal intensa",
      "Público valoriza profissionalismo",
      "Potencial para serviços VIP",
      "Networking com organizadores",
      "Certificação profissional"
    ],
    nearbyPlaces: ["Mandirituba", "Piên", "Campo do Tenente"],
    popularCourses: ["Maquiagem para Noivas", "Micropigmentação", "Design de Sobrancelhas", "Penteados"]
  },
  {
    slug: "rio-branco-do-sul",
    name: "Rio Branco do Sul",
    type: "city",
    description: "Município industrial da região metropolitana com economia consolidada. Rio Branco do Sul oferece mercado estável para profissionais de estética, com população fidelizada e demanda constante por serviços de qualidade.",
    highlights: [
      "Polo industrial consolidado",
      "Economia estável e forte",
      "População trabalhadora fidelizada",
      "Demanda constante por serviços",
      "Oportunidades em diversos nichos",
      "Proximidade com Curitiba",
      "Mercado receptivo a novidades",
      "Investimento com retorno garantido"
    ],
    nearbyPlaces: ["Itaperuçu", "Almirante Tamandaré", "Bocaiúva do Sul"],
    popularCourses: ["Estética Facial", "Depilação", "Drenagem Linfática", "Design de Sobrancelhas"]
  },
  {
    slug: "rio-negro",
    name: "Rio Negro",
    type: "city",
    description: "Cidade histórica com forte vocação turística e cultural. Rio Negro oferece mercado diferenciado para profissionais de estética, com oportunidades em turismo, eventos históricos e atendimento premium.",
    highlights: [
      "Cidade histórica preservada",
      "Turismo cultural consolidado",
      "Eventos históricos frequentes",
      "Oportunidades em hotelaria",
      "Público nacional e internacional",
      "Demanda por serviços diferenciados",
      "Ambiente cultural rico",
      "Networking turístico"
    ],
    nearbyPlaces: ["Lapa", "Campo do Tenente", "Piên"],
    popularCourses: ["Maquiagem Profissional", "Estética Facial", "Micropigmentação", "Design de Sobrancelhas"]
  },
  {
    slug: "sao-jose-dos-pinhais",
    name: "São José dos Pinhais",
    type: "city",
    description: "Segunda maior economia da região metropolitana, São José dos Pinhais é polo automotivo e logístico. Com população de mais de 320 mil habitantes e renda elevada, oferece mercado sofisticado e aquecido para profissionais de estética. Nossa formação é reconhecida e prepara para este mercado competitivo.",
    highlights: [
      "Segunda maior economia da RMC",
      "População de 320 mil habitantes",
      "Polo automotivo e tecnológico",
      "Alta renda per capita",
      "Mercado sofisticado de beleza",
      "Demanda por serviços premium",
      "Oportunidades em estética avançada",
      "Público exigente e fidelizado"
    ],
    nearbyPlaces: ["Curitiba", "Pinhais", "Fazenda Rio Grande"],
    popularCourses: ["Botox e Preenchimento", "Micropigmentação Premium", "Estética Facial Avançada", "Lash Lifting VIP"]
  },
  {
    slug: "tijucas-do-sul",
    name: "Tijucas do Sul",
    type: "city",
    description: "Município da região metropolitana com vocação agrícola e turística. Tijucas do Sul apresenta mercado emergente para serviços de beleza, com oportunidades para profissionais pioneiros e empreendedores.",
    highlights: [
      "Mercado emergente promissor",
      "Turismo rural em crescimento",
      "Baixíssima concorrência",
      "Oportunidades para pioneiros",
      "População receptiva a serviços",
      "Potencial para diferenciação",
      "Investimento acessível",
      "Suporte ao empreendedorismo"
    ],
    nearbyPlaces: ["Mandirituba", "São José dos Pinhais"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "tunas-do-parana",
    name: "Tunas do Paraná",
    type: "city",
    description: "Município paranaense com características rurais e potencial turístico. Tunas do Paraná oferece oportunidades para profissionais de estética que buscam mercado diferenciado e atendimento personalizado em região com baixa concorrência.",
    highlights: [
      "Mercado rural diferenciado",
      "Turismo ecológico emergente",
      "Zero concorrência qualificada",
      "Oportunidade única de pioneirismo",
      "Público valoriza novidades",
      "Potencial para exclusividade",
      "Ambiente tranquilo",
      "Certificação profissional"
    ],
    nearbyPlaces: ["Bocaiúva do Sul", "Campina Grande do Sul"],
    popularCourses: ["Estética Facial Básica", "Design de Sobrancelhas", "Manicure", "Depilação"]
  },

  // Bairros de Curitiba - Já existentes
  {
    slug: "centro",
    name: "Centro",
    type: "neighborhood",
    description: "Coração pulsante de Curitiba, o Centro é o principal polo comercial e empresarial da cidade. Com fluxo intenso de pessoas diariamente, oferece oportunidades excepcionais para profissionais de estética que buscam clientela diversificada e constante. Nossa escola está estrategicamente localizada com fácil acesso via transporte público e próxima aos principais pontos comerciais.",
    highlights: [
      "Localização central privilegiada",
      "Fácil acesso via transporte público",
      "Próximo a estacionamentos",
      "Fluxo intenso de clientes em potencial",
      "Ambiente comercial consolidado",
      "Networking com empresas do centro",
      "Certificado reconhecido pelo mercado",
      "Suporte pós-curso completo"
    ],
    nearbyPlaces: ["Centro Cívico", "Batel", "Cabral", "Alto da Glória", "São Francisco"],
    popularCourses: ["Micropigmentação", "Design de Sobrancelhas Express", "Lash Lifting", "Estética Facial"]
  },
  {
    slug: "batel",
    name: "Batel",
    type: "neighborhood",
    description: "Bairro mais sofisticado de Curitiba, o Batel é sinônimo de luxo e alto padrão. Com público exigente e disposto a investir em serviços premium, oferece as melhores oportunidades para profissionais de estética especializados. Nossa capacitação prepara para atender esta clientela exclusiva com excelência e técnicas avançadas.",
    highlights: [
      "Bairro mais nobre de Curitiba",
      "Público de altíssimo poder aquisitivo",
      "Demanda por serviços premium",
      "Oportunidades em clínicas de luxo",
      "Networking exclusivo",
      "Faturamento elevado",
      "Técnicas de ponta",
      "Certificação internacional"
    ],
    nearbyPlaces: ["Água Verde", "Rebouças", "Bigorrilho", "Mercês", "Alto da XV"],
    popularCourses: ["Botox e Preenchimento Premium", "Micropigmentação VIP", "Estética Facial Avançada", "Harmonização Facial"]
  },
  {
    slug: "agua-verde",
    name: "Água Verde",
    type: "neighborhood",
    description: "Bairro charmoso e consolidado, o Água Verde combina perfil residencial com forte presença comercial. Próximo a universidades e com excelente infraestrutura, oferece mercado diversificado e constante para profissionais de estética. Público jovem, universitário e familiar garantem demanda variada.",
    highlights: [
      "Bairro consolidado e valorizado",
      "Próximo a universidades renomadas",
      "Público diversificado e fiel",
      "Mistura de residencial e comercial",
      "Fácil estacionamento",
      "Ambiente climatizado e moderno",
      "Professores especializados",
      "Horários flexíveis"
    ],
    nearbyPlaces: ["Batel", "Rebouças", "Centro", "Portão", "Guabirotuba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Lash Lifting", "Depilação a Laser"]
  },

  // Novos bairros de Curitiba
  {
    slug: "vila-parolin",
    name: "Vila Parolin",
    type: "neighborhood",
    description: "Região tradicional de Curitiba próxima ao Parolin, a Vila Parolin é um bairro residencial com forte comércio local. Com população fidelizada e crescente demanda por serviços de beleza de qualidade, oferece excelentes oportunidades para profissionais que buscam clientela estável e mercado em crescimento.",
    highlights: [
      "Bairro tradicional consolidado",
      "Comércio local forte",
      "População fidelizada",
      "Demanda crescente por beleza",
      "Baixa concorrência qualificada",
      "Oportunidades em estética básica e avançada",
      "Proximidade com grandes vias",
      "Público de todas as idades"
    ],
    nearbyPlaces: ["Parolin", "Guabirotuba", "Portão", "Água Verde"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure e Pedicure"]
  },
  {
    slug: "vila-torres",
    name: "Vila Torres",
    type: "neighborhood",
    description: "Bairro residencial de Curitiba com perfil familiar e comércio de vizinhança ativo. A Vila Torres apresenta mercado promissor para profissionais de estética que buscam atender comunidade local com serviços personalizados e de qualidade. Ótima opção para quem deseja empreender próximo de casa.",
    highlights: [
      "Bairro familiar acolhedor",
      "Comércio de vizinhança ativo",
      "Comunidade engajada",
      "Oportunidades em salões locais",
      "Baixo investimento inicial",
      "Clientela de bairro fidelizada",
      "Demanda por serviços acessíveis",
      "Ambiente tranquilo para trabalhar"
    ],
    nearbyPlaces: ["Parolin", "Guabirotuba", "Lindoia", "Novo Mundo"],
    popularCourses: ["Manicure e Pedicure", "Design de Sobrancelhas", "Depilação", "Estética Facial Básica"]
  },
  {
    slug: "jardim-schaffer",
    name: "Jardim Schaffer",
    type: "neighborhood",
    description: "Bairro residencial tranquilo de Curitiba, o Jardim Schaffer oferece mercado estável para profissionais de estética. Com população de classe média e demanda constante por serviços de beleza, é ideal para quem busca construir clientela fiel e duradoura.",
    highlights: [
      "Bairro residencial tranquilo",
      "População de classe média",
      "Demanda constante por beleza",
      "Baixa rotatividade de clientes",
      "Oportunidades para fidelização",
      "Comércio local consolidado",
      "Proximidade com grandes vias",
      "Ambiente familiar"
    ],
    nearbyPlaces: ["Capão Raso", "Xaxim", "Santa Quitéria"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Drenagem Linfática"]
  },
  {
    slug: "vila-sabara",
    name: "Vila Sabará",
    type: "neighborhood",
    description: "Região de Curitiba com características residenciais e comerciais, a Vila Sabará apresenta mercado em crescimento para serviços de estética. Com população jovem e moderna, oferece oportunidades para profissionais atualizados com as últimas tendências.",
    highlights: [
      "Bairro em desenvolvimento",
      "População jovem e moderna",
      "Demanda por tendências atuais",
      "Mercado receptivo a inovações",
      "Oportunidades para empreendedores",
      "Baixa concorrência especializada",
      "Proximidade com bairros nobres",
      "Público antenado"
    ],
    nearbyPlaces: ["Bacacheri", "Boa Vista", "Barreirinha"],
    popularCourses: ["Micropigmentação", "Lash Lifting", "Design de Sobrancelhas", "Estética Facial Moderna"]
  },
  {
    slug: "boqueirao-de-baixo",
    name: "Boqueirão de Baixo",
    type: "neighborhood",
    description: "Região sul do Boqueirão, uma das áreas mais populosas de Curitiba. O Boqueirão de Baixo oferece mercado amplo e diversificado, com alta demanda por serviços de estética acessíveis e de qualidade. Excelente para profissionais que buscam volume de atendimentos.",
    highlights: [
      "Região altamente populosa",
      "Demanda intensa por serviços",
      "Mercado diversificado",
      "Oportunidades em diversos nichos",
      "Comércio forte e consolidado",
      "Público de todas as classes",
      "Alto volume de atendimentos",
      "Fácil acesso e estacionamento"
    ],
    nearbyPlaces: ["Boqueirão", "Xaxim", "Alto Boqueirão", "Hauer"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure Express"]
  },
  {
    slug: "boqueirao-de-cima",
    name: "Boqueirão de Cima",
    type: "neighborhood",
    description: "Parte alta do Boqueirão com melhor infraestrutura e população de maior renda. Oferece mercado consolidado para profissionais de estética, com clientela disposta a investir em serviços de qualidade superior e técnicas modernas.",
    highlights: [
      "Região consolidada do Boqueirão",
      "População de renda mais alta",
      "Demanda por qualidade superior",
      "Proximidade com shoppings",
      "Oportunidades em clínicas modernas",
      "Público exigente e fiel",
      "Mercado de estética avançada",
      "Networking profissional"
    ],
    nearbyPlaces: ["Alto Boqueirão", "Xaxim", "Capão Raso"],
    popularCourses: ["Micropigmentação", "Estética Facial Avançada", "Lash Lifting", "Drenagem Linfática"]
  },
  {
    slug: "tangua",
    name: "Tanguá",
    type: "neighborhood",
    description: "Bairro residencial tranquilo próximo ao Parque Tanguá, um dos cartões postais de Curitiba. O Tanguá oferece mercado diferenciado com público que valoriza qualidade de vida, bem-estar e serviços personalizados de beleza.",
    highlights: [
      "Próximo ao Parque Tanguá",
      "Bairro tranquilo e arborizado",
      "Público valoriza bem-estar",
      "Demanda por serviços naturais",
      "Oportunidades em estética holística",
      "Clientela de alto padrão",
      "Ambiente inspirador",
      "Networking com profissionais de saúde"
    ],
    nearbyPlaces: ["Pilarzinho", "Barreirinha", "Taboão", "Tingui"],
    popularCourses: ["Drenagem Linfática", "Massagem Relaxante", "Estética Facial Natural", "Aromaterapia"]
  },
  {
    slug: "vila-zumbi",
    name: "Vila Zumbi",
    type: "neighborhood",
    description: "Bairro residencial de Curitiba com perfil popular e comércio ativo. A Vila Zumbi apresenta mercado promissor para profissionais de estética que buscam atender grande volume com serviços acessíveis e eficientes.",
    highlights: [
      "Bairro popular consolidado",
      "Comércio local muito ativo",
      "Alta demanda por serviços",
      "Mercado de grande volume",
      "Oportunidades para iniciantes",
      "Investimento acessível",
      "Clientela constante",
      "Retorno rápido do investimento"
    ],
    nearbyPlaces: ["Tatuquara", "Sítio Cercado", "Ganchinho"],
    popularCourses: ["Manicure e Pedicure", "Design de Sobrancelhas", "Depilação", "Estética Facial Básica"]
  },
  {
    slug: "abranches-de-baixo",
    name: "Abranches de Baixo",
    type: "neighborhood",
    description: "Região do bairro Abranches próxima ao Carmo e Tingui. Oferece mercado em desenvolvimento com oportunidades para profissionais que buscam atender comunidade local com serviços de qualidade e preços competitivos.",
    highlights: [
      "Bairro em desenvolvimento",
      "Mercado emergente",
      "Baixa concorrência qualificada",
      "População trabalhadora",
      "Demanda crescente",
      "Oportunidades para pioneiros",
      "Proximidade com grandes vias",
      "Público fidelizado"
    ],
    nearbyPlaces: ["Tingui", "Tarumã", "Taboão", "Carmo"],
    popularCourses: ["Design de Sobrancelhas", "Depilação", "Estética Facial", "Manicure"]
  },
  {
    slug: "abranches-de-cima",
    name: "Abranches de Cima",
    type: "neighborhood",
    description: "Parte alta do Abranches com melhor infraestrutura e proximidade com o Parque Tingui. Oferece mercado diferenciado para profissionais de estética, com público que valoriza qualidade e proximidade.",
    highlights: [
      "Região consolidada do Abranches",
      "Próximo ao Parque Tingui",
      "População de classe média",
      "Demanda por qualidade",
      "Oportunidades em salões modernos",
      "Público valoriza profissionalismo",
      "Mercado estável",
      "Ambiente familiar"
    ],
    nearbyPlaces: ["Santa Felicidade", "Tingui", "Tarumã"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Lash Lifting", "Depilação a Laser"]
  },

  // Mais bairros de Curitiba
  {
    slug: "vila-nossa-senhora-da-luz",
    name: "Vila Nossa Senhora da Luz",
    type: "neighborhood",
    description: "Bairro histórico e tradicional de Curitiba, a Vila Nossa Senhora da Luz oferece mercado consolidado para profissionais de estética. Com população fiel e comércio forte, apresenta ótimas oportunidades para quem busca estabilidade e clientela constante.",
    highlights: ["Bairro histórico tradicional", "Comércio consolidado", "População fidelizada", "Demanda constante", "Oportunidades em salões estabelecidos", "Público de todas as idades", "Mercado estável", "Fácil acesso"],
    nearbyPlaces: ["CIC", "Portão", "Cidade Industrial"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure e Pedicure", "Depilação"]
  },
  {
    slug: "vila-tecnologica",
    name: "Vila Tecnológica",
    type: "neighborhood",
    description: "Região moderna próxima à Cidade Industrial, a Vila Tecnológica apresenta mercado emergente com população jovem e trabalhadora. Oferece oportunidades para profissionais que buscam atender demanda crescente com serviços práticos e eficientes.",
    highlights: ["Região moderna emergente", "População jovem trabalhadora", "Mercado em crescimento", "Demanda por praticidade", "Baixa concorrência", "Oportunidades para empreendedores", "Proximidade com indústrias", "Público com poder de compra"],
    nearbyPlaces: ["CIC", "Augusta", "Riviera"],
    popularCourses: ["Design de Sobrancelhas Express", "Estética Facial Rápida", "Manicure", "Depilação"]
  },
  {
    slug: "vila-oficinas",
    name: "Vila Oficinas",
    type: "neighborhood",
    description: "Bairro próximo ao Centro com perfil comercial e residencial. A Vila Oficinas oferece mercado diversificado para profissionais de estética, com fluxo constante e oportunidades em diversos segmentos.",
    highlights: ["Próximo ao Centro", "Bairro comercial ativo", "Fluxo constante de pessoas", "Mercado diversificado", "Oportunidades variadas", "Fácil acesso transporte público", "Público trabalhador", "Demanda constante"],
    nearbyPlaces: ["Centro", "Guabirotuba", "Rebouças"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure Express", "Depilação"]
  },
  {
    slug: "vila-fanny",
    name: "Vila Fanny",
    type: "neighborhood",
    description: "Região próxima ao bairro Fanny, oferece mercado residencial com demanda crescente por serviços de beleza. Ideal para profissionais que buscam atender comunidade local com qualidade e proximidade.",
    highlights: ["Bairro residencial tranquilo", "Demanda crescente", "População de classe média", "Oportunidades em salões de bairro", "Clientela fidelizada", "Mercado estável", "Ambiente familiar", "Proximidade com grandes vias"],
    nearbyPlaces: ["Fanny", "Guabirotuba", "Portão"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Drenagem Linfática"]
  },
  {
    slug: "vila-hauer",
    name: "Vila Hauer",
    type: "neighborhood",
    description: "Região próxima ao bairro Hauer, apresenta mercado em desenvolvimento com população trabalhadora. Oferece oportunidades para profissionais que buscam preços competitivos e volume de atendimentos.",
    highlights: ["Mercado em desenvolvimento", "População trabalhadora", "Demanda por serviços acessíveis", "Alto volume potencial", "Baixa concorrência qualificada", "Oportunidades para iniciantes", "Investimento acessível", "Retorno rápido"],
    nearbyPlaces: ["Hauer", "Cajuru", "Guabirotuba"],
    popularCourses: ["Manicure e Pedicure", "Design de Sobrancelhas", "Depilação", "Estética Básica"]
  },
  {
    slug: "batel-soho",
    name: "Batel Soho",
    type: "neighborhood",
    description: "Região mais exclusiva do Batel, conhecida como Soho do Batel. Oferece o mercado mais sofisticado de Curitiba, com público de altíssimo padrão que busca serviços premium e exclusivos de estética avançada.",
    highlights: ["Região mais luxuosa de Curitiba", "Público ultra premium", "Demanda por exclusividade", "Faturamento máximo", "Oportunidades em clínicas de luxo", "Networking de elite", "Técnicas mais avançadas", "Certificação internacional"],
    nearbyPlaces: ["Batel", "Boa Vista", "Água Verde"],
    popularCourses: ["Harmonização Facial", "Botox Premium", "Micropigmentação VIP", "Estética Facial de Luxo"]
  },
  {
    slug: "alto-da-rua-xv",
    name: "Alto da Rua XV",
    type: "neighborhood",
    description: "Coração boêmio e cultural de Curitiba, o Alto da Rua XV oferece mercado criativo e diferenciado. Com público jovem, artístico e antenado, apresenta oportunidades para profissionais com abordagem moderna e inovadora.",
    highlights: ["Centro cultural de Curitiba", "Público jovem e criativo", "Demanda por tendências", "Mercado diferenciado", "Oportunidades em estética artística", "Networking cultural", "Ambiente inspirador", "Valorização da inovação"],
    nearbyPlaces: ["Alto da XV", "Batel", "Centro"],
    popularCourses: ["Micropigmentação Artística", "Design de Sobrancelhas Moderno", "Colorimetria Capilar", "Estética Alternativa"]
  },
  {
    slug: "cic-norte",
    name: "CIC Norte",
    type: "neighborhood",
    description: "Região norte da Cidade Industrial de Curitiba, apresenta mercado em crescimento com população trabalhadora. Oferece oportunidades para profissionais que buscam atender grande demanda com serviços práticos.",
    highlights: ["Região industrial ativa", "População trabalhadora grande", "Demanda intensa", "Mercado de grande volume", "Oportunidades para iniciantes", "Investimento acessível", "Proximidade com empresas", "Retorno garantido"],
    nearbyPlaces: ["CIC", "Augusta", "Sítio Cercado"],
    popularCourses: ["Manicure Express", "Design de Sobrancelhas", "Depilação", "Estética Facial Básica"]
  },
  {
    slug: "cic-central",
    name: "CIC Central",
    type: "neighborhood",
    description: "Centro da Cidade Industrial de Curitiba, concentra comércio e serviços. Oferece mercado consolidado com alto fluxo e demanda constante por serviços de beleza acessíveis e eficientes.",
    highlights: ["Centro comercial da CIC", "Alto fluxo diário", "Comércio consolidado", "Demanda constante", "Oportunidades variadas", "Mercado estável", "Público trabalhador", "Volume de atendimentos alto"],
    nearbyPlaces: ["CIC Norte", "CIC Sul", "Sítio Cercado"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "cic-sul",
    name: "CIC Sul",
    type: "neighborhood",
    description: "Região sul da Cidade Industrial, apresenta mercado em expansão com novos empreendimentos. Oferece oportunidades para profissionais que buscam crescer junto com o desenvolvimento da região.",
    highlights: ["Região em expansão", "Novos empreendimentos", "Mercado emergente", "Baixa concorrência", "Oportunidades para pioneiros", "Crescimento acelerado", "Investimento com futuro", "Público em formação"],
    nearbyPlaces: ["CIC Central", "Tatuquara", "Ganchinho"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "vila-guaira",
    name: "Vila Guaíra",
    type: "neighborhood",
    description: "Região próxima ao Guaíra, oferece mercado residencial com demanda estável. Ideal para profissionais que buscam atender comunidade local com serviços de qualidade e fidelização de clientes.",
    highlights: ["Bairro residencial consolidado", "Demanda estável", "População de classe média", "Oportunidades em salões locais", "Clientela fidelizada", "Mercado previsível", "Ambiente tranquilo", "Proximidade com centros comerciais"],
    nearbyPlaces: ["Guaíra", "Ahú", "Alto da Glória"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Depilação", "Drenagem Linfática"]
  },
  {
    slug: "centro-historico",
    name: "Centro Histórico",
    type: "neighborhood",
    description: "Coração histórico de Curitiba com construções preservadas e turismo cultural. Oferece mercado diferenciado para profissionais de estética, com oportunidades em hotéis, eventos culturais e atendimento a turistas.",
    highlights: ["Centro histórico preservado", "Turismo cultural intenso", "Eventos frequentes", "Oportunidades em hotelaria", "Público nacional e internacional", "Networking cultural", "Mercado diferenciado", "Valorização profissional"],
    nearbyPlaces: ["Centro", "São Francisco", "Largo da Ordem"],
    popularCourses: ["Maquiagem Profissional", "Design de Sobrancelhas", "Estética Facial", "Micropigmentação"]
  },
  {
    slug: "ecoville",
    name: "Ecoville",
    type: "neighborhood",
    description: "Bairro planejado e moderno de Curitiba, o Ecoville é referência em qualidade de vida. Com população de alto padrão e consciência ambiental, oferece mercado sofisticado para profissionais de estética holística e sustentável.",
    highlights: ["Bairro planejado moderno", "População de alto padrão", "Consciência ambiental", "Demanda por estética sustentável", "Oportunidades premium", "Público exigente e informado", "Networking profissional", "Valorização da qualidade"],
    nearbyPlaces: ["Tingui", "Santa Felicidade", "Mossunguê"],
    popularCourses: ["Estética Facial Natural", "Drenagem Linfática", "Aromaterapia", "Massagem Holística"]
  },
  {
    slug: "carmo-abranches",
    name: "Carmo Abranches",
    type: "neighborhood",
    description: "Região entre o Carmo e Abranches, oferece mercado em crescimento com população mista. Apresenta oportunidades para profissionais que buscam diversidade de clientes e serviços variados.",
    highlights: ["Região em crescimento", "População diversificada", "Mercado variado", "Oportunidades múltiplas", "Baixa concorrência especializada", "Proximidade com grandes vias", "Público receptivo", "Potencial de expansão"],
    nearbyPlaces: ["Tingui", "Tarumã", "Santa Felicidade"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },

  // Bairros já existentes do sistema anterior
  {
    slug: "cabral",
    name: "Cabral",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Centro, o Cabral combina história com modernidade. Oferece mercado consolidado para profissionais de estética, com público diversificado e demanda constante por serviços de qualidade.",
    highlights: ["Tradição e história", "Próximo ao Centro", "Fácil acesso transporte", "Ambiente acolhedor", "Alta empregabilidade", "Metodologia prática", "Parcerias com salões", "Público fiel"],
    nearbyPlaces: ["Centro", "São Francisco", "Juvevê", "Alto da Glória"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Depilação", "Micropigmentação"]
  },
  {
    slug: "reboucas",
    name: "Rebouças",
    type: "neighborhood",
    description: "Localização estratégica entre Batel e Centro, o Rebouças é corredor comercial importante. Oferece alto fluxo e demanda constante para profissionais de estética, com público diversificado e poder aquisitivo variado.",
    highlights: ["Localização estratégica", "Alto fluxo diário", "Facilidade de acesso", "Cursos reconhecidos", "Turmas frequentes", "Material completo", "Prática desde o início", "Certificado nacional"],
    nearbyPlaces: ["Batel", "Água Verde", "Bigorrilho", "Mercês"],
    popularCourses: ["Micropigmentação", "Lash Lifting", "Design de Sobrancelhas", "Estética Facial"]
  },
  {
    slug: "bigorrilho",
    name: "Bigorrilho",
    type: "neighborhood",
    description: "Bairro jovem e dinâmico, o Bigorrilho é referência em modernidade em Curitiba. Com público universitário e profissionais jovens, oferece mercado vibrante para técnicas modernas e tendências de estética.",
    highlights: ["Bairro jovem e moderno", "Público universitário", "Ambiente descontraído", "Foco em tendências", "Networking ativo", "Aulas práticas intensivas", "Mentoria individual", "Comunidade de ex-alunos"],
    nearbyPlaces: ["Batel", "Rebouças", "Mercês", "Champagnat"],
    popularCourses: ["Micropigmentação Moderna", "Lash Lifting", "Design de Sobrancelhas Trend", "Harmonização"]
  },
  {
    slug: "merces",
    name: "Mercês",
    type: "neighborhood",
    description: "Bairro tradicional e tranquilo, as Mercês oferecem mercado consolidado. Próximo a hospitais e clínicas, apresenta oportunidades para profissionais de estética que buscam parcerias com área de saúde.",
    highlights: ["Bairro tranquilo", "Próximo a hospitais", "Público fidelizado", "Ambiente concentrado", "Professores especializados", "Equilíbrio teoria/prática", "Suporte completo", "Oportunidades na saúde"],
    nearbyPlaces: ["Batel", "Cabral", "Bigorrilho", "Cristo Rei"],
    popularCourses: ["Estética Facial Clínica", "Drenagem Linfática", "Micropigmentação", "Pós-operatório"]
  },
  {
    slug: "cristo-rei",
    name: "Cristo Rei",
    type: "neighborhood",
    description: "Bairro familiar e acolhedor, o Cristo Rei oferece mercado estável com comunidade engajada. Ideal para profissionais que buscam construir relacionamento duradouro com clientes e atender próximo de casa.",
    highlights: ["Bairro familiar", "Comunidade engajada", "Estrutura moderna", "Professores dedicados", "Turmas reduzidas", "Atenção personalizada", "Certificação reconhecida", "Acompanhamento pós-curso"],
    nearbyPlaces: ["Mercês", "Jardim Social", "Guabirotuba", "Portão"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "portao",
    name: "Portão",
    type: "neighborhood",
    description: "Um dos bairros mais populosos de Curitiba, o Portão oferece mercado amplo e diversificado. Com shoppings e comércio forte, apresenta oportunidades abundantes para profissionais de estética de todos os níveis.",
    highlights: ["Região comercial forte", "Próximo a shoppings", "Fácil acesso", "Preços competitivos", "Qualidade garantida", "Horários variados", "Material incluso", "Alta empregabilidade"],
    nearbyPlaces: ["Água Verde", "Guabirotuba", "Parolin", "Cristo Rei"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Micropigmentação"]
  },
  {
    slug: "santa-felicidade",
    name: "Santa Felicidade",
    type: "neighborhood",
    description: "Bairro charmoso e tradicional, Santa Felicidade é conhecido pela gastronomia italiana e turismo. Oferece mercado sofisticado para profissionais de estética, com oportunidades em spas, clínicas e atendimento VIP.",
    highlights: ["Bairro tradicional charmoso", "Clientela sofisticada", "Oportunidades em spas", "Foco em atendimento premium", "Estrutura completa", "Professores renomados", "Networking empresarial", "Mercado de luxo"],
    nearbyPlaces: ["Cascatinha", "Vista Alegre", "Orleans", "São Braz"],
    popularCourses: ["Estética Facial Premium", "Micropigmentação VIP", "Drenagem Linfática", "Massagem Relaxante"]
  },
  {
    slug: "cajuru",
    name: "Cajuru",
    type: "neighborhood",
    description: "Bairro que mais cresce em Curitiba, o Cajuru oferece mercado emergente com oportunidades abundantes. População jovem e crescimento acelerado garantem demanda crescente por profissionais de estética qualificados.",
    highlights: ["Crescimento acelerado", "Mercado aquecido", "Demanda crescente", "Alinhado ao mercado local", "Parcerias locais", "Emprego rápido", "Retorno do investimento", "Suporte para negócios"],
    nearbyPlaces: ["Uberaba", "Capão Raso", "Jardim das Américas", "Tarumã"],
    popularCourses: ["Micropigmentação", "Design de Sobrancelhas", "Estética Facial", "Lash Lifting"]
  },
  {
    slug: "boa-vista",
    name: "Boa Vista",
    type: "neighborhood",
    description: "Bairro nobre próximo ao Batel, a Boa Vista oferece mercado de alto padrão. Com Shopping Crystal e público sofisticado, apresenta oportunidades premium para profissionais de estética avançada.",
    highlights: ["Bairro nobre valorizado", "Próximo Shopping Crystal", "Alto poder aquisitivo", "Cursos premium", "Networking exclusivo", "Ambiente sofisticado", "Produtos importados", "Certificação internacional"],
    nearbyPlaces: ["Batel", "Água Verde", "Alto da Glória", "Cabral"],
    popularCourses: ["Botox e Preenchimento", "Harmonização Facial", "Micropigmentação Premium", "Estética Avançada"]
  },
  {
    slug: "alto-da-xv",
    name: "Alto da XV",
    type: "neighborhood",
    description: "Centro boêmio e cultural de Curitiba, o Alto da XV oferece mercado criativo e diferenciado. Com galerias, bares e público artístico, apresenta oportunidades para profissionais com visão inovadora.",
    highlights: ["Centro boêmio cultural", "Ambiente criativo", "Público antenado", "Abordagem artística", "Foco em inovação", "Networking cultural", "Proximidade com arte", "Desenvolvimento criativo"],
    nearbyPlaces: ["Batel", "Boa Vista", "Cabral", "São Francisco"],
    popularCourses: ["Micropigmentação Artística", "Design Criativo", "Colorimetria", "Estética Alternativa"]
  },

  // Todos os bairros restantes de Curitiba
  {
    slug: "ahu",
    name: "Ahú",
    type: "neighborhood",
    description: "Bairro nobre e tradicional de Curitiba, o Ahú combina charme histórico com modernidade. Próximo ao Alto da Glória e com infraestrutura completa, oferece mercado sofisticado para profissionais de estética que buscam clientela de alto padrão.",
    highlights: ["Bairro nobre tradicional", "Arquitetura histórica preservada", "População de alto padrão", "Demanda por serviços premium", "Proximidade com centro cultural", "Oportunidades em clínicas de luxo", "Público exigente e fiel", "Networking exclusivo"],
    nearbyPlaces: ["Alto da Glória", "Juvevê", "Guaíra", "Centro"],
    popularCourses: ["Estética Facial Premium", "Micropigmentação VIP", "Harmonização Facial", "Drenagem Linfática"]
  },
  {
    slug: "alto-boqueirao",
    name: "Alto Boqueirão",
    type: "neighborhood",
    description: "Uma das regiões mais populosas de Curitiba, o Alto Boqueirão oferece mercado amplo e diversificado. Com crescimento acelerado e infraestrutura moderna, apresenta oportunidades abundantes para profissionais de estética de todos os níveis.",
    highlights: ["Região altamente populosa", "Crescimento acelerado", "Mercado diversificado e amplo", "Shopping Mueller próximo", "Demanda intensa por serviços", "Oportunidades para todos os níveis", "Comércio forte consolidado", "Alto volume de atendimentos"],
    nearbyPlaces: ["Boqueirão", "Xaxim", "Capão Raso", "Hauer"],
    popularCourses: ["Design de Sobrancelhas", "Micropigmentação", "Estética Facial", "Lash Lifting"]
  },
  {
    slug: "alto-da-gloria",
    name: "Alto da Glória",
    type: "neighborhood",
    description: "Bairro histórico e charmoso, o Alto da Glória é um dos mais tradicionais de Curitiba. Com casarões preservados e público sofisticado, oferece mercado premium para profissionais de estética que valorizam qualidade e exclusividade.",
    highlights: ["Bairro histórico preservado", "Casarões e arquitetura única", "População de alto padrão", "Mercado sofisticado", "Proximidade com pontos turísticos", "Demanda por serviços exclusivos", "Ambiente cultural rico", "Networking de qualidade"],
    nearbyPlaces: ["Centro", "Cabral", "Batel", "Ahú"],
    popularCourses: ["Estética Facial de Luxo", "Micropigmentação Premium", "Harmonização", "Massagem Relaxante"]
  },
  {
    slug: "atuba",
    name: "Atuba",
    type: "neighborhood",
    description: "Bairro em desenvolvimento na região norte de Curitiba, o Atuba apresenta mercado emergente com oportunidades para pioneiros. Com crescimento populacional e novos empreendimentos, oferece excelente potencial de retorno.",
    highlights: ["Região em desenvolvimento", "Mercado emergente promissor", "Baixa concorrência qualificada", "Crescimento populacional", "Novos empreendimentos", "Oportunidades para pioneiros", "Investimento acessível", "Alto potencial de retorno"],
    nearbyPlaces: ["Bacacheri", "Santa Cândida", "Bairro Alto"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "augusta",
    name: "Augusta",
    type: "neighborhood",
    description: "Região próxima à Cidade Industrial, Augusta oferece mercado consolidado com população trabalhadora. Ideal para profissionais que buscam atender grande volume com eficiência e qualidade.",
    highlights: ["Próximo à CIC", "População trabalhadora grande", "Mercado consolidado", "Demanda constante", "Alto volume de atendimentos", "Horários flexíveis importantes", "Investimento acessível", "Retorno garantido"],
    nearbyPlaces: ["CIC", "Riviera", "Vila Tecnológica"],
    popularCourses: ["Manicure Express", "Design de Sobrancelhas", "Depilação", "Estética Facial Básica"]
  },
  {
    slug: "bacacheri",
    name: "Bacacheri",
    type: "neighborhood",
    description: "Bairro tradicional da região norte com perfil residencial consolidado. O Bacacheri oferece mercado estável para profissionais de estética, com comunidade fiel e demanda constante por serviços de qualidade.",
    highlights: ["Bairro tradicional consolidado", "Perfil residencial forte", "Comunidade fidelizada", "Demanda estável constante", "Comércio local ativo", "Oportunidades em salões estabelecidos", "Público de todas as idades", "Ambiente familiar"],
    nearbyPlaces: ["Boa Vista", "Santa Cândida", "Barreirinha"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Depilação", "Drenagem Linfática"]
  },
  {
    slug: "bairro-alto",
    name: "Bairro Alto",
    type: "neighborhood",
    description: "Região norte de Curitiba em crescimento, o Bairro Alto apresenta mercado emergente com população jovem. Oferece oportunidades para profissionais que buscam crescer junto com o desenvolvimento da região.",
    highlights: ["Região em crescimento", "População jovem moderna", "Mercado emergente", "Baixa concorrência", "Novos empreendimentos", "Oportunidades para pioneiros", "Investimento com futuro", "Demanda crescente"],
    nearbyPlaces: ["Santa Cândida", "Atuba", "Tingui"],
    popularCourses: ["Design de Sobrancelhas", "Lash Lifting", "Estética Facial", "Micropigmentação"]
  },
  {
    slug: "barreirinha",
    name: "Barreirinha",
    type: "neighborhood",
    description: "Bairro charmoso com perfil residencial, a Barreirinha oferece mercado consolidado próximo ao Parque Tingui. Com população de classe média alta e valorização da qualidade de vida, apresenta ótimas oportunidades.",
    highlights: ["Próximo ao Parque Tingui", "Bairro residencial charmoso", "População classe média alta", "Valorização de bem-estar", "Demanda por qualidade", "Ambiente tranquilo", "Mercado estável", "Público fidelizado"],
    nearbyPlaces: ["Bacacheri", "Tingui", "Tanguá"],
    popularCourses: ["Estética Facial Natural", "Drenagem Linfática", "Massagem Relaxante", "Design de Sobrancelhas"]
  },
  {
    slug: "bom-retiro",
    name: "Bom Retiro",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Centro, o Bom Retiro combina residencial e comercial. Oferece mercado diversificado para profissionais de estética, com público variado e demanda constante.",
    highlights: ["Próximo ao Centro", "Bairro tradicional", "Perfil misto residencial/comercial", "Público diversificado", "Demanda constante", "Fácil acesso transporte", "Oportunidades variadas", "Mercado estável"],
    nearbyPlaces: ["Centro", "Cabral", "São Francisco"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "boqueirao",
    name: "Boqueirão",
    type: "neighborhood",
    description: "Um dos maiores e mais populosos bairros de Curitiba, o Boqueirão oferece mercado gigante e diversificado. Com shopping centers, comércio forte e população de todas as classes, apresenta oportunidades ilimitadas.",
    highlights: ["Maior bairro de Curitiba", "População massiva", "Shopping Palladium", "Comércio muito forte", "Demanda gigantesca", "Mercado para todos os nichos", "Alto volume garantido", "Oportunidades ilimitadas"],
    nearbyPlaces: ["Alto Boqueirão", "Xaxim", "Portão", "Hauer"],
    popularCourses: ["Design de Sobrancelhas", "Micropigmentação", "Estética Facial", "Depilação a Laser"]
  },
  {
    slug: "butiatuvinha",
    name: "Butiatuvinha",
    type: "neighborhood",
    description: "Bairro afastado do centro com características rurais e urbanas. Butiatuvinha apresenta mercado em desenvolvimento, ideal para profissionais que buscam mercado com baixa concorrência e comunidade fiel.",
    highlights: ["Bairro com perfil único", "Mercado em desenvolvimento", "Baixíssima concorrência", "Comunidade muito unida", "Oportunidades para pioneiros", "Investimento baixo", "Clientela fidelizada", "Ambiente tranquilo"],
    nearbyPlaces: ["Santa Felicidade", "Orleans", "Campo Comprido"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "cachoeira",
    name: "Cachoeira",
    type: "neighborhood",
    description: "Bairro próximo ao Batel e Mercês, a Cachoeira oferece mercado sofisticado em região valorizada. Com público de alto padrão e infraestrutura completa, apresenta oportunidades premium para profissionais especializados.",
    highlights: ["Região valorizada", "Próximo a bairros nobres", "População de alto padrão", "Demanda por serviços premium", "Oportunidades em clínicas modernas", "Público exigente", "Mercado sofisticado", "Networking de qualidade"],
    nearbyPlaces: ["Batel", "Mercês", "Cristo Rei"],
    popularCourses: ["Estética Facial Avançada", "Micropigmentação Premium", "Harmonização", "Botox"]
  },
  {
    slug: "campina-do-siqueira",
    name: "Campina do Siqueira",
    type: "neighborhood",
    description: "Bairro residencial tradicional próximo à região central, a Campina do Siqueira oferece mercado consolidado com população fiel. Ideal para profissionais que buscam estabilidade e clientela de longo prazo.",
    highlights: ["Bairro residencial tradicional", "População fidelizada", "Mercado consolidado", "Demanda estável", "Comércio local forte", "Ambiente familiar", "Oportunidades em salões estabelecidos", "Público de todas as idades"],
    nearbyPlaces: ["Juvevê", "Ahú", "Bigorrilho"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Depilação", "Manicure e Pedicure"]
  },
  {
    slug: "campo-comprido",
    name: "Campo Comprido",
    type: "neighborhood",
    description: "Bairro extenso na região oeste de Curitiba, Campo Comprido apresenta mercado amplo com população diversificada. Oferece oportunidades para profissionais de todos os níveis com alto potencial de volume.",
    highlights: ["Bairro extenso populoso", "Mercado amplo diversificado", "População de todas as classes", "Demanda variada", "Alto volume potencial", "Oportunidades para iniciantes", "Comércio em crescimento", "Investimento acessível"],
    nearbyPlaces: ["Orleans", "Santa Felicidade", "Butiatuvinha"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "campo-de-santana",
    name: "Campo de Santana",
    type: "neighborhood",
    description: "Bairro tradicional da zona leste, Campo de Santana oferece mercado consolidado com perfil familiar. Apresenta oportunidades para profissionais que valorizam comunidade local e atendimento personalizado.",
    highlights: ["Bairro tradicional familiar", "Comunidade muito unida", "Mercado consolidado", "Demanda estável", "Público fidelizado", "Ambiente acolhedor", "Oportunidades locais", "Investimento com segurança"],
    nearbyPlaces: ["Uberaba", "Capão Raso", "Jardim das Américas"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Drenagem Linfática"]
  },
  {
    slug: "capao-da-imbuia",
    name: "Capão da Imbuia",
    type: "neighborhood",
    description: "Bairro extenso da zona leste com mercado em crescimento. O Capão da Imbuia oferece oportunidades para profissionais que buscam atender população trabalhadora com serviços de qualidade e preços justos.",
    highlights: ["Bairro extenso populoso", "Mercado em crescimento", "População trabalhadora", "Demanda crescente", "Baixa concorrência qualificada", "Oportunidades para iniciantes", "Alto volume potencial", "Retorno rápido"],
    nearbyPlaces: ["Jardim das Américas", "Capão Raso", "Uberaba"],
    popularCourses: ["Manicure e Pedicure", "Design de Sobrancelhas", "Depilação", "Estética Facial"]
  },
  {
    slug: "capao-raso",
    name: "Capão Raso",
    type: "neighborhood",
    description: "Bairro populoso da zona sul com comércio forte. O Capão Raso oferece mercado amplo e diversificado, ideal para profissionais que buscam alto volume de atendimentos e clientela variada.",
    highlights: ["Bairro muito populoso", "Comércio forte consolidado", "Mercado amplo diversificado", "Demanda intensa", "Alto volume garantido", "Oportunidades variadas", "Público de todas as classes", "Mercado estável"],
    nearbyPlaces: ["Xaxim", "Boqueirão", "Cajuru", "Jardim das Américas"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Micropigmentação", "Depilação"]
  },
  {
    slug: "cascatinha",
    name: "Cascatinha",
    type: "neighborhood",
    description: "Bairro charmoso próximo a Santa Felicidade, a Cascatinha oferece mercado diferenciado com público que valoriza qualidade. Ambiente tranquilo e boa infraestrutura garantem ótimas oportunidades.",
    highlights: ["Bairro charmoso tranquilo", "Próximo a Santa Felicidade", "Público valoriza qualidade", "Ambiente diferenciado", "Demanda por serviços premium", "Oportunidades em spas", "Mercado estável", "Networking local"],
    nearbyPlaces: ["Santa Felicidade", "Vista Alegre", "Orleans"],
    popularCourses: ["Estética Facial Premium", "Drenagem Linfática", "Massagem Relaxante", "Micropigmentação"]
  },
  {
    slug: "caximba",
    name: "Caximba",
    type: "neighborhood",
    description: "Bairro residencial na região sul de Curitiba, a Caximba apresenta mercado em desenvolvimento com população trabalhadora. Oferece oportunidades para profissionais que buscam mercado emergente com baixa concorrência.",
    highlights: ["Mercado em desenvolvimento", "População trabalhadora", "Baixa concorrência", "Oportunidades emergentes", "Investimento acessível", "Comunidade em formação", "Potencial de crescimento", "Retorno progressivo"],
    nearbyPlaces: ["Umbará", "Tatuquara", "Ganchinho"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "centro-civico",
    name: "Centro Cívico",
    type: "neighborhood",
    description: "Coração administrativo de Curitiba com prédios governamentais e empresariais. O Centro Cívico oferece mercado corporativo diferenciado, ideal para profissionais especializados em atendimento executivo e express.",
    highlights: ["Centro administrativo oficial", "Público executivo", "Demanda por serviços express", "Alto poder aquisitivo", "Horários comerciais estratégicos", "Oportunidades corporativas", "Networking profissional", "Mercado premium"],
    nearbyPlaces: ["Centro", "Batel", "Cabral", "Alto da Glória"],
    popularCourses: ["Design de Sobrancelhas Express", "Estética Facial Rápida", "Micropigmentação", "Manicure Executiva"]
  },
  {
    slug: "cidade-industrial-de-curitiba",
    name: "Cidade Industrial de Curitiba",
    type: "neighborhood",
    description: "Maior polo industrial de Curitiba, a CIC oferece mercado massivo com população trabalhadora. Com mais de 100 mil trabalhadores diariamente, apresenta oportunidades ilimitadas para profissionais de estética.",
    highlights: ["Maior polo industrial", "100 mil trabalhadores/dia", "Demanda massiva", "Mercado gigantesco", "Alto volume garantido", "Oportunidades para todos", "Horários estratégicos", "Retorno rápido garantido"],
    nearbyPlaces: ["Augusta", "Riviera", "Sítio Cercado"],
    popularCourses: ["Manicure Express", "Design de Sobrancelhas", "Depilação", "Estética Facial Rápida"]
  },
  {
    slug: "fanny",
    name: "Fanny",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Portão, o Fanny oferece mercado consolidado com população de classe média. Comércio forte e comunidade fiel garantem oportunidades estáveis para profissionais de estética.",
    highlights: ["Bairro tradicional consolidado", "Próximo ao Portão", "População classe média", "Comércio forte", "Comunidade fidelizada", "Demanda estável", "Oportunidades em salões locais", "Mercado previsível"],
    nearbyPlaces: ["Portão", "Guabirotuba", "Água Verde"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure e Pedicure"]
  },
  {
    slug: "fazendinha",
    name: "Fazendinha",
    type: "neighborhood",
    description: "Bairro populoso da zona sul, a Fazendinha oferece mercado amplo com demanda crescente. População trabalhadora e comércio em desenvolvimento garantem oportunidades para profissionais de todos os níveis.",
    highlights: ["Bairro populoso", "Mercado em crescimento", "População trabalhadora grande", "Demanda crescente", "Comércio em desenvolvimento", "Oportunidades variadas", "Investimento acessível", "Alto potencial"],
    nearbyPlaces: ["Sítio Cercado", "Ganchinho", "CIC"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "ganchinho",
    name: "Ganchinho",
    type: "neighborhood",
    description: "Bairro da zona sul com perfil residencial e comercial. O Ganchinho apresenta mercado estável com população fiel, ideal para profissionais que buscam construir clientela de longo prazo.",
    highlights: ["Bairro residencial consolidado", "Mercado estável", "População fidelizada", "Comércio local ativo", "Demanda constante", "Oportunidades em salões", "Ambiente familiar", "Investimento seguro"],
    nearbyPlaces: ["Sítio Cercado", "Fazendinha", "Umbará"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Drenagem Linfática"]
  },
  {
    slug: "guabirotuba",
    name: "Guabirotuba",
    type: "neighborhood",
    description: "Bairro tradicional com forte comércio e proximidade ao Portão. O Guabirotuba oferece mercado consolidado e diversificado, com oportunidades para profissionais de todos os segmentos de estética.",
    highlights: ["Bairro tradicional forte", "Comércio muito consolidado", "Próximo ao Portão", "Mercado diversificado", "Demanda constante", "População de todas as classes", "Oportunidades variadas", "Fácil acesso"],
    nearbyPlaces: ["Portão", "Fanny", "Água Verde", "Parolin"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Micropigmentação", "Depilação"]
  },
  {
    slug: "guaira",
    name: "Guaíra",
    type: "neighborhood",
    description: "Bairro nobre próximo ao Centro e Batel, o Guaíra oferece mercado sofisticado com público de alto padrão. Região valorizada com infraestrutura completa garante oportunidades premium.",
    highlights: ["Bairro nobre valorizado", "Próximo ao Batel", "População de alto padrão", "Mercado sofisticado", "Demanda por serviços premium", "Oportunidades em clínicas de luxo", "Público exigente", "Networking exclusivo"],
    nearbyPlaces: ["Batel", "Ahú", "Alto da Glória", "Cabral"],
    popularCourses: ["Estética Facial Premium", "Harmonização Facial", "Micropigmentação VIP", "Botox"]
  },
  {
    slug: "hauer",
    name: "Hauer",
    type: "neighborhood",
    description: "Bairro populoso da zona sul próximo ao Boqueirão. O Hauer oferece mercado amplo com demanda crescente, ideal para profissionais que buscam alto volume de atendimentos.",
    highlights: ["Bairro populoso", "Mercado amplo", "Demanda crescente", "Alto volume potencial", "Comércio em crescimento", "Oportunidades variadas", "Investimento acessível", "Retorno rápido"],
    nearbyPlaces: ["Boqueirão", "Cajuru", "Guabirotuba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure Express"]
  },
  {
    slug: "hugo-lange",
    name: "Hugo Lange",
    type: "neighborhood",
    description: "Bairro nobre próximo ao Jardim Botânico, o Hugo Lange oferece mercado exclusivo com público de altíssimo padrão. Ambiente sofisticado e clientela exigente garantem faturamento premium.",
    highlights: ["Bairro mais nobre", "Próximo ao Jardim Botânico", "Público ultra premium", "Mercado exclusivo", "Demanda por luxo", "Oportunidades VIP", "Faturamento máximo", "Networking de elite"],
    nearbyPlaces: ["Jardim Botânico", "Jardim Social", "Mercês"],
    popularCourses: ["Harmonização Facial", "Estética Facial de Luxo", "Micropigmentação VIP", "Spa Therapy"]
  },
  {
    slug: "jardim-botanico",
    name: "Jardim Botânico",
    type: "neighborhood",
    description: "Região nobre ao redor do cartão-postal de Curitiba. O Jardim Botânico oferece mercado sofisticado com turismo e população de alto padrão, ideal para profissionais especializados em serviços premium.",
    highlights: ["Região nobilíssima", "Cartão-postal de Curitiba", "Turismo intenso", "População de elite", "Demanda por exclusividade", "Oportunidades em spas de luxo", "Público internacional", "Mercado premium"],
    nearbyPlaces: ["Hugo Lange", "Jardim Social", "Capão da Imbuia"],
    popularCourses: ["Estética Facial de Luxo", "Spa Treatments", "Micropigmentação Premium", "Massagem Holística"]
  },
  {
    slug: "jardim-das-americas",
    name: "Jardim das Américas",
    type: "neighborhood",
    description: "Bairro populoso da zona leste com crescimento acelerado. O Jardim das Américas oferece mercado amplo e dinâmico, com população jovem e demanda crescente por serviços modernos.",
    highlights: ["Bairro em crescimento", "População jovem", "Mercado dinâmico", "Demanda crescente", "Comércio em expansão", "Oportunidades modernas", "Alto volume potencial", "Público antenado"],
    nearbyPlaces: ["Cajuru", "Capão Raso", "Uberaba"],
    popularCourses: ["Micropigmentação", "Lash Lifting", "Design de Sobrancelhas", "Estética Facial Moderna"]
  },
  {
    slug: "jardim-social",
    name: "Jardim Social",
    type: "neighborhood",
    description: "Bairro nobre próximo ao Jardim Botânico, o Jardim Social oferece mercado sofisticado com infraestrutura completa. Público de alto padrão e ambiente exclusivo garantem oportunidades premium.",
    highlights: ["Bairro nobre exclusivo", "Próximo ao Jardim Botânico", "População de alto padrão", "Infraestrutura completa", "Demanda por serviços premium", "Oportunidades em clínicas modernas", "Público exigente", "Mercado estável"],
    nearbyPlaces: ["Jardim Botânico", "Hugo Lange", "Cristo Rei"],
    popularCourses: ["Estética Facial Avançada", "Harmonização", "Micropigmentação Premium", "Drenagem Linfática"]
  },
  {
    slug: "juveve",
    name: "Juvevê",
    type: "neighborhood",
    description: "Bairro tradicional e valorizado próximo ao Centro, o Juvevê oferece mercado consolidado com público diversificado. Mistura de residencial e comercial garante demanda constante e variada.",
    highlights: ["Bairro tradicional valorizado", "Próximo ao Centro", "Mercado consolidado", "Público diversificado", "Mistura residencial/comercial", "Demanda constante", "Oportunidades variadas", "Fácil acesso"],
    nearbyPlaces: ["Cabral", "Ahú", "Bigorrilho", "Campina do Siqueira"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Micropigmentação", "Depilação a Laser"]
  },
  {
    slug: "lamenha-pequena",
    name: "Lamenha Pequena",
    type: "neighborhood",
    description: "Bairro residencial tranquilo da zona leste. Lamenha Pequena oferece mercado consolidado com comunidade fiel, ideal para profissionais que valorizam atendimento personalizado.",
    highlights: ["Bairro residencial tranquilo", "Comunidade muito fiel", "Mercado consolidado", "Ambiente familiar", "Demanda estável", "Oportunidades locais", "Público de longo prazo", "Investimento seguro"],
    nearbyPlaces: ["Cajuru", "Uberaba", "Tarumã"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "lindoia",
    name: "Lindóia",
    type: "neighborhood",
    description: "Bairro populoso próximo ao Portão com comércio forte. A Lindóia oferece mercado amplo e diversificado, ideal para profissionais que buscam alto volume de atendimentos.",
    highlights: ["Bairro populoso", "Comércio forte", "Próximo ao Portão", "Mercado amplo", "Demanda intensa", "Alto volume garantido", "Oportunidades variadas", "Público de todas as classes"],
    nearbyPlaces: ["Portão", "Novo Mundo", "Guabirotuba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "mossungue",
    name: "Mossunguê",
    type: "neighborhood",
    description: "Bairro nobre com casarões e ambiente sofisticado. O Mossunguê oferece mercado premium com público exigente, ideal para profissionais especializados em estética de alto padrão.",
    highlights: ["Bairro nobre sofisticado", "Casarões e arquitetura única", "População de elite", "Mercado premium", "Demanda por exclusividade", "Oportunidades VIP", "Ambiente diferenciado", "Networking de qualidade"],
    nearbyPlaces: ["Hugo Lange", "Jardim Botânico", "Bigorrilho"],
    popularCourses: ["Estética Facial de Luxo", "Harmonização Facial", "Micropigmentação Premium", "Spa Therapy"]
  },
  {
    slug: "novo-mundo",
    name: "Novo Mundo",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Portão com perfil familiar. O Novo Mundo oferece mercado consolidado com população fiel, ideal para profissionais que buscam estabilidade.",
    highlights: ["Bairro tradicional familiar", "Próximo ao Portão", "População muito fiel", "Mercado consolidado", "Demanda estável", "Comércio local forte", "Ambiente acolhedor", "Oportunidades duradouras"],
    nearbyPlaces: ["Portão", "Lindóia", "Guabirotuba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure e Pedicure", "Depilação"]
  },
  {
    slug: "orleans",
    name: "Orleans",
    type: "neighborhood",
    description: "Bairro charmoso próximo a Santa Felicidade, Orleans oferece mercado diferenciado com perfil sofisticado. Ambiente tranquilo e público de bom gosto garantem oportunidades de qualidade.",
    highlights: ["Bairro charmoso", "Próximo a Santa Felicidade", "Perfil sofisticado", "Ambiente tranquilo", "Público de bom gosto", "Demanda por qualidade", "Oportunidades diferenciadas", "Mercado estável"],
    nearbyPlaces: ["Santa Felicidade", "Campo Comprido", "Cascatinha"],
    popularCourses: ["Estética Facial Premium", "Micropigmentação", "Drenagem Linfática", "Design de Sobrancelhas"]
  },
  {
    slug: "parolin",
    name: "Parolin",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Portão com forte comércio. O Parolin oferece mercado consolidado e diversificado, com oportunidades para profissionais de todos os níveis.",
    highlights: ["Bairro tradicional forte", "Comércio consolidado", "Próximo ao Portão", "Mercado diversificado", "Demanda constante", "Oportunidades variadas", "Fácil acesso", "Público fiel"],
    nearbyPlaces: ["Portão", "Guabirotuba", "Água Verde"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "pilarzinho",
    name: "Pilarzinho",
    type: "neighborhood",
    description: "Bairro próximo ao Parque Tanguá com ambiente tranquilo. O Pilarzinho oferece mercado diferenciado com público que valoriza bem-estar e qualidade de vida.",
    highlights: ["Próximo ao Parque Tanguá", "Ambiente muito tranquilo", "Público valoriza bem-estar", "Demanda por qualidade", "Oportunidades em wellness", "Mercado diferenciado", "Clientela fidelizada", "Ambiente inspirador"],
    nearbyPlaces: ["Tanguá", "Tingui", "Barreirinha"],
    popularCourses: ["Drenagem Linfática", "Massagem Relaxante", "Estética Facial Natural", "Aromaterapia"]
  },
  {
    slug: "pinheirinho",
    name: "Pinheirinho",
    type: "neighborhood",
    description: "Bairro populoso da zona sul com crescimento acelerado. O Pinheirinho oferece mercado amplo e dinâmico, com demanda crescente por serviços de beleza de qualidade.",
    highlights: ["Bairro muito populoso", "Crescimento acelerado", "Mercado amplo dinâmico", "Demanda crescente", "Comércio forte", "Alto volume potencial", "Oportunidades variadas", "Público diversificado"],
    nearbyPlaces: ["Tatuquara", "Sítio Cercado", "Ganchinho"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Micropigmentação", "Depilação"]
  },
  {
    slug: "prado-velho",
    name: "Prado Velho",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Centro com charme histórico. O Prado Velho oferece mercado consolidado com público diversificado, ideal para profissionais versáteis.",
    highlights: ["Bairro histórico charmoso", "Próximo ao Centro", "Mercado consolidado", "Público diversificado", "Mistura de perfis", "Demanda variada", "Oportunidades múltiplas", "Fácil acesso"],
    nearbyPlaces: ["Centro", "Rebouças", "Água Verde"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "riviera",
    name: "Riviera",
    type: "neighborhood",
    description: "Bairro próximo à CIC com perfil industrial e comercial. A Riviera oferece mercado trabalhador com demanda constante, ideal para serviços práticos e eficientes.",
    highlights: ["Próximo à CIC", "Perfil industrial forte", "População trabalhadora", "Demanda constante", "Horários estratégicos", "Alto volume potencial", "Oportunidades express", "Retorno garantido"],
    nearbyPlaces: ["CIC", "Augusta", "Vila Tecnológica"],
    popularCourses: ["Manicure Express", "Design de Sobrancelhas", "Depilação", "Estética Rápida"]
  },
  {
    slug: "santa-candida",
    name: "Santa Cândida",
    type: "neighborhood",
    description: "Bairro populoso da zona norte com mercado em crescimento. Santa Cândida oferece oportunidades amplas para profissionais que buscam atender grande volume com qualidade.",
    highlights: ["Bairro muito populoso", "Zona norte consolidada", "Mercado em crescimento", "Demanda alta", "Alto volume garantido", "Comércio forte", "Oportunidades variadas", "Investimento acessível"],
    nearbyPlaces: ["Bacacheri", "Bairro Alto", "Atuba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "santa-quiteria",
    name: "Santa Quitéria",
    type: "neighborhood",
    description: "Bairro da zona sul com perfil residencial. Santa Quitéria oferece mercado consolidado com comunidade fiel, ideal para profissionais que valorizam relacionamento de longo prazo.",
    highlights: ["Bairro residencial", "Comunidade muito fiel", "Mercado consolidado", "Demanda estável", "Ambiente familiar", "Oportunidades locais", "Público duradouro", "Investimento seguro"],
    nearbyPlaces: ["Xaxim", "Capão Raso", "Boqueirão"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "santo-inacio",
    name: "Santo Inácio",
    type: "neighborhood",
    description: "Bairro tradicional com perfil residencial tranquilo. Santo Inácio oferece mercado estável com público fiel, ideal para profissionais que buscam trabalhar com comunidade local.",
    highlights: ["Bairro tradicional tranquilo", "Perfil residencial forte", "Público muito fiel", "Mercado estável", "Demanda constante", "Ambiente acolhedor", "Oportunidades duradouras", "Comunidade unida"],
    nearbyPlaces: ["Bacacheri", "Boa Vista", "Cabral"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Depilação", "Manicure"]
  },
  {
    slug: "sao-braz",
    name: "São Braz",
    type: "neighborhood",
    description: "Bairro da zona oeste próximo a Santa Felicidade. São Braz oferece mercado em crescimento com oportunidades para profissionais que buscam região em desenvolvimento.",
    highlights: ["Próximo a Santa Felicidade", "Mercado em crescimento", "Oportunidades emergentes", "Baixa concorrência", "Público receptivo", "Investimento com futuro", "Demanda crescente", "Potencial alto"],
    nearbyPlaces: ["Santa Felicidade", "Butiatuvinha", "Orleans"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Micropigmentação"]
  },
  {
    slug: "sao-francisco",
    name: "São Francisco",
    type: "neighborhood",
    description: "Bairro boêmio e cultural próximo ao Centro. São Francisco oferece mercado diferenciado com público jovem e criativo, ideal para profissionais com visão moderna.",
    highlights: ["Bairro boêmio cultural", "Próximo ao Centro", "Público jovem criativo", "Mercado diferenciado", "Demanda por tendências", "Ambiente artístico", "Networking cultural", "Oportunidades inovadoras"],
    nearbyPlaces: ["Centro", "Alto da XV", "Cabral"],
    popularCourses: ["Micropigmentação Artística", "Design Criativo", "Estética Alternativa", "Colorimetria"]
  },
  {
    slug: "sao-joao",
    name: "São João",
    type: "neighborhood",
    description: "Bairro residencial da zona norte. São João oferece mercado consolidado com comunidade tradicional, ideal para profissionais que valorizam estabilidade.",
    highlights: ["Bairro residencial consolidado", "Comunidade tradicional", "Mercado estável", "Demanda constante", "Público fiel", "Ambiente familiar", "Oportunidades duradouras", "Investimento seguro"],
    nearbyPlaces: ["Bacacheri", "Atuba", "Santa Cândida"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "sao-lourenco",
    name: "São Lourenço",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Centro. São Lourenço oferece mercado consolidado com público diversificado e fácil acesso, garantindo demanda constante.",
    highlights: ["Bairro tradicional", "Próximo ao Centro", "Público diversificado", "Fácil acesso", "Mercado consolidado", "Demanda constante", "Oportunidades variadas", "Transporte fácil"],
    nearbyPlaces: ["Centro", "Cabral", "Alto da Glória"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "sao-miguel",
    name: "São Miguel",
    type: "neighborhood",
    description: "Bairro da zona sul com perfil residencial. São Miguel oferece mercado em crescimento com população jovem, ideal para profissionais que buscam região em desenvolvimento.",
    highlights: ["Mercado em crescimento", "População jovem", "Perfil residencial", "Demanda crescente", "Baixa concorrência", "Oportunidades emergentes", "Investimento com futuro", "Potencial alto"],
    nearbyPlaces: ["Umbará", "Tatuquara", "Sítio Cercado"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Lash Lifting", "Depilação"]
  },
  {
    slug: "vila-pantanal",
    name: "Vila Pantanal",
    type: "neighborhood",
    description: "Região da zona leste com perfil residencial. Vila Pantanal oferece mercado consolidado com comunidade unida, ideal para profissionais que valorizam clientela fiel.",
    highlights: ["Comunidade muito unida", "Mercado consolidado", "Perfil residencial", "Demanda estável", "Público fiel", "Ambiente familiar", "Oportunidades locais", "Investimento seguro"],
    nearbyPlaces: ["Jardim das Américas", "Capão da Imbuia", "Uberaba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "seminario",
    name: "Seminário",
    type: "neighborhood",
    description: "Bairro próximo ao Centro com perfil residencial. O Seminário oferece mercado tranquilo com público tradicional, ideal para profissionais que buscam estabilidade.",
    highlights: ["Próximo ao Centro", "Bairro tranquilo", "Público tradicional", "Mercado estável", "Demanda constante", "Ambiente familiar", "Oportunidades duradouras", "Fácil acesso"],
    nearbyPlaces: ["Centro", "Rebouças", "Prado Velho"],
    popularCourses: ["Estética Facial", "Design de Sobrancelhas", "Manicure", "Depilação"]
  },
  {
    slug: "sitio-cercado",
    name: "Sítio Cercado",
    type: "neighborhood",
    description: "Bairro populoso da zona sul com mercado amplo. Sítio Cercado oferece oportunidades abundantes para profissionais que buscam alto volume de atendimentos.",
    highlights: ["Bairro muito populoso", "Mercado amplo", "Demanda intensa", "Alto volume garantido", "Comércio forte", "Oportunidades variadas", "Investimento acessível", "Retorno rápido"],
    nearbyPlaces: ["Pinheirinho", "Ganchinho", "Fazendinha"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure Express", "Depilação"]
  },
  {
    slug: "taboao",
    name: "Taboão",
    type: "neighborhood",
    description: "Bairro próximo ao Parque Tanguá com ambiente tranquilo. O Taboão oferece mercado diferenciado com público que valoriza qualidade de vida e bem-estar.",
    highlights: ["Próximo ao Parque Tanguá", "Ambiente tranquilo", "Público valoriza bem-estar", "Demanda por qualidade", "Oportunidades em wellness", "Mercado diferenciado", "Clientela fiel", "Ambiente natural"],
    nearbyPlaces: ["Tanguá", "Tingui", "Pilarzinho"],
    popularCourses: ["Drenagem Linfática", "Massagem Relaxante", "Estética Natural", "Aromaterapia"]
  },
  {
    slug: "taruma",
    name: "Tarumã",
    type: "neighborhood",
    description: "Bairro extenso da zona norte com mercado diversificado. O Tarumã oferece oportunidades variadas para profissionais que buscam atender público amplo.",
    highlights: ["Bairro extenso", "Mercado diversificado", "População variada", "Demanda ampla", "Oportunidades múltiplas", "Comércio crescente", "Investimento acessível", "Alto potencial"],
    nearbyPlaces: ["Tingui", "Santa Felicidade", "Cajuru"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Depilação", "Manicure"]
  },
  {
    slug: "tatuquara",
    name: "Tatuquara",
    type: "neighborhood",
    description: "Bairro populoso da zona sul com mercado em crescimento. Tatuquara oferece oportunidades amplas para profissionais que buscam região em desenvolvimento.",
    highlights: ["Bairro populoso", "Mercado em crescimento", "Demanda crescente", "Baixa concorrência qualificada", "Oportunidades para pioneiros", "Investimento acessível", "Alto volume potencial", "Retorno progressivo"],
    nearbyPlaces: ["Pinheirinho", "Umbará", "Caximba"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "tingui",
    name: "Tingui",
    type: "neighborhood",
    description: "Bairro ao redor do Parque Tingui, um dos principais de Curitiba. Oferece mercado diferenciado com público que valoriza qualidade de vida, bem-estar e contato com a natureza.",
    highlights: ["Ao redor do Parque Tingui", "Público valoriza bem-estar", "Mercado diferenciado", "Demanda por qualidade", "Oportunidades em wellness", "Ambiente inspirador", "Clientela fidelizada", "Conexão com natureza"],
    nearbyPlaces: ["Barreirinha", "Tanguá", "Pilarzinho", "Tarumã"],
    popularCourses: ["Drenagem Linfática", "Massagem Relaxante", "Estética Natural", "Yoga Facial"]
  },
  {
    slug: "uberaba",
    name: "Uberaba",
    type: "neighborhood",
    description: "Bairro populoso da zona leste com mercado consolidado. Uberaba oferece oportunidades amplas com demanda constante e público diversificado.",
    highlights: ["Bairro muito populoso", "Mercado consolidado", "Demanda constante", "Público diversificado", "Comércio forte", "Alto volume garantido", "Oportunidades variadas", "Investimento seguro"],
    nearbyPlaces: ["Cajuru", "Capão Raso", "Jardim das Américas"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Micropigmentação", "Depilação"]
  },
  {
    slug: "umbara",
    name: "Umbará",
    type: "neighborhood",
    description: "Bairro da zona sul com perfil residencial. O Umbará oferece mercado em desenvolvimento com oportunidades para profissionais pioneiros.",
    highlights: ["Mercado em desenvolvimento", "Perfil residencial", "Baixa concorrência", "Oportunidades para pioneiros", "Investimento acessível", "Demanda crescente", "Potencial alto", "Retorno progressivo"],
    nearbyPlaces: ["Tatuquara", "Caximba", "São Miguel"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure", "Depilação"]
  },
  {
    slug: "vila-izabel",
    name: "Vila Izabel",
    type: "neighborhood",
    description: "Bairro tradicional próximo ao Portão. Vila Izabel oferece mercado consolidado com comunidade fiel, ideal para profissionais que valorizam relacionamento duradouro.",
    highlights: ["Bairro tradicional", "Próximo ao Portão", "Comunidade fiel", "Mercado consolidado", "Demanda estável", "Ambiente familiar", "Oportunidades duradouras", "Público leal"],
    nearbyPlaces: ["Portão", "Lindóia", "Novo Mundo"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Manicure e Pedicure", "Depilação"]
  },
  {
    slug: "vista-alegre",
    name: "Vista Alegre",
    type: "neighborhood",
    description: "Bairro charmoso próximo a Santa Felicidade. Vista Alegre oferece mercado diferenciado com público sofisticado, ideal para serviços de qualidade superior.",
    highlights: ["Bairro charmoso", "Próximo a Santa Felicidade", "Público sofisticado", "Mercado diferenciado", "Demanda por qualidade", "Oportunidades premium", "Ambiente agradável", "Clientela exigente"],
    nearbyPlaces: ["Santa Felicidade", "Cascatinha", "Orleans"],
    popularCourses: ["Estética Facial Premium", "Micropigmentação", "Drenagem Linfática", "Design de Sobrancelhas"]
  },
  {
    slug: "xaxim",
    name: "Xaxim",
    type: "neighborhood",
    description: "Bairro populoso da zona sul próximo ao Boqueirão. O Xaxim oferece mercado massivo com demanda intensa, ideal para profissionais que buscam alto volume.",
    highlights: ["Bairro muito populoso", "Próximo ao Boqueirão", "Mercado massivo", "Demanda intensa", "Alto volume garantido", "Comércio muito forte", "Oportunidades ilimitadas", "Público diversificado"],
    nearbyPlaces: ["Boqueirão", "Alto Boqueirão", "Capão Raso", "Santa Quitéria"],
    popularCourses: ["Design de Sobrancelhas", "Estética Facial", "Micropigmentação", "Depilação"]
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(loc => loc.slug === slug);
};

export const getCitiesByType = (type: 'city' | 'neighborhood'): Location[] => {
  return locations.filter(loc => loc.type === type);
};

export const getAllCities = (): Location[] => {
  return getCitiesByType('city');
};

export const getAllNeighborhoods = (): Location[] => {
  return getCitiesByType('neighborhood');
};
