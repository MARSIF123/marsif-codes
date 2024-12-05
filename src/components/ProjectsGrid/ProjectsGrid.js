import Image from "next/image";
import Link from "next/link";
import styles from "./projectGrid.module.css";
import Heading from "../Heading/Heading";
import tt1 from "../../assets/tt1.png";
import b1 from "../../assets/b1.png";
import who1 from "../../assets/who1.png";

const ProjectGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <Link href="/projects/whole-life-pub" className={styles.gridItem}>
        <Image src={who1} alt="Project 1: a website" className={styles.img} />
        <div className={styles.proTitle}>
          <Heading HeadingTag="h4">WholeLife Pub</Heading>
        </div>
      </Link>
      <Link href="/projects/todo-list-app" className={styles.gridItem}>
        <Image src={tt1} alt="Project 2" className={styles.img} />
        <div className={styles.proTitle}>
          <Heading HeadingTag="h4">WholeLife Pub</Heading>
        </div>
      </Link>
      <Link href="/projects/blog-project" className={styles.gridItem}>
        <Image src={b1} alt="Project 3" className={styles.img} />
        <div className={styles.proTitle}>
          <Heading HeadingTag="h4">WholeLife Pub</Heading>
        </div>
      </Link>
    </div>
  );
};

export default ProjectGrid;
