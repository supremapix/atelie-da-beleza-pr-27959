// Importar todas as imagens
import esteticaOlhar from "@/assets/all-courses/estetica-olhar.jpg";
import designHenna from "@/assets/all-courses/design-henna.jpg";
import reconstrucaoSobrancelhas from "@/assets/all-courses/reconstrucao-sobrancelhas.jpg";
import depilacaoCeras from "@/assets/all-courses/depilacao-ceras.jpg";
import remocaoLaserMicro from "@/assets/all-courses/remocao-laser-micro.jpg";
import lashIniciante from "@/assets/all-courses/lash-iniciante.jpg";
import epilacaoFio from "@/assets/all-courses/epilacao-fio.jpg";
import lashLifting from "@/assets/all-courses/lash-lifting.jpg";
import microLabial from "@/assets/all-courses/micro-labial.jpg";
import delineadoOlhos from "@/assets/all-courses/delineado-olhos.jpg";
import dermaplaning from "@/assets/all-courses/dermaplaning.jpg";
import esteticaFacialMaster from "@/assets/all-courses/estetica-facial-master.jpg";
import limpezaIniciante from "@/assets/all-courses/limpeza-iniciante.jpg";
import limpezaPeeling from "@/assets/all-courses/limpeza-peeling.jpg";
import microagulhamentoMaster from "@/assets/all-courses/microagulhamento-master.jpg";
import capacitacaoCompleta from "@/assets/all-courses/capacitacao-completa.jpg";
import capacitacaoCorporal from "@/assets/all-courses/capacitacao-corporal.jpg";
import terapiasRelaxantes from "@/assets/all-courses/terapias-relaxantes.jpg";
import skinSpaFacial from "@/assets/all-courses/skin-spa-facial.jpg";
import injetaveisBotox from "@/assets/all-courses/injetaveis-botox.jpg";
import injetaveisMasterCurso from "@/assets/all-courses/injetaveis-master-curso.jpg";
import posOperatorioDrenagem from "@/assets/all-courses/pos-operatorio-drenagem.jpg";
import hydraNutriGloss from "@/assets/all-courses/hydra-nutri-gloss.jpg";
import bbGlow from "@/assets/all-courses/bb-glow.jpg";
import peelingsQuimicos from "@/assets/all-courses/peelings-quimicos.jpg";
import microagulhamentoFacial from "@/assets/all-courses/microagulhamento-facial.jpg";
import imersaoCapilar from "@/assets/all-courses/imersao-capilar.jpg";
import radiofrequencia from "@/assets/all-courses/radiofrequencia.jpg";
import ultrafocus from "@/assets/all-courses/ultrafocus.jpg";
import herusHifu from "@/assets/all-courses/herus-hifu.jpg";
import depilacaoLaser from "@/assets/all-courses/depilacao-laser.jpg";
import drenagemLinfatica from "@/assets/all-courses/drenagem-linfatica.jpg";
import massagemModeladora from "@/assets/all-courses/massagem-modeladora.jpg";
import massagemRelaxante from "@/assets/all-courses/massagem-relaxante.jpg";
import ventosaterapia from "@/assets/all-courses/ventosaterapia.jpg";
import taping from "@/assets/all-courses/taping.jpg";
import cosmetologia from "@/assets/all-courses/cosmetologia.jpg";
import bioestimulador from "@/assets/all-courses/bioestimulador.jpg";
import botoxFullFace from "@/assets/all-courses/botox-full-face.jpg";
import preenchimentoLabial from "@/assets/all-courses/preenchimento-labial.jpg";
import jatoPlasmaMulti from "@/assets/all-courses/jato-plasma-multi.jpg";
import microCompleto from "@/assets/all-courses/micro-completo.jpg";

export interface Course {
  id: string;
  title: string;
  image: string;
  highlighted?: boolean;
  description: string;
  duration: string;
  level: string;
  category: string;
  cashPrice?: number;
  installmentPrice?: number;
  includes?: string[];
  videoUrl?: string;
  detailedDescription?: string;
  personalizedCTA?: string;
  whatYouWillLearn?: string[];
  courseDifferentials?: string[];
  courseInfo?: string[];
  bonuses?: string[];
}

