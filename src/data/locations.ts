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
  }

  // Continuará com todos os outros bairros...
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
