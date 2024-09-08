import { useNavigate } from "react-router-dom";
import { Logo } from "./const.js";
import "../assets/style/css/Font.css";
import {
  Contenedormain,
  Img,
  Contenedoricon,
  Contenedortwe,
  LoginGF,
  TextField,
  Contenedorinput,
  Boton,
} from "../assets/style/stylecomponets/styled.js";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Singing() {



  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>Sing in</h3>

        <Contenedorinput>
          <TextField type="email" placeholder="Email" />
          <TextField type="password" placeholder="Password" />
        </Contenedorinput>
        <Boton>Comenzar</Boton>
        <a href="#">Forgot Password ?</a>
      </Contenedoricon>
      <Contenedortwe>
        <LoginGF>
          <h4>Sing In with</h4>
          <div>
            <FcGoogle style={{ width: 40, height: 50 }} />
            <FaFacebook style={{ width: 40, height: 50, color: "aqua" }} />
          </div>
        </LoginGF>
      </Contenedortwe>
      <h4>
        D’ont have an account ? <Link to={"/SingUn"}>Sign In</Link>
      </h4>
    </Contenedormain>
  );
}
