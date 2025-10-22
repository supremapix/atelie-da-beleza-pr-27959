import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Ateliê Beleza",
      "url": "https://ateliebeleza.app.br",
      "logo": "https://ateliebeleza.app.br/logo.png",
      "description": "Cursos de estética em Curitiba com instrutores renomados. Capacitação em micropigmentação, design de sobrancelhas, lash lifting e muito mais.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "telephone": "+55-41-99999-9999",
      "email": "contato@ateliebeleza.app.br",
      "founder": {
        "@type": "Person",
        "name": "Juliana Perussi",
        "jobTitle": "Dermaticista",
        "description": "Especialista em estética facial com mais de 21 anos de experiência"
      },
      "sameAs": [
        "https://instagram.com/ateliebeleza",
        "https://facebook.com/ateliebeleza"
      ]
    };

    // Course Schema
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Cursos de Estética - Ateliê Beleza",
      "description": "Cursos profissionalizantes em estética oferecidos pelo Ateliê Beleza em Curitiba",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Curso de Micropigmentação de Sobrancelhas",
          "description": "Domine a arte da micropigmentação de sobrancelhas",
          "provider": {
            "@type": "Organization",
            "name": "Ateliê Beleza"
          }
        },
        {
          "@type": "Course",
          "name": "Curso de Estética Facial Master",
          "description": "Técnicas essenciais em tratamentos faciais",
          "provider": {
            "@type": "Organization",
            "name": "Ateliê Beleza"
          }
        },
        {
          "@type": "Course",
          "name": "Curso Lash Master Class",
          "description": "Fundamentos e prática para aplicação de cílios",
          "provider": {
            "@type": "Organization",
            "name": "Ateliê Beleza"
          }
        }
      ]
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ateliê Beleza",
      "image": "https://ateliebeleza.app.br/logo.png",
      "@id": "https://ateliebeleza.app.br",
      "url": "https://ateliebeleza.app.br",
      "telephone": "+55-41-99999-9999",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -25.4284,
        "longitude": -49.2733
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://ateliebeleza.app.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cursos",
          "item": "https://ateliebeleza.app.br/#cursos"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sobre Nós",
          "item": "https://ateliebeleza.app.br/#sobre-nos"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contato",
          "item": "https://ateliebeleza.app.br/#contato"
        }
      ]
    };

    // Insert schemas into the head
    const addSchema = (schema: object, id: string) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    addSchema(organizationSchema, 'organization-schema');
    addSchema(courseSchema, 'course-schema');
    addSchema(localBusinessSchema, 'local-business-schema');
    addSchema(breadcrumbSchema, 'breadcrumb-schema');

  }, []);

  return null;
};

export default SchemaMarkup;
