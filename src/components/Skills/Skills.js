import Heading from "../Heading/Heading";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <DesignIcon />
        <Heading HeadingTag="h2">Designer</Heading>
        <p>I value simplicity, clean design, and meaningful interactions.</p>
        <Heading HeadingTag="h4">I enjoy designing:</Heading>
        <p>UX, UI, Web, Apps, Logos</p>
      </div>
      <div className={styles.item}>
        <FrontEndIcon />
        <Heading HeadingTag="h2">Frontend Developer</Heading>
        <p>
          I enjoy building from the ground up and transforming concepts into
          seamless web experiences.
        </p>
        <Heading HeadingTag="h4">Languages I Speak:</Heading>
        <p>Html, CSS, JavaScript, ReactJs, NextJs</p>
      </div>
      <div className={styles.item}>
        <BackEndIcon />
        <Heading HeadingTag="h2">Backend Developer</Heading>
        <p>
          I enjoy building reliable backends that ensure smooth and efficient
          functionality for web applications.
        </p>
        <Heading HeadingTag="h4">My Skills:</Heading>
        <p>Node Js, DBMS, Headless CMS, APIs</p>
      </div>
    </div>
  );
};

export default Skills;

const DesignIcon = () => {
  return (
    <svg
      class="svg-inline--fa fa-layer-plus fa-stack-1x has-text-dark"
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="layer-plus"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M480 24c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 40-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l40 0 0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 40 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-40 0 0-40zM288 128c-7.5 0-15 1.6-21.8 4.7L48.8 230.1C38.6 234.7 32 244.8 32 256s6.6 21.3 16.8 25.9l217.4 97.5c6.9 3.1 14.3 4.7 21.8 4.7s15-1.6 21.8-4.7l217.4-97.5c10.2-4.6 16.8-14.7 16.8-25.9s-6.6-21.3-16.8-25.9L309.8 132.7c-6.9-3.1-14.3-4.7-21.8-4.7zm-8.8 33.9c2.8-1.2 5.7-1.9 8.8-1.9s6 .6 8.8 1.9l210 94.1-210 94.1c-2.8 1.2-5.7 1.9-8.8 1.9s-6-.6-8.8-1.9L69.3 256l210-94.1zM94.7 337.5L48.8 358.1C38.6 362.7 32 372.8 32 384s6.6 21.3 16.8 25.9l217.4 97.5c6.9 3.1 14.3 4.7 21.8 4.7s15-1.6 21.8-4.7l217.4-97.5c10.2-4.6 16.8-14.7 16.8-25.9s-6.6-21.3-16.8-25.9l-45.9-20.6-39.1 17.5L506.7 384l-210 94.1c-2.8 1.2-5.7 1.9-8.8 1.9s-6-.6-8.8-1.9L69.3 384l64.5-28.9L94.7 337.5z"
      ></path>
    </svg>
  );
};

const FrontEndIcon = () => {
  return (
    <svg
      class="svg-inline--fa fa-square-terminal fa-stack-1x has-text-dark"
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="square-terminal"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM83.9 149.6c-5.8 6.7-5 16.8 1.7 22.6L183.4 256 85.6 339.9c-6.7 5.8-7.5 15.8-1.7 22.6s15.9 7.5 22.6 1.7l112-96c3.5-3 5.6-7.5 5.6-12.1s-2-9.1-5.6-12.1l-112-96c-6.7-5.8-16.8-5-22.6 1.7zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z"
      ></path>
    </svg>
  );
};

const BackEndIcon = () => {
  return (
    <svg
      class="svg-inline--fa fa-book fa-stack-1x has-text-dark"
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="book"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l368 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-66.7c18.6-6.6 32-24.4 32-45.3l0-320c0-26.5-21.5-48-48-48L64 0zM384 416l0 64L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l320 0zM64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l32 0 0 352-32 0zm64 0l0-352 272 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-272 0zm48-240c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"
      ></path>
    </svg>
  );
};
