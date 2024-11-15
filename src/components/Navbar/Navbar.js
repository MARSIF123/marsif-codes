import styles from "./navbar.module.css";
import React from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <p>darkmode</p>
      <p>sidebar</p>
    </div>
  );
};
export default Navbar;
