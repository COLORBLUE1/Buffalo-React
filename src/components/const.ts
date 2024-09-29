// Define una interfaz para los objetos de contenido
interface Contenido {
  id: number;
  tittle?: string; // Tittle puede ser opcional
  parrafo?: string; // Parrafo puede ser opcional
  img: string;
}

// Define una interfaz para los objetos de contenido sin título ni párrafo
interface ContenidoSinTexto {
  id: number;
  img: string;
}

// URL de imágenes
export const Logo: string =
  "https://res.cloudinary.com/dehpi4905/image/upload/v1725494999/Buffalo%20app/Logo.png";

export const imgpruebas: string =
  "https://www.geekmi.news/__export/1677857618565/sites/debate/img/2023/03/03/eren-jaeger-snk_1.jpg_554688468.jpg";

// Contenidos con título y párrafo
export const Contenidoone: Contenido[] = [
  {
    id: 1,
    tittle: "Workout",
    parrafo: "Start training with us and build muscle or lose weight",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1725740496/Buffalo%20app/Banner%20registrer/o0crbqxi6mcbe293pipo.jpg",
  },
  {
    id: 2,
    tittle: "Discipline",
    parrafo: "Develop discipline in yourself train every day",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1725740496/Buffalo%20app/Banner%20registrer/apvvxypnhbdhooa8raqn.jpg",
  },
  {
    id: 3,
    tittle: "Character",
    parrafo: "Cultivate in you an iron character for training",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1725740496/Buffalo%20app/Banner%20registrer/o0crbqxi6mcbe293pipo.jpg",
  },
];

// Contenidos sin título ni párrafo
export const Contenidotwe: ContenidoSinTexto[] = [
  {
    id: 1,
    img: "https://img.pikbest.com/backgrounds/20211027/restaurant-opening-promotion-promotion-banner_6207379.jpg!w700wp",
  },
  {
    id: 2,
    img: "https://img.pikbest.com/backgrounds/20211027/restaurant-opening-promotion-promotion-banner_6207379.jpg!w700wp",
  },
  {
    id: 3,
    img: "https://img.pikbest.com/backgrounds/20211027/restaurant-opening-promotion-promotion-banner_6207379.jpg!w700wp",
  },
];
