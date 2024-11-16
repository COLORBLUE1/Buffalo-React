import styled from "styled-components";
import "../../../assets/style/css/Font.css";
import { Link } from "react-router-dom";




const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #2e3562;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  border-radius: 40px;
  text-align: left;
  padding: 8rem 2rem;
  position: fixed;
  top: 50px;
  left: 10px;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  

  @media (max-width: 576px) {
    width: 60%;

  }

  h4 {
    font-size: 15px;
    padding: 10px 0;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      text-align: left;
      position: relative;
      left: 50%;
      font-family: Raleway;
      transform: ${({ open }) => (open ? "translateX(-30%)" : "translateX(-100%)")};
    }

    &:hover {
      color: blue;
    }
  }
`;

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div>
        <Link to="/cuenta">
          {" "}
          <h4>Ajustes de cuenta</h4>
        </Link>

        <Link to="/activity">
          <h4>Activity</h4>
        </Link>
        <Link to="">
          {" "}
          <h4>Subscription type</h4>
        </Link>
        <Link to="/faq">
          {" "}
          <h4>FAQ</h4>
        </Link>
      </div>
    </StyledMenu>
  );
};

export default Menu;
