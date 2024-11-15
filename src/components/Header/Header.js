"use client";
import Image from "next/image";
import logoImg from "../../../public/M.png";
import styles from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import { WEBSITE_TITLE } from "../../utils/constants";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image alt="Logo displaying M" width={48} height={48} src={logoImg} />
        <h2 className={styles.logoText}>{WEBSITE_TITLE}</h2>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
