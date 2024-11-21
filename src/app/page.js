import styles from "./page.module.css";
import Heading from "../components/Heading/Heading";
import DotBox from "../components/DotBox/DotBox";
import ProjectGrid from "../components/ProjectsGrid/ProjectsGrid";
import Skills from "../components/Skills/Skills";
import LinkButton from "../components/LinkButton/LinkButton";
import ContactForm from "../components/ContactForm/ContactForm";

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
      <Heading HeadingTag="h1">Projects</Heading>
      <ProjectGrid />
      <LinkButton href="/projects">View all Projects</LinkButton>

      {/* SKILSS */}
      <Heading HeadingTag="h1">Skills</Heading>
      <Skills />
      <LinkButton href="/about">Learn more about me</LinkButton>

      {/* CONTACT */}
      <ContactForm />
    </div>
  );
}
