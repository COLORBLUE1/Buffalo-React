import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Contenedorheaderadd = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;

const Volver = styled.div`
  position: absolute;
  left: 40px;
`;

export function Header({ volver, app }) {
  return (
    <Contenedorheaderadd>
      <Volver>
        <Link to={volver}>
          <AiOutlineLeft style={{ color: "#fff" }} />
        </Link>
      </Volver>
      <div>
        <h4>{app}</h4>
      </div>
    </Contenedorheaderadd>
  );
}
