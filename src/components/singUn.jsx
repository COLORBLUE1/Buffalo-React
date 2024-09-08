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

export function SingUn() {
  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>Sing in</h3>

        <Contenedorinput>
          <TextField type="text" placeholder="Full name" />
          <TextField type="Email" placeholder="Email" />
        <TextField type="" placeholder="Phone" />
          <TextField id="last" type="password" placeholder="Password" />
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
        <Boton>Registration</Boton>
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
