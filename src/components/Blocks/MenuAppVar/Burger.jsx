import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Burger = ({ open, setOpen }) => {
  const user = useSelector((store) => store.user);
  return (
    <Avatar
      style={{ zIndex: 20 }}
      alt="Remy Sharp"
      src={user.photoURL}
      open={open}
      onClick={() => setOpen(!open)}
    />
  );
};

export default Burger;
