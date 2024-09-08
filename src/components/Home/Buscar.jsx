import { Navbar } from "../Blocks/Navbar";
import { Inputbuscar } from "../Blocks/Inputbuscar";
import { Sectionhome } from "../../assets/style/stylecomponets/styled";

export function Buscar() {
  return (
    <Sectionhome>
      <Inputbuscar />
      <p>Recent searches</p>
      <div>
        <p>reciente</p>
      </div>
      <Navbar />
    </Sectionhome>
  );
}
