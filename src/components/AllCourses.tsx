import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Clock, CreditCard, Sparkles, Phone, Info } from "lucide-react";
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

interface Course {
  id: number;
  title: string;
  hours: string;
  cashPrice: string;
  installmentPrice: string;
  category: "beleza" | "estetica";
  highlighted?: boolean;
  image: string;
  description: string;
  programContent: string[];
  benefits: string[];
}

const courses: Course[] = [
  // BELEZA
  { 
    id: 1, 
    title: "Remoção de micropigmentação e tatuagem à laser", 
    hours: "16h", 
    cashPrice: "R$ 1.500,00", 
    installmentPrice: "R$ 1.690,00", 
    category: "beleza", 
    highlighted: true, 
    image: remocaoLaserMicro,
    description: "Aprenda as técnicas mais avançadas de remoção de micropigmentação e tatuagens usando tecnologia laser de última geração.",
    programContent: [
      "Fundamentos da tecnologia laser",
      "Tipos de pigmentos e suas reações",
      "Protocolos de segurança",
      "Técnicas de remoção progressiva",
      "Despigmentação de sobrancelhas",
      "Remoção de tatuagens coloridas",
      "Cuidados pós-procedimento",
      "Bônus: Black Peel"
    ],
    benefits: [
      "Certificado reconhecido",
      "Aulas práticas com modelos",
      "Material didático completo",
      "Suporte pós-curso",
      "Acesso a grupo exclusivo"
    ]
  },
  { id: 2, title: "Micropigmentação nanoblading (Fio à fio)", hours: "16h", cashPrice: "R$ 1.300,00", installmentPrice: "R$ 1.450,00", category: "beleza", image: nanoblading, description: "Domine a técnica de micropigmentação fio a fio para criar sobrancelhas com aspecto natural e realista.", programContent: ["Anatomia e simetria facial", "Técnica nanoblading avançada", "Escolha de pigmentos", "Traçado de fios naturais", "Prática em pele sintética", "Atendimento ao cliente"], benefits: ["Kit profissional incluso", "Certificado internacional", "Acompanhamento pós-curso"] },
  { id: 3, title: "Micropigmentação shadow e shading", hours: "16h", cashPrice: "R$ 1.300,00", installmentPrice: "R$ 1.450,00", category: "beleza", image: shadowShading, description: "Aprenda a técnica de sombreamento para criar sobrancelhas com efeito de maquiagem profissional.", programContent: ["Técnica shadow", "Técnica shading", "Efeito degradê", "Combinação de técnicas", "Correções e reparos"], benefits: ["Material de prática incluso", "Certificado profissional", "Grupo de networking"] },
  { id: 4, title: "Micropigmentação de sobrancelhas completo (Despigmentação química)", hours: "16h", cashPrice: "R$ 1.800,00", installmentPrice: "R$ 1.950,00", category: "beleza", highlighted: true, image: microCompleto, description: "Curso completo que abrange todas as técnicas de micropigmentação de sobrancelhas incluindo despigmentação química.", programContent: ["Todas as técnicas de micropigmentação", "Despigmentação química segura", "Correção de falhas", "Visagismo aplicado", "Marketing pessoal"], benefits: ["Curso mais completo", "Certificado premium", "Kit profissional completo", "Mentoria individual"] },
  { id: 5, title: "Micropigmentação para delineado dos olhos", hours: "16h", cashPrice: "R$ 1.300,00", installmentPrice: "R$ 1.450,00", category: "beleza", image: delineadoOlhos, description: "Especialize-se em delineado permanente de olhos com técnicas seguras e resultados incríveis.", programContent: ["Anatomia da região ocular", "Delineado clássico", "Delineado esfumado", "Técnicas de segurança", "Protocolos de higiene"], benefits: ["Aulas práticas supervisionadas", "Certificado reconhecido", "Suporte técnico"] },
  { id: 6, title: "Micropigmentação labial", hours: "16h", cashPrice: "R$ 1.300,00", installmentPrice: "R$ 1.450,00", category: "beleza", image: microLabial, description: "Domine a arte da micropigmentação labial para realce, contorno e preenchimento dos lábios.", programContent: ["Técnicas de contorno labial", "Preenchimento completo", "Neutralização de tons", "Harmonização facial", "Cuidados especiais"], benefits: ["Material didático exclusivo", "Certificado profissional", "Atualização gratuita"] },
  { id: 7, title: "Design / henna / coloração", hours: "8h", cashPrice: "R$ 499,00", installmentPrice: "R$ 599,00", category: "beleza", image: designHenna, description: "Aprenda as melhores técnicas de design, henna e coloração de sobrancelhas.", programContent: ["Design personalizado", "Aplicação de henna", "Técnicas de coloração", "Visagismo básico", "Atendimento ao cliente"], benefits: ["Curso rápido e prático", "Certificado de participação", "Kit básico incluso"] },
  { id: 8, title: "Reconstrução de sobrancelhas", hours: "5h", cashPrice: "R$ 349,00", installmentPrice: "R$ 449,00", category: "beleza", image: reconstrucaoSobrancelhas, description: "Técnicas específicas para reconstrução de sobrancelhas danificadas ou com falhas.", programContent: ["Avaliação de sobrancelhas", "Técnicas de reconstrução", "Tratamentos restauradores", "Casos clínicos", "Protocolos especiais"], benefits: ["Workshop intensivo", "Certificado de conclusão", "Material de apoio"] },
  { id: 9, title: "Estética do olhar (Cílios e sobrancelhas)", hours: "24h", cashPrice: "R$ 1.200,00", installmentPrice: "R$ 1.300,00", category: "beleza", highlighted: true, image: esteticaOlhar, description: "Curso completo de estética do olhar combinando técnicas de cílios e sobrancelhas.", programContent: ["Design de sobrancelhas", "Extensão de cílios", "Lash lifting", "Brow lamination", "Coloração", "Harmonização facial"], benefits: ["Formação completa", "2 certificados", "Kit profissional completo", "Mentoria de 30 dias"] },
  { id: 10, title: "Lash master class - Iniciante", hours: "16h", cashPrice: "R$ 900,00", installmentPrice: "R$ 999,00", category: "beleza", image: lashIniciante, description: "Curso introdutório de extensão de cílios fio a fio com técnicas profissionais.", programContent: ["Fundamentos da extensão", "Técnica fio a fio", "Volume russo básico", "Escolha de fios", "Remoção segura", "Manutenção"], benefits: ["Ideal para iniciantes", "Prática supervisionada", "Certificado profissional", "Kit starter incluso"] },
  { id: 11, title: "Lash lifting e brow lamination", hours: "8h", cashPrice: "R$ 450,00", installmentPrice: "R$ 550,00", category: "beleza", image: lashLifting, description: "Aprenda as técnicas de curvatura de cílios e laminação de sobrancelhas.", programContent: ["Lash lifting profissional", "Brow lamination", "Produtos e químicas", "Tempo de processamento", "Combinação de técnicas"], benefits: ["Curso prático", "Certificado", "Material incluso", "Técnicas modernas"] },
  { id: 12, title: "Depilação facial e corporal com ceras quentes", hours: "16h", cashPrice: "R$ 790,00", installmentPrice: "R$ 890,00", category: "beleza", image: depilacaoCeras, description: "Técnicas profissionais de depilação com ceras quentes para rosto e corpo.", programContent: ["Tipos de ceras", "Depilação facial", "Depilação corporal", "Higiene e segurança", "Atendimento personalizado"], benefits: ["Prática intensiva", "Certificado profissional", "Kit de ceras"] },
  { id: 13, title: "Epilação facial egípcia com fio", hours: "6h", cashPrice: "R$ 400,00", installmentPrice: "R$ 450,00", category: "beleza", image: epilacaoFio, description: "Domine a técnica milenar egípcia de depilação com linha.", programContent: ["História da técnica", "Posicionamento das mãos", "Técnica facial completa", "Design com fio", "Prática supervisionada"], benefits: ["Técnica exclusiva", "Certificado", "Baixo investimento inicial"] },
  { id: 14, title: "Hydra nutri gloss", hours: "4h", cashPrice: "R$ 400,00", installmentPrice: "R$ 500,00", category: "beleza", image: hydraNutriGloss, description: "Tratamento de hidratação profunda e nutrição labial com resultado glossy.", programContent: ["Protocolo hydra nutri gloss", "Produtos profissionais", "Técnicas de aplicação", "Hidratação intensiva", "Manutenção"], benefits: ["Workshop rápido", "Certificado", "Apostila digital"] },
  { id: 15, title: "BB glow e hydra nutri gloss lips", hours: "8h", cashPrice: "R$ 899,00", installmentPrice: "R$ 999,00", category: "beleza", image: bbGlow, description: "Técnicas de BB Glow facial e tratamento labial para pele perfeita.", programContent: ["BB Glow facial completo", "Hydra nutri gloss labial", "Escolha de tons", "Microagulhamento estético", "Protocolos combinados"], benefits: ["2 técnicas em 1 curso", "Certificado duplo", "Material completo"] },

  // ESTÉTICA
  { id: 16, title: "Dermaplaning glow", hours: "4h", cashPrice: "R$ 400,00", installmentPrice: "R$ 500,00", category: "estetica", image: dermaplaning, description: "Técnica de esfoliação profunda para remoção de pelos faciais e renovação da pele.", programContent: ["Fundamentos do dermaplaning", "Técnica de raspagem", "Produtos pós-procedimento", "Protocolos de segurança", "Combinações de tratamentos"], benefits: ["Curso intensivo", "Certificado", "Manual técnico"] },
  { id: 17, title: "Estética facial master (Limpeza, peelings e microagulhamento)", hours: "32h", cashPrice: "R$ 1.450,00", installmentPrice: "R$ 1.600,00", category: "estetica", highlighted: true, image: esteticaFacialMaster, description: "Formação completa em estética facial com as principais técnicas do mercado.", programContent: ["Limpeza de pele profunda", "Peelings químicos", "Microagulhamento facial", "Protocolos anti-idade", "Tratamento de acne", "Harmonização facial"], benefits: ["Formação master", "Certificado premium", "Kit completo", "Estágio supervisionado"] },
  { id: 18, title: "Limpeza de pele (Iniciantes)", hours: "8h", cashPrice: "R$ 590,00", installmentPrice: "R$ 690,00", category: "estetica", image: limpezaIniciante, description: "Curso básico de limpeza de pele profissional para iniciantes.", programContent: ["Tipos de pele", "Técnicas de limpeza", "Extração segura", "Máscaras faciais", "Finalização", "Orientação ao cliente"], benefits: ["Ideal para iniciantes", "Certificado profissional", "Prática com modelos"] },
  { id: 19, title: "Limpeza de pele + Peeling de diamante + Fototerapia", hours: "16h", cashPrice: "R$ 790,00", installmentPrice: "R$ 890,00", category: "estetica", image: limpezaPeeling, description: "Combine três técnicas poderosas para resultados excepcionais na pele.", programContent: ["Limpeza profunda", "Peeling de diamante", "Fototerapia LED", "Protocolos combinados", "Indicações e contraindicações"], benefits: ["3 técnicas em 1", "Certificado triplo", "Material didático completo"] },
  { id: 20, title: "Peelings químicos estratégicos multiníveis", hours: "8h", cashPrice: "R$ 790,00", installmentPrice: "R$ 890,00", category: "estetica", image: peelingsQuimicos, description: "Aprenda a aplicar peelings químicos de diferentes profundidades com segurança.", programContent: ["Tipos de peelings", "Ácidos e concentrações", "Protocolos por tipo de pele", "Peelings superficiais e médios", "Neutralização", "Cuidados pós-peeling"], benefits: ["Certificado especializado", "Manual de protocolos", "Suporte técnico"] },
  { id: 21, title: "Microagulhamento facial / Hydra nutri gloss", hours: "8h", cashPrice: "R$ 790,00", installmentPrice: "R$ 890,00", category: "estetica", image: microagulhamentoFacial, description: "Técnicas de microagulhamento facial para rejuvenescimento e tratamento de cicatrizes.", programContent: ["Fundamentos do microagulhamento", "Técnicas de aplicação", "Profundidades de agulhas", "Protocolos faciais", "Combinação com ativos"], benefits: ["Certificado profissional", "Material de apoio", "Grupo de estudos"] },
  { id: 22, title: "Microagulhamento master (facial, corporal e capilar)", hours: "8h", cashPrice: "R$ 990,00", installmentPrice: "R$ 1.100,00", category: "estetica", image: microagulhamentoMaster, description: "Formação completa em microagulhamento para todas as áreas do corpo.", programContent: ["Microagulhamento facial", "Microagulhamento corporal", "Microagulhamento capilar", "Protocolos especializados", "Combinações de ativos"], benefits: ["Formação completa", "3 certificados", "Kit profissional"] },
  { id: 23, title: "Imersão capilar", hours: "8h", cashPrice: "R$ 990,00", installmentPrice: "R$ 1.090,00", category: "estetica", image: imersaoCapilar, description: "Tratamentos capilares profissionais para recuperação e fortalecimento dos fios.", programContent: ["Tricologia básica", "Protocolos capilares", "Tratamentos de crescimento", "Fortalecimento capilar", "Microagulhamento capilar"], benefits: ["Certificado especializado", "Apostila completa", "Atualização gratuita"] },
  { id: 24, title: "Radiofrequência facial e corporal convencional", hours: "8h", cashPrice: "R$ 850,00", installmentPrice: "R$ 900,00", category: "estetica", image: radiofrequencia, description: "Aprenda a usar equipamentos de radiofrequência para tratamentos de flacidez.", programContent: ["Física da radiofrequência", "Protocolos faciais", "Protocolos corporais", "Parâmetros seguros", "Indicações clínicas"], benefits: ["Certificado técnico", "Manual do equipamento", "Suporte pós-curso"] },
  { id: 25, title: "Ultrassom na estética", hours: "8h", cashPrice: "R$ 850,00", installmentPrice: "R$ 900,00", category: "estetica", image: ultrassomEstetica, description: "Técnicas de ultrassom estético para tratamentos faciais e corporais.", programContent: ["Fundamentos do ultrassom", "Cavitação", "Protocolos de aplicação", "Combinações de tratamentos", "Segurança"], benefits: ["Certificado profissional", "Apostila técnica", "Grupo exclusivo"] },
  { id: 26, title: "Ultrassom micro e macrofocalizado ULTRAFOCUS", hours: "8h", cashPrice: "R$ 1.000,00", installmentPrice: "R$ 1.100,00", category: "estetica", image: ultrafocus, description: "Tecnologia avançada de ultrassom focalizado para lifting não invasivo.", programContent: ["Tecnologia HIFU", "Protocolos faciais", "Lifting não invasivo", "Parâmetros de aplicação", "Resultados e expectativas"], benefits: ["Certificado premium", "Material exclusivo", "Suporte técnico especializado"] },
  { id: 27, title: "Ultrassom micro e macrofocado (HERUS HIFU)", hours: "8h", cashPrice: "R$ 1.600,00", installmentPrice: "R$ 1.700,00", category: "estetica", highlighted: true, image: herusHifu, description: "Formação em equipamento HERUS HIFU para tratamentos de rejuvenescimento avançado.", programContent: ["Sistema HERUS HIFU", "Protocolos avançados", "Lifting facial e corporal", "Parametrização precisa", "Casos clínicos"], benefits: ["Certificado internacional", "Treinamento no equipamento", "Mentoria especializada"] },
  { id: 28, title: "Criolipólise", hours: "8h", cashPrice: "R$ 1.600,00", installmentPrice: "R$ 1.700,00", category: "estetica", highlighted: true, image: criolipolise, description: "Técnica de congelamento de gordura para redução de medidas localizada.", programContent: ["Fundamentos da criolipólise", "Seleção de áreas", "Protocolos de aplicação", "Manejo de placas", "Resultados esperados", "Marketing do procedimento"], benefits: ["Certificado especializado", "Material completo", "Grupo de suporte"] },
  { id: 29, title: "Depilação à laser", hours: "5h", cashPrice: "R$ 990,00", installmentPrice: "R$ 1.100,00", category: "estetica", image: depilacaoLaser, description: "Curso de depilação a laser com tecnologia de ponta.", programContent: ["Tipos de laser", "Fototipos de pele", "Protocolos seguros", "Parâmetros corretos", "Gestão de clínica"], benefits: ["Certificado técnico", "Apostila completa", "Atualização trimestral"] },
  { id: 30, title: "Capacitação em estética facial e corporal", hours: "56h", cashPrice: "R$ 2.200,00", installmentPrice: "R$ 2.350,00", category: "estetica", highlighted: true, image: capacitacaoCompleta, description: "Formação completa para se tornar um profissional de estética qualificado.", programContent: ["Anatomia e fisiologia", "Todas as técnicas faciais", "Todas as técnicas corporais", "Gestão de clínica", "Marketing e vendas", "Estágio supervisionado"], benefits: ["Formação completa", "Certificado profissional", "Kit master", "Mentoria de 6 meses", "Estágio incluso"] },
  { id: 31, title: "Capacitação em estética corporal", hours: "24h", cashPrice: "R$ 1.300,00", installmentPrice: "R$ 1.450,00", category: "estetica", image: capacitacaoCorporal, description: "Especialização em estética corporal com as principais técnicas do mercado.", programContent: ["Avaliação corporal", "Massagens modeladoras", "Protocolos de redução", "Drenagem linfática", "Tratamentos combinados"], benefits: ["Certificado especializado", "Material didático", "Prática intensiva"] },
  { id: 32, title: "Drenagem linfática corporal", hours: "8h", cashPrice: "R$ 500,00", installmentPrice: "R$ 550,00", category: "estetica", image: drenagemLinfatica, description: "Técnica manual de drenagem linfática para diversos fins terapêuticos.", programContent: ["Sistema linfático", "Manobras de drenagem", "Protocolos pós-operatório", "Drenagem estética", "Combinações"], benefits: ["Certificado profissional", "Apostila ilustrada", "Vídeos de apoio"] },
  { id: 33, title: "Massagem modeladora corporal", hours: "8h", cashPrice: "R$ 500,00", installmentPrice: "R$ 550,00", category: "estetica", image: massagemModeladora, description: "Aprenda técnicas de massagem para modelagem corporal e redução de medidas.", programContent: ["Técnicas de massagem", "Manobras modeladoras", "Protocolos corporais", "Combinação com produtos", "Resultados"], benefits: ["Curso prático", "Certificado", "Material de apoio"] },
  { id: 34, title: "Massagem relaxante com crânio facial e bambuterapia", hours: "8h", cashPrice: "R$ 500,00", installmentPrice: "R$ 550,00", category: "estetica", image: massagemRelaxante, description: "Técnicas de massagem relaxante combinadas com bambuterapia.", programContent: ["Massagem relaxante", "Massagem craniana", "Massagem facial", "Bambuterapia", "Aromaterapia"], benefits: ["Certificado", "Apostila", "Grupo de práticas"] },
  { id: 35, title: "Skin Spa Facial (Massagens faciais)", hours: "4h", cashPrice: "R$ 550,00", installmentPrice: "R$ 650,00", category: "estetica", image: skinSpaFacial, description: "Massagens faciais terapêuticas e relaxantes para skin spa.", programContent: ["Massagem facial relaxante", "Massagem de drenagem", "Massagem rejuvenescedora", "Técnicas orientais", "Protocolos spa"], benefits: ["Workshop intensivo", "Certificado", "Manual ilustrado"] },
  { id: 36, title: "Ventosaterapia", hours: "6h", cashPrice: "R$ 500,00", installmentPrice: "R$ 600,00", category: "estetica", image: ventosaterapia, description: "Técnica milenar de ventosaterapia aplicada à estética.", programContent: ["História da ventosa", "Tipos de ventosas", "Protocolos faciais", "Protocolos corporais", "Indicações terapêuticas"], benefits: ["Certificado", "Kit de ventosas", "Material didático"] },
  { id: 37, title: "Taping", hours: "5h", cashPrice: "R$ 790,00", installmentPrice: "R$ 890,00", category: "estetica", image: taping, description: "Bandagem terapêutica e estética com fitas kinesiológicas.", programContent: ["Fundamentos do taping", "Técnicas faciais", "Técnicas corporais", "Protocolos terapêuticos", "Combinações"], benefits: ["Certificado profissional", "Material de prática", "Apostila completa"] },
  { id: 38, title: "Auriculoterapia", hours: "4h", cashPrice: "R$ 800,00", installmentPrice: "R$ 850,00", category: "estetica", image: auriculoterapia, description: "Técnica de acupuntura auricular para diversos tratamentos.", programContent: ["Mapa auricular", "Pontos principais", "Protocolos terapêuticos", "Indicações estéticas", "Combinações"], benefits: ["Certificado", "Kit de sementes", "Mapa auricular"] },
  { id: 39, title: "Terapias relaxantes (massagem relaxante, ventosa e pedras quentes)", hours: "24h", cashPrice: "R$ 1.200,00", installmentPrice: "R$ 1.300,00", category: "estetica", image: terapiasRelaxantes, description: "Formação completa em terapias relaxantes e holísticas.", programContent: ["Massagem relaxante", "Ventosaterapia", "Pedras quentes", "Aromaterapia", "Protocolos spa", "Gestão de spa"], benefits: ["Formação completa", "3 certificados", "Kit terapêutico", "Estágio em spa"] },
  { id: 40, title: "Cosmetologia Estética", hours: "8h", cashPrice: "R$ 990,00", installmentPrice: "R$ 1.090,00", category: "estetica", image: cosmetologia, description: "Estudo aprofundado de cosméticos e ativos para tratamentos estéticos.", programContent: ["Química cosmética", "Ativos principais", "Formulações", "Escolha de produtos", "Protocolos personalizados"], benefits: ["Certificado especializado", "Apostila técnica", "Lista de fornecedores"] },
  { id: 41, title: "Injetáveis estéticos + Toxina botulínica Full Face", hours: "16h", cashPrice: "R$ 2.499,00", installmentPrice: "R$ 2.599,00", category: "estetica", image: injetaveisBotox, description: "Curso de aplicação de toxina botulínica em face completa.", programContent: ["Anatomia facial", "Pontos de aplicação", "Diluições corretas", "Protocolos full face", "Complicações e correções", "Atendimento ao paciente"], benefits: ["Certificado médico", "Material premium", "Mentoria especializada", "Grupo VIP"] },
  { id: 42, title: "Injetáveis Master (Bioestimulador, Preenchimento labial e Botox Full Face)", hours: "24h", cashPrice: "R$ 4.500,00", installmentPrice: "R$ 4.999,00", category: "estetica", highlighted: true, image: injetaveisMasterCurso, description: "Formação master em harmonização facial com injetáveis.", programContent: ["Bioestimulador de colágeno", "Preenchimento labial", "Toxina botulínica full face", "Harmonização completa", "Protocolos avançados", "Gestão de consultório"], benefits: ["Formação master", "3 certificados premium", "Kit profissional completo", "Mentoria 12 meses", "Estágio supervisionado"] },
  { id: 43, title: "Bioestimulador de colágeno", hours: "8h", cashPrice: "R$ 2.250,00", installmentPrice: "R$ 2.500,00", category: "estetica", image: bioestimulador, description: "Técnicas de aplicação de bioestimuladores de colágeno.", programContent: ["Tipos de bioestimuladores", "Indicações clínicas", "Protocolos de aplicação", "Técnicas de injeção", "Resultados progressivos"], benefits: ["Certificado especializado", "Material premium", "Suporte técnico"] },
  { id: 44, title: "Toxina botulínica (Full Face)", hours: "8h", cashPrice: "R$ 2.250,00", installmentPrice: "R$ 2.500,00", category: "estetica", image: botoxFullFace, description: "Aplicação de toxina botulínica em toda a face.", programContent: ["Anatomia muscular facial", "Pontos de aplicação", "Doses e diluições", "Técnicas avançadas", "Prevenção de complicações"], benefits: ["Certificado médico", "Apostila técnica", "Grupo de estudos"] },
  { id: 45, title: "Toxina botulínica (Terço superior)", hours: "8h", cashPrice: "R$ 1.899,00", installmentPrice: "R$ 1.999,00", category: "estetica", image: botoxTercoSuperior, description: "Especialização em aplicação de toxina no terço superior da face.", programContent: ["Anatomia da região superior", "Tratamento de testa", "Tratamento de glabela", "Tratamento de olhos", "Técnicas precisas"], benefits: ["Certificado especializado", "Material didático", "Prática supervisionada"] },
  { id: 46, title: "Preenchimento labial", hours: "8h", cashPrice: "R$ 1.700,00", installmentPrice: "R$ 1.800,00", category: "estetica", image: preenchimentoLabial, description: "Técnicas de preenchimento labial com ácido hialurônico.", programContent: ["Anatomia labial", "Técnicas de preenchimento", "Escolha de produtos", "Volumização", "Correção de assimetrias", "Complicações"], benefits: ["Certificado premium", "Material exclusivo", "Mentoria online"] },
  { id: 47, title: "Jato de plasma 3.0 (Limpeza premium e peeling)", hours: "32h", cashPrice: "R$ 1.450,00", installmentPrice: "R$ 1.650,00", category: "estetica", image: jatoPlasma30, description: "Tecnologia de jato de plasma para tratamentos faciais avançados.", programContent: ["Tecnologia plasma", "Limpeza profunda", "Peeling com plasma", "Rejuvenescimento", "Protocolos combinados", "Marketing do procedimento"], benefits: ["Formação completa", "Certificado premium", "Treinamento no equipamento", "Suporte técnico"] },
  { id: 48, title: "Jato de plasma multifuncional", hours: "8h", cashPrice: "R$ 790,00", installmentPrice: "R$ 890,00", category: "estetica", image: jatoPlasmaMulti, description: "Uso multifuncional do jato de plasma em diversos tratamentos.", programContent: ["Fundamentos do plasma", "Múltiplas aplicações", "Protocolos faciais", "Protocolos corporais", "Segurança"], benefits: ["Certificado", "Manual técnico", "Grupo de suporte"] },
  { id: 49, title: "Imersão em pós operatório (DRENAGEM + TAPING)", hours: "8h", cashPrice: "R$ 1.390,00", installmentPrice: "R$ 1.540,00", category: "estetica", image: posOperatorioDrenagem, description: "Especialização em tratamentos pós-operatórios de cirurgias plásticas.", programContent: ["Drenagem pós-operatória", "Taping terapêutico", "Protocolos por cirurgia", "Cuidados especiais", "Prevenção de complicações"], benefits: ["Certificado especializado", "Material completo", "Networking com cirurgiões"] },
  { id: 50, title: "Imersão em pós operatório / Eletroterapia", hours: "12h", cashPrice: "R$ 1.990,00", installmentPrice: "R$ 2.140,00", category: "estetica", image: posOperatorioEletro, description: "Formação completa em pós-operatório com eletroterapia.", programContent: ["Drenagem pós-operatória", "Eletroterapia aplicada", "Protocolos combinados", "Recuperação acelerada", "Gestão de resultados"], benefits: ["Formação completa", "2 certificados", "Kit profissional", "Mentoria especializada"] },
];

