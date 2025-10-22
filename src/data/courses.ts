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
  includes?: string[];
  videoUrl?: string;
  detailedDescription?: string;
  personalizedCTA?: string;
}

export const courses: Course[] = [
  // PACOTES DE BELEZA
  { 
    id: "estetica-olhar",
    title: "Estética do Olhar", 
    image: esteticaOlhar, 
    highlighted: true,
    description: "Curso completo de design de sobrancelhas e extensão de cílios para dominar todas as técnicas do olhar.",
    duration: "24 horas",
    level: "Todos os níveis",
    category: "Pacotes de Beleza",
    includes: ["Design de sobrancelhas", "Extensão de cílios"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedDescription: "Transforme-se em uma especialista do olhar! Neste curso intensivo, você aprenderá desde o design perfeito de sobrancelhas até as técnicas mais avançadas de extensão de cílios. Com 24 horas de prática supervisionada, você dominará o mapeamento facial, simetria, aplicação fio a fio e técnicas de volume russo. Prepare-se para atender clientes exigentes e construir uma carreira lucrativa na área mais procurada da beleza.",
    personalizedCTA: "Seu sonho de trabalhar com estética do olhar começa agora! Entre em contato e garanta sua vaga neste curso que já transformou centenas de profissionais. Vagas limitadas!"
  },
  { 
    id: "design-expert",
    title: "Design Expert 7.0", 
    image: designHenna, 
    highlighted: true,
    description: "Formação completa em design de sobrancelhas incluindo reconstrução, brow lamination, spa e depilação egípcia.",
    duration: "16 horas",
    level: "Todos os níveis",
    category: "Pacotes de Beleza",
    includes: ["Design de sobrancelhas", "Reconstrução de sobrancelhas", "Brow lamination", "Spa das sobrancelhas", "Depilação egípcia (fio)"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedDescription: "O curso mais completo de design de sobrancelhas do mercado! Aprenda todas as tendências e técnicas: desde o design clássico até a brow lamination que está conquistando o mundo. Com certificação reconhecida e prática intensiva, você sairá preparada para atender desde clientes iniciantes até as mais exigentes. Inclui técnicas de reconstrução para sobrancelhas danificadas e protocolos de spa para tratamento completo.",
    personalizedCTA: "Torne-se uma Design Expert e destaque-se no mercado! Fale conosco agora e descubra como podemos transformar sua carreira em apenas 16 horas de formação intensiva."
  },
  { 
    id: "micropigmentacao-sobrancelhas",
    title: "Micropigmentação de Sobrancelhas 5.0", 
    image: microCompleto,
    highlighted: true,
    description: "Domine as técnicas mais modernas de micropigmentação de sobrancelhas com resultados naturais e duradouros.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Pacotes de Beleza",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedDescription: "Entre no mercado mais lucrativo da beleza! A micropigmentação de sobrancelhas é uma das técnicas mais procuradas e bem remuneradas. Neste curso você aprenderá nanoblading, shadow, ombré e técnicas de correção. Com treino em pele sintética e modelos reais, você sairá preparada para atender com segurança e criar sobrancelhas perfeitas e naturais que suas clientes vão amar.",
    personalizedCTA: "Invista na sua carreira de micropigmentadora! Este curso tem vagas limitadas por turma para garantir atendimento personalizado. Fale conosco agora e reserve sua vaga!"
  },
  { 
    id: "capacitacao-depilacao-ceras",
    title: "Capacitação em Depilação Facial e Corporal 5.0", 
    image: depilacaoCeras,
    description: "Aprenda todas as técnicas de depilação com ceras quentes para atendimento profissional completo.",
    duration: "16 horas",
    level: "Iniciante",
    category: "Pacotes de Beleza"
  },
  { 
    id: "remocao-laser-40",
    title: "Remoção a Laser 4.0", 
    image: remocaoLaserMicro,
    highlighted: true,
    description: "Técnicas completas de remoção a laser, despigmentação elétrica, reparação tecidual e black peel.",
    duration: "16 horas",
    level: "Avançado",
    category: "Pacotes de Beleza",
    includes: ["Laser", "Despigmentação elétrica", "Reparação tecidual", "Black Peel"]
  },

  // AVULSOS DE BELEZA
  { 
    id: "design-sobrancelhas",
    title: "Design de Sobrancelhas", 
    image: designHenna,
    description: "Aprenda a técnica completa de design de sobrancelhas para um visual perfeito.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Avulsos de Beleza"
  },
  { 
    id: "lash-master-class",
    title: "Lash Master Class", 
    image: lashIniciante,
    description: "Domine a arte da extensão de cílios do básico ao avançado.",
    duration: "16 horas",
    level: "Todos os níveis",
    category: "Avulsos de Beleza"
  },
  { 
    id: "depilacao-egipcia",
    title: "Depilação Facial Egípcia", 
    image: epilacaoFio,
    description: "Técnica milenar de epilação com fio para design perfeito de sobrancelhas e rosto.",
    duration: "6 horas",
    level: "Iniciante",
    category: "Avulsos de Beleza"
  },
  { 
    id: "lash-brow-lamination",
    title: "Lash Master Class + Brow Lamination", 
    image: lashLifting,
    description: "Combine extensão de cílios com técnica de laminação de sobrancelhas.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza"
  },
  { 
    id: "micropigmentacao-labial",
    title: "Micropigmentação Labial", 
    image: microLabial,
    description: "Técnicas de micropigmentação labial para correção e embelezamento dos lábios.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza"
  },
  { 
    id: "micropigmentacao-olhos",
    title: "Micropigmentação de Olhos", 
    image: delineadoOlhos,
    description: "Aprenda a técnica de micropigmentação de delineado para realçar o olhar.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza"
  },
  { 
    id: "dermaplaning",
    title: "Dermaplaning", 
    image: dermaplaning,
    description: "Técnica de esfoliação facial profunda com bisturi para pele radiante.",
    duration: "4 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza"
  },

  // PACOTES ESTÉTICA
  { 
    id: "estetica-facial-master",
    title: "Estética Facial Master", 
    image: esteticaFacialMaster, 
    highlighted: true,
    description: "Formação master nas principais técnicas da estética regenerativa: limpeza, protocolos, peelings e microagulhamento.",
    duration: "32 horas",
    level: "Todos os níveis",
    category: "Pacotes Estética",
    includes: ["Limpeza de pele com extração", "Protocolos personalizados", "Peelings químicos estratégicos", "Microagulhamento facial (caneta e manual)"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedDescription: "A formação mais completa em estética facial do Brasil! Em 32 horas intensivas você dominará desde limpezas de pele profundas até peelings químicos avançados e microagulhamento facial. Aprenda a criar protocolos personalizados para cada tipo de pele, trabalhe com os melhores equipamentos e cosméticos do mercado, e torne-se uma referência em tratamentos faciais regenerativos. Inclui certificação master e apostila completa.",
    personalizedCTA: "Esta é a formação que vai transformar sua carreira! Com 32 horas de prática intensiva, você sairá pronta para abrir seu próprio espaço ou trabalhar nas melhores clínicas. Não perca esta oportunidade, fale conosco agora!"
  },
  { 
    id: "limpeza-pele-premium",
    title: "Limpeza de Pele Premium", 
    image: limpezaPeeling,
    description: "Limpeza profunda com extração, protocolos personalizados e peeling de diamante.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Pacotes Estética",
    includes: ["Limpeza de pele com extração", "Protocolos personalizados", "Peeling de diamante"]
  },
  { 
    id: "microagulhamento-master",
    title: "Microagulhamento Master", 
    image: microagulhamentoMaster,
    highlighted: true,
    description: "Formação completa em microagulhamento capilar, facial e corporal.",
    duration: "8 horas",
    level: "Avançado",
    category: "Pacotes Estética"
  },
  { 
    id: "capacitacao-facial-corporal",
    title: "Capacitação em Estética Facial e Corporal", 
    image: capacitacaoCompleta, 
    highlighted: true,
    description: "Formação completa integrando técnicas faciais e corporais para atendimento profissional abrangente.",
    duration: "56 horas",
    level: "Todos os níveis",
    category: "Pacotes Estética",
    includes: ["Limpeza de pele com extração", "Protocolos personalizados", "Peelings químicos estratégicos", "Microagulhamento facial", "Drenagem linfática", "Massagem modeladora", "Massagem relaxante com bambuterapia"]
  },
  { 
    id: "capacitacao-corporal",
    title: "Capacitação em Estética Corporal", 
    image: capacitacaoCorporal,
    description: "Especialização completa em estética corporal com técnicas de massagem e modelagem.",
    duration: "24 horas",
    level: "Intermediário",
    category: "Pacotes Estética",
    includes: ["Drenagem linfática", "Massagem modeladora", "Massagem relaxante com bambuterapia"]
  },
  { 
    id: "terapias-relaxantes",
    title: "Terapias Relaxantes", 
    image: terapiasRelaxantes,
    description: "Conjunto completo de terapias para relaxamento, bem-estar e spa.",
    duration: "24 horas",
    level: "Iniciante",
    category: "Pacotes Estética",
    includes: ["Massagem relaxante com crânio facial", "Ventosaterapia", "Pedras quentes", "Spa dos pés"]
  },
  { 
    id: "tratamentos-equipamentos-corporais",
    title: "Tratamentos Faciais com Principais Equipamentos", 
    image: skinSpaFacial,
    description: "Aprenda a operar os principais equipamentos de estética corporal profissional.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Pacotes Estética"
  },
  { 
    id: "injetaveis-esteticos",
    title: "Injetáveis Estéticos", 
    image: injetaveisBotox, 
    highlighted: true,
    description: "Formação em mesoterapia (skinbooster) e toxina botulínica full face.",
    duration: "16 horas",
    level: "Avançado",
    category: "Pacotes Estética",
    includes: ["Skinbooster", "Botox Full Face"]
  },
  { 
    id: "injetaveis-master",
    title: "Injetáveis Master", 
    image: injetaveisMasterCurso, 
    highlighted: true,
    description: "Curso master completo de injetáveis avançados: skinbooster, botox, bioestimulador e preenchimento.",
    duration: "16 horas",
    level: "Avançado",
    category: "Pacotes Estética",
    includes: ["Skinbooster (Mesoterapia)", "Botox Full Face", "Bioestimulador de colágeno", "Preenchimento labial"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedDescription: "Entre no mercado premium da estética com o curso mais completo de injetáveis! Aprenda as técnicas mais avançadas de aplicação de toxina botulínica, preenchimento labial, bioestimuladores de colágeno e skinboosters. Com prática em modelos reais e supervisão especializada, você dominará anatomia facial, técnicas de aplicação segura e protocolos que garantem resultados naturais. Este curso é seu passaporte para um mercado de alta remuneração.",
    personalizedCTA: "Dê o próximo passo na sua carreira! O mercado de injetáveis estéticos está em crescimento exponencial. Garanta sua vaga neste curso exclusivo e comece a atender já no próximo mês. Entre em contato agora!"
  },
  { 
    id: "imersao-pos-operatorio",
    title: "Imersão em Pós Operatório", 
    image: posOperatorioDrenagem,
    description: "Especialização em drenagem pós-operatória e taping para recuperação cirúrgica.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Pacotes Estética",
    includes: ["Drenagem pós operatório", "Taping"]
  },

  // CURSOS AVULSOS INDIVIDUAIS
  { 
    id: "limpeza-pele-iniciante",
    title: "Limpeza de Pele Iniciante", 
    image: limpezaIniciante,
    description: "Fundamentos da limpeza de pele profunda e profissional para iniciantes.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Cursos Individuais"
  },
  { 
    id: "reconstrucao-sobrancelhas",
    title: "Reconstrução de Sobrancelhas", 
    image: reconstrucaoSobrancelhas,
    description: "Técnicas avançadas de reconstrução capilar para sobrancelhas.",
    duration: "5 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "hydra-nutri-gloss",
    title: "Hydra Nutri Gloss", 
    image: hydraNutriGloss,
    description: "Técnica de hidratação labial profunda com efeito glossy.",
    duration: "4 horas",
    level: "Iniciante",
    category: "Cursos Individuais"
  },
  { 
    id: "bb-glow-hydra",
    title: "BB Glow + Hydra Nutri Gloss", 
    image: bbGlow,
    description: "Combine tratamento de base natural na pele com hidratação labial glossy.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais"
  },
  { 
    id: "peelings-quimicos",
    title: "Peelings Químicos Estratégicos Multinivels", 
    image: peelingsQuimicos,
    description: "Domine diversos tipos de peelings químicos e suas aplicações estratégicas.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "microagulhamento-facial",
    title: "Microagulhamento Facial", 
    image: microagulhamentoFacial,
    description: "Técnica de rejuvenescimento facial com microagulhas.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais"
  },
  { 
    id: "imersao-capilar",
    title: "Imersão Capilar", 
    image: imersaoCapilar,
    description: "Tratamentos capilares profissionais e técnicas de recuperação capilar.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais"
  },
  { 
    id: "radiofrequencia",
    title: "Radiofrequência", 
    image: radiofrequencia,
    description: "Tratamento facial e corporal convencional de rejuvenescimento e firmeza com radiofrequência.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais"
  },
  { 
    id: "ultrafocus",
    title: "Ultrassom Micro a Macrofocalizado (Ultrafocus)", 
    image: ultrafocus,
    description: "Tecnologia de ultrassom microfocalizado para lifting facial não invasivo.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "herus-hifu",
    title: "Ultrassom Micro a Macrofocado (Herus Hifu)", 
    image: herusHifu,
    description: "Protocolo avançado de HIFU para lifting não invasivo com resultados duradouros.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "capacitacao-depilacao-laser",
    title: "Capacitação em Depilação a Laser", 
    image: depilacaoLaser,
    description: "Formação completa em depilação a laser de última geração.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "drenagem-linfatica",
    title: "Drenagem Linfática Corporal", 
    image: drenagemLinfatica,
    description: "Técnicas de drenagem linfática manual e modeladora corporal.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Cursos Individuais"
  },
  { 
    id: "massagem-modeladora",
    title: "Massagem Modeladora Corporal", 
    image: massagemModeladora,
    description: "Massagem para modelagem corporal e redução de medidas.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais"
  },
  { 
    id: "massagem-relaxante",
    title: "Massagem Relaxante com Crânio Facial e Bambuterapia", 
    image: massagemRelaxante,
    description: "Técnicas de massagem para relaxamento profundo e bem-estar completo.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Cursos Individuais"
  },
  { 
    id: "ventosaterapia",
    title: "Ventosaterapia", 
    image: ventosaterapia,
    description: "Terapia com ventosas para diversos tratamentos estéticos e terapêuticos.",
    duration: "4 horas",
    level: "Iniciante",
    category: "Cursos Individuais"
  },
  { 
    id: "taping",
    title: "Taping", 
    image: taping,
    description: "Aplicação de bandagens estéticas para diversos fins terapêuticos e estéticos.",
    duration: "5 horas",
    level: "Iniciante",
    category: "Cursos Individuais"
  },
  { 
    id: "cosmetologia",
    title: "Cosmetologia Estética", 
    image: cosmetologia,
    description: "Estudo completo de cosméticos e suas aplicações na estética profissional.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais"
  },
  { 
    id: "bioestimulador",
    title: "Bioestimulador de Colágeno", 
    image: bioestimulador,
    description: "Técnicas de aplicação de bioestimuladores de colágeno para rejuvenescimento.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "botox-full-face",
    title: "Toxina Botulínica (Full Face)", 
    image: botoxFullFace,
    description: "Aplicação de toxina botulínica em face completa com protocolos avançados.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "preenchimento-labial",
    title: "Preenchimento Labial", 
    image: preenchimentoLabial,
    description: "Técnicas de preenchimento labial com ácido hialurônico para resultados naturais.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
  { 
    id: "jato-plasma-multi",
    title: "Jato de Plasma Multifuncional", 
    image: jatoPlasmaMulti,
    description: "Protocolos múltiplos com jato de plasma para diversos tratamentos estéticos.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais"
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
