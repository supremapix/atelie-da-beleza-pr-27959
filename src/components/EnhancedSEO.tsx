import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object | object[];
  noindex?: boolean;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const EnhancedSEO = ({
  title,
  description,
  canonical,
  keywords = "cursos de estética Curitiba, micropigmentação, design de sobrancelhas, lash lifting, estética facial, estética corporal, curso profissionalizante",
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/z3uM9QrEiaZcmzxCWIVMCntcMQg2/social-images/social-1761135543473-atelie-da-beleza-cursos-profissionalizantes-em-curitiba-parana-brasil.png",
  structuredData,
  noindex = false,
  type = 'website',
  author = 'Ateliê Beleza',
  publishedTime,
  modifiedTime,
}: EnhancedSEOProps) => {
  // Garante que structuredData seja sempre um array
  const structuredDataArray = structuredData 
    ? (Array.isArray(structuredData) ? structuredData : [structuredData])
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <>
          <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Ateliê Beleza - Cursos de Estética em Curitiba" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="pt_BR" />
      {author && <meta property="article:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@ateliebeleza" />
      <meta name="twitter:site" content="@ateliebeleza" />

      {/* Additional Meta Tags */}
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />
      
      {/* Mobile Optimization */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Ateliê Beleza" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Resource Hints - Critical Performance Optimization */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      <link rel="dns-prefetch" href="https://storage.googleapis.com" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://storage.googleapis.com" />
      
      {/* Preload Critical Assets */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap"
        media="print"
      />

      {/* Structured Data - JSON-LD */}
      {structuredDataArray.map((data, index) => (
        <script key={`structured-data-${index}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}

      {/* Alternative Links */}
      <link rel="alternate" hrefLang="pt-BR" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
    </Helmet>
  );
};

export default EnhancedSEO;
