import { neighborhoods } from './src/data/neighborhoods.js';
import { courses } from './src/data/courses.js';

// Gera todas as rotas para pre-rendering
export function generateRoutes() {
  const routes = [
    '/',
    '/cursos',
  ];

  // Adiciona rotas de bairros
  neighborhoods.forEach(neighborhood => {
    routes.push(`/${neighborhood.slug}`);
  });

  // Adiciona rotas de cursos
  courses.forEach(course => {
    routes.push(`/curso/${course.id}`);
  });

  return routes;
}

export default generateRoutes;
