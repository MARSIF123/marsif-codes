"use client";
import React from "react";
import styles from "./toggleDarkMode.module.css";
import Cookie from "js-cookie";
import { FiSun, FiMoon } from "react-icons/fi";
import { LIGHT_COLORS, DARK_COLORS } from "@/utils/constants";
import IconButton from "@/components/IconButton/IconButton";

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
    <IconButton onClick={handleClick}>
      {theme === "light" ? <FiSun /> : <FiMoon />}
    </IconButton>
  );
};
export default ToggledarkMode;
