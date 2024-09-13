import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { PiHamburgerDuotone } from "react-icons/pi";
import { readAsync, setExercises } from "../../redux/slices/Exercises";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../assets/style/stylecomponets/styled";
import { Cards } from "./Cards";
import { useState } from "react";

async function refreshStore() {
  const dispatch = useDispatch();
  const { exercises, Legs } = useSelector((store) => store.exercises);
  const [selectedValue, setSelectedValue] = useState("");

  console.log("Actualizando");
  await readAsync().then((response) => {
    dispatch(setExercises(response));
  });
}

const handleClick = (value) => {
  // Aquí puedes hacer lo que necesites con el valor
  console.log("Valor del botón:", value);
  return <Cards musculo={"Legs"} refreshStore={refreshStore} />;
};

export const Contenedorsroll = styled.div`
  margin: 10px;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  width: 70vw;
  padding: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Contenedormainsroll = styled.div`
  padding: 30px;
  div {
    display: flex;
    gap: 10px;
  }
`;
export const Opcionmain = styled.div`
      display: flex;
    gap: 10px;
    justify-content: center;
        background: #2e3562;
        border-radius: 50px;
  }
`;
export const Menuscroll = () => {
  return (
    <section>
      <Contenedormainsroll>
        <Opcionmain>
          <Button
            variant="contained"
            sx={{
              minWidth: 150,
              lineHeight: 1,
              height: 40,
              background: "#2E3562",
              borderRadius: 10,
            }}
            disableElevation
          >
            Discover
          </Button>

          <Button
            variant="contained"
            sx={{
              minWidth: 150,
              lineHeight: 1,
              height: 40,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            disableElevation
          >
            My workouts
          </Button>
        </Opcionmain>

        <Contenedorsroll>
          <Button
            variant="contained"
            sx={{
              minWidth: 110,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
            }}
            disableElevation
            onClick={() => handleClick(" All body")}
          >
            All body
          </Button>

          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            disableElevation
            onClick={() => handleClick("Triceps")}
          >
            Triceps
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            disableElevation
            onClick={() => handleClick("Biceps")}
          >
            Biceps
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            disableElevation
            onClick={() => handleClick("Breast")}
          >
            Breast
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            onClick={() => handleClick("Back")}
            disableElevation
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            onClick={() => handleClick("Legs")}
            disableElevation
          >
            Legs
          </Button>
        </Contenedorsroll>
      </Contenedormainsroll>

      <Cards musculo={"Legs"} refreshStore={refreshStore} />
    </section>
  );
};
