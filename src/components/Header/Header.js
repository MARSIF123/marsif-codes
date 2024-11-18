"use client";
import Image from "next/image";
import logoImg from "../../../public/M.png";
import styles from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import { WEBSITE_TITLE } from "../../utils/constants";
import Link from "next/link";

const Header = ({ initialTheme }) => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logoText}>
        {WEBSITE_TITLE}
      </Link>
      <Navbar initialTheme={initialTheme} />
    </div>
  );
};

export default Header;
