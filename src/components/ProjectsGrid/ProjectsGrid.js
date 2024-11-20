import Image from "next/image";
import Link from "next/link";
import styles from "./projectGrid.module.css";
import Heading from "../Heading/Heading";

const ProjectGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <Link href="/projects/whole-life-pub" className={styles.gridItem}>
        <Image src="/who1.PNG" layout="fill" alt="Project 1: a website" />
        <div className={styles.proTitle}>
          <Heading HeadingTag="h4">WholeLife Pub</Heading>
        </div>
      </Link>
      <Link href="/projects/todo-list-app" className={styles.gridItem}>
        <Image src="/tt1.PNG" layout="fill" alt="Project 2" />
        <div className={styles.proTitle}>
          <Heading HeadingTag="h4">WholeLife Pub</Heading>
        </div>
      </Link>
      <Link href="/projects/blog-project" className={styles.gridItem}>
        <Image src="/b1.PNG" layout="fill" alt="Project 3" />
        <div className={styles.proTitle}>
          <Heading HeadingTag="h4">WholeLife Pub</Heading>
        </div>
      </Link>
    </div>
  );
};

export default ProjectGrid;
