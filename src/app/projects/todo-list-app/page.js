import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import styles from "./page.module.css";
import tt1 from "../../../../public/tt1.PNG";
import { WEBSITE_TITLE } from "../../../utils/constants";
export const metadata = {
  title: `${WEBSITE_TITLE} | TODO List App `,
  description:
    "Dive into the details of my To-Do List project, a dynamic web app built with Next.js, Node js and MongoDB (MERN STACK APP). It features task management, real-time updates, and a clean, user-friendly interface.",
};
export default function TodoListApp() {
  return (
    <>
      <Heading HeadingTag="h1">Task Tactician</Heading>
      <p>
        A task management application for adding, organizing, and tracking
        tasks. Features include marking tasks as important or completed, setting
        due dates, and organizing tasks into groups.
      </p>
      <div className={styles.flex}>
        <div>
          <Heading HeadingTag="h2">My Role</Heading>
          <p>
            As the sole developer for the To-Do List application, I handled both
            frontend and backend development.
          </p>
        </div>
        <div>
          <Heading HeadingTag="h2">Tech Stack</Heading>
          <p>
            This app is built using the <span>MERN stack</span>, with React.js for the
            frontend, Node.js and Express.js for the backend, and MongoDB for
            data storage. I handled all aspects of development, from design to
            deployment.
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Home page with an elegant and user-friendly design"
          src={tt1}
        />
      </div>
      <p>Home page with an elegant and user-friendly design</p>
      <div className={styles.flex}>
        <div>
          <Heading HeadingTag="h2">Features</Heading>
          <p>
            The To-Do List Application, built using the MERN stack, features a
            user-friendly interface for <span>adding</span> tasks, marking them as <span>complete</span>
            or <span>important</span>, and organizing them into <span>groups</span> for better management.
            Its responsive design ensures seamless functionality across all
            devices, from desktops to mobile screens. The backend, powered by
            Node.js, Express.js, and MongoDB, enables robust task storage,
            retrieval, and management.
          </p>
        </div>
        <div>
          <Heading HeadingTag="h2">Tech Stack</Heading>
          <p>
            This app is built using the MERN stack, with React.js for the
            frontend, Node.js and Express.js for the backend, and MongoDB for
            data storage. I handled all aspects of development, from design to
            deployment.
          </p>
        </div>
      </div>
    </>
  );
}
