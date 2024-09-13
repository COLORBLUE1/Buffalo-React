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
  Spancont,
} from "../assets/style/stylecomponets/styled.js";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Checkbox, FormControlLabel } from "@mui/material";
import { mailRegister, setUser } from "../redux/slices/userSlice.js";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm.js";

export function SingUn() {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mailRegister(formValues).then((response) => {
      dispatch(setUser(response));
    });

    reset();
  };

  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>Sing in</h3>

        <Contenedorinput>
          <form onSubmit={handleSubmit}>
            <TextField style={{margin: 10}}
              type="text"
              placeholder="Full name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField style={{margin: 10}} type="Email" placeholder="Email" />
            <TextField style={{margin: 10}}
              type=""
              placeholder="Phone"
              name="photoURL"
              value={formValues.photoURL}
              onChange={handleInputChange}
            />
            <TextField style={{margin: 10}}
              id="last"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <Boton type="submit">Registration</Boton>
          </form>
        </Contenedorinput>
        <Spancont>
          <FormControlLabel
            sx={{
              "& .MuiTypography-body1, .MuiSvgIcon-root": { fontSize: 10 },
            }}
            value="start"
            control={<Checkbox style={{ color: "#ffffff80" }} />}
            label="I have read the security policy"
            labelPlacement="start"
          />
        </Spancont>
      </Contenedoricon>
      <Contenedortwe>
        <LoginGF>
          <h4>OR Sing In with</h4>
          <div>
            <FcGoogle style={{ width: 40, height: 50 }} />
            <FaFacebook style={{ width: 40, height: 50, color: "aqua" }} />
          </div>
        </LoginGF>
      </Contenedortwe>
    </Contenedormain>
  );
}
