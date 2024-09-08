import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { PiHamburgerDuotone } from "react-icons/pi";

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
          disableElevation
        >
          Legs
        </Button>
      </Contenedorsroll>
    </Contenedormainsroll>
  );
};
