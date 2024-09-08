import { Navbar } from "../Blocks/Navbar";
import { Sectionhome } from "../../assets/style/stylecomponets/styled";
import { Avatar } from "@mui/material";
import { Menucuenta } from "../Blocks/Menucuenta";
import styled from "styled-components";

export const Datosusuario = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export function Cuenta() {
  const name = localStorage.getItem("name");

  return (
    <Sectionhome>
      <Datosusuario>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 60, height: 60 }}
        />

        <p>{name}</p>
      </Datosusuario>
      <div>
        <Menucuenta />
      </div>
      <Navbar />
    </Sectionhome>
  );
}
