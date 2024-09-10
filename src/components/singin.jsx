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
import { Button } from "@mui/material";
import {
  facebookLogin,
  googleLogin,
  setUser,
} from "../redux/slices/userSlice.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export function Singing() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleAuth = async (value) => {
    switch (value) {
      case "Google":
        await googleLogin().then((user) => {
          dispatch(setUser(user));
        });
        break;
      case "Facebook":
        await facebookLogin().then((user) => {
          dispatch(setUser(user));
        });
        break;

      default:
        break;
    }
  };

  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>Sing in {user.displayName}</h3>

        <Contenedorinput>
          <TextField type="email" placeholder="Email" />
          <TextField type="password" placeholder="Password" />
        </Contenedorinput>
        <Boton>Comenzar</Boton>
        <a href="#">Forgot Password ?</a>
      </Contenedoricon>
      <Contenedortwe>
        <LoginGF>
          <h4>Sing In with </h4>
          <div>
            <Button onClick={() => handleAuth("Google")}>
              <FcGoogle style={{ width: 40, height: 50 }} />
            </Button>
            <Button onClick={() => handleAuth("Facebook")}>
              {" "}
              <FaFacebook style={{ width: 40, height: 50, color: "aqua" }} />
            </Button>
          </div>
        </LoginGF>
      </Contenedortwe>
      <h4>
        D’ont have an account ? <Link to={"/SingUn"}>Sign In</Link>
      </h4>
    </Contenedormain>
  );
}
