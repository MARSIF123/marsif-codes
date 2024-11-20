import styles from "./page.module.css";
import Heading from "../components/Heading/Heading";
import DotBox from "../components/DotBox/DotBox";
import ProjectGrid from "../components/ProjectsGrid/ProjectsGrid";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* INTRO */}
      <DotBox />
      <Heading HeadingTag="h1">Web Developer</Heading>
      <Heading HeadingTag="h2">Crafting Modern Web Experiences</Heading>
      <Heading HeadingTag="p">{"Scroll down to see my work. --->"}</Heading>
      <DotBox style={{ transform: "translateX(-400px)" }} />

      {/* PROJECTS */}
      <ProjectGrid />

      {/* SKILSS */}
      <Heading HeadingTag="h1">Skills</Heading>
      <Skills />
    </div>
  );
}
