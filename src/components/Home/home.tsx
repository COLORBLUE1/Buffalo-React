import "../../assets/style/css/Main-style.css";
import { Sectionhome } from "../../assets/style/stylecomponets/styled";
import { Carrusel } from "../Blocks/slider";
import { Contenidotwe } from "../const.ts";
import { Menuscroll } from "../Blocks/Menuscroll";
import { Navbar } from "../Blocks/Navbar";
import {
  createAsync,
  readAsync,
  setExercises,
} from "../../redux/slices/Exercises";
import { exercise } from "../../assets/Files/Data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "@mui/material";

export function Home() {
  /* Agregar collection

   async function add() {
    exercise.forEach(async (exercise) => {
       await createAsync(exercise);
     });
   }  */

  return (
    <Sectionhome>
      <Navbar />
      <div id="custom-class">
        <Carrusel items={Contenidotwe} />
      </div>
      {/* Menu scroll de musculos y cards*/}
      <Menuscroll />
      {/* Agregar collection 
      <Button onClick={add}>Agregar</Button>*/}
    </Sectionhome>
  );
}
