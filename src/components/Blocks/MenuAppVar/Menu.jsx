import styled from "styled-components";
import "../../../assets/style/css/Font.css";
import { Link } from "react-router-dom";




const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #2e3562;
  transform: ${({ open }) => (open ? "translateX(-30%)" : "translateX(-100%)")};
  border-radius: 0 50px 50px 0;
  height: 100%;
  text-align: left;
  padding: 8rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 576px) {
    width: 100%;
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
      left: 40%;
      width: 150px;
      font-family: Raleway;
    }

    &:hover {
      color: #343078;
    }
  }
`;

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div>
        <Link to="/cuenta">
          {" "}
          <h4>Settings</h4>
        </Link>
        <Link to="/noty">
          {" "}
          <h4>Notification</h4>
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
