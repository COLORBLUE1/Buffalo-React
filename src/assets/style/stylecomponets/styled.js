import styled from "styled-components";
import "../css/Font.css";

export const Contenedormain = styled.div`
  background-color: #1f233e;
  display: grid;
  justify-items: center;
  height: 100vh;
  font-family: "Roboto";
  color: #ffffff7d;
`;

export const Contenedorinfodiv = styled.div`
  display: grid;
  justify-items: center;
  font-family: ;
  padding: 20px;

  h2 {
    color: white;
    margin: 0;
    font-family: Raleway;
  }

  p {
    color: #ffffff7d;
    margin: 0;
    font-size: 14px;
    width: 200px;
    text-align: center;
  }
`;

export const Contenedoricon = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;

  a {
    color: #ffffff7d;
    text-decoration: none;
    font-size: 10px;
  }

  h3 {
    color: #fff;
    font-family: Raleway;
    font-weight: 400;
    font-size: 25px;

    //animacion

    animation: fadeInUp;
    animation-duration: 1s;
  }
`;

export const Contenedortwe = styled.div`
  color: #ffffff7d;
`;

export const LoginGF = styled.div`
  display: grid;
  justify-items: center;

  div {
    display: flex;
    gap: 10px;
  }
`;

export const Contenedorarrafo = styled.p`
  font-size: 15px;
  padding: 30px;

  //animacion

  animation: fadeInUp;
  animation-duration: 1s;
`;

export const Img = styled.img`
  position: relative;
  height: 250px;
  width: 250px;
  margin: auto;

  //animacion de imagen

  animation: bounceIn;
  animation-duration: 1s;
`;

export const TextField = styled.input`
  background: #2E3562;
  border: none;
  max-width: 100vw;
  width: 80vw;
  height: 40px;
  box-sizing: border-box;
  border-radius: 50px;
  padding:20px;
  color:#fff;


  &:focus-visible {|
    outline: none;
  }

  &::placeholder{
  color: #ffffff80;
  }
`;

export const Svg = styled.div`
  position: absolute;
  left: 20px;
`;

export const Contenedorinput = styled.form`
  position: relative;
  display: grid;
  gap: 20px;
`;

export const Contenedorone = styled.section`
  font-family: Roboto;
  height: 100vh;
  display: grid;
  align-content: center;
  justify-items: center;
`;

export const ContenedorBoton = styled.div`
  display: grid;
  height: 100%;
  position: relative;
  top: 400px;
  justify-items: center;
`;

export const Comentarioactivo = styled.div`
  width: 15px;
  height: 15px;
  background-color: #ffe03173;
  border-radius: 50%;
`;

export const Parrafos = styled.p`
  width: 500px;
  height: 100px;
  font-size: clamp(1.25rem, 0.804rem + 1.19vw, 1.875rem);
  text-align: center;
  padding: 10px;

  //animacion

  animation: fadeInUp;
  animation-duration: 1s;
`;

export const Imagecont = styled.figure`
  position: relative;
  height: 300px;
  width: 300px;
  margin: auto;

  //animacion de imagen

  animation: zoomIn;
  animation-duration: 1s;
`;

export const Boton = styled.button`
  width: 350px;
  height: 50px;
  font-size: clamp(1.25rem, 0.804rem + 1.19vw, 1.875rem);
  text-align: center;
  padding: 10px;
  background-color: #2be7e8;
  border: none;
  border-radius: 50px;
  color: black;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  color: white;
`;

export const Pantalla = styled.section`
  background-color: #1f233e;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Splasconten = styled.div`
  display: grid;
  justify-items: center;
  color: white;
  font-family: Racing;

  h2 {
    margin: 0;
  }
`;

export const LogoImg = styled.img`
  width: clamp(6.25rem, 1.786rem + 11.905vw, 12.5rem);
  height: clamp(6.25rem, 1.786rem + 11.905vw, 12.5rem);

  //animacion de imagen

  animation: rubberBand;
  animation-duration: 2s;
`;

export const Spancont = styled.span`
  color: #ffffff80;
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const ContenedorNavber = styled.div`
  position: fixed;
  bottom: 0;
  margin: auto;
  transform: translateX(-50%);
  left: 50%;
  padding: 0 10px;
`;

//sections del home

export const Sectionhome = styled.section`
  background-color: #1f233e;
  max-width: 100vw;
`;

export const Perfilcontenedor = styled.section`
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  div {
    display: grid;
    color: #ffffff80;
    p {
      margin: 0;
      font-family: arial;
    }

    h4 {
      font-family: arial;
      margin: 0;
    }
  }
`;

export const Noty = styled.div`
  width: 50%;
  display: flex !important;
  justify-content: flex-end;
`;

//styled cards

export const Card = styled.div`
  display: flex;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 100%;
  align-items: center;
`;

export const Portadacard = styled.img`
  width: 150px;
  height: 130px;
  border-radius: 10px 20px 70px 10px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 20%, 0 190%);
`;

export const Textcard = styled.div`
  padding: 20px;
`;

export const Titulocard = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Horariocard = styled.p`
  font-size: 15px;
`;

export const Preciocard = styled.p`
  font-size: 10px;
`;

//Resiente styled

export const Contenedorordenes = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Titleordenes = styled.h2`
  text-align: center;
`;

export const Titlerestaurante = styled.h4`
  text-align: center;
  margin: 0;
`;

export const Precionrecientes = styled.p`
  margin: 0;
`;

export const Datosrecientes = styled.p``;

export const Contenedornlacerecientes = styled.div`
  display: flex;
  align-items: center;
`;

export const Enlacerecientes = styled.div`
  color: #ffe031;
`;

export const Contenedorinfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

//menu cuenta

export const Contenedormenucuenta = styled.div`
  display: grid;
  padding: 30px;
  gap: 20px;
`;

export const Option = styled.button`
  display: flex;
  justify-content: space-between;
  background: #f0f0f0;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
`;

export const Contenido = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;