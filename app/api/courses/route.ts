export async function GET() {
  return Response.json({
    courses: [
      {
        id: 1,
        name: "PostgreSQL: Aprende a administrar tu base de datos",
        description:
          "Domina los Utility Types de TypeScript para optimizar tu código y mejorar su mantenibilidad",
      },
      {
        id: 2,
        name: "JavaScript Moderno: De Cero a Experto",
        description:
          "Aprende JavaScript desde lo básico hasta conceptos avanzados y frameworks populares",
      },
      {
        id: 3,
        name: "Desarrollo Web con React y Next.js",
        description:
          "Crea aplicaciones web modernas utilizando React y Next.js con buenas prácticas",
      },
      {
        id: 4,
        name: "Fundamentos de Bases de Datos SQL",
        description:
          "Aprende los conceptos básicos de las bases de datos relacionales y el lenguaje SQL",
      },
      {
        id: 5,
        name: "CSS Avanzado: Diseño Responsivo y Animaciones",
        description:
          "Domina técnicas avanzadas de CSS para crear sitios web atractivos y responsivos",
      },
      {
        id: 6,
        name: "Node.js: Desarrollo de Aplicaciones del Lado del Servidor",
        description:
          "Aprende a construir aplicaciones del lado del servidor utilizando Node.js y Express",
      },
      {
        id: 7,
        name: "TypeScript: Tipado Estático para JavaScript",
        description:
          "Mejora la calidad de tu código JavaScript con TypeScript y sus características de tipado",
      },
      {
        id: 8,
        name: "Introducción a DevOps y CI/CD",
        description:
          "Aprende los fundamentos de DevOps y cómo implementar pipelines de CI/CD para tus proyectos",
      },
    ],
  });
}
