import { Logo } from "./const.ts";
import {
  Pantalla,
  Img,
  Splasconten,
} from "../assets/style/stylecomponets/styled.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Logica

export const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/informacion");
    }, 2000); // Redirige después de 1 segundo

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, [navigate]);

  return (
    <Pantalla>
      <Splasconten>
        <Img src={Logo} alt="Logo" />
        <h2>Buffalo</h2>
      </Splasconten>
    </Pantalla>
  );
};
