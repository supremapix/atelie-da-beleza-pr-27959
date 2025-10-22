// Importar todas as imagens
import remocaoLaserMicro from "@/assets/all-courses/remocao-laser-micro.jpg";
import nanoblading from "@/assets/all-courses/nanoblading.jpg";
import shadowShading from "@/assets/all-courses/shadow-shading.jpg";
import microCompleto from "@/assets/all-courses/micro-completo.jpg";
import delineadoOlhos from "@/assets/all-courses/delineado-olhos.jpg";
import microLabial from "@/assets/all-courses/micro-labial.jpg";
import designHenna from "@/assets/all-courses/design-henna.jpg";
import reconstrucaoSobrancelhas from "@/assets/all-courses/reconstrucao-sobrancelhas.jpg";
import esteticaOlhar from "@/assets/all-courses/estetica-olhar.jpg";
import lashIniciante from "@/assets/all-courses/lash-iniciante.jpg";
import lashLifting from "@/assets/all-courses/lash-lifting.jpg";
import depilacaoCeras from "@/assets/all-courses/depilacao-ceras.jpg";
import epilacaoFio from "@/assets/all-courses/epilacao-fio.jpg";
import hydraNutriGloss from "@/assets/all-courses/hydra-nutri-gloss.jpg";
import bbGlow from "@/assets/all-courses/bb-glow.jpg";
import dermaplaning from "@/assets/all-courses/dermaplaning.jpg";
import esteticaFacialMaster from "@/assets/all-courses/estetica-facial-master.jpg";
import limpezaIniciante from "@/assets/all-courses/limpeza-iniciante.jpg";
import limpezaPeeling from "@/assets/all-courses/limpeza-peeling.jpg";
import peelingsQuimicos from "@/assets/all-courses/peelings-quimicos.jpg";
import microagulhamentoFacial from "@/assets/all-courses/microagulhamento-facial.jpg";
import microagulhamentoMaster from "@/assets/all-courses/microagulhamento-master.jpg";
import imersaoCapilar from "@/assets/all-courses/imersao-capilar.jpg";
import radiofrequencia from "@/assets/all-courses/radiofrequencia.jpg";
import ultrassomEstetica from "@/assets/all-courses/ultrassom-estetica.jpg";
import ultrafocus from "@/assets/all-courses/ultrafocus.jpg";
import herusHifu from "@/assets/all-courses/herus-hifu.jpg";
import criolipolise from "@/assets/all-courses/criolipolise.jpg";
import depilacaoLaser from "@/assets/all-courses/depilacao-laser.jpg";
import capacitacaoCompleta from "@/assets/all-courses/capacitacao-completa.jpg";
import capacitacaoCorporal from "@/assets/all-courses/capacitacao-corporal.jpg";
import drenagemLinfatica from "@/assets/all-courses/drenagem-linfatica.jpg";
import massagemModeladora from "@/assets/all-courses/massagem-modeladora.jpg";
import massagemRelaxante from "@/assets/all-courses/massagem-relaxante.jpg";
import skinSpaFacial from "@/assets/all-courses/skin-spa-facial.jpg";
import ventosaterapia from "@/assets/all-courses/ventosaterapia.jpg";
import taping from "@/assets/all-courses/taping.jpg";
import auriculoterapia from "@/assets/all-courses/auriculoterapia.jpg";
import terapiasRelaxantes from "@/assets/all-courses/terapias-relaxantes.jpg";
import cosmetologia from "@/assets/all-courses/cosmetologia.jpg";
import injetaveisBotox from "@/assets/all-courses/injetaveis-botox.jpg";
import injetaveisMasterCurso from "@/assets/all-courses/injetaveis-master-curso.jpg";
import bioestimulador from "@/assets/all-courses/bioestimulador.jpg";
import botoxFullFace from "@/assets/all-courses/botox-full-face.jpg";
import botoxTercoSuperior from "@/assets/all-courses/botox-terco-superior.jpg";
import preenchimentoLabial from "@/assets/all-courses/preenchimento-labial.jpg";
import jatoPlasma30 from "@/assets/all-courses/jato-plasma-30.jpg";
import jatoPlasmaMulti from "@/assets/all-courses/jato-plasma-multi.jpg";
import posOperatorioDrenagem from "@/assets/all-courses/pos-operatorio-drenagem.jpg";
import posOperatorioEletro from "@/assets/all-courses/pos-operatorio-eletro.jpg";

export interface Course {
  id: string;
  title: string;
  image: string;
  highlighted?: boolean;
  description: string;
  duration: string;
  level: string;
  category: string;
}

