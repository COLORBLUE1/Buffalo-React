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
    tittle: "Ejercicio",
    parrafo: "Empieza a entrenar con nosotros y desarrolla músculo o adelgaza",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1731101572/Buffalo%20app/Banner%20registrer/bk8uxohk6xtldbbchf9d.png",
  },
  {
    id: 2,
    tittle: "Disciplina",
    parrafo: "Desarrolla la disciplina en ti mismo, entrena todos los días.",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1731101571/Buffalo%20app/Banner%20registrer/uslzbrs6fqtm8b6uu46q.png",
  },
  {
    id: 3,
    tittle: "Personaje",
    parrafo: "Cultiva en ti un carácter de hierro para entrenar",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1731101570/Buffalo%20app/Banner%20registrer/euvwv8n5o3wcc6lt9ue1.png",
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
