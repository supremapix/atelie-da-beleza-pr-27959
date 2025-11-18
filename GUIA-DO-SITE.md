# 🌟 Guia Completo - Ateliê Beleza

## 📋 Índice
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar o Site](#como-usar-o-site)
- [Desenvolvimento Local](#desenvolvimento-local)
- [SEO e Performance](#seo-e-performance)
- [Deploy e Publicação](#deploy-e-publicação)
- [Arquitetura e Padrões](#arquitetura-e-padrões)

---

## 🛠️ Tecnologias Utilizadas

### Linguagens de Programação
- **TypeScript** - Linguagem principal do projeto (superset do JavaScript com tipagem estática)
- **JavaScript** - Usado em configurações e scripts
- **HTML** - Estrutura das páginas (gerado pelo React)
- **CSS** - Estilização (via Tailwind CSS)

### Framework e Bibliotecas Frontend
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **React Router DOM 6.30.1** - Roteamento de páginas SPA
- **Tailwind CSS** - Framework CSS utility-first para estilização
- **Shadcn UI** - Componentes de UI acessíveis e customizáveis

### Gerenciamento de Estado e Dados
- **TanStack Query (React Query)** - Gerenciamento de estado assíncrono e cache
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas TypeScript

### SEO e Meta Tags
- **React Helmet Async** - Gerenciamento dinâmico de meta tags no `<head>`
- **Structured Data (JSON-LD)** - Dados estruturados para Google
- **Sitemap XML** - Mapa do site para indexação

### UI e Animações
- **Radix UI** - Primitivos de UI acessíveis (base dos componentes Shadcn)
- **Lucide React** - Ícones SVG otimizados
- **Embla Carousel** - Carrosséis de imagens responsivos
- **Class Variance Authority (CVA)** - Gerenciamento de variantes de componentes
- **Tailwind Merge** - Merge inteligente de classes CSS

### Performance e PWA
- **Service Worker** - Cache offline e melhor performance
- **Vite PWA Plugin** - Transformar o site em Progressive Web App
- **Resource Hints** - Preconnect, DNS-prefetch para otimização

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processamento de CSS
- **TypeScript Compiler** - Compilação e verificação de tipos

---

## 📁 Estrutura do Projeto

```
ateliebeleza/
├── public/                          # Arquivos estáticos públicos
│   ├── _headers                     # Cabeçalhos HTTP para Netlify
│   ├── _redirects                   # Regras de redirecionamento SPA
│   ├── robots.txt                   # Instruções para crawlers
│   ├── sitemap.xml                  # Mapa do site XML
│   └── service-worker.js            # Cache offline
│
├── src/
│   ├── assets/                      # Imagens e recursos
│   │   ├── all-courses/             # Imagens dos cursos
│   │   └── *.jpg, *.png             # Logos, hero images
│   │
│   ├── components/                  # Componentes React reutilizáveis
│   │   ├── ui/                      # Componentes Shadcn UI
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── About.tsx
│   │   ├── AdvancedSEO.tsx          # SEO avançado com Helmet
│   │   ├── BlackFridayBanner.tsx
│   │   ├── Contact.tsx
│   │   ├── Courses.tsx
│   │   ├── EnhancedSEO.tsx          # SEO otimizado por página
│   │   ├── FAQ.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   │
│   ├── data/                        # Dados estáticos do site
│   │   ├── courses.ts               # Lista de cursos
│   │   ├── faq.ts                   # Perguntas frequentes gerais
│   │   ├── neighborhoodFaqs.ts      # FAQs por bairro
│   │   ├── neighborhoods.ts         # Dados dos bairros
│   │   ├── locations.ts             # Localizações atendidas
│   │   └── testimonials.ts          # Depoimentos
│   │
│   ├── hooks/                       # Custom React Hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useTypewriter.tsx
│   │
│   ├── pages/                       # Páginas principais do site
│   │   ├── neighborhoods/           # Páginas de bairros específicos
│   │   │   ├── Batel.tsx
│   │   │   ├── Centro.tsx
│   │   │   ├── Pilarzinho.tsx
│   │   │   └── ...
│   │   ├── BlackFriday.tsx          # Página de campanha
│   │   ├── CourseDetail.tsx         # Detalhes do curso
│   │   ├── DynamicLocation.tsx      # Páginas dinâmicas de localização
│   │   ├── Index.tsx                # Página inicial
│   │   ├── LocationPage.tsx         # Template de página de localização
│   │   ├── NotFound.tsx             # 404 personalizado
│   │   └── TodosCursos.tsx          # Listagem de todos os cursos
│   │
│   ├── utils/                       # Funções utilitárias
│   │   └── locationTexts.ts
│   │
│   ├── App.tsx                      # Componente raiz com rotas
│   ├── main.tsx                     # Entry point do React
│   ├── index.css                    # Estilos globais e design tokens
│   └── lib/utils.ts                 # Utilitários compartilhados
│
├── .htaccess                        # Configuração Apache (rewrite rules)
├── netlify.toml                     # Configuração Netlify
├── vercel.json                      # Configuração Vercel
├── vite.config.ts                   # Configuração Vite
├── tailwind.config.ts               # Configuração Tailwind CSS
├── tsconfig.json                    # Configuração TypeScript
├── package.json                     # Dependências do projeto
└── README.md                        # Documentação básica
```

---

## 🎯 Como Usar o Site

### Para Visitantes
1. **Navegação Principal**: Menu superior com links para Cursos, Sobre, Contato
2. **Busca de Cursos**: Campo de busca na página de cursos para filtrar por nome ou categoria
3. **Páginas de Localização**: URLs como `/batel`, `/centro`, `/curitiba` com conteúdo localizado
4. **Detalhes do Curso**: Clique em qualquer curso para ver descrição completa, preços, bônus
5. **Contato via WhatsApp**: Botões flutuantes e CTAs ao longo do site
6. **Black Friday**: Página especial `/black-friday` com ofertas e countdown

### URLs Importantes
- **Home**: `https://www.ateliebeleza.com.br/`
- **Todos os Cursos**: `https://www.ateliebeleza.com.br/cursos`
- **Curso Específico**: `https://www.ateliebeleza.com.br/curso/[id-do-curso]`
- **Localização**: `https://www.ateliebeleza.com.br/[nome-do-bairro]`
- **Black Friday**: `https://www.ateliebeleza.com.br/black-friday`

---

## 💻 Desenvolvimento Local

### Pré-requisitos
- **Node.js** versão 16+ (recomendado: versão 18 ou 20)
- **npm** ou **yarn** ou **pnpm** ou **bun**

### Instalação

```bash
# 1. Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd ateliebeleza

# 2. Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

### Servidor estará rodando em:
```
http://localhost:8080
```

### Comandos Disponíveis

```bash
# Desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Linting
npm run lint
```

---

## 🔍 SEO e Performance

### Estratégias de SEO Implementadas

#### 1. **Meta Tags Dinâmicas por Página**
- Cada página tem título, descrição e keywords únicos
- Tags Open Graph para Facebook
- Twitter Cards para compartilhamento
- Canonical URLs normalizadas para `https://www.ateliebeleza.com.br/`

#### 2. **Structured Data (JSON-LD)**
- **Organization**: Informações da empresa
- **LocalBusiness**: Dados do ateliê com endereço físico
- **BreadcrumbList**: Navegação em todas as páginas internas
- **Course**: Dados estruturados para cada curso
- **FAQPage**: Perguntas frequentes estruturadas

#### 3. **Otimizações de Performance**
- **Resource Hints**: DNS-prefetch, preconnect para Google Fonts
- **Font Optimization**: Preload de fontes críticas
- **Service Worker**: Cache offline de páginas principais
- **Lazy Loading**: Carregamento sob demanda de imagens

#### 4. **SEO Local (100+ Páginas de Localização)**
- 30 páginas de cidades metropolitanas
- 80+ páginas de bairros de Curitiba
- Conteúdo personalizado por localização (300+ palavras)
- FAQs específicos por bairro
- Endereço físico em todas as páginas

#### 5. **Sitemap e Robots**
- `sitemap.xml` atualizado com todas as páginas
- `robots.txt` otimizado para crawlers
- Frequência de atualização e prioridades configuradas

---

## 🚀 Deploy e Publicação

### Plataformas Suportadas

#### 1. **Netlify** (Recomendado)
- Arquivo `netlify.toml` configurado
- Arquivo `public/_redirects` para SPA routing
- Deploy automático via Git

#### 2. **Vercel**
- Arquivo `vercel.json` configurado
- Rewrites para todas as rotas apontarem para `index.html`

#### 3. **Servidor Apache**
- Arquivo `.htaccess` com mod_rewrite
- Suporte a URLs amigáveis sem `#`

### Configuração de SPA Routing

Todos os arquivos de configuração estão prontos para garantir que:
- URLs diretas funcionem (ex: acessar `/black-friday` diretamente)
- Reload (F5) mantenha a rota atual
- Botões voltar/avançar do navegador funcionem
- Sem erro 404 em rotas internas

### Deploy via Lovable
1. Clique no botão **Publish** no canto superior direito
2. Clique em **Update** para enviar alterações frontend
3. Backend (se houver) é deployado automaticamente

---

## 🏗️ Arquitetura e Padrões

### Design System
- **Tokens Semânticos**: Cores definidas em `index.css` usando variáveis CSS HSL
- **Tailwind Config**: Extensão de temas em `tailwind.config.ts`
- **Componentes Shadcn**: Base de componentes com variantes usando CVA

```css
/* Exemplo de tokens em index.css */
:root {
  --primary: 330 81% 65%;        /* Cor primária (rosa) */
  --secondary: 240 5% 96%;       /* Cor secundária */
  --accent: 330 81% 65%;         /* Cor de destaque */
  --background: 0 0% 100%;       /* Fundo */
  --foreground: 240 10% 3.9%;    /* Texto */
  /* ... */
}
```

### Padrões de Código
- **TypeScript**: Tipagem forte em todo o projeto
- **React Hooks**: Uso de hooks customizados para lógica reutilizável
- **Componentes Funcionais**: Todos os componentes são function components
- **Props Interfaces**: Interfaces TypeScript para todas as props
- **Separation of Concerns**: Dados separados em `/data`, lógica em `/hooks`, UI em `/components`

### Roteamento
```tsx
// src/App.tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/cursos" element={<TodosCursos />} />
  <Route path="/curso/:courseId" element={<CourseDetail />} />
  <Route path="/black-friday" element={<BlackFriday />} />
  <Route path="/:slug" element={<DynamicLocation />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Gerenciamento de Estado
- **React Query**: Cache e sincronização de dados assíncronos
- **Context API**: Quando necessário para estado global
- **Local State**: `useState` para estado de componente
- **URL State**: React Router para estado na URL

---

## 📊 Estratégia de Conteúdo

### Cursos (50+ cursos)
Organizados em categorias:
- **Beleza e Design**: Design de Sobrancelhas, Lash, Micropigmentação
- **Estética Facial e Corporal**: Limpeza, Microagulhamento, Jato de Plasma
- **Terapias Complementares**: Massagens, Reflexologia
- **Tecnologias e Equipamentos**: Radiofrequência, Ultrassom, Laser

### Páginas de Localização (100+)
- **30 Cidades**: Região metropolitana de Curitiba
- **80+ Bairros**: Bairros de Curitiba com conteúdo personalizado
- **FAQs Dinâmicos**: Perguntas específicas por localização

### Campanhas
- **Black Friday**: Campanha ativa até 17/12/2025
- **Pacotes Especiais**: Ofertas combinadas de cursos
- **Kits Profissionais**: Bônus inclusos em pacotes

---

## 🔧 Tecnologias por Funcionalidade

| Funcionalidade | Tecnologia |
|----------------|------------|
| **UI Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Roteamento** | React Router DOM v6 |
| **Estilização** | Tailwind CSS + CSS Variables |
| **Componentes** | Shadcn UI (Radix UI) |
| **Ícones** | Lucide React |
| **Formulários** | React Hook Form + Zod |
| **SEO** | React Helmet Async |
| **Cache** | Service Worker + React Query |
| **Animações** | Tailwind CSS + CSS Transitions |
| **Carrosséis** | Embla Carousel |
| **Toasts** | Sonner |
| **Deploy** | Netlify / Vercel / Apache |

---

## 📈 Métricas e Estatísticas

- **6.000+ alunas formadas**
- **50+ cursos disponíveis**
- **100+ páginas de localização**
- **Performance Score**: Otimizado para Core Web Vitals
- **SEO Score**: Meta tags completas, structured data, sitemap

---

## 🤝 Suporte e Contato

- **WhatsApp**: Link direto nos botões flutuantes
- **Email**: Formulário de contato na página
- **Endereço Físico**: R. Alexandre Von Humboldt, 306 - Pilarzinho - Curitiba - PR
- **Google Maps**: [Ver localização](https://maps.app.goo.gl/ETYAaHw3CJvMgjPf7)

---

## 📝 Notas Técnicas

### Por que TypeScript?
- Detecta erros em tempo de desenvolvimento
- Autocomplete inteligente na IDE
- Refatoração mais segura
- Documentação viva do código

### Por que Vite?
- Hot Module Replacement (HMR) instantâneo
- Build otimizado com esbuild
- Suporte nativo a TypeScript
- Tempo de build até 100x mais rápido que Webpack

### Por que Tailwind CSS?
- Desenvolvimento rápido com classes utilitárias
- Design system consistente via tokens
- Purge automático de CSS não utilizado
- Responsividade fácil com breakpoints

### Por que React Router?
- Roteamento client-side sem reload
- Code splitting por rota
- Navegação programática
- URLs limpas e SEO-friendly

---

## 🎓 Recursos de Aprendizado

### Para aprender React
- [React Docs Oficial](https://react.dev/)
- [React Tutorial Interativo](https://react.dev/learn)

### Para aprender TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### Para aprender Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Para aprender Vite
- [Vite Guide](https://vitejs.dev/guide/)
- [Vite Features](https://vitejs.dev/guide/features.html)

---

## ✅ Checklist de Manutenção

### Atualização de Conteúdo
- [ ] Adicionar novos cursos em `src/data/courses.ts`
- [ ] Atualizar preços em cursos existentes
- [ ] Adicionar novos depoimentos em `src/data/testimonials.ts`
- [ ] Atualizar estatísticas (ex: número de alunas)

### SEO
- [ ] Atualizar `sitemap.xml` ao adicionar novas páginas
- [ ] Verificar canonical URLs em novas páginas
- [ ] Adicionar structured data em novas páginas
- [ ] Testar meta tags com [Open Graph Debugger](https://www.opengraph.xyz/)

### Performance
- [ ] Otimizar imagens novas (compressão, formato WebP)
- [ ] Limpar código não utilizado
- [ ] Verificar bundle size após atualizações
- [ ] Testar em [PageSpeed Insights](https://pagespeed.web.dev/)

### Deploy
- [ ] Testar localmente antes do deploy
- [ ] Verificar rotas após deploy
- [ ] Confirmar que Service Worker atualiza cache
- [ ] Testar em diferentes dispositivos

---

**Desenvolvido com ❤️ para Ateliê Beleza - Juliana Perussi**

*Última atualização: 2025-11-18*