const AllCourses = () => {
  const [activeTab, setActiveTab] = useState<"todos" | "beleza" | "estetica">("todos");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleWhatsApp = (courseName: string) => {
    const message = `Olá! Gostaria de tirar dúvidas sobre o curso: ${courseName}`;
    window.open(`https://wa.me/5541996439389?text=${encodeURIComponent(message)}`, '_blank');
  };

  const calculateInstallment = (price: string) => {
    const numericPrice = parseFloat(price.replace('R$', '').replace('.', '').replace(',', '.').trim());
    const installmentValue = numericPrice / 10;
    return installmentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const filteredCourses = activeTab === "todos" 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  const belezaCount = courses.filter(c => c.category === "beleza").length;
  const esteticaCount = courses.filter(c => c.category === "estetica").length;

  return (
    <section id="todos-cursos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            <span className="text-primary">Nossos Cursos</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto font-montserrat">
            Mais de 50 cursos profissionalizantes em estética e beleza. 
            Encontre a capacitação perfeita para sua carreira!
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full" onValueChange={(value) => setActiveTab(value as any)}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card">
            <TabsTrigger value="todos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Todos ({courses.length})
            </TabsTrigger>
            <TabsTrigger value="beleza" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Beleza ({belezaCount})
            </TabsTrigger>
            <TabsTrigger value="estetica" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Estética ({esteticaCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className="overflow-hidden bg-white border-2 border-border hover:border-primary/30 hover-lift group relative"
                >
                  {course.highlighted && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-primary text-background px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        Destaque
                      </div>
                    </div>
                  )}
                  
                  {/* Course Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors min-h-[3.5rem] font-montserrat font-semibold leading-tight">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">{course.hours}</span>
                    </div>
                    
                    <div className="space-y-2.5 bg-muted/50 p-3.5 rounded-lg border border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground font-medium">À vista:</span>
                        <span className="text-lg font-bold text-primary">{course.cashPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-1.5 font-medium">
                          <CreditCard className="w-3.5 h-3.5" />
                          Em até 10x de:
                        </span>
                        <span className="text-foreground font-bold animate-pulse">{calculateInstallment(course.installmentPrice)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground text-right pt-1 border-t border-border/50">
                        Total parcelado: {course.installmentPrice}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 flex-col gap-3">
                    <div className="flex gap-2 w-full">
                      <Button 
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-background"
                        onClick={() => handleWhatsApp(course.title)}
                      >
                        <Phone className="mr-2 w-4 h-4" />
                        Tire suas dúvidas
                      </Button>
                      <Button 
                        variant="default" 
                        className="flex-1 shadow-md hover:shadow-lg"
                        onClick={() => setSelectedCourse(course)}
                      >
                        <Info className="mr-2 w-4 h-4" />
                        Saiba Mais
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Modal de Detalhes do Curso */}
        <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-playfair text-primary">
                {selectedCourse?.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground pt-2">
                {selectedCourse?.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              {/* Imagem do Curso */}
              <div className="relative overflow-hidden rounded-lg h-64">
                <img
                  src={selectedCourse?.image}
                  alt={selectedCourse?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Informações Gerais */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Carga Horária</p>
                    <p className="font-semibold text-foreground">{selectedCourse?.hours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Investimento</p>
                    <p className="font-semibold text-primary">{selectedCourse?.cashPrice}</p>
                  </div>
                </div>
              </div>

              {/* Conteúdo Programático */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Conteúdo Programático
                </h3>
                <ul className="space-y-2">
                  {selectedCourse?.programContent.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefícios */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Benefícios do Curso</h3>
                <ul className="space-y-2">
                  {selectedCourse?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">★</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Valores e Formas de Pagamento */}
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="text-lg font-bold text-foreground mb-3">Formas de Pagamento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">À vista:</span>
                    <span className="text-xl font-bold text-primary">{selectedCourse?.cashPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Parcelado em até 10x:</span>
                    <span className="font-bold text-foreground">
                      {selectedCourse && calculateInstallment(selectedCourse.installmentPrice)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Total parcelado: {selectedCourse?.installmentPrice}
                  </p>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-background"
                  onClick={() => selectedCourse && handleWhatsApp(selectedCourse.title)}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Tire suas dúvidas
                </Button>
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-background shadow-md hover:shadow-lg"
                  onClick={() => {
                    if (selectedCourse) {
                      const message = `Olá! Gostaria de me inscrever no curso: ${selectedCourse.title}`;
                      window.open(`https://wa.me/5541996439389?text=${encodeURIComponent(message)}`, '_blank');
                    }
                  }}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Quero me inscrever
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>* Valores podem sofrer reajustes sem aviso prévio</p>
          <p className="mt-2">
            Para matrículas, entre em contato:{" "}
            <a href="tel:+5541996439389" className="text-primary hover:underline font-semibold">
              (41) 9 9643-9389
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