export const courses: Course[] = [
  { 
    id: "remocao-laser-micro",
    title: "Remoção Laser Micropigmentação", 
    image: remocaoLaserMicro, 
    highlighted: true,
    description: "Aprenda técnicas avançadas de remoção a laser de micropigmentação com segurança e eficiência.",
    duration: "40 horas",
    level: "Avançado",
    category: "Micropigmentação"
  },
  { 
    id: "nanoblading",
    title: "Micropigmentação Nanoblading", 
    image: nanoblading,
    description: "Domine a técnica de nanoblading para sobrancelhas hiper-realistas e naturais.",
    duration: "24 horas",
    level: "Intermediário",
    category: "Micropigmentação"
  },
  { 
    id: "shadow-shading",
    title: "Shadow e Shading", 
    image: shadowShading,
    description: "Técnica de sombreamento para criar sobrancelhas com efeito esfumado e elegante.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Micropigmentação"
  },
  { 
    id: "micro-completo",
    title: "Micropigmentação Completo", 
    image: microCompleto, 
    highlighted: true,
    description: "Curso completo de micropigmentação incluindo todas as técnicas fundamentais e avançadas.",
    duration: "80 horas",
    level: "Todos os níveis",
    category: "Micropigmentação"
  },
  { 
    id: "delineado-olhos",
    title: "Delineado de Olhos", 
    image: delineadoOlhos,
    description: "Aprenda a técnica de micropigmentação de delineado para realçar o olhar.",
    duration: "12 horas",
    level: "Intermediário",
    category: "Micropigmentação"
  },
  { 
    id: "micro-labial",
    title: "Micropigmentação Labial", 
    image: microLabial,
    description: "Técnicas de micropigmentação labial para correção e embelezamento dos lábios.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Micropigmentação"
  },
  { 
    id: "design-henna",
    title: "Design e Henna", 
    image: designHenna,
    description: "Design de sobrancelhas e aplicação de henna para um visual perfeito.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Design de Sobrancelhas"
  },
  { 
    id: "reconstrucao-sobrancelhas",
    title: "Reconstrução de Sobrancelhas", 
    image: reconstrucaoSobrancelhas,
    description: "Técnicas avançadas de reconstrução capilar para sobrancelhas.",
    duration: "20 horas",
    level: "Avançado",
    category: "Design de Sobrancelhas"
  },
  { 
    id: "estetica-olhar",
    title: "Estética do Olhar", 
    image: esteticaOlhar, 
    highlighted: true,
    description: "Curso completo focado em todas as técnicas de embelezamento do olhar.",
    duration: "40 horas",
    level: "Todos os níveis",
    category: "Lashes"
  },
  { 
    id: "lash-iniciante",
    title: "Lash Master Class", 
    image: lashIniciante,
    description: "Domine a arte da extensão de cílios do básico ao avançado.",
    duration: "24 horas",
    level: "Iniciante",
    category: "Lashes"
  },
  { 
    id: "lash-lifting",
    title: "Lash Lifting", 
    image: lashLifting,
    description: "Técnica de curvatura e levantamento de cílios naturais.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Lashes"
  },
  { 
    id: "depilacao-ceras",
    title: "Depilação com Ceras", 
    image: depilacaoCeras,
    description: "Aprenda todas as técnicas de depilação com ceras quentes e frias.",
    duration: "12 horas",
    level: "Iniciante",
    category: "Depilação"
  },
  { 
    id: "epilacao-fio",
    title: "Epilação com Fio", 
    image: epilacaoFio,
    description: "Técnica milenar de epilação com fio para design perfeito de sobrancelhas.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Depilação"
  },
  { 
    id: "hydra-nutri-gloss",
    title: "Hydra Nutri Gloss", 
    image: hydraNutriGloss,
    description: "Técnica de hidratação labial profunda com efeito glossy.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Estética Facial"
  },
  { 
    id: "bb-glow",
    title: "BB Glow", 
    image: bbGlow,
    description: "Tratamento de base natural na pele com microagulhamento.",
    duration: "12 horas",
    level: "Intermediário",
    category: "Estética Facial"
  },
  { 
    id: "dermaplaning",
    title: "Dermaplaning Glow", 
    image: dermaplaning,
    description: "Técnica de esfoliação facial profunda com bisturi para pele radiante.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Estética Facial"
  },
  { 
    id: "estetica-facial-master",
    title: "Estética Facial Master", 
    image: esteticaFacialMaster, 
    highlighted: true,
    description: "Formação completa em estética facial com todas as técnicas essenciais.",
    duration: "120 horas",
    level: "Todos os níveis",
    category: "Estética Facial"
  },
  { 
    id: "limpeza-iniciante",
    title: "Limpeza de Pele", 
    image: limpezaIniciante,
    description: "Fundamentos da limpeza de pele profunda e profissional.",
    duration: "16 horas",
    level: "Iniciante",
    category: "Estética Facial"
  },
  { 
    id: "limpeza-peeling",
    title: "Limpeza + Peeling", 
    image: limpezaPeeling,
    description: "Combine limpeza profunda com peelings para resultados potencializados.",
    duration: "20 horas",
    level: "Intermediário",
    category: "Estética Facial"
  },
  { 
    id: "peelings-quimicos",
    title: "Peelings Químicos", 
    image: peelingsQuimicos,
    description: "Domine diversos tipos de peelings químicos e suas aplicações.",
    duration: "24 horas",
    level: "Avançado",
    category: "Estética Facial"
  },
  { 
    id: "microagulhamento-facial",
    title: "Microagulhamento Facial", 
    image: microagulhamentoFacial,
    description: "Técnica de rejuvenescimento facial com microagulhas.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Estética Facial"
  },
  { 
    id: "microagulhamento-master",
    title: "Microagulhamento Master", 
    image: microagulhamentoMaster,
    description: "Formação completa em microagulhamento facial e corporal.",
    duration: "32 horas",
    level: "Avançado",
    category: "Estética Facial"
  },
  { 
    id: "imersao-capilar",
    title: "Imersão Capilar", 
    image: imersaoCapilar,
    description: "Tratamentos capilares profissionais e técnicas de recuperação capilar.",
    duration: "24 horas",
    level: "Intermediário",
    category: "Estética Capilar"
  },
  { 
    id: "radiofrequencia",
    title: "Radiofrequência", 
    image: radiofrequencia,
    description: "Tratamento de rejuvenescimento e firmeza com radiofrequência.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Estética Corporal"
  },
  { 
    id: "ultrassom-estetica",
    title: "Ultrassom Estética", 
    image: ultrassomEstetica,
    description: "Aplicação de ultrassom para tratamentos estéticos faciais e corporais.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Estética Corporal"
  },
  { 
    id: "ultrafocus",
    title: "Ultrafocus", 
    image: ultrafocus,
    description: "Tecnologia de ultrassom microfocado para lifting facial.",
    duration: "20 horas",
    level: "Avançado",
    category: "Estética Facial"
  },
  { 
    id: "herus-hifu",
    title: "HERUS HIFU", 
    image: herusHifu, 
    highlighted: true,
    description: "Protocolo avançado de HIFU para lifting não invasivo.",
    duration: "24 horas",
    level: "Avançado",
    category: "Estética Facial"
  },
  { 
    id: "criolipolise",
    title: "Criolipólise", 
    image: criolipolise, 
    highlighted: true,
    description: "Técnica de redução de gordura localizada por congelamento.",
    duration: "24 horas",
    level: "Avançado",
    category: "Estética Corporal"
  },
  { 
    id: "depilacao-laser",
    title: "Depilação Laser", 
    image: depilacaoLaser,
    description: "Formação em depilação a laser de última geração.",
    duration: "32 horas",
    level: "Avançado",
    category: "Depilação"
  },
  { 
    id: "capacitacao-completa",
    title: "Capacitação Completa", 
    image: capacitacaoCompleta,
    description: "Formação completa em estética com todos os módulos integrados.",
    duration: "200 horas",
    level: "Todos os níveis",
    category: "Formação Completa"
  },
  { 
    id: "capacitacao-corporal",
    title: "Capacitação Corporal", 
    image: capacitacaoCorporal,
    description: "Especialização completa em estética corporal.",
    duration: "80 horas",
    level: "Intermediário",
    category: "Estética Corporal"
  },
  { 
    id: "drenagem-linfatica",
    title: "Drenagem Linfática", 
    image: drenagemLinfatica,
    description: "Técnicas de drenagem linfática manual e modeladora.",
    duration: "24 horas",
    level: "Iniciante",
    category: "Massoterapia"
  },
  { 
    id: "massagem-modeladora",
    title: "Massagem Modeladora", 
    image: massagemModeladora,
    description: "Massagem para modelagem corporal e redução de medidas.",
    duration: "20 horas",
    level: "Intermediário",
    category: "Massoterapia"
  },
  { 
    id: "massagem-relaxante",
    title: "Massagem Relaxante", 
    image: massagemRelaxante,
    description: "Técnicas de massagem para relaxamento e bem-estar.",
    duration: "16 horas",
    level: "Iniciante",
    category: "Massoterapia"
  },
  { 
    id: "skin-spa-facial",
    title: "Skin Spa Facial", 
    image: skinSpaFacial,
    description: "Protocolos de spa facial para tratamentos relaxantes.",
    duration: "24 horas",
    level: "Intermediário",
    category: "Estética Facial"
  },
  { 
    id: "ventosaterapia",
    title: "Ventosaterapia", 
    image: ventosaterapia,
    description: "Terapia com ventosas para diversos tratamentos estéticos.",
    duration: "12 horas",
    level: "Iniciante",
    category: "Terapias"
  },
  { 
    id: "taping",
    title: "Taping", 
    image: taping,
    description: "Aplicação de bandagens estéticas para diversos fins.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Terapias"
  },
  { 
    id: "auriculoterapia",
    title: "Auriculoterapia", 
    image: auriculoterapia,
    description: "Técnica de acupuntura auricular para diversos tratamentos.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Terapias"
  },
  { 
    id: "terapias-relaxantes",
    title: "Terapias Relaxantes", 
    image: terapiasRelaxantes,
    description: "Conjunto de terapias para relaxamento e bem-estar.",
    duration: "32 horas",
    level: "Iniciante",
    category: "Terapias"
  },
  { 
    id: "cosmetologia",
    title: "Cosmetologia", 
    image: cosmetologia,
    description: "Estudo completo de cosméticos e suas aplicações na estética.",
    duration: "40 horas",
    level: "Intermediário",
    category: "Formação Completa"
  },
  { 
    id: "injetaveis-botox",
    title: "Injetáveis Botox", 
    image: injetaveisBotox, 
    highlighted: true,
    description: "Formação em aplicação de toxina botulínica com segurança e precisão.",
    duration: "24 horas",
    level: "Avançado",
    category: "Injetáveis"
  },
  { 
    id: "injetaveis-master",
    title: "Injetáveis Master", 
    image: injetaveisMasterCurso, 
    highlighted: true,
    description: "Curso master completo de injetáveis: botox e preenchedores.",
    duration: "60 horas",
    level: "Avançado",
    category: "Injetáveis"
  },
  { 
    id: "bioestimulador",
    title: "Bioestimulador", 
    image: bioestimulador, 
    highlighted: true,
    description: "Técnicas de aplicação de bioestimuladores de colágeno.",
    duration: "16 horas",
    level: "Avançado",
    category: "Injetáveis"
  },
  { 
    id: "botox-full-face",
    title: "Botox Full Face", 
    image: botoxFullFace, 
    highlighted: true,
    description: "Aplicação de botox em face completa com protocolos avançados.",
    duration: "20 horas",
    level: "Avançado",
    category: "Injetáveis"
  },
  { 
    id: "botox-terco-superior",
    title: "Botox Terço Superior", 
    image: botoxTercoSuperior, 
    highlighted: true,
    description: "Especialização em botox para terço superior da face.",
    duration: "16 horas",
    level: "Avançado",
    category: "Injetáveis"
  },
  { 
    id: "preenchimento-labial",
    title: "Preenchimento Labial", 
    image: preenchimentoLabial, 
    highlighted: true,
    description: "Técnicas de preenchimento labial com ácido hialurônico.",
    duration: "16 horas",
    level: "Avançado",
    category: "Injetáveis"
  },
  { 
    id: "jato-plasma-30",
    title: "Jato de Plasma 3.0", 
    image: jatoPlasma30,
    description: "Tecnologia de jato de plasma para diversos tratamentos.",
    duration: "16 horas",
    level: "Avançado",
    category: "Estética Facial"
  },
  { 
    id: "jato-plasma-multi",
    title: "Jato Plasma Multi", 
    image: jatoPlasmaMulti,
    description: "Protocolos múltiplos com jato de plasma.",
    duration: "20 horas",
    level: "Avançado",
    category: "Estética Facial"
  },
  { 
    id: "pos-operatorio-drenagem",
    title: "Pós-Operatório Drenagem", 
    image: posOperatorioDrenagem,
    description: "Drenagem linfática especializada em pós-operatório.",
    duration: "24 horas",
    level: "Intermediário",
    category: "Massoterapia"
  },
  { 
    id: "pos-operatorio-eletro",
    title: "Pós-Operatório Eletro", 
    image: posOperatorioEletro,
    description: "Eletroterapia para recuperação pós-operatória.",
    duration: "20 horas",
    level: "Intermediário",
    category: "Estética Corporal"
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
