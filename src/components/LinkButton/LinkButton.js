import styles from "./linkButton.module.css";
import Link from "next/link";

const LinkButton = ({ href, children }, props) => {
  return (
    <Link href={href} className={styles.button} {...props}>
      {children}
    </Link>
  );
};
export default LinkButton;
