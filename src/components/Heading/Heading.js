import styles from "./heading.module.css";

function Heading({ children, HeadingTag }) {
  const color =
    HeadingTag === "h1" || HeadingTag === "h2"
      ? "var(--color-primary)"
      : "var(--color-text)";
  const fontWeight = HeadingTag === "h1" ? "bold" : "normal";
  const fontSize =
    HeadingTag === "h1"
      ? "4.8rem"
      : HeadingTag === "h2"
      ? "3.6rem"
      : HeadingTag === "h3"
      ? "3rem"
      : HeadingTag === "h4"
      ? "2.5rem"
      : "2rem";
  return (
    <HeadingTag
      className={styles.heading}
      style={{ fontSize, color, fontWeight }}
    >
      {children}
    </HeadingTag>
  );
}

export default Heading;
