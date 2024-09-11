import "../../assets/style/css/Main-style.css";
import { Sectionhome } from "../../assets/style/stylecomponets/styled";
import { Carrusel } from "../Blocks/Slider";
import { Contenidotwe } from "../const";
import { Cards } from "../Blocks/Cards";
import { Menuscroll } from "../Blocks/Menuscroll";
import { Navbar } from "../Blocks/Navbar";

export function Home() {
  return (
    <Sectionhome>
      <Navbar />
      <div id="custom-class">
        <Carrusel items={Contenidotwe} />
      </div>
      <Menuscroll />
      <Cards />
    </Sectionhome>
  );
}
