import { BiSolidBellRing } from "react-icons/bi";

import {
  Noty,
  Perfilcontenedor,
} from "../../assets/style/stylecomponets/styled";
import { imgpruebas } from "../const";
import { Avatar } from "@mui/material";
import userSlice from "../../redux/slices/userSlice";
export function Navbar() {

  return (
    <Perfilcontenedor>
    <Avatar alt="Remy Sharp" src={imgpruebas} />
    <div>
      <h4>Hi</h4>
      <p>{userSlice.displayName}</p>
    </div>
    <Noty>
      <BiSolidBellRing />
    </Noty>
  </Perfilcontenedor>
  );
}
