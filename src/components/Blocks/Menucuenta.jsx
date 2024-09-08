import styled from "styled-components";
import {
  BsPerson,
  BsBell,
  BsChevronRight,
  BsCreditCard,
  BsGlobe2,
  BsGeoAltFill,
  BsExclamationCircle,
  BsFillTelephoneFill,
} from "react-icons/bs";
import Switch from "@mui/material/Switch";
import { Navigate, useNavigate } from "react-router";
import { Contenedormenucuenta, Contenido, Option } from "../../assets/style/stylecomponets/styled";



export const Menucuenta = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const navigate = useNavigate();

  function redirigir() {
    navigate("/editacount");
  }

function redirigirpago() {
    navigate("/Payment");
  }
  

  return (
    <Contenedormenucuenta>
      <Option onClick={redirigir} >
        <Contenido >
          <BsPerson /> Account edit
        </Contenido>
        <BsChevronRight />
      </Option>
      <Option>
        <Contenido>
          <BsBell /> Account edit
        </Contenido>
        <Switch {...label} defaultChecked />
      </Option>
      <Option onClick={redirigirpago} >
        <Contenido>
          <BsCreditCard /> Payment
        </Contenido>
        <BsChevronRight />
      </Option>
      <Option>
        <Contenido>
          <BsGlobe2 /> Language
        </Contenido>
        <BsChevronRight />
      </Option>
      <Option>
        <Contenido>
          <BsGeoAltFill /> Location
        </Contenido>
        <BsChevronRight />
      </Option>
      <Option>
        <Contenido>
          <BsExclamationCircle /> FAQ
        </Contenido>
        <BsChevronRight />
      </Option>
      <Option>
        <Contenido>
          <BsFillTelephoneFill />
          Support
        </Contenido>
        <BsChevronRight />
      </Option>
    </Contenedormenucuenta>
  );
};
