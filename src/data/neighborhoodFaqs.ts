import { FAQItem } from "@/components/FAQ";

export function getNeighborhoodFAQ(slug: string, name: string): FAQItem[] {
  const bairro = name;
  return [
    {
      question: `O Ateliê da Beleza atende alunos de ${bairro}?`,
      answer: `Sim! Recebemos muitos alunos de ${bairro} e bairros próximos. Nossa sede fica em localização central de Curitiba, com fácil acesso por transporte público e rotas rápidas de carro. Agende uma visita ou fale no WhatsApp para saber as próximas turmas.`
    },
    {
      question: `Quais cursos têm maior procura em ${bairro}?`,
      answer: `Entre os mais buscados por alunos de ${bairro} estão: Design de Sobrancelhas, Micropigmentação, Lash Lifting/Extensão de Cílios e Limpeza de Pele Premium. Também temos formação completa em Estética Facial e Capacitação Corporal.`
    },
    {
      question: `Consigo me deslocar de ${bairro} até a escola com facilidade?`,
      answer: `Sim. Estamos em região com excelente acesso a ônibus, aplicativos e vias principais. Muitos alunos vêm de ${bairro} e otimizam a agenda com aulas concentradas e turmas em horários flexíveis.`
    },
    {
      question: `Os certificados valem para trabalhar na minha região (${bairro})?`,
      answer: `Sim. Nossos certificados são reconhecidos pelo mercado e aceitos em processos seletivos. Além disso, orientamos sobre como montar seu portfólio e conquistar clientes na sua própria região de ${bairro}.`
    },
    {
      question: `Posso começar do zero e atender clientes em ${bairro}?`,
      answer: `Com nossos cursos de nível iniciante e prática supervisionada, você sai pronto(a) para atender. Damos suporte pós-curso, indicação de fornecedores e orientação de precificação para atuar com segurança em ${bairro}.`
    }
  ];
}
