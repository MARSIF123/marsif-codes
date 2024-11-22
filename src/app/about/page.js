import { WEBSITE_TITLE } from "@/utils/constants";
import styles from "./page.module.css";
import Heading from "@/components/Heading/Heading";
import LinkButton from "@/components/LinkButton/LinkButton";
export const metadata = {
  title: `${WEBSITE_TITLE} | About Me `,
  description:
    "A web developer with a passion for creating user-friendly, responsive websites.",
};
export default function About() {
  return (
    <>
      <Heading HeadingTag="h1">My Story</Heading>
      <p className={styles.para}>
        Hi, my name is Maryam Wasif, and I am a passionate web developer with
        expertise in Next.js and modern web technologies. My journey into
        programming began in 2019 when I wrote my first "Hello, World!" code in
        C++. Before that, computers were just a medium for gaming and digital
        drawing, and I never imagined they would become the foundation of my
        career.
      </p>

      <p className={styles.para}>
        Growing up, I was naturally drawn to mathematics because of its logical
        structure and problem-solving nature. I was set on pursuing mathematics
        as my domain after college. However, my brother, a computer engineer,
        encouraged me to explore computer science. He explained how it not only
        aligns with mathematical concepts but also incorporates creativity,
        innovation, and practical applications in a way that makes it fun and
        rewarding. So that's how I got a Computer Science degree.
      </p>
      <p className={styles.para}>
        Since then, I have honed my skills in modern frameworks like Next.js,
        React, and Node.js, alongside tools like Tailwind CSS and TypeScript.
        I’ve worked on diverse projects, from building responsive and accessible
        user interfaces to integrating backend systems seamlessly. I take pride
        in writing clean, efficient, and scalable code that meets both user
        needs and business goals.
      </p>

      <p className={styles.para}>
        I am pursuing my Master’s in Computer Science at Algoma University,
        Canada, while working as a freelancer on Upwork.
      </p>

      <LinkButton href="/maryam-resume.pdf" target="_blank">
        Download my Resume
      </LinkButton>
    </>
  );
}
