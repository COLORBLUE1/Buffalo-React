import { Contenedormain } from "../assets/style/stylecomponets/styled.js";
import { Main } from "./Home/Main.jsx";
import { useContext } from "react";
import { UserContext } from "../context/context.js";
import Admin from "./admin.jsx";

export function Home() {
  const { user } = useContext(UserContext);

  return (
    <Contenedormain>
      <Main />
    </Contenedormain>
  );
}
