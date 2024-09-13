import { useState } from "react";
import { Avatar, Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Opcionmain } from "../Blocks/Menuscroll";
import {
  Boton,
  Contenedorinput,
  Contenedormain,
  TextField,
} from "../../assets/style/stylecomponets/styled";
import { Header } from "../Blocks/Header";

const PerfilContainer = styled.div`
  background-color: #1f233e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  color: #fff;
`;

const FormGroup = styled.div`
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
`;

const AvatarWrapper = styled.div`
  margin-bottom: 20px;
  display: grid;
  justify-items: center;
`;

export function Editarperfil() {
  const navigate = useNavigate(); // Hook para navegación

  // Inicializar el estado con los datos del localStorage
  const initialName = localStorage.getItem("name") || "";
  const initialAvatar =
    localStorage.getItem("avatar") || "/static/images/avatar/1.jpg";

  // Estados para manejar los datos del perfil
  const [name, setName] = useState(initialName);
  const [avatar, setAvatar] = useState(initialAvatar);
  const [newName, setNewName] = useState(name);
  const [newAvatar, setNewAvatar] = useState(avatar);

  // Manejar cambios en el campo de nombre
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  // Manejar el cambio de foto de perfil
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", newName);
    localStorage.setItem("avatar", newAvatar);
    setName(newName);
    setAvatar(newAvatar);
    navigate(-1); // Regresar a la página anterior
  };

  return (
    <Contenedormain>
      <Header volver="/home" app="Account" />
      <AvatarWrapper>
        <Avatar
          alt="User Avatar"
          src={avatar}
          sx={{ width: 100, height: 100 }}
        />
      </AvatarWrapper>

      <div>
        <Button
          variant="contained"
          sx={{
            width: 40,
            lineHeight: 1,
            height: 40,
            background: "#2E3562",
            borderRadius: 10,
            margin: (0, 2),
          }}
          disableElevation
        >
          28
        </Button>
        <Button
          variant="contained"
          sx={{
            width: 40,
            lineHeight: 1,
            height: 40,
            background: "#2E3562",
            borderRadius: 10,
            margin: (0, 2),
          }}
          disableElevation
        >
          178
        </Button>
        <Button
          variant="contained"
          sx={{
            width: 40,
            lineHeight: 1,
            height: 40,
            background: "#2E3562",
            borderRadius: 10,
            margin: (0, 2),
          }}
          disableElevation
        >
          28
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <Contenedorinput>
          <TextField type="email" placeholder="Email" />
          <TextField type="password" placeholder="Password" />
        </Contenedorinput>
      </form>
      <Boton>Comenzar</Boton>
    </Contenedormain>
  );
}
