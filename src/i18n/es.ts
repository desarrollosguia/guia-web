import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Webs, aplicaciones, bots y sistemas a medida",
    description:
      "Diseñamos y desarrollamos webs, aplicaciones, bots y sistemas para empresas y emprendedores.",
  },
  skipLink: "Saltar al contenido",
  header: {
    homeLabel: "Ir al inicio",
    languageLabel: "Idioma",
    themeLabel: "Tema",
    themeLight: "Claro",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    menuLabel: "Menú",
    themeDark: "Oscuro",
  },
  nav: {
    label: "Principal",
    services: "Servicios",
    projects: "Proyectos",
    process: "Cómo trabajamos",
    about: "Nosotros",
  },
  hero: {
    title: "De la idea a un sistema funcional",
    lead: "Diseñamos y desarrollamos a tu medida. Contanos qué necesitás.",
    contact: "Escribinos",
    projects: "Nuestros proyectos",
  },
  services: {
    title: "Servicios",
    showIncluded: "Qué incluye",
    hideIncluded: "Ocultar",
    items: [
      {
        name: "Webs",
        line: "Para que tu negocio se encuentre online y quien llega sepa qué hacer.",
        included: ["Diseño de la interfaz", "Desarrollo del sitio", "Publicación"],
      },
      {
        name: "Aplicaciones",
        line: "Para convertir una idea o un proceso en una aplicación que tu equipo o tus clientes puedan usar.",
        included: ["Diseño de la experiencia", "Desarrollo", "Pruebas"],
      },
      {
        name: "Bots",
        line: "Para atender consultas y gestionar turnos sin contestar todo a mano.",
        included: ["Definición de las conversaciones", "Desarrollo del bot", "Pruebas"],
      },
      {
        name: "Sistemas a medida",
        line: "Para ordenar lo que hoy se hace en planillas y mensajes, con un sistema pensado para tu forma de trabajar.",
        included: ["Modelo de datos", "Desarrollo", "Integración con lo que ya usás"],
      },
      {
        name: "Integraciones y automatización",
        line: "Para que los sistemas que ya usás se hablen entre sí y se terminen las tareas repetidas.",
        included: [
          "Análisis de los sistemas involucrados",
          "Conexión por APIs",
          "Pruebas de las integraciones",
        ],
      },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    intro:
      "Trabajamos como analistas funcionales: entendemos el problema antes de planificar, diseñar y desarrollar.",
    steps: [
      {
        name: "Entender",
        line: "Hacemos un análisis funcional inicial por videollamada, de hasta una hora y sin costo, para entender qué necesitás antes de proponer nada.",
      },
      {
        name: "Presupuestar",
        line: "Con lo que aprendimos armamos un presupuesto. Ahí se acuerdan el alcance, cómo se prueba y el soporte o mantenimiento.",
      },
      {
        name: "Diseñar y construir",
        line: "Diseñamos y desarrollamos la solución. Si hace falta, podemos hacer entregas parciales, que se presupuestan aparte.",
      },
      {
        name: "Probar",
        line: "Probamos lo construido de forma sincrónica o asincrónica, según lo que se definió en el presupuesto.",
      },
      {
        name: "Publicar",
        line: "Publicamos en la fecha pactada. El soporte o mantenimiento sigue lo que se acordó en el presupuesto.",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    viewProject: "Ver proyecto",
    items: {
      audenpass: {
        name: "Audenpass",
        imageAlt:
          "Pantalla de inicio de Audenpass con el titular «La entrada a momentos únicos» y un evento destacado",
      },
    },
  },
  contact: {
    title: "Contacto",
    cta: "Escribinos",
    github: "GitHub",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
  },
  footer: {
    before: "La",
    and: "y la",
    are: "son las",
    emphasis: "teclas guía",
    after: " de tu teclado: este es tu punto de partida",
  },
  notFound: {
    metaTitle: "Página no encontrada",
    title: "No encontramos esta página.",
    back: "Volver al inicio",
  },
};
