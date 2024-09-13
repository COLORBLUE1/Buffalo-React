import React, { useState } from "react";
import styled from "styled-components";
import { Contenedormain } from "../../../assets/style/stylecomponets/styled";
import { Button } from "@mui/material";
import { MdOutlineNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import { Header } from "../../Blocks/Header";

const Contenedornoty = styled.div`
  font-family: Raleway;
  padding: 20px 0;
  width: 100%;
  height: 300px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Contenedornotiboton = styled.span`
  gap: 10px;
  display: flex;
`;

export function Notificaciones() {
  return (
    <Contenedormain>
      <Contenedornoty>
      <Header volver="/home" app="Notification" />
        <Link to="/workoutsadded">
          {" "}
          <Button
            variant="contained"
            sx={{
              width: 250,
              lineHeight: 1,
              height: 40,
              background: "#2E3562",
              borderRadius: 10,
              margin: (0, 2),
            }}
            disableElevation
          >
            <Contenedornotiboton>
              <MdOutlineNotifications />
              Workouts added
            </Contenedornotiboton>
          </Button>
        </Link>
        <Button
          variant="contained"
          sx={{
            width: 250,
            lineHeight: 1,
            height: 40,
            background: "#2E3562",
            borderRadius: 10,
            margin: (0, 2),
          }}
          disableElevation
        >
          Workout reminder
        </Button>
        <Button
          variant="contained"
          sx={{
            width: 250,
            lineHeight: 1,
            height: 40,
            background: "#2E3562",
            borderRadius: 10,
            margin: (0, 2),
          }}
          disableElevation
        >
          Workout reminder
        </Button>
      </Contenedornoty>
    </Contenedormain>
  );
}
