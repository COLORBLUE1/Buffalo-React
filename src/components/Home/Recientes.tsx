import {
  Sectionhome,
  Titleordenes,
  Contenedorordenes,
  Contenedorinfo,
  Datosrecientes,
  Titlerestaurante,
  Precionrecientes,
  Enlacerecientes,
  Contenedornlacerecientes,
} from "../../assets/style/stylecomponets/styled";
import { Navbar } from "../Blocks/Navbar";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";

export function Recientes() {
  return (
    <Sectionhome>
      <Titleordenes>All orders</Titleordenes>
      <Contenedorordenes>
        <Contenedorinfo>
          <Avatar
            alt="Remy Sharp"
            src="https://img.pikbest.com/backgrounds/20211027/restaurant-opening-promotion-promotion-banner_6207379.jpg!w700wp"
          />
          <Datosrecientes>
            <Titlerestaurante>Pardes restaurant</Titlerestaurante>
            <Precionrecientes>$ 132.00</Precionrecientes>
          </Datosrecientes>
        </Contenedorinfo>

        <Contenedornlacerecientes>
          <Enlacerecientes href="#">Delivered</Enlacerecientes>
          <BsChevronRight />
        </Contenedornlacerecientes>
      </Contenedorordenes>

      <Navbar />
    </Sectionhome>
  );
}
