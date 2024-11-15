import styles from "./navbar.module.css";
import React from "react";
import ToggledarkMode from "./ToggleDarkMode/ToggleDarkMode";
const Navbar = ({ initialTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.nav}>
      <ToggledarkMode initialTheme={initialTheme} />
      <p>sidebar</p>
    </div>
  );
};
export default Navbar;
