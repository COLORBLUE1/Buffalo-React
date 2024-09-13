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
import { onAuthStateChanged } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  facebookLogin,
  googleLogin,
  setUser,
  mailLogin,
} from "../redux/slices/userSlice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig.js";
import useForm from "../hooks/useForm.js";



export function Singing() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const [formValues, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mailLogin(formValues.email, formValues.password).then((response) => {
      dispatch(setUser(response));
    });

    reset();
  };

  const handleAuth = async (value) => {
    switch (value) {
      case "Google":
        await googleLogin().then((user) => {
          dispatch(setUser(user));
          user.isAuthenticated ? navigate("/home") : null;
        });
        break;
      case "Facebook":
        await facebookLogin().then((user) => {
          dispatch(setUser(user));
          user.isAuthenticated ? navigate("/home") : null;
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const validateUserState = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            isAuthenticated: true,
          })
        );
      }
    });

    return () => validateUserState();
  }, [dispatch, user]);

  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>Sing in {user.displayName}</h3>
        <Contenedorinput>
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ margin: 10 }}
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <TextField
              style={{ margin: 10 }}
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </form>
        </Contenedorinput>
        <Boton type="submit">Comenzar</Boton>
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
        D’ont have an account ? <Link to={"/singUn"}>Sign In</Link>
      </h4>
    </Contenedormain>
  );
}
