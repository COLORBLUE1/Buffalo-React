import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  FaHouseChimney,
  FaSistrix,
  FaArrowRotateLeft,
  FaUser,
} from "react-icons/fa6";
import { ContenedorNavber } from "../../assets/style/stylecomponets/styled";
import { useNavigate } from "react-router";


export function Navbar() {
  const [value, setValue] = React.useState("home");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case "home":
        navigate("/home");

        {
          break;
        }
      case "buscar":
        navigate("/buscar");
        {
          break;
        }

      case "reciente":
        navigate("/reciente");
        {
          break;
        }

      case "cuenta": {
        navigate("/cuenta");

        break;
      }

      default: {
        navigate("/");
        break;
      }
    }
  };

  return (
    <ContenedorNavber  >
      <BottomNavigation 
        sx={{ background:"transparent"}}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="."
          value="home"
          icon={<FaHouseChimney />}
        />
        <BottomNavigationAction label="." value="buscar" icon={<FaSistrix />} />
        <BottomNavigationAction
          label="."
          value="reciente"
          icon={<FaArrowRotateLeft />}
        />
        <BottomNavigationAction label="." value="cuenta" icon={<FaUser />} />
      </BottomNavigation>
    </ContenedorNavber>
  );
}
