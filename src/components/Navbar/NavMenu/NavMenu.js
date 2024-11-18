import Link from "next/link";
import styles from "./navMenu.module.css";

const NavMenu = () => {
  return (
    <ul className={styles.navMenu}>
      <li className={styles.navItem}>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/projects" className={styles.navLink}>
          Projects
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://sanity-nextjs-blog-mu.vercel.app/"
          className={styles.navLink}
        >
          Blog
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
