export interface Testimonial {
  id: string;
  name: string;
  profession: string;
  rating: number;
  text: string;
  courseCategories: string[]; // Categorias de cursos relacionados
}

export const courseTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana Paula Silva",
    profession: "Designer de Sobrancelhas",
    rating: 5,
    text: "Melhor investimento que fiz na minha carreira! As técnicas são atuais, os professores são incríveis e hoje tenho minha agenda lotada. Aprendi desde o básico até técnicas avançadas que me diferenciam no mercado.",
    courseCategories: ["sobrancelhas", "design", "microblading"]
  },
  {
    id: "2",
    name: "Mariana Costa",
    profession: "Especialista em Micropigmentação",
    rating: 5,
    text: "Fiz o curso de micropigmentação e superou todas as minhas expectativas! A metodologia de ensino é excelente, com muita prática supervisionada. Hoje trabalho com segurança e tenho clientes satisfeitas. Recomendo muito!",
    courseCategories: ["micropigmentacao", "sobrancelhas", "microblading"]
  },
  {
    id: "3",
    name: "Juliana Mendes",
    profession: "Esteticista Facial",
    rating: 5,
    text: "O curso de estética facial transformou minha carreira completamente! Aprendi protocolos que realmente funcionam e hoje consigo entregar resultados incríveis para minhas clientes. O investimento retornou em menos de 3 meses!",
    courseCategories: ["facial", "estetica", "limpeza", "peeling"]
  },
  {
    id: "4",
    name: "Patrícia Oliveira",
    profession: "Lash Designer",
    rating: 5,
    text: "Sempre quis trabalhar com extensão de cílios e o curso me deu toda a base que eu precisava! As instrutoras são super atenciosas e o material didático é completo. Saí do curso já aplicando em clientes!",
    courseCategories: ["cilios", "lash", "olhar"]
  },
  {
    id: "5",
    name: "Camila Santos",
    profession: "Especialista em Injetáveis",
    rating: 5,
    text: "O curso de injetáveis foi uma virada de chave na minha vida profissional! Aprendi técnicas seguras com profissionais extremamente capacitados. Hoje atuo com confiança e minha agenda está sempre cheia.",
    courseCategories: ["injetaveis", "botox", "preenchimento"]
  },
  {
    id: "6",
    name: "Renata Ferreira",
    profession: "Terapeuta Corporal",
    rating: 5,
    text: "A capacitação em estética corporal foi além das minhas expectativas! Aprendi diversas técnicas de modelagem e drenagem que meus clientes amam. O curso é super completo e prático!",
    courseCategories: ["corporal", "drenagem", "massagem", "modeladora"]
  },
  {
    id: "7",
    name: "Beatriz Lima",
    profession: "Especialista em Lifting de Cílios",
    rating: 5,
    text: "Fiz o curso de lash lifting e me apaixonei! A técnica é maravilhosa e as clientes adoram o resultado natural. O curso ensina tudo nos mínimos detalhes, desde a preparação até a finalização perfeita.",
    courseCategories: ["cilios", "lash", "lifting"]
  },
  {
    id: "8",
    name: "Carolina Alves",
    profession: "Designer de Sobrancelhas",
    rating: 5,
    text: "Já fiz vários cursos, mas esse de design de sobrancelhas é o mais completo! Aprendi visagismo, técnicas de medição, depilação com cera e pinça. Minha clientela triplicou depois do curso!",
    courseCategories: ["sobrancelhas", "design", "depilacao"]
  },
  {
    id: "9",
    name: "Fernanda Rocha",
    profession: "Esteticista Especializada",
    rating: 5,
    text: "O curso de peelings químicos me deu uma especialização que poucos profissionais têm! Aprendi a trabalhar com diferentes tipos de pele e a fazer protocolos personalizados. Meu faturamento aumentou 150%!",
    courseCategories: ["facial", "peeling", "estetica"]
  },
  {
    id: "10",
    name: "Gabriela Martins",
    profession: "Micropigmentadora",
    rating: 5,
    text: "Realizei meu sonho de trabalhar com micropigmentação através deste curso! O conteúdo é muito rico, com muita prática em pele sintética e modelos reais. Hoje tenho meu próprio estúdio e agenda cheia!",
    courseCategories: ["micropigmentacao", "microblading", "sobrancelhas"]
  },
  {
    id: "11",
    name: "Larissa Souza",
    profession: "Terapeuta Holística",
    rating: 5,
    text: "O curso de ventosaterapia abriu novas portas na minha carreira! Aprendi uma técnica milenar com aplicação moderna. Meus clientes amam os resultados e sempre recomendam meu trabalho!",
    courseCategories: ["terapias", "corporal", "relaxante"]
  },
  {
    id: "12",
    name: "Bianca Dias",
    profession: "Especialista em BB Glow",
    rating: 5,
    text: "O BB Glow revolucionou meu trabalho! É um tratamento que as clientes se apaixonam logo na primeira sessão. O curso me ensinou todas as nuances da técnica e hoje é um dos meus serviços mais procurados!",
    courseCategories: ["facial", "estetica", "skin"]
  },
  {
    id: "13",
    name: "Amanda Ribeiro",
    profession: "Esteticista Corporal",
    rating: 5,
    text: "A capacitação em criolipólise foi um divisor de águas! Aprendi a usar a tecnologia com segurança e eficiência. Hoje consigo ajudar minhas clientes a alcançarem o corpo dos sonhos!",
    courseCategories: ["corporal", "estetica"]
  },
  {
    id: "14",
    name: "Débora Castro",
    profession: "Especialista em Henna",
    rating: 5,
    text: "O curso de design com henna superou minhas expectativas! Aprendi desde o preparo da henna até técnicas avançadas de aplicação. Minhas clientes adoram o resultado natural e duradouro!",
    courseCategories: ["sobrancelhas", "henna", "design"]
  },
  {
    id: "15",
    name: "Eliane Gomes",
    profession: "Depiladora Profissional",
    rating: 5,
    text: "Aprendi técnicas incríveis de depilação com cera que tornaram meu trabalho muito mais rápido e confortável para as clientes. O curso é super prático e me deu muita confiança!",
    courseCategories: ["depilacao", "estetica"]
  },
  {
    id: "16",
    name: "Tatiana Barbosa",
    profession: "Especialista em Drenagem Linfática",
    rating: 5,
    text: "O curso de drenagem linfática foi excepcional! Aprendi manobras específicas para diferentes objetivos. É uma técnica que as clientes adoram e os resultados são visíveis desde a primeira sessão!",
    courseCategories: ["drenagem", "corporal", "massagem", "pos-operatorio"]
  },
  {
    id: "17",
    name: "Vanessa Correia",
    profession: "Lash Designer Profissional",
    rating: 5,
    text: "Iniciei no mundo do lash através deste curso e hoje é minha principal fonte de renda! As professoras ensinam com paciência e dedicação. Aprendi desde a teoria até técnicas avançadas de volume!",
    courseCategories: ["cilios", "lash", "olhar"]
  },
  {
    id: "18",
    name: "Simone Pereira",
    profession: "Esteticista Facial",
    rating: 5,
    text: "O curso de limpeza de pele me deu toda a base técnica que eu precisava! Aprendi protocolos para diferentes tipos de pele e hoje trabalho com segurança e excelência. Minhas clientes sempre voltam!",
    courseCategories: ["facial", "limpeza", "estetica"]
  },
  {
    id: "19",
    name: "Priscila Monteiro",
    profession: "Massagista Terapêutica",
    rating: 5,
    text: "A capacitação em massagem modeladora transformou meu atendimento! Aprendi técnicas que realmente modelam o corpo. É incrível ver a satisfação das clientes com os resultados!",
    courseCategories: ["massagem", "corporal", "modeladora"]
  },
  {
    id: "20",
    name: "Sandra Moreira",
    profession: "Terapeuta Corporal",
    rating: 5,
    text: "O curso de massagem relaxante me ensinou técnicas maravilhosas! Hoje consigo proporcionar momentos únicos de relaxamento para meus clientes. É gratificante ver o bem-estar que proporciono!",
    courseCategories: ["massagem", "relaxante", "terapias"]
  },
  {
    id: "21",
    name: "Luciana Azevedo",
    profession: "Micropigmentadora Labial",
    rating: 5,
    text: "Especializei-me em micropigmentação labial através deste curso incrível! A técnica exige precisão e delicadeza, que aprendi com os melhores profissionais. Hoje minhas clientes ficam encantadas!",
    courseCategories: ["micropigmentacao", "labial", "microblading"]
  },
  {
    id: "22",
    name: "Isabela Cardoso",
    profession: "Especialista em Microagulhamento",
    rating: 5,
    text: "O curso de microagulhamento facial foi sensacional! Aprendi protocolos seguros e eficazes para diversos tipos de tratamento. Os resultados que consigo entregar são impressionantes!",
    courseCategories: ["facial", "microagulhamento", "estetica"]
  },
  {
    id: "23",
    name: "Aline Freitas",
    profession: "Especialista em Preenchimento",
    rating: 5,
    text: "Fiz o curso de preenchimento labial e me sinto totalmente preparada para atuar! O curso aborda desde anatomia até técnicas avançadas. A prática supervisionada foi essencial para minha confiança!",
    courseCategories: ["injetaveis", "preenchimento", "labial"]
  },
  {
    id: "24",
    name: "Roberta Nunes",
    profession: "Especialista em Radiofrequência",
    rating: 5,
    text: "A capacitação em radiofrequência foi além das minhas expectativas! Aprendi a usar a tecnologia para diversos tratamentos faciais e corporais. Os resultados são incríveis e duradouros!",
    courseCategories: ["facial", "corporal", "estetica"]
  },
  {
    id: "25",
    name: "Adriana Campos",
    profession: "Especialista em Remoção a Laser",
    rating: 5,
    text: "O curso de remoção de micropigmentação a laser me especializou em uma área muito procurada! Aprendi técnicas seguras e eficazes. É gratificante ajudar pessoas a corrigirem trabalhos mal feitos!",
    courseCategories: ["laser", "micropigmentacao", "remocao"]
  }
];

// Função para obter depoimentos aleatórios baseados na categoria do curso
export const getRandomTestimonials = (courseCategory: string, count: number = 3): Testimonial[] => {
  const categoryLower = courseCategory.toLowerCase();
  
  // Filtrar depoimentos relacionados à categoria
  const relatedTestimonials = courseTestimonials.filter(testimonial =>
    testimonial.courseCategories.some(cat => 
      categoryLower.includes(cat) || cat.includes(categoryLower)
    )
  );
  
  // Se não houver depoimentos específicos, usar todos
  const availableTestimonials = relatedTestimonials.length > 0 ? relatedTestimonials : courseTestimonials;
  
  // Embaralhar e retornar a quantidade solicitada
  const shuffled = [...availableTestimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
