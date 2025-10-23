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
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
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
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
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
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
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
    category: "Pacotes de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine a arte da depilação profissional! Neste curso completo você aprenderá todas as técnicas de depilação facial e corporal com ceras quentes e frias. Inclui preparação da pele, manejo de diferentes tipos de cera, higienização, e atendimento de áreas sensíveis. Com prática supervisionada, você sairá preparada para oferecer um serviço completo e de qualidade aos seus clientes.",
    personalizedCTA: "Comece sua carreira com um dos serviços mais procurados da beleza! A depilação profissional garante clientela fixa e recorrente. Fale conosco e inicie já!"
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
    includes: ["Laser", "Despigmentação elétrica", "Reparação tecidual", "Black Peel"],
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Seja especialista em remoção e correção! Este curso avançado ensina todas as técnicas de remoção a laser de micropigmentação e tatuagens, além de despigmentação elétrica e black peel. Com 16 horas de prática intensiva, você aprenderá a trabalhar com diferentes tipos de pele, cores de pigmentos e protocolos de segurança. Prepare-se para atender um mercado crescente de clientes que precisam de correção e remoção.",
    personalizedCTA: "A remoção a laser é uma das especialidades mais lucrativas! Poucos profissionais dominam esta técnica. Entre em contato agora e seja referência na sua região!"
  },

  // AVULSOS DE BELEZA
  { 
    id: "design-sobrancelhas",
    title: "Design de Sobrancelhas", 
    image: designHenna,
    description: "Aprenda a técnica completa de design de sobrancelhas para um visual perfeito.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Avulsos de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Comece sua jornada na estética com o curso de design de sobrancelhas! Aprenda simetria facial, técnicas de medição, depilação com pinça e cera, e coloração com henna. Este curso é perfeito para iniciantes e oferece uma base sólida para você começar a atender com confiança. Em apenas 8 horas você estará pronta para transformar o olhar das suas clientes!",
    personalizedCTA: "Inicie sua carreira na beleza com o curso mais procurado! Design de sobrancelhas é rápido de aprender e tem alta demanda. Garanta sua vaga agora!"
  },
  { 
    id: "lash-master-class",
    title: "Lash Master Class", 
    image: lashIniciante,
    description: "Domine a arte da extensão de cílios do básico ao avançado.",
    duration: "16 horas",
    level: "Todos os níveis",
    category: "Avulsos de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Transforme-se em uma Lash Designer profissional! Aprenda todas as técnicas de extensão de cílios: fio a fio clássico, volume russo, mega volume e técnicas híbridas. Com 16 horas de treinamento intensivo, você dominará a curvatura perfeita, mapeamento de olhos, escolha de fios ideais e aplicação segura. Inclui prática em modelos reais com supervisão especializada e certificado reconhecido nacionalmente.",
    personalizedCTA: "Seja uma especialista em extensão de cílios! Este é um dos serviços mais lucrativos da beleza, com clientes fiéis e retorno garantido. Entre em contato e comece sua transformação profissional!"
  },
  { 
    id: "depilacao-egipcia",
    title: "Depilação Facial Egípcia", 
    image: epilacaoFio,
    description: "Técnica milenar de epilação com fio para design perfeito de sobrancelhas e rosto.",
    duration: "6 horas",
    level: "Iniciante",
    category: "Avulsos de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine a técnica milenar da depilação egípcia com fio! Esta técnica precisa e delicada é perfeita para design de sobrancelhas, buço e rosto completo. Aprenda a manusear o fio com destreza, criar designs perfeitos e atender com agilidade. Em apenas 6 horas você estará pronta para oferecer este serviço diferenciado que encanta as clientes pela precisão e durabilidade.",
    personalizedCTA: "Adicione uma técnica exclusiva ao seu portfólio! A depilação egípcia é muito procurada e poucos profissionais dominam. Destaque-se no mercado!"
  },
  { 
    id: "lash-brow-lamination",
    title: "Lash Master Class + Brow Lamination", 
    image: lashLifting,
    description: "Combine extensão de cílios com técnica de laminação de sobrancelhas.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Combine as duas técnicas mais modernas do olhar! Neste curso você aprenderá lash lifting (permanente de cílios) e brow lamination (laminação de sobrancelhas). São procedimentos que deixam os pelos naturalmente mais volumosos, alinhados e com curvatura perfeita. Ideal para quem quer oferecer tratamentos de baixa manutenção com efeito duradouro que as clientes adoram!",
    personalizedCTA: "Ofereça o combo perfeito para suas clientes! Lash lifting e brow lamination são as técnicas do momento. Aprenda em um único curso e multiplique seus ganhos!"
  },
  { 
    id: "micropigmentacao-labial",
    title: "Micropigmentação Labial", 
    image: microLabial,
    description: "Técnicas de micropigmentação labial para correção e embelezamento dos lábios.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Especialize-se em micropigmentação labial! Aprenda técnicas de contorno, preenchimento total, correção de assimetrias e aquarela labial. Com 16 horas de treino intensivo você dominará colorimetria labial, escolha de pigmentos, técnicas de aplicação e cicatrização. Este procedimento tem alta demanda e excelente remuneração, sendo um diferencial importante no seu portfólio.",
    personalizedCTA: "Lábios perfeitos são o desejo de toda mulher! Torne-se especialista em micropigmentação labial e conquiste um nicho premium. Vagas limitadas, garanta a sua!"
  },
  { 
    id: "micropigmentacao-olhos",
    title: "Micropigmentação de Olhos", 
    image: delineadoOlhos,
    description: "Aprenda a técnica de micropigmentação de delineado para realçar o olhar.",
    duration: "16 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine a técnica refinada de micropigmentação de olhos! Aprenda delineado superior, inferior, esfumado e técnicas de preenchimento de cílios. Com 16 horas de prática você desenvolverá precisão, simetria e conhecimento profundo da anatomia ocular. Este é um procedimento delicado que requer treinamento especializado - seja uma das poucas profissionais certificadas!",
    personalizedCTA: "Micropigmentação de olhos é uma arte refinada e muito valorizada! Poucos profissionais têm esta especialização. Destaque-se e conquiste clientes exigentes!"
  },
  { 
    id: "dermaplaning",
    title: "Dermaplaning", 
    image: dermaplaning,
    description: "Técnica de esfoliação facial profunda com bisturi para pele radiante.",
    duration: "4 horas",
    level: "Intermediário",
    category: "Avulsos de Beleza",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Aprenda a técnica de dermaplaning que está conquistando o mundo! Esta esfoliação profunda com bisturi remove células mortas e pelos faciais, deixando a pele incrivelmente lisa e radiante. Em 4 horas você aprenderá técnica, ângulos corretos, protocolos de segurança e como combinar com outros tratamentos. Resultado imediato que as clientes adoram!",
    personalizedCTA: "Dermaplaning é a técnica do momento! Resultados instantâneos, procedimento rápido e clientes satisfeitas. Aprenda agora e adicione ao seu menu de tratamentos!"
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
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
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
    includes: ["Limpeza de pele com extração", "Protocolos personalizados", "Peeling de diamante"],
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Torne-se especialista em limpeza de pele premium! Este curso ensina limpeza profunda profissional com extração, protocolos personalizados para cada tipo de pele e peeling de diamante. Com 16 horas de treinamento prático, você aprenderá a avaliar a pele, escolher produtos adequados e realizar procedimentos que deixam a pele renovada e radiante. Inclui técnicas de higienização, extração segura e finalização.",
    personalizedCTA: "Limpeza de pele é o tratamento facial mais procurado! Aprenda a versão premium e fidelize suas clientes com resultados incríveis. Entre em contato!"
  },
  { 
    id: "microagulhamento-master",
    title: "Microagulhamento Master", 
    image: microagulhamentoMaster,
    highlighted: true,
    description: "Formação completa em microagulhamento capilar, facial e corporal.",
    duration: "8 horas",
    level: "Avançado",
    category: "Pacotes Estética",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine o microagulhamento em todas as suas aplicações! Aprenda técnicas faciais para rejuvenescimento, capilares para queda de cabelo e calvície, e corporais para estrias e flacidez. Com 8 horas intensivas você dominará manejo de caneta e dermapen, profundidades corretas, protocolos com ativos e cuidados pós-procedimento. Certificação master reconhecida!",
    personalizedCTA: "Microagulhamento é o tratamento regenerativo mais procurado! Seja master e atenda facial, capilar e corporal. Vagas limitadas, garanta já!"
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
    includes: ["Limpeza de pele com extração", "Protocolos personalizados", "Peelings químicos estratégicos", "Microagulhamento facial", "Drenagem linfática", "Massagem modeladora", "Massagem relaxante com bambuterapia"],
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "A capacitação mais completa do mercado! Em 56 horas você dominará estética facial E corporal, tornando-se uma profissional completa. Inclui limpezas de pele, peelings, microagulhamento facial, drenagem linfática, massagem modeladora e bambuterapia. Saia preparada para abrir seu próprio espaço de estética com serviços diversificados ou trabalhar nas melhores clínicas do país!",
    personalizedCTA: "Seja uma esteticista completa! Esta formação intensiva de 56 horas te prepara para atender de forma integral. Invista na sua carreira, fale conosco!"
  },
  { 
    id: "capacitacao-corporal",
    title: "Capacitação em Estética Corporal", 
    image: capacitacaoCorporal,
    description: "Especialização completa em estética corporal com técnicas de massagem e modelagem.",
    duration: "24 horas",
    level: "Intermediário",
    category: "Pacotes Estética",
    includes: ["Drenagem linfática", "Massagem modeladora", "Massagem relaxante com bambuterapia"],
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Especialize-se em estética corporal! Em 24 horas você aprenderá as três técnicas mais procuradas: drenagem linfática para desintoxicação e redução de medidas, massagem modeladora para contorno corporal, e massagem relaxante com bambuterapia para bem-estar. Saia preparada para atender diversos objetivos das clientes e construir uma cartela fiel de clientes corporais.",
    personalizedCTA: "Estética corporal está em alta! Clientes buscam cada vez mais tratamentos corporais. Torne-se especialista e conquiste este mercado lucrativo!"
  },
  { 
    id: "terapias-relaxantes",
    title: "Terapias Relaxantes", 
    image: terapiasRelaxantes,
    description: "Conjunto completo de terapias para relaxamento, bem-estar e spa.",
    duration: "24 horas",
    level: "Iniciante",
    category: "Pacotes Estética",
    includes: ["Massagem relaxante com crânio facial", "Ventosaterapia", "Pedras quentes", "Spa dos pés"],
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Transforme vidas através do relaxamento! Aprenda massagem relaxante completa com técnicas de crânio facial, ventosaterapia terapêutica, pedras quentes e spa dos pés. Em 24 horas você dominará protocolos de bem-estar que aliviam stress, tensões musculares e promovem saúde integral. Perfeito para quem quer trabalhar com qualidade de vida e terapias holísticas.",
    personalizedCTA: "O mercado de bem-estar está crescendo exponencialmente! Ofereça terapias relaxantes e conquiste clientes que buscam saúde e equilíbrio. Comece agora!"
  },
  { 
    id: "tratamentos-equipamentos-corporais",
    title: "Tratamentos Faciais com Principais Equipamentos", 
    image: skinSpaFacial,
    description: "Aprenda a operar os principais equipamentos de estética corporal profissional.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Pacotes Estética",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine os equipamentos de última geração! Aprenda a operar e criar protocolos com os principais equipamentos faciais: radiofrequência, ultrassom, microc correntes, LED terapia e mais. Em 8 horas você entenderá a física dos equipamentos, indicações, contraindicações e como maximizar resultados. Essencial para quem quer oferecer tratamentos avançados!",
    personalizedCTA: "Equipamentos de estética multiplicam seus ganhos! Aprenda a usar tecnologia de ponta e cobre mais pelos tratamentos. Invista no seu futuro!"
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
    includes: ["Skinbooster", "Botox Full Face"],
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Entre no mundo dos injetáveis estéticos! Aprenda skinbooster (mesoterapia) para hidratação e rejuvenescimento profundo da pele, e toxina botulínica full face para suavização de rugas. Com 16 horas de treinamento você dominará anatomia facial, pontos de aplicação, dosagens e técnicas seguras. Este curso abre portas para um dos mercados mais valorizados da estética avançada.",
    personalizedCTA: "Injetáveis estéticos são o futuro da estética! Alta remuneração e clientes fiéis. Comece sua jornada neste mercado premium hoje mesmo!"
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
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
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
    includes: ["Drenagem pós operatório", "Taping"],
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Especialize-se em pós-operatório! Aprenda drenagem linfática específica para recuperação de cirurgias plásticas e taping estético para redução de edemas e aderências. Em 8 horas você dominará manobras específicas, protocolos por tipo de cirurgia e cuidados essenciais. Este é um nicho altamente lucrativo com demanda constante de clínicas e cirurgiões plásticos.",
    personalizedCTA: "Pós-operatório é um nicho premium! Trabalhe com cirurgiões plásticos e tenha uma agenda lotada. Especialize-se agora e destaque-se no mercado!"
  },

  // CURSOS AVULSOS INDIVIDUAIS
  { 
    id: "limpeza-pele-iniciante",
    title: "Limpeza de Pele Iniciante", 
    image: limpezaIniciante,
    description: "Fundamentos da limpeza de pele profunda e profissional para iniciantes.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Comece sua carreira na estética facial! Aprenda os fundamentos da limpeza de pele profissional: higienização, esfoliação, extração, máscaras e finalização. Em 8 horas você aprenderá a avaliar tipos de pele, escolher produtos adequados e realizar o procedimento com segurança. Perfeito para iniciantes que querem começar a atender rapidamente com um dos tratamentos mais procurados!",
    personalizedCTA: "Dê o primeiro passo na estética! Limpeza de pele é o procedimento mais solicitado e garante clientela fiel. Comece sua carreira agora!"
  },
  { 
    id: "reconstrucao-sobrancelhas",
    title: "Reconstrução de Sobrancelhas", 
    image: reconstrucaoSobrancelhas,
    description: "Técnicas avançadas de reconstrução capilar para sobrancelhas.",
    duration: "5 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Seja especialista em reconstrução de sobrancelhas! Aprenda técnicas para recuperar sobrancelhas danificadas por depilação excessiva, queimaduras ou falhas naturais. Em 5 horas você dominará implante de fios, técnicas de preenchimento e protocolos de crescimento capilar. Atenda um público específico que busca soluções para problemas reais e esteja entre os poucos profissionais especializados!",
    personalizedCTA: "Reconstrução de sobrancelhas é uma especialização rara e valiosa! Atenda quem realmente precisa e tenha clientes gratas. Especialize-se!"
  },
  { 
    id: "hydra-nutri-gloss",
    title: "Hydra Nutri Gloss", 
    image: hydraNutriGloss,
    description: "Técnica de hidratação labial profunda com efeito glossy.",
    duration: "4 horas",
    level: "Iniciante",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Lábios hidratados e com brilho natural! Aprenda a técnica de hidratação labial profunda que deixa os lábios macios, volumosos e com efeito gloss duradouro. Em apenas 4 horas você dominará a aplicação de ativos, técnicas de massagem labial e protocolos que suas clientes vão amar. Procedimento rápido, resultado imediato e alta satisfação!",
    personalizedCTA: "Adicione este procedimento rápido e lucrativo ao seu portfólio! Lábios perfeitos em minutos, clientes satisfeitas sempre. Aprenda agora!"
  },
  { 
    id: "bb-glow-hydra",
    title: "BB Glow + Hydra Nutri Gloss", 
    image: bbGlow,
    description: "Combine tratamento de base natural na pele com hidratação labial glossy.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "O combo perfeito para pele e lábios! BB Glow é a técnica que cria uma base natural e uniforme na pele através de microagulhamento com pigmentos, reduzindo manchas e imperfeições. Combinado com Hydra Nutri Gloss labial, você oferece um tratamento completo de embelezamento. Em 8 horas aprenda as duas técnicas mais desejadas do momento!",
    personalizedCTA: "BB Glow é febre mundial! Ofereça pele perfeita sem maquiagem + lábios de arrasar. Aprenda este combo que vai lotar sua agenda!"
  },
  { 
    id: "peelings-quimicos",
    title: "Peelings Químicos Estratégicos Multinivels", 
    image: peelingsQuimicos,
    description: "Domine diversos tipos de peelings químicos e suas aplicações estratégicas.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Torne-se especialista em peelings químicos! Aprenda todos os tipos: superficiais, médios e profundos. Domine ácidos glicólico, salicílico, mandélico, TCA e mais. Em 8 horas você aprenderá indicações, contraindicações, protocolos por tipo de pele e como tratar melasma, acne, manchas e envelhecimento. Certificação avançada que diferencia profissionais!",
    personalizedCTA: "Peelings químicos transformam a pele! Seja expert e ofereça tratamentos avançados que realmente funcionam. Destaque-se como profissional qualificada!"
  },
  { 
    id: "microagulhamento-facial",
    title: "Microagulhamento Facial", 
    image: microagulhamentoFacial,
    description: "Técnica de rejuvenescimento facial com microagulhas.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Rejuvenesça a pele com microagulhamento facial! Aprenda a técnica que estimula colágeno naturalmente, tratando rugas, flacidez, cicatrizes de acne e poros dilatados. Em 8 horas você dominará o uso de dermapen, roller, profundidades ideais, protocolos com ativos e cuidados pós-procedimento. Resultado visível que fideliza clientes!",
    personalizedCTA: "Microagulhamento facial é o tratamento rejuvenescedor mais procurado! Resultados comprovados, clientes satisfeitas. Aprenda e lucre!"
  },
  { 
    id: "imersao-capilar",
    title: "Imersão Capilar", 
    image: imersaoCapilar,
    description: "Tratamentos capilares profissionais e técnicas de recuperação capilar.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Especialize-se em tratamentos capilares! Aprenda reconstrução, cauterização, botox capilar, cronograma capilar e técnicas de recuperação para cabelos danificados. Em 8 horas você dominará diagnóstico capilar, escolha de ativos e protocolos que transformam cabelos. Atenda um mercado crescente de clientes que buscam cabelos saudáveis e bonitos!",
    personalizedCTA: "Cabelos saudáveis são desejo de todas! Torne-se especialista capilar e conquiste clientes fiéis que voltam mensalmente. Comece já!"
  },
  { 
    id: "radiofrequencia",
    title: "Radiofrequência", 
    image: radiofrequencia,
    description: "Tratamento facial e corporal convencional de rejuvenescimento e firmeza com radiofrequência.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine a radiofrequência facial e corporal! Aprenda a usar este equipamento versátil para firmeza de pele, redução de celulite, contorno corporal e rejuvenescimento facial. Em 8 horas você entenderá a física da RF, protocolos por área tratada, parâmetros ideais e como potencializar resultados. Equipamento essencial em qualquer clínica de estética!",
    personalizedCTA: "Radiofrequência é indispensável na estética moderna! Tratamento sem dor, resultados visíveis, clientes satisfeitas. Aprenda a operar este equipamento queridinho!"
  },
  { 
    id: "ultrafocus",
    title: "Ultrassom Micro a Macrofocalizado (Ultrafocus)", 
    image: ultrafocus,
    description: "Tecnologia de ultrassom microfocalizado para lifting facial não invasivo.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine a tecnologia mais avançada de lifting não invasivo! Ultrassom microfocalizado atinge camadas profundas da pele, estimulando colágeno e promovendo firmeza sem cirurgia. Em 8 horas você aprenderá protocolos faciais e corporais, profundidades de atuação e como oferecer o 'lifting sem cortes' que as clientes adoram. Tecnologia premium para resultados premium!",
    personalizedCTA: "Ultrassom microfocalizado é o lifting do futuro! Sem cirurgia, sem dor, resultados incríveis. Ofereça tecnologia de ponta e multiplique seus ganhos!"
  },
  { 
    id: "herus-hifu",
    title: "Ultrassom Micro a Macrofocado (Herus Hifu)", 
    image: herusHifu,
    description: "Protocolo avançado de HIFU para lifting não invasivo com resultados duradouros.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Especialização em HIFU (High Intensity Focused Ultrasound)! Aprenda a operar o Herus HIFU para lifting facial e corporal não invasivo com resultados que duram até 2 anos. Em 8 horas você dominará protocolos específicos, áreas de aplicação, parâmetros e contraindicações. Tecnologia exclusiva que posiciona você no mercado premium da estética avançada!",
    personalizedCTA: "HIFU é o procedimento mais procurado para rejuvenescimento! Resultados duradouros sem cirurgia. Seja especialista certificada e conquiste o mercado premium!"
  },
  { 
    id: "capacitacao-depilacao-laser",
    title: "Capacitação em Depilação a Laser", 
    image: depilacaoLaser,
    description: "Formação completa em depilação a laser de última geração.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Entre no mercado de depilação a laser! Aprenda a operar equipamentos de última geração, entenda fototipos, parâmetros seguros e protocolos por região corporal. Em 8 horas você dominará avaliação de clientes, número de sessões necessárias e como garantir resultados eficazes. Depilação a laser é um dos serviços mais lucrativos com alta demanda e clientes recorrentes!",
    personalizedCTA: "Depilação a laser é altíssima demanda! Clientes pagam bem e retornam por meses. Invista nesta capacitação e tenha renda recorrente garantida!"
  },
  { 
    id: "drenagem-linfatica",
    title: "Drenagem Linfática Corporal", 
    image: drenagemLinfatica,
    description: "Técnicas de drenagem linfática manual e modeladora corporal.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Aprenda a técnica mais procurada da estética corporal! Drenagem linfática manual é essencial para desintoxicação, redução de edemas, celulite e retenção líquida. Em 8 horas você dominará manobras específicas, sentido correto do fluxo linfático e protocolos completos. Técnica relaxante que as clientes adoram e que garante fidelização e retorno regular!",
    personalizedCTA: "Drenagem linfática garante agenda cheia! Clientes voltam semanalmente, resultados visíveis, técnica agradável. Comece sua carreira com este curso!"
  },
  { 
    id: "massagem-modeladora",
    title: "Massagem Modeladora Corporal", 
    image: massagemModeladora,
    description: "Massagem para modelagem corporal e redução de medidas.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Transforme o corpo das suas clientes! Massagem modeladora é a técnica para redução de medidas, celulite e modelagem de contorno corporal. Em 8 horas você aprenderá manobras vigorosas, uso de cosméticos redutores e protocolos por região. Resultados visíveis que motivam as clientes a continuar o tratamento. Uma das técnicas corporais mais procuradas!",
    personalizedCTA: "Massagem modeladora é febre! Toda mulher quer reduzir medidas e combater celulite. Domine esta técnica e tenha agenda lotada todo mês!"
  },
  { 
    id: "massagem-relaxante",
    title: "Massagem Relaxante com Crânio Facial e Bambuterapia", 
    image: massagemRelaxante,
    description: "Técnicas de massagem para relaxamento profundo e bem-estar completo.",
    duration: "8 horas",
    level: "Iniciante",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Proporcione relaxamento completo! Aprenda massagem relaxante corporal, crânio facial para alivio de tensões e bambuterapia com bambus aquecidos. Em 8 horas você dominará técnicas suaves, pontos de tensão e protocolos de bem-estar. Perfeito para quem busca trabalhar com qualidade de vida, spas e atendimento diferenciado. Clientes saem renovadas!",
    personalizedCTA: "Bem-estar é tendência! Massagem relaxante conquista clientes que voltam sempre. Aprenda e ofereça momentos únicos de relaxamento!"
  },
  { 
    id: "ventosaterapia",
    title: "Ventosaterapia", 
    image: ventosaterapia,
    description: "Terapia com ventosas para diversos tratamentos estéticos e terapêuticos.",
    duration: "4 horas",
    level: "Iniciante",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Descubra o poder terapêutico das ventosas! Ventosaterapia é técnica milenar para celulite, dores musculares, desintoxicação e relaxamento. Em apenas 4 horas você aprenderá técnicas de aplicação, contraindicações e protocolos completos. Procedimento rápido, eficaz e muito procurado. Combine com outras massagens para resultados potencializados!",
    personalizedCTA: "Ventosaterapia está em alta! Técnica rápida de aprender, resultados imediatos. Adicione ao seu portfólio e aumente seus ganhos em poucas horas!"
  },
  { 
    id: "taping",
    title: "Taping", 
    image: taping,
    description: "Aplicação de bandagens estéticas para diversos fins terapêuticos e estéticos.",
    duration: "5 horas",
    level: "Iniciante",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine a técnica de bandagem estética! Taping é usado para drenagem linfática, redução de edemas, modelagem corporal e recuperação pós-operatória. Em 5 horas você aprenderá aplicações faciais e corporais, diferentes tensões e protocolos específicos. Técnica moderna que complementa perfeitamente outros tratamentos e potencializa resultados!",
    personalizedCTA: "Taping é tendência mundial! Técnica versátil para diversos objetivos. Rápido de aprender, resultados visíveis. Destaque-se oferecendo esta técnica moderna!"
  },
  { 
    id: "cosmetologia",
    title: "Cosmetologia Estética", 
    image: cosmetologia,
    description: "Estudo completo de cosméticos e suas aplicações na estética profissional.",
    duration: "8 horas",
    level: "Intermediário",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Entenda profundamente os cosméticos! Aprenda sobre ativos, princípios ativos, pH, conservantes, e como escolher produtos ideais para cada pele. Em 8 horas você compreenderá formulações, leitura de rótulos, combinações de ativos e como recomendar cosméticos com segurança. Conhecimento essencial para qualquer esteticista profissional que quer se destacar!",
    personalizedCTA: "Cosmetologia diferencia profissionais! Clientes confiam em quem entende de produtos. Torne-se referência e ganhe autoridade no mercado!"
  },
  { 
    id: "bioestimulador",
    title: "Bioestimulador de Colágeno", 
    image: bioestimulador,
    description: "Técnicas de aplicação de bioestimuladores de colágeno para rejuvenescimento.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Entre no mercado premium dos bioestimuladores! Aprenda a aplicar bioestimuladores de colágeno que rejuvenescem a pele de dentro para fora. Em 8 horas você dominará anatomia, pontos de aplicação, diluições e protocolos faciais e corporais. Resultados progressivos e naturais que encantam clientes. Procedimento de alto valor agregado!",
    personalizedCTA: "Bioestimulador é o futuro do rejuvenescimento! Resultados naturais e duradouros. Alto ticket, clientes premium. Invista na sua especialização!"
  },
  { 
    id: "botox-full-face",
    title: "Toxina Botulínica (Full Face)", 
    image: botoxFullFace,
    description: "Aplicação de toxina botulínica em face completa com protocolos avançados.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine o procedimento mais procurado da estética! Aprenda aplicação de toxina botulínica em face completa: testa, glabela, pés de galinha, lifting de sobrancelhas e protocolos avançados. Em 8 horas você dominará anatomia facial, dosagens, pontos de aplicação e técnicas para resultados naturais. Procedimento de altíssimo valor que garante retorno constante de clientes!",
    personalizedCTA: "Botox é o procedimento número 1 mundial! Alta lucratividade, clientes retornam a cada 4-6 meses. Entre neste mercado bilionário agora!"
  },
  { 
    id: "preenchimento-labial",
    title: "Preenchimento Labial", 
    image: preenchimentoLabial,
    description: "Técnicas de preenchimento labial com ácido hialurônico para resultados naturais.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Especialize-se em preenchimento labial! Aprenda todas as técnicas de aplicação de ácido hialurônico nos lábios: aumento de volume, correção de assimetrias, definição de contorno e russian lips. Em 8 horas você dominará anatomia labial, escolha de densidades, técnicas de aplicação e como criar lábios naturais e harmoniosos. Procedimento premium muito procurado!",
    personalizedCTA: "Preenchimento labial é desejo de 9 em cada 10 mulheres! Procedimento premium, resultados imediatos. Especialize-se e conquiste o mercado de luxo!"
  },
  { 
    id: "jato-plasma-multi",
    title: "Jato de Plasma Multifuncional", 
    image: jatoPlasmaMulti,
    description: "Protocolos múltiplos com jato de plasma para diversos tratamentos estéticos.",
    duration: "8 horas",
    level: "Avançado",
    category: "Cursos Individuais",
    videoUrl: "https://www.youtube.com/embed/9cPXgUoy_c4",
    detailedDescription: "Domine a tecnologia revolucionária do jato de plasma! Aprenda protocolos para blefaroplastia não cirúrgica, remoção de lesões, rejuvenescimento facial e corporal. Em 8 horas você dominará esta tecnologia versátil que substitui procedimentos cirúrgicos. Resultados incríveis sem cortes. Tecnologia de ponta que posiciona você no mercado de estética avançada!",
    personalizedCTA: "Jato de Plasma é revolução! Substitua cirurgias por procedimentos estéticos. Alto valor, resultados impressionantes. Seja pioneira na sua região!"
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
