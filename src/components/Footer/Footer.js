import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin, FaUpwork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <strong className={styles.title}>MARSIF CODES</strong>
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} href="/projects">
              Projects
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="/about">
              ABOUT
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="/projects">
              Blog
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="./contact">
              Contact me
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link
              className={styles.link}
              href="https://www.linkedin.com/in/maryam-wasif-949353336/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              className={styles.link}
              href="https://www.upwork.com/freelancers/~01127ecb54ea4884ff"
              target="_blank"
            >
              <FaUpwork />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              className={styles.link}
              href="https://github.com/MARSIF123"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </li>
        </ul>
        <p className={styles.text}>
          Crafted with 💚 using Next.js - Found it great? Let's create something
          together.
        </p>
      </div>
    </div>
  );
}

export default Footer;
