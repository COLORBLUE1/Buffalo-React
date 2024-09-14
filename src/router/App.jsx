import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "../components/SplasScreen";
import { Infoinicial } from "../components/Infoinicial";
import { Singing } from "../components/Singin";
import { SingUn } from "../components/singUn";
import { Createaccount } from "../components/Createaccount";
import { Error } from "../components/Blocks/Error";
import { Phone } from "../components/phone";
import { Home } from "../components/Home/home";
import { Editarperfil } from "../components/Extra/Editarperfil";
import { Notificaciones } from "../components/Extra/Notificaciones/Notificaciones";
import { Workoutsadded } from "../components/Extra/Notificaciones/Workoutsadded.jsx";
import { Faq } from "../components/Extra/Faq.jsx";
import { Activity } from "../components/Extra/Activity.jsx";
import { Createexersices } from "../components/createexersices.jsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Ruta al home*/}

        <Route path="/home" element={<Home />} />

        {/*Rutas antes del Home*/}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/informacion" element={<Infoinicial />} />
        <Route path="/singin" element={<Singing />} />
        <Route path="/crearcuenta" element={<Createaccount />} />
        <Route path="/singUn" element={<SingUn />} />
        <Route path="/phone" element={<Phone />} />

        {/* Ruta de error */}
        <Route path="*" element={<Error />} />
        {/*Rutas extra*/}
        <Route path="/cuenta" element={<Editarperfil />} />
        <Route path="/noty" element={<Notificaciones />} />
        <Route path="/workoutsadded" element={<Workoutsadded />} />
        <Route path="/createexersices" element={<Createexersices />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
