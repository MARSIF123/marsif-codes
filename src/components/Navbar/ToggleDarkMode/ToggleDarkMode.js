"use client";
import React from "react";
import styles from "./toggleDarkMode.module.css";
import Cookie from "js-cookie";
import { FiSun } from "react-icons/fi";
import { LIGHT_COLORS, DARK_COLORS } from "@/utils/constants";

const ToggledarkMode = ({ initialTheme }) => {
  const [theme, setTheme] = React.useState(initialTheme);

  const handleClick = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;
    root.setAttribute("data-color-theme", nextTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };
  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {theme === "light" ? <FiSun size="1.5rem" /> : <FiSun size="1.5rem" />}
    </button>
  );
};
export default ToggledarkMode;
