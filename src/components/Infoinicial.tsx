import "../assets/style/css/Font.css";
import "animate.css";
import { Contenidoone } from "./const.ts";
import {
  Boton,
  Contenedorinfodiv,
  Contenedormain,
} from "../assets/style/stylecomponets/styled.js";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export function Infoinicial() {
  const navigate = useNavigate(); // Hook de navegación

  const [content, setContent] = useState({
    tittle: "Ejercicio",
    parrafo: "Empieza a entrenar con nosotros y desarrolla músculo o adelgaza",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1731101572/Buffalo%20app/Banner%20registrer/bk8uxohk6xtldbbchf9d.png",
  });

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 3) {
      navigate("/singin");
    }
  }, [clickCount, navigate]);

  const hadleclicks = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      const newIndex = newCount % Contenidoone.length;

      setContent(Contenidoone[newIndex]);
      return newCount;
    });
  };

  return (
    <Contenedormain>
      <Contenedorinfodiv>
        <img
          className="animate__animated animate__fadeIn"
          src={content.img}
          width={300}
          alt=""
        />
        <h2>{content.tittle}</h2>
        <p>{content.parrafo}</p>

        <Boton onClick={hadleclicks}>Siguiente</Boton>
      </Contenedorinfodiv>
    </Contenedormain>
  );
}
