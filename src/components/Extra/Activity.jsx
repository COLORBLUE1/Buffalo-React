import { Link } from "react-router-dom";
import { Contenedormain } from "../../assets/style/stylecomponets/styled";
import { Header } from "../Blocks/Header";
import { Button } from "@mui/material";
import { MdOutlineNotifications } from "react-icons/md";
import styled from "styled-components";

const Contenedornoty = styled.div`
  font-family: Raleway;
  padding: 20px 0;
  width: 100%;
  height: 300px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Contenedoractivity = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 90%;
  height: 100%;
  background: #3584c9;
  border-radius: 50px;
  padding: 10px;
  justify-items: center;
  align-items: center;
  text-align: center;
  p {
    margin: 0;
  }
`;

export function Activity() {
  return (
    <Contenedormain>
      <Contenedornoty>
        <Header volver="/home" app="All workouts" />
        <Contenedoractivity>
          <div>
            <strong>time</strong>
            <p>Total time</p>
          </div>
          <div>
            <strong>time</strong>
            <p>Total time</p>
          </div>
        </Contenedoractivity>
      </Contenedornoty>
    </Contenedormain>
  );
}
