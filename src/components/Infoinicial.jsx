import "../assets/style/css/Font.css";
import "animate.css";
import { Contenidoone } from "./const.js";
import {
  Boton,
  Contenedorinfodiv,
  Contenedormain,
} from "../assets/style/stylecomponets/styled.js";
import { useNavigate } from "react-router";
import { useState } from "react";

export function Infoinicial() {
  const navigate = useNavigate(); // Hook de navegación

  const [content, setContent] = useState({
    tittle: "Workout",
    parrafo: "Start training with usand build muscle or lose weight",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1725495706/Buffalo%20app/Banner%20registrer/MEN3.jpg",
  });

  const [clickCount, setClickCount] = useState(0);

  const hadleclicks = () => {
    //  Llame a setClickCount para controlar los mensajes que se muestran del arreglo "contenido"
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      const newIndex = newCount % Contenidoone.length;

      if (newCount === 3) {
        navigate("/singin");
      } else {
        setContent(Contenidoone[newIndex]);
      }
      return newCount;
    });
  };

  return (
    <Contenedormain>
      <img
        className="animate__animated animate__fadeIn"
        src={content.img}
        width={"100%"}
        alt=""
      />
      <Contenedorinfodiv>
        <h2>{content.tittle}</h2>
        <p>{content.parrafo}</p>
      </Contenedorinfodiv>
      <Boton onClick={hadleclicks}>Next</Boton>
    </Contenedormain>
  );
}
