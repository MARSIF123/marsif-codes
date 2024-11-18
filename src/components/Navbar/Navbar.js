import styles from "./navbar.module.css";
import React from "react";
import ToggledarkMode from "./ToggleDarkMode/ToggleDarkMode";
import { FiMenu, FiX } from "react-icons/fi";
import IconButton from "../IconButton/IconButton";
import NavMenu from "./NavMenu/NavMenu";
const Navbar = ({ initialTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.nav}>
      <ToggledarkMode initialTheme={initialTheme} />
      <IconButton onClick={handleClick}>
        {isOpen ? <FiX /> : <FiMenu />}
      </IconButton>
      {isOpen && <NavMenu />}
    </div>
  );
};
export default Navbar;