export const courses: Course[] = [
  {
    id: "remocao-laser-micro",
    title: "Remoção de Micropigmentação e Tatuagem à Laser",
    image: remocaoLaserMicro,
    highlighted: true,
    description: "Capacitação de Remoção a Laser de Micropigmentação e Tatuagem – Laser Off",
    duration: "16h",
    level: "Nível 1 - Fundamentos",
    category: "Beleza e Design",
    cashPrice: 1500,
    installmentPrice: 1690,
    detailedDescription: "Este curso é para quem quer aprender a remover tatuagens e micropigmentações de forma segura, prática e eficaz. Usamos um laser que consegue quebrar os pigmentos da pele sem machucar ou prejudicar o local. Isso significa que você poderá realizar o procedimento com segurança.",
    whatYouWillLearn: [
      "Como identificar cada tipo de pigmento e escolher o melhor tratamento",
      "Como usar o laser para remover tatuagens e micropigmentações com segurança",
      "Técnicas complementares, como a despigmentação elétrica, para melhorar os resultados",
      "Como cuidar da pele antes e depois do procedimento",
      "Como precificar seus atendimentos"
    ],
    courseDifferentials: [
      "Aprendizado baseado em protocolos reais de atendimento",
      "Turmas pequenas, garantindo atenção individual",
      "Material didático e modelos reais para prática",
      "Suporte pós-curso para tirar dúvidas"
    ],
    courseInfo: [
      "Duração: 2 dias (9h às 17h)",
      "Carga horária: 16 horas",
      "Turmas: máximo de 4 alunos",
      "Material didático incluso",
      "Certificado"
    ],
    bonuses: ["Técnica Black Peel"]
  },
  {
    id: "micro-delineado-olhos",
    title: "Micropigmentação para Delineado dos Olhos",
    image: delineadoOlhos,
    description: "Curso de Micropigmentação de Olhos",
    duration: "16h",
    level: "Nível 3 - Especialização",
    category: "Beleza e Design",
    cashPrice: 1300,
    installmentPrice: 1450,
    detailedDescription: "O delineado perfeito é o sonho de muitas mulheres. Com este curso, você será a profissional capaz de realizar esse desejo de forma segura e profissional.",
    whatYouWillLearn: [
      "Delineado clássico – traço suave e elegante",
      "Delineado gatinho – efeito mais marcado e definido",
      "Anatomia dos olhos e regiões ao redor",
      "Diferenças entre as técnicas e como escolher a melhor para cada cliente",
      "Pigmentologia: cores e pigmentos ideais",
      "Uso de anestésicos",
      "Processo de cicatrização",
      "Cuidados pré e pós-procedimento",
      "Durabilidade do procedimento",
      "Ficha de anamnese e termo de consentimento",
      "Materiais profissionais e biossegurança",
      "Precificação dos atendimentos"
    ],
    courseInfo: [
      "Duração: 2 dias, das 9h às 17h",
      "Carga horária: 16 horas",
      "Modelos disponibilizados para prática",
      "Materiais necessários: jaleco, luvas e máscaras descartáveis",
      "Infraestrutura completa",
      "Apostila e certificado inclusos",
      "Início com treino em pele sintética",
      "Demonstração da professora",
      "Prática em modelos reais",
      "Turmas pequenas para atenção individual",
      "Material didático e suporte pós-curso"
    ]
  },
  {
    id: "micropigmentacao-sobrancelhas",
    title: "Micropigmentação de Sobrancelhas 5.0",
    image: microCompleto,
    highlighted: true,
    description: "Aprenda a criar sobrancelhas naturais, harmoniosas e personalizadas, dominando técnicas nanoblading e shadow",
    duration: "16h",
    level: "Nível 3 - Especialização",
    category: "Beleza e Design",
    cashPrice: 1800,
    installmentPrice: 1950,
    detailedDescription: "Entre no mercado mais lucrativo da beleza! A micropigmentação de sobrancelhas é uma das técnicas mais procuradas e bem remuneradas. Domine as técnicas de Nanoblading e Shadow para criar sobrancelhas perfeitas e naturais.",
    whatYouWillLearn: [
      "Técnica Nanoblading: fios hiper-realistas e naturais",
      "Técnica Shadow: efeito sombreado e maquiado",
      "Visagismo e medidas estratégicas personalizadas",
      "Colorimetria e pigmentologia avançada",
      "Anatomia da pele e cicatrização",
      "Uso seguro de anestésicos",
      "Biossegurança e esterilização de materiais",
      "Cuidados pré e pós-procedimento",
      "Ficha de anamnese e termo de consentimento",
      "Precificação e posicionamento profissional"
    ],
    bonuses: [
      "DESPIGMENTAÇÃO QUÍMICA - Técnica para correção e remoção de pigmentos indesejados",
      "KIT PROFISSIONAL - Materiais completos para iniciar seus atendimentos"
    ],
    courseInfo: [
      "Duração: 2 dias (8:30 às 17:00) – 16h",
      "Aulas teóricas e práticas",
      "Treino inicial em pele sintética + prática em modelos reais",
      "Turmas pequenas e suporte pós-curso",
      "Kit profissional incluso",
      "Certificado incluso",
      "Bônus: Despigmentação Química + Kit Profissional"
    ]
  },
  {
    id: "micro-labial",
    title: "Micropigmentação Labial",
    image: microLabial,
    description: "Aprenda a transformar lábios com técnicas profissionais, criando efeitos que vão do mais marcante ao natural e correção de pigmentos escuros",
    duration: "16h",
    level: "Nível 3 - Especialização",
    category: "Beleza e Design",
    cashPrice: 1300,
    installmentPrice: 1450,
    whatYouWillLearn: [
      "Full lips – lábios marcantes e uniformes",
      "Lip tint – efeito natural e revitalizado",
      "Neutralização – correção de lábios escuros",
      "Borda infinita – contorno perfeito e definido",
      "Anatomia labial e estrutura dos lábios",
      "Diferenças entre as técnicas e como escolher a melhor para cada cliente",
      "Pigmentologia e colorimetria",
      "Uso seguro de anestésicos",
      "Processo de cicatrização",
      "Cuidados pré e pós-procedimento",
      "Durabilidade do resultado",
      "Ficha de anamnese e termo de consentimento",
      "Materiais profissionais e biossegurança",
      "Precificação e organização do atendimento"
    ],
    courseInfo: [
      "Duração: 2 dias (8:30 às 17:00) – 16h",
      "Materiais necessários: jaleco, luvas e máscaras descartáveis",
      "Professora experiente: Paula Haubert",
      "Infraestrutura completa",
      "Início com treino em pele sintética",
      "Demonstração da professora seguida de prática em modelos reais",
      "Turmas pequenas para atenção individual",
      "Material didático atualizado e certificado incluso",
      "Suporte pós-curso"
    ]
  },
  {
    id: "design-henna-coloracao",
    title: "Design de Sobrancelhas Estratégico + Henna, Coloração e Spa",
    image: designHenna,
    description: "Curso desenvolvido para quem deseja dominar o design de sobrancelhas de forma personalizada e em harmonia facial",
    duration: "8h",
    level: "Nível 1 - Fundamentos",
    category: "Beleza e Design",
    cashPrice: 499,
    installmentPrice: 599,
    detailedDescription: "Durante o curso, você vai aprender desde o mapeamento geométrico facial até as técnicas de coloração e spa, com toda a base teórica e prática necessária para atuar com segurança e excelência.",
    whatYouWillLearn: [
      "Design de sobrancelhas com medidas estratégicas",
      "Técnicas com henna e coloração profissional",
      "Mapeamento e visagismo facial",
      "Spa das sobrancelhas com cosméticos específicos",
      "Epilação egípcia",
      "Colorimetria, precificação e biossegurança"
    ]
  },
  {
    id: "reconstrucao-sobrancelhas",
    title: "Especialização em Reconstrução de Sobrancelhas",
    image: reconstrucaoSobrancelhas,
    description: "Curso 100% presencial voltado para profissionais que desejam elevar seus atendimentos reconstrutivos",
    duration: "5h",
    level: "Nível 1 - Fundamentos",
    category: "Beleza e Design",
    cashPrice: 349,
    installmentPrice: 449,
    detailedDescription: "Através do Design Reconstrutivo, do uso da Dermapen e de produtos específicos, você vai aprender a promover sobrancelhas mais encorpadas, preenchidas e bonitas.",
    whatYouWillLearn: [
      "Fundamentos do tratamento e indicações",
      "Higiene e biossegurança",
      "Estrutura da pele e ciclo dos pelos",
      "Técnica com Dermapen para estimular o crescimento",
      "Produtos ideais para resultados eficazes",
      "Design reconstrutivo respeitando o formato natural",
      "Uso do LED como aliado do tratamento"
    ],
    bonuses: [
      "Aromaterapia com óleos essenciais: experiência sensorial relaxante",
      "SPA dos lábios: lábios mais hidratados, regenerados e livres do ressecamento"
    ],
    courseInfo: [
      "Duração: 4h",
      "Inclui: modelos, material didático, certificado, loja e estrutura completa",
      "Trazer: jaleco, luvas e máscara",
      "Turmas pequenas para melhor aprendizado"
    ]
  },
  {
    id: "depilacao-laser",
    title: "Depilação a Laser — Alta Performance Profissional",
    image: depilacaoLaser,
    description: "Aprenda a dominar uma das técnicas mais procuradas na estética com resultados na redução de pelos faciais e corporais",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial e Corporal",
    cashPrice: 990,
    installmentPrice: 1100,
    detailedDescription: "Esse curso é voltado para Profissionais da área da saúde e estética, e ensina tudo — da teoria à prática clínica para atuar com segurança, precisão e alto desempenho.",
    whatYouWillLearn: [
      "Fisiologia da pele e do pelo",
      "Classificação dos fototipos",
      "Estrutura e ciclos de crescimento do pelo",
      "Parâmetros e ajustes do laser",
      "Métodos corretos de aplicação",
      "Indicações e contraindicações",
      "Prática clínica supervisionada",
      "Estratégias de manutenção e resultados"
    ],
    courseInfo: [
      "Duração: 1 dia (8h) — das 9h às 17h",
      "Inclui: prática com modelos reais, material didático, certificado e suporte pós-curso",
      "Turmas reduzidas: máximo de 4 alunos",
      "Infraestrutura completa para aprendizado intensivo",
      "Indicado para: Biomédicos(as), Enfermeiros(as), Farmacêuticos(as), Fisioterapeutas, Médicos(as), Dentistas e Cosmetólogos(as) com especialização na área da estética"
    ]
  },
  {
    id: "lash-lifting",
    title: "Lash Lifting e Brow Lamination",
    image: lashLifting,
    description: "Aprenda as técnicas mais desejadas para embelezar o olhar realçando cílios e sobrancelhas de forma natural",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Beleza e Design",
    cashPrice: 450,
    installmentPrice: 550,
    detailedDescription: "O diferencial deste curso é que você não segue protocolos prontos de fabricantes, e sim aprende a personalizar conforme as características dos fios e da pele de cada cliente — garantindo resultados muito mais bonitos e duradouros.",
    whatYouWillLearn: [
      "Lash lifting, lash tint, lash botox e brow lamination",
      "Avaliação de espessura, porosidade e curvatura dos fios",
      "Cuidados pré e pós-procedimento",
      "Indicações, contraindicações e intercorrências",
      "Higienização correta e alinhamento perfeito",
      "Composição e função dos produtos (kits aprovados pela Anvisa)",
      "Precificação e dicas de marketing e fotografia profissional"
    ],
    bonuses: ["Técnica completa de Brow Lamination (sobrancelhas)"],
    courseInfo: [
      "Duração: 1 dia (8h) — das 9h às 16h30/17h",
      "Turmas reduzidas: até 5 alunas",
      "Aulas presenciais com teoria e prática",
      "Material didático e certificado inclusos",
      "Suporte pós-curso para suas dúvidas",
      "Trazer: jaleco, luvas e máscara descartável"
    ]
  },
  {
    id: "depilacao-ceras",
    title: "Depilação Facial e Corporal com Técnicas Associadas",
    image: depilacaoCeras,
    highlighted: true,
    description: "Aprenda técnicas clássicas e modernas de depilação com Roll-on e método Espanhol, além de protocolos complementares",
    duration: "16h",
    level: "Nível 3 - Especialização",
    category: "Beleza e Design",
    cashPrice: 790,
    installmentPrice: 890,
    detailedDescription: "Se você quer trabalhar com estética e conquistar uma agenda cheia, esse curso é a base perfeita para começar! Mais do que remover pelos, você vai aprender a entregar resultados seguros, duradouros e com acabamento profissional, cuidando da saúde e da estética da pele.",
    whatYouWillLearn: [
      "Anatomia e ciclo de vida dos pelos",
      "Tipos de pele e pelos",
      "Técnicas com cera quente (método espanhol) e roll-on",
      "Gerenciamento de pele pré e pós depilação",
      "Cosmetologia aplicada à epilação",
      "Eletroterapia associada (alta frequência e fototerapia)",
      "Higiene, biossegurança e normas sanitárias",
      "Protocolo para tratamento e prevenção de foliculite",
      "Cuidados com gestantes",
      "Precificação, fidelização e como montar seu negócio"
    ],
    bonuses: ["Ebook de mídias sociais para te ajudar a divulgar e atrair clientes"],
    courseInfo: [
      "Duração: 2 dias (16h totais)",
      "Horário: 9h às 16h30/17h",
      "Turmas pequenas (máx. 5 alunas)",
      "Aulas teóricas e práticas presenciais",
      "Material didático e certificado inclusos",
      "Suporte pós-curso",
      "Materiais: Trazer: Jaleco, luvas e máscara descartável"
    ],
    personalizedCTA: "Ideal para iniciantes ou profissionais que querem aperfeiçoar técnicas, agregar valor aos atendimentos e oferecer uma experiência completa de cuidado e bem-estar para suas clientes."
  },
  {
    id: "lash-master-class",
    title: "Lash Master Class – Formação Completa em Extensão de Cílios",
    image: lashIniciante,
    highlighted: true,
    description: "Quer se tornar uma lash designer completa, dominar os efeitos mais desejados pelas clientes e garantir retenções impecáveis?",
    duration: "16h",
    level: "Nível 4 - Master",
    category: "Beleza e Design",
    cashPrice: 900,
    installmentPrice: 999,
    detailedDescription: "Você vai dominar desde o clássico fio a fio, até os volumes mais sofisticados e buscados atualmente. A formação completa para quem quer se destacar no mercado de extensão de cílios.",
    whatYouWillLearn: [
      "Fio a Fio Clássico: técnica básica e essencial",
      "Volume Russo: 2D, 3D, 4D até 8D",
      "Efeitos Personalizados: Doll Eyes, Cat Eyes (Gatinho) e Squirrel (Esquilo)",
      "Anatomia ocular e estrutura dos cílios",
      "Contraindicações e cuidados específicos",
      "Técnicas de preparação e finalização profissional",
      "Retenção e manutenção correta dos fios",
      "Remoção mecânica e química segura",
      "Precificação estratégica",
      "Marketing e fotografia profissional para redes sociais",
      "Ética e postura profissional"
    ],
    courseInfo: [
      "Duração: 2 dias — 16h (9h às 17h)",
      "2 modelos por aluna (fornecidos pelo centro de formação)",
      "Materiais incluídos nas aulas",
      "Turmas reduzidas (máx. 5 alunas)",
      "Material didático + certificado",
      "Aulas teóricas e práticas com materiais premium",
      "Suporte pós-curso e loja com todos os produtos disponíveis"
    ],
    personalizedCTA: "Ao final, você sairá pronta para atuar profissionalmente, dominando todos os efeitos tecnológicos, entregendo resultados elegantes e de longa duração."
  },
  {
    id: "massagem-modeladora",
    title: "Massagem Estética Modeladora",
    image: massagemModeladora,
    description: "A massagem modeladora utiliza manobras firmes e precisas para redefinir o contorno corporal e estimular a circulação",
    duration: "8h",
    level: "Nível 1 - Fundamentos",
    category: "Estética Corporal",
    cashPrice: 500,
    installmentPrice: 550,
    detailedDescription: "Transforme o corpo e a autoestima das suas clientes com uma técnica poderosa e altamente procurada no mercado. Resultados visíveis desde as primeiras sessões.",
    whatYouWillLearn: [
      "Anatomia e fisiologia da pele",
      "Técnicas atualizadas de massagem modeladora",
      "Lipodistrofia e fibroedema gelóide (celulite)",
      "Cosmetologia e nutracêuticos aplicados",
      "Frequência ideal e intensidade das manobras",
      "Preparo da pele e esfoliação corporal",
      "Avaliação e ficha de anamnese (com perimetria)",
      "Mitos e verdades sobre redução de medidas",
      "Protocolos e planos de tratamento",
      "Biossegurança e postura profissional"
    ],
    courseInfo: [
      "100% presencial",
      "Voltado para iniciantes na estética",
      "Aulas teóricas e práticas com modelos",
      "Material didático e certificado inclusos",
      "Turmas reduzidas (máximo 5 alunas)",
      "Suporte pós-curso",
      "Carga horária: 8h (1 dia)",
      "Horário: 9h às 16h30",
      "Trazer: jaleco, luvas, máscara e 2 toalhas de banho (cor clara)"
    ]
  },
  {
    id: "drenagem-linfatica",
    title: "Drenagem Linfática",
    image: drenagemLinfatica,
    description: "Técnica essencial para reduzir edemas, melhorar circulação e promover bem-estar",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Corporal",
    cashPrice: 500,
    installmentPrice: 550
  },
  {
    id: "pos-operatorio-completo",
    title: "Imersão em Pós Operatório (DRENAGEM + TAPING)",
    image: posOperatorioDrenagem,
    description: "Curso-imersão completo combinando drenagem linfática pós-operatória e taping",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Corporal",
    cashPrice: 1390,
    installmentPrice: 1540,
    detailedDescription: "Aprenda as técnicas essenciais para atendimento pós-operatório de cirurgias plásticas.",
    whatYouWillLearn: [
      "Revisão da anatomia e fisiologia do sistema linfático aplicada à prática estética",
      "Princípios, efeitos e manobras da DLM",
      "Indicações, contraindicações e adaptações específicas para o pós-operatório de cirurgias plásticas",
      "Taping no Trans e Pós-Operatório"
    ]
  },
  {
    id: "taping",
    title: "Taping Aplicado na Estética e no Pós-Operatório",
    image: taping,
    description: "Técnica inovadora e não invasiva para potencializar resultados em tratamentos operatórios",
    duration: "5h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Corporal",
    cashPrice: 790,
    installmentPrice: 890,
    detailedDescription: "Com o uso correto da bandagem elástica, é possível reduzir edemas, hematomas e fibroses, além de melhorar o conforto do cliente.",
    whatYouWillLearn: [
      "Fundamentos, histórico e aplicabilidade da técnica",
      "Tipos de tensão e direções corretas de aplicação",
      "Princípios anatomofisiológicos e reações do corpo",
      "Aplicação facial e corporal",
      "Métodos específicos para edemas, hematomas, cicatrizes e fibroses",
      "Variações e adaptações para o intra e pós-operatório",
      "Indicações, contraindicações e vantagens do uso estético"
    ],
    courseInfo: [
      "Duração: 1 dia — 5h intensivas",
      "Aulas teóricas e práticas com aplicação real",
      "Material didático e certificado inclusos"
    ]
  },
  {
    id: "ventosaterapia",
    title: "Ventosaterapia — Técnica de Relaxamento e Equilíbrio Corporal",
    image: ventosaterapia,
    description: "Técnica milenar que promove relaxamento profundo e melhora da circulação",
    duration: "4h",
    level: "Nível 1 - Fundamentos",
    category: "Estética Corporal",
    cashPrice: 500,
    installmentPrice: 600,
    detailedDescription: "A Ventosaterapia promove relaxamento profundo, melhora da circulação, alívio de tensões musculares, além de auxiliar na redução de inflamações e contraturas.",
    whatYouWillLearn: [
      "História e fundamentos da Ventosaterapia",
      "Mecanismos de ação e respostas fisiológicas",
      "Tipos de ventosas e níveis de pressão",
      "Indicações, contraindicações e reações comuns",
      "Higienização e preparo do ambiente",
      "Aplicações corporais e benefícios terapêuticos"
    ],
    courseInfo: [
      "Turmas pequenas e modelos reais para prática",
      "Suporte pós-curso e certificado de conclusão",
      "Trazer apenas: jaleco, luvas descartáveis e máscara de proteção"
    ]
  },
  {
    id: "terapias-relaxantes",
    title: "Terapias Relaxantes",
    image: terapiasRelaxantes,
    description: "Técnicas profissionais de massagem e terapias complementares para relaxamento profundo",
    duration: "24h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Corporal",
    cashPrice: 1200,
    installmentPrice: 1300,
    detailedDescription: "Aprenda técnicas profissionais de massagem e terapias complementares para proporcionar relaxamento profundo, melhora da circulação e bem-estar geral aos seus clientes.",
    whatYouWillLearn: [
      "Massagem Relaxante Corporal e Crânio-Facial: estimula pontos específicos do corpo e do rosto",
      "Pedras Quentes: termoterapia com aplicação em chakras e pontos estratégicos",
      "Ventosaterapia: técnica milenar para reduzir tensões e dores"
    ],
    bonuses: [
      "Bambuterapia",
      "Spa para os pés",
      "Associação de óleos essenciais funcionais"
    ],
    courseInfo: [
      "Duração: 3 dias (24h)",
      "Turmas pequenas e modelos reais para prática",
      "Aulas teóricas e práticas",
      "Suporte pós-curso e certificado",
      "Trazer: 3 toalhas de banho, luvas e máscara descartável"
    ]
  },
  {
    id: "capacitacao-estetica",
    title: "Capacitação em Estética Facial e Corporal",
    image: capacitacaoCompleta,
    highlighted: true,
    description: "Curso completo para dominar técnicas fundamentais da estética regenerativa, oferecendo resultados satisfatórios aos clientes",
    duration: "56h",
    level: "Nível 4 - Master",
    category: "Estética Facial e Corporal",
    cashPrice: 1300,
    installmentPrice: 1450,
    detailedDescription: "Este curso é feito para profissionais que querem dominar as técnicas fundamentais da estética regenerativa. Com aulas teóricas e práticas, você aprenderá desde procedimentos faciais até corporais, planejamento estratégico e atendimento de alto padrão.",
    whatYouWillLearn: [
      "Limpeza de pele premium",
      "Multifuncional com extração, peeling de diamante, fototerapia, eletroterapia, cosmetologia",
      "Peeling químico multinível",
      "Classificação de ácidos, tratamentos de discromias, protocolos pré e pós",
      "Microagulhamento facial e Hydra Nutri Gloss Lips",
      "Técnicas de drug delivery, disfunções estéticas tratadas",
      "Drenagem linfática corporal e facial",
      "Massagem modeladora corporal",
      "Massagem relaxante corporal e crânio facial + Bambuterapia"
    ],
    bonuses: [
      "Kit profissional de limpeza de pele",
      "Técnicas Lips e Bambuterapia"
    ],
    courseInfo: [
      "Duração: 7 dias (56h), das 9h às 16:30/17h",
      "Turmas pequenas: máximo 5 alunas",
      "Modelos para prática, material didático, certificado e suporte pós-curso",
      "Trazer: jaleco, luvas, máscaras, 3 pacotes de gazes e 3 toalhas de corpo claras"
    ]
  },
  {
    id: "massagem-relaxante",
    title: "Massagem Relaxante Corporal e Crânio Facial",
    image: massagemRelaxante,
    description: "Uma das técnicas mais procuradas nos atendimentos de estética e bem-estar",
    duration: "8h",
    level: "Nível 1 - Fundamentos",
    category: "Estética Corporal",
    cashPrice: 500,
    installmentPrice: 550,
    detailedDescription: "Esse curso foi criado especialmente para quem deseja iniciar na área da massoterapia e dominar a massagem relaxante corporal e crânio facial — proporcionando alívio de tensões, equilíbrio físico e mental e relaxamento profundo.",
    whatYouWillLearn: [
      "Montar o ambiente ideal e postura profissional",
      "Realizar anamnese e avaliação do cliente",
      "Executar manobras da técnica sueca corporal e crânio facial",
      "Entender efeitos fisiológicos, indicações e contraindicações",
      "Aplicar princípios de biossegurança e relacionamento profissional",
      "Técnica de Bambuterapia como complemento à massagem"
    ],
    courseInfo: [
      "Duração: 1 dia (8h) — das 9h às 16h30",
      "Turmas reduzidas (máximo 5 alunas)",
      "Aulas presenciais teóricas e práticas",
      "Material didático, certificado e suporte pós-curso inclusos",
      "Trazer: jaleco, luvas, máscara e 2 toalhas claras"
    ]
  },
  {
    id: "cosmetologia",
    title: "Cosmetologia Estética",
    image: cosmetologia,
    description: "Fundamentos avançados de cosmetologia para estética profissional",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial",
    cashPrice: 990,
    installmentPrice: 1090,
    whatYouWillLearn: [
      "Estrutura e função da pele em profundidade",
      "Microbiota cutânea e permeação transdérmica",
      "Bioquímica e interações cosméticas",
      "Peptídeos biomiméticos, fatores de crescimento e enzimas",
      "Nanotecnologia, antioxidantes e despigmentantes de alta performance",
      "Cosméticos inovadores: lipossomas, nanoemulsões e géis inteligentes",
      "Cosméticos para rejuvenescimento, clareamento e acne",
      "Cuidados com peles sensíveis e com rosácea",
      "Uso de nutricosméticos na estética avançada",
      "Noções de dermocosmética magistral",
      "Criação de fórmulas e protocolos conforme biotipo cutâneo"
    ],
    courseInfo: [
      "Duração: 8h",
      "Aulas teóricas e práticas",
      "Material didático e certificado inclusos",
      "Turmas pequenas e suporte pós-curso"
    ]
  },
  {
    id: "dermaplaning",
    title: "Dermaplaning Glow",
    image: dermaplaning,
    description: "Técnica não invasiva que remove células mortas, impurezas e penugens da pele",
    duration: "4h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial",
    cashPrice: 400,
    installmentPrice: 500,
    detailedDescription: "Aprenda uma das técnicas mais queridinhas da estética moderna e proporcione à sua cliente uma pele lisa, iluminada e com resultados imediatos! É indicado para todos os tipos de pele, inclusive as sensíveis.",
    whatYouWillLearn: [
      "História e fundamentos do dermaplaning",
      "Tipos de lâminas e uso seguro",
      "Anatomia da pele e ciclo capilar",
      "Protocolos completos com sugestões de dermocosméticos",
      "Indicações, contraindicações e frequência ideal",
      "Esterilização, descarte correto e biossegurança",
      "Precificação e diferenciais no atendimento"
    ],
    courseInfo: [
      "Duração: 4 horas (presencial)",
      "Aulas teóricas e práticas",
      "Material didático e certificado inclusos",
      "Suporte pós-curso",
      "Turmas reduzidas (máx. 5 alunas)",
      "Indicado para iniciantes e profissionais da estética",
      "Materiais necessários: jaleco, luvas descartáveis e máscara de proteção"
    ]
  },
  {
    id: "epilacao-fio",
    title: "Epilação Facial Egípcia com Fio",
    image: epilacaoFio,
    description: "Técnica tradicional do fio para remover pelos e lanugens faciais com precisão e delicadeza",
    duration: "6h",
    level: "Nível 2 - Desenvolvimento",
    category: "Beleza e Design",
    cashPrice: 400,
    installmentPrice: 450,
    detailedDescription: "A epilação egípcia é um método 100% natural, que proporciona uma pele lisa, sem irritações e com resultados para clientes com pele sensível ou alergias à cera.",
    whatYouWillLearn: [
      "Anatomia e fisiologia da pele e dos pelos",
      "Classificação e ciclo de vida dos pelos",
      "Técnica egípcia de epilação (fio)",
      "Cuidados pré e pós-procedimento",
      "Cosmetologia aplicada à epilação",
      "Biossegurança e ética profissional",
      "Avaliação e ficha de anamnese",
      "Indicações e contraindicações",
      "Precificação e diferenciais no atendimento"
    ],
    courseInfo: [
      "Duração: 6 horas (presencial)",
      "Aulas teóricas e práticas",
      "Material didático e certificado inclusos",
      "Suporte pós-curso",
      "Turmas reduzidas (máx. 5 alunas)",
      "Indicado para iniciantes ou profissionais que desejam aperfeiçoar técnicas",
      "Materiais necessários: jaleco, luvas descartáveis e máscara de proteção"
    ]
  },
  {
    id: "hydra-nutri-gloss",
    title: "Hydra Nutri Gloss Lips",
    image: hydraNutriGloss,
    description: "Hidratação profunda e regeneração labial com Dermapen",
    duration: "4h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial",
    cashPrice: 400,
    installmentPrice: 500,
    detailedDescription: "O Hydra Nutri Gloss é um dos procedimentos mais procurados do momento! Aprenderá a realizar hidratação profunda e regeneração labial, melhorando o aspecto dos lábios promovendo um rejuvenescimento natural com efeito de volume imediato.",
    whatYouWillLearn: [
      "O que é e como funciona o Hydra Nutri Gloss",
      "Indicações e contraindicações",
      "Anatomia e cuidados específicos com a pele dos lábios",
      "Funcionamento e aplicação do Dermapen",
      "Paramentação e preparo do ambiente de atendimento",
      "Cuidados pré e pós-procedimento",
      "Home care e fidelização de clientes",
      "Ficha de anamnese e termo de consentimento",
      "Precificação e diferenciais no atendimento",
      "Demonstração prática da professora e prática supervisionada em modelo"
    ],
    courseInfo: [
      "Duração: 4 horas (presencial)",
      "Turmas pequenas (máx. 5 alunas)",
      "Material didático e certificado inclusos",
      "Suporte pós-curso",
      "Aulas teóricas e práticas",
      "Indicado para iniciantes e profissionais da estética",
      "Materiais necessários: jaleco, luvas descartáveis e máscara de proteção"
    ]
  },
  {
    id: "limpeza-iniciante",
    title: "Limpeza de Pele Iniciante",
    image: limpezaIniciante,
    description: "Domine as melhores técnicas de limpeza de pele profissional com eletroterapia e protocolos personalizados",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial",
    cashPrice: 590,
    installmentPrice: 690,
    whatYouWillLearn: [
      "Limpeza de pele multifuncional com extração",
      "Cosmetologia e protocolos associados",
      "Avaliação clínica e uso de acessórios profissionais (skin detector)",
      "Eletroterapia com alta frequência",
      "Tratamentos complementares e consultoria de home care",
      "Anatomia e fisiologia da pele",
      "Classificação dos biotipos e fototipos cutâneos",
      "Afecções e disfunções estéticas",
      "Técnicas de extração seguras",
      "Recomendações pré e pós-procedimento",
      "Precificação e diferenciais no atendimento",
      "Biossegurança e postura profissional"
    ],
    courseInfo: [
      "Duração: 1 dia (8h)",
      "Horário: 9h às 17h30",
      "Aulas presenciais, teóricas e práticas",
      "Turmas pequenas (máx. 5 alunas)",
      "Material didático e certificado inclusos",
      "Suporte pós-curso",
      "Infraestrutura completa e ambiente climatizado"
    ]
  },
  {
    id: "microagulhamento-facial",
    title: "Microagulhamento Facial / Hydra Nutri Gloss",
    image: microagulhamentoFacial,
    description: "Técnica de Indução Percutânea de Colágeno (IPC) e Drug Delivery para tratamento de flacidez, rugas, manchas e cicatrizes",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial",
    cashPrice: 790,
    installmentPrice: 890,
    detailedDescription: "Aprenda a técnica ideal para tratar flacidez, linhas de expressão, poros dilatados, cicatrizes atróficas e hipercromias. O curso inclui também o Hydra Nutri Gloss Lips.",
    whatYouWillLearn: [
      "Anatomia, fisiologia e histologia da pele",
      "História e fundamentos da técnica IPC",
      "Tipos de indutores (roller e dermapen) e cartuchos/agulhas adequados",
      "Tratamentos para rugas, flacidez, manchas, cicatrizes e poros dilatados",
      "Fases do processo inflamatório e regenerativo",
      "Uso de dermocosméticos específicos e anestésicos",
      "Contraindicações e intercorrências",
      "Ficha de anamnese e termo de consentimento",
      "Home care e estratégias de venda",
      "Biossegurança e precificação",
      "Hidratação profunda e rejuvenescimento labial",
      "Técnicas de aplicação seguras com dermapen"
    ],
    courseInfo: [
      "Duração: 1 dia (8h)",
      "Horário: 9:00 às 16:30/17:00",
      "Aulas presenciais, teóricas e práticas",
      "Material didático e certificado inclusos",
      "Suporte pós-curso",
      "Indicado para profissionais da estética e saúde",
      "Materiais necessários: jaleco, luvas descartáveis e máscara de proteção"
    ]
  },
  {
    id: "peelings-quimicos",
    title: "Peelings Químicos Estratégicos Multiníveis",
    image: peelingsQuimicos,
    description: "Aprenda a realizar peelings químicos de forma segura e estratégica",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial",
    cashPrice: 790,
    installmentPrice: 890,
    detailedDescription: "O curso capacita o profissional a avaliar cada tipo de pele, escolher o peeling adequado e planejar tratamentos com resultados visíveis e duradouros. Trate acne, melasma, envelhecimento cutâneo e discromias.",
    whatYouWillLearn: [
      "Tipos e classificação dos peelings químicos",
      "Disfunções estéticas tratáveis com cada tipo de peeling",
      "Avaliação clínica e anamnese",
      "Cosmetologia aplicada e linhas comerciais",
      "Protocolos completos: preparação, aplicação, manutenção e recomendações pré e pós-peeling",
      "Associações com outros tratamentos",
      "Contraindicações e intercorrências",
      "Planejamento de planos de tratamento estratégicos"
    ],
    courseInfo: [
      "Carga horária: 8h (1 dia)",
      "Horário: 9:00 às 17:00",
      "Aulas práticas com modelos disponibilizados",
      "Material didático e certificado inclusos",
      "Suporte pós-curso"
    ]
  },
  {
    id: "limpeza-peeling",
    title: "Limpeza de Pele Premium + Peeling de Diamante + Fototerapia",
    image: limpezaPeeling,
    description: "Técnicas completas de limpeza de pele para resultados visíveis e fidelização de clientes",
    duration: "16h",
    level: "Nível 3 - Especialização",
    category: "Estética Facial",
    cashPrice: 790,
    installmentPrice: 890,
    whatYouWillLearn: [
      "Limpeza multifuncional com extração",
      "Peeling de diamante e fototerapia",
      "Eletroterapia direcionada",
      "Tratamentos complementares para acne, desidratação e rosácea",
      "Cosmetologia aplicada e consultoria home care",
      "Biossegurança e precificação"
    ],
    courseInfo: [
      "2 dias / 16h (9h às 16:30)",
      "Aulas teóricas e práticas 100% presenciais",
      "Turmas pequenas, material didático e certificado inclusos",
      "Modelos disponibilizados"
    ]
  },
  {
    id: "estetica-facial-master",
    title: "Estética Facial Master – Pacote Completo",
    image: esteticaFacialMaster,
    highlighted: true,
    description: "Curso intensivo para dominar as principais técnicas de estética facial",
    duration: "32h",
    level: "Nível 4 - Master",
    category: "Estética Facial",
    cashPrice: 1450,
    installmentPrice: 1600,
    whatYouWillLearn: [
      "Limpeza de pele com extração e protocolos para acne, rosácea, desidratação e envelhecimento",
      "Peeling de diamante e fototerapia com LED profissional",
      "Peelings químicos estratégicos (clareadores e renovadores)",
      "Microagulhamento manual e elétrico (flacidez, manchas, cicatrizes, poros dilatados, rugas)",
      "Hydra Nutri Gloss (rejuvenescimento labial)"
    ],
    bonuses: [
      "Kit profissional de limpeza de pele",
      "Técnica Hydra Nutri Gloss"
    ],
    courseInfo: [
      "4 dias de aulas presenciais, 32h",
      "Turmas pequenas (máx. 5 alunas)",
      "Modelos disponibilizados",
      "Material didático, certificado e suporte pós-curso"
    ]
  },
  {
    id: "bioestimulador",
    title: "Bioestimulador de Colágeno",
    image: bioestimulador,
    description: "Curso de bioestimulação com técnicas avançadas de injetáveis",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Injetáveis",
    cashPrice: 1700,
    installmentPrice: 1800,
    detailedDescription: "Aprenda técnicas de bioestimulação de colágeno para rejuvenescimento facial e corporal com resultados duradouros.",
    courseInfo: [
      "1 dia presencial, 8h",
      "Modelos disponibilizados",
      "Aulas teóricas e práticas",
      "Material didático, certificado e suporte pós-curso"
    ]
  },
  {
    id: "preenchimento-labial",
    title: "Preenchimento Labial – Russian Lips",
    image: preenchimentoLabial,
    description: "Aprenda a aplicar preenchimento labial com segurança e resultados naturais, volumosos e duradouros",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Injetáveis",
    cashPrice: 1700,
    installmentPrice: 1800,
    whatYouWillLearn: [
      "Anatomia labial e importância para segurança e resultado",
      "Técnica exclusiva de preenchimento para lábios femininos e masculinos",
      "Prevenção e manejo de intercorrências",
      "Anamnese, documentação fotográfica e cuidados pós-procedimento"
    ],
    bonuses: ["Gloss de tratamento profissional"],
    courseInfo: [
      "1 dia presencial, 8h (SÁBADO)",
      "Modelos disponibilizados",
      "Aulas teóricas e práticas",
      "Material didático, certificado e suporte pós-curso",
      "Turmas pequenas para aprendizado personalizado"
    ]
  },
  {
    id: "injetaveis-skinbooster-botox",
    title: "Injetáveis Estéticos (Skinbooster) + Toxina Botulínica Full Face",
    image: injetaveisBotox,
    highlighted: true,
    description: "Aprenda técnicas indispensáveis da estética injetável para tratamentos faciais, corporais e capilares",
    duration: "16h",
    level: "Nível 3 - Especialização",
    category: "Injetáveis",
    cashPrice: 2499,
    installmentPrice: 2599,
    whatYouWillLearn: [
      "Anatomia e envelhecimento facial aplicados aos injetáveis",
      "Mesoterapia/skinbooster: hidratação, firmeza, melasma, lifting, papada, flacidez, celulite, estrias e alopecia",
      "Toxina Botulínica Full Face: aplicação avançada em terço superior, médio, inferior e pescoço",
      "Planejamento de protocolos seguros e personalizados",
      "Cuidados pré e pós-procedimento",
      "Gestão e precificação de atendimentos"
    ],
    courseDifferentials: [
      "Aulas teóricas + prática supervisionada",
      "Turmas pequenas para aprendizado individual",
      "Materiais e insumos inclusos",
      "Certificado, material didático e ebook de mídias sociais"
    ],
    courseInfo: [
      "Carga horária: 16h",
      "Modalidade: Presencial"
    ]
  },
  {
    id: "botox-full-face",
    title: "Toxina Botulínica Full Face",
    image: botoxFullFace,
    description: "Aplicar a toxina botulínica com precisão e resultados naturais",
    duration: "8h",
    level: "Nível 3 - Especialização",
    category: "Injetáveis",
    cashPrice: 2250,
    installmentPrice: 2500,
    detailedDescription: "Curso presencial de 8h, com turmas reduzidas (até 3 alunos), voltado para quem quer aplicar a toxina botulínica com precisão e resultados naturais.",
    whatYouWillLearn: [
      "Anatomia facial e músculos da expressão",
      "Classificação e tratamento de rugas (dinâmicas e estáticas)",
      "Técnicas de marcação full face e profundidade correta da aplicação",
      "Cuidados pré e pós-procedimento e contraindicações",
      "Principais marcas de toxina botulínica e durabilidade dos efeitos"
    ],
    courseDifferentials: [
      "Aulas teóricas e práticas",
      "Prática em simuladores e modelos reais",
      "Material didático, certificado e suporte pós-curso"
    ]
  },
  {
    id: "injetaveis-master",
    title: "Injetáveis Estéticos Master",
    image: injetaveisMasterCurso,
    highlighted: true,
    description: "Formação completa e intensiva em injetáveis: skinbooster, bioestimulador, preenchimento labial e Botox Full Face",
    duration: "40h",
    level: "Nível 4 - Master",
    category: "Injetáveis",
    cashPrice: 5799,
    installmentPrice: 5799,
    detailedDescription: "Formação completa e intensiva para quem quer se destacar na estética avançada! Aprenda, na prática, as principais técnicas injetáveis do mercado.",
    bonuses: ["Curso de Microagulhamento completo (facial, corporal e capilar)"],
    courseDifferentials: [
      "40h presenciais (teoria + prática)",
      "Técnicas seguras e atualizadas",
      "Material didático incluso",
      "Suporte pós-curso"
    ],
    courseInfo: [
      "R$ 5.799 (em até 10x no cartão)",
      "Para pagamento à vista, garanta seu desconto!"
    ]
  },
  {
    id: "jato-plasma-multi",
    title: "Jato de Plasma Multifuncional + Pálpebras Intense",
    image: jatoPlasmaMulti,
    description: "Dominar técnicas avançadas com jato de plasma",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial e Corporal",
    cashPrice: 790,
    installmentPrice: 890,
    detailedDescription: "Curso presencial de 8h, com turmas pequenas (até 3 alunos), voltado para profissionais que querem dominar técnicas avançadas com jato de plasma.",
    whatYouWillLearn: [
      "Fundamentos do plasma e ação sobre a pele",
      "Diferenças entre jato de plasma e eletrocautério",
      "Segurança, parametrização de equipamentos e biossegurança",
      "Técnicas de aplicação pontual e por varredura",
      "Mapeamento personalizado da área de tratamento"
    ],
    courseDifferentials: [
      "Aulas teóricas e práticas em modelos",
      "Professora especialista (dermaticista)",
      "Material didático atualizado, certificado e suporte pós-curso"
    ]
  },
  {
    id: "estetica-olhar",
    title: "Estética do Olhar",
    image: esteticaOlhar,
    highlighted: true,
    description: "Design de sobrancelhas + Extensão de cílios completo em 3 dias intensivos",
    duration: "24h",
    level: "Nível 1 - Fundamentos",
    category: "Beleza e Design",
    cashPrice: 1200,
    installmentPrice: 1300,
    detailedDescription: "O curso Estética do Olhar é a porta de entrada perfeita para quem sonha em começar na área da beleza e conquistar independência profissional. Em 3 dias intensos de imersão prática, você aprenderá as principais técnicas que valorizam o olhar, unindo Design de sobrancelhas e Extensão de cílios. Mesmo que você nunca tenha trabalhado na área, o conteúdo foi desenvolvido passo a passo, com acompanhamento individual, modelos reais e materiais inclusos.",
    whatYouWillLearn: [
      "Design de sobrancelhas com pinça, linha e tesoura",
      "Aplicação de henna e coloração",
      "Spa das sobrancelhas",
      "Extensão de cílios fio a fio",
      "Volumes 2D ao 8D",
      "Mapeamento personalizado",
      "Técnicas de retenção",
      "Efeitos: Doll Eyes, Cat Eyes (Gatinho) e Squirrel (Esquilo)"
    ],
    bonuses: [
      "Material didático e suporte pós-curso",
      "Kit profissional de design"
    ],
    courseInfo: [
      "Duração: 3 dias intensivos — 24h",
      "Turmas reduzidas: máximo 5 alunas",
      "Modelos reais para prática",
      "Acompanhamento individualizado",
      "Material didático incluso",
      "Kit profissional de design incluso",
      "Certificado de conclusão",
      "Suporte pós-curso"
    ],
    personalizedCTA: "Ao final do curso, você sairá preparada para iniciar seus atendimentos, com conhecimento atualizado e segurança para atuar profissionalmente no mercado da beleza."
  },
  {
    id: "ultrassom-hifu",
    title: "Ultrassom Microfocado (HIFU)",
    image: herusHifu,
    description: "Domine a tecnologia HIFU para rejuvenescimento facial e corporal sem cirurgia",
    duration: "8h",
    level: "Nível 2 - Desenvolvimento",
    category: "Estética Facial e Corporal",
    cashPrice: 1600,
    installmentPrice: 1700,
    detailedDescription: "O curso de Ultrassom Microfocado (HIFU) foi desenvolvido para capacitar profissionais e iniciantes da estética que desejam dominar uma das tecnologias mais avançadas em rejuvenescimento facial e corporal. Durante as aulas, você aprenderá desde os fundamentos teóricos até a aplicação prática, entendendo como o HIFU atua nas diferentes camadas da pele, estimulando o colágeno e proporcionando resultados visíveis de lifting sem cirurgia.",
    whatYouWillLearn: [
      "Princípios físicos do ultrassom microfocado (HIFU)",
      "Anatomia facial e corporal aplicada ao procedimento",
      "Indicações e contraindicações clínicas",
      "Protocolos faciais e corporais completos",
      "Ajuste de parâmetros, profundidades e cartuchos",
      "Técnicas para lifting, contorno e firmeza da pele",
      "Cuidados pré e pós-procedimento",
      "Associação com outras terapias estéticas para resultados potencializados"
    ],
    courseInfo: [
      "Duração: 1 dia — 8h",
      "Aulas teóricas e práticas",
      "Prática em modelos reais",
      "Material didático incluso",
      "Certificado de conclusão",
      "Suporte pós-curso",
      "Turmas reduzidas para melhor aprendizado"
    ],
    personalizedCTA: "Ao final do curso, a aluna estará apta a realizar procedimentos com segurança, compreender a individualidade de cada pele e oferecer resultados reais e duradouros com técnica, confiança e excelência."
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
