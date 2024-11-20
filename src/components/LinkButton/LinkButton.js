import styles from "./linkButton.module.css";
import Link from "next/link";

const LinkButton = ({ href, children }) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
};
export default LinkButton;
