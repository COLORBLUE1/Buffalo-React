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

import { useSelector } from "react-redux";
import { Navbar } from "../Blocks/Navbar";

export function Mainhome() {


  return (
    <Sectionhome>
      <Navbar />

      <div id="custom-class">
        <Carrusel items={Contenidotwe} />
      </div>

      <Menuscroll />

      <Cards />

      {/* <Navbar /> */}
    </Sectionhome>
  );
}
