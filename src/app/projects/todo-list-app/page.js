import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import styles from "./page.module.css";
import tt1 from "../../../assets/tt1.png";
import tt2 from "../../../assets/tt2.png";
import tt3 from "../../../assets/tt3.png";
import tt4 from "../../../assets/tt4.png";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { WEBSITE_TITLE } from "../../../utils/constants";
import Link from "next/link";
export const metadata = {
  title: `${WEBSITE_TITLE} | TODO List App `,
  description:
    "Dive into the details of my To-Do List project, a dynamic web app built with Next.js, Node js and MongoDB (MERN STACK APP). It features task management, real-time updates, and a clean, user-friendly interface.",
};
export default function TodoListApp() {
  return (
    <>
      {/* INTRO */}
      <Heading HeadingTag="h1">Task Tactician</Heading>
      <p>
        A task management application for adding, organizing, and tracking
        tasks. Features include marking tasks as important or completed, setting
        due dates, and organizing tasks into groups.
      </p>

      {/* ROLE & TECH */}
      <div className={styles.flex}>
        <div className={styles["flex-item"]}>
          <Heading HeadingTag="h2">My Role</Heading>
          <p>
            As the sole developer for the To-Do List application, I handled both
            frontend and backend development.
          </p>
        </div>
        <div className={styles["flex-item"]}>
          <Heading HeadingTag="h2">Tech Stack</Heading>
          <p>
            This app is built using the <span>MERN stack</span>, with React.js
            for the frontend, Node.js and Express.js for the backend, and
            MongoDB for data storage. I handled all aspects of development, from
            design to deployment.
          </p>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Home page with an elegant and user-friendly design"
          src={tt1}
        />
        <p>Home page with an elegant and user-friendly design</p>
      </div>

      {/* FEATURE */}
      <div className={styles.flex}>
        <div className={styles["flex-item"]}>
          <Heading HeadingTag="h2">Features</Heading>
          <p>
            The To-Do List Application, built using the MERN stack, features a
            user-friendly interface for <span>adding</span> tasks, marking them
            as <span>complete</span>
            or <span>important</span>, and organizing them into{" "}
            <span>groups</span> for better management. Its responsive design
            ensures seamless functionality across all devices, from desktops to
            mobile screens. The backend, powered by Node.js, Express.js, and
            MongoDB, enables robust task storage, retrieval, and management.
          </p>
        </div>

        <div className={styles["flex-item"]}>
          <Heading HeadingTag="h2">More Features</Heading>
          <ul>
            <li>Login & Registration of a user</li>
            <li>
              Used <b>jsonwebtoken</b> library to create jwt tokens for user
              authentication
            </li>
            <li>User sessions </li>
            <li>Error handling </li>
            <li>API's built for different routes </li>
          </ul>
        </div>
      </div>

      {/* 2ND IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Login page"
          src={tt2}
        />
        <p>Login page -- in case new user, leads to registration page</p>
      </div>

      {/* PAIN POINTS */}
      <Heading HeadingTag="h2">Pain Points Found</Heading>
      <p>
        At first, the fixed sidebar was a big issue for small mobile screens
        because it took up too much space and made using the app harder. To fix
        this, I added a toggleable sidebar that users could show or hide as
        needed. This made the app much easier to use and worked well on all
        screen sizes.
      </p>

      {/* 3RD IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Tasks Page"
          src={tt3}
        />
        <p>Task Management interface</p>
      </div>

      {/* 4TH IMAGE */}
      <Image
        loading="lazy"
        alt="Side bar"
        src={tt4}
        style={{ border: "2px solid var(--color-primary)" }}
      />
      <p style={{ marginBottom: 80 }}>
        Side bar with functionality of searching & filtering tasks
      </p>

      {/* WHAT I LEARNED */}
      <Heading HeadingTag="h2">What I learned? </Heading>
      <p>
        Working on this project taught me how to approach problems with a
        solution-driven mindset. I gained hands-on experience in building
        responsive designs, managing full-stack development, and optimizing user
        experience. It also reinforced the importance of continuous testing,
        user feedback, and adapting to challenges to deliver a polished final
        product. <b>Feel free to take a look at this working app demo:</b>
      </p>

      {/* GITHUB & WEBSITE LINK */}
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            className={styles.link}
            href="https://todo-list-app-rust-nine.vercel.app/"
            target="_blank"
          >
            <CgWebsite />
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={styles.link}
            href="https://github.com/MARSIF123/TodoListApp"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>
      </ul>
    </>
  );
}
