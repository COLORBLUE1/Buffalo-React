import "../../assets/style/css/Main-style.css";
import {
  Noty,
  Perfilcontenedor,
  Sectionhome,
} from "../../assets/style/stylecomponets/styled";
import { Carrusel } from "../Blocks/Slider";
import { Contenidotwe } from "../const";

import { Cards } from "../Blocks/Cards";
import { Menuscroll } from "../Blocks/Menuscroll";
import { BiSolidBellRing } from "react-icons/bi";
import { Avatar } from "@mui/material";

export function Main() {
  return (
    <Sectionhome>
      <Perfilcontenedor>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div>
          <h4>Hi</h4>
          <p>DELIVER TO</p>
        </div>
        <Noty>
          <BiSolidBellRing />
        </Noty>
      </Perfilcontenedor>

      <div id="custom-class">
        <Carrusel items={Contenidotwe} />
      </div>

      <Menuscroll />

      <Cards />

      {/* <Navbar /> */}
    </Sectionhome>
  );
}
