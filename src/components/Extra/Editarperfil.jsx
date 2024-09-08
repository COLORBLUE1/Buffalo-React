import React, { useState } from "react";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const FormGroup = styled.div`
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  margin: 5px;
`;

const AvatarWrapper = styled.div`
  margin-bottom: 20px;
`;

export function Editarperfil() {
  const navigate = useNavigate(); // Hook para navegación

  // Inicializar el estado con los datos del localStorage
  const initialName = localStorage.getItem("name") || "";
  const initialAvatar = localStorage.getItem("avatar") || "/static/images/avatar/1.jpg";

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
    <PerfilContainer>
      <AvatarWrapper>
        <Avatar
          alt="User Avatar"
          src={avatar}
          sx={{ width: 100, height: 100 }}
        />
      </AvatarWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name:</label>
          <Input
            id="name"
            type="text"
            value={newName}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="avatar">Change Avatar:</label>
          <Input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </FormGroup>
        <Button type="submit">Save Changes</Button>
      </form>
    </PerfilContainer>
  );
}
