import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import styles from "./page.module.css";
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
            This app is built using the MERN stack, with React.js for the
            frontend, Node.js and Express.js for the backend, and MongoDB for
            data storage. I handled all aspects of development, from design to
            deployment.
          </p>
        </div>
      </div>
      <div>
        <Image width={500} height={500} src="/tt1" />
      </div>
    </>
  );
}
