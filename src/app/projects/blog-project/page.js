import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import styles from "../todo-list-app/page.module.css";
import b1 from "../../../../public/b1.PNG";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { WEBSITE_TITLE } from "../../../utils/constants";
import Link from "next/link";
export const metadata = {
  title: `${WEBSITE_TITLE} | TODO List App `,
  description:
    "Dive into the details of my To-Do List project, a dynamic web app built with Next.js, Node js and MongoDB (MERN STACK APP). It features task management, real-time updates, and a clean, user-friendly interface.",
};
export default function BlogProject() {
  return (
    <>
      {/* INTRO */}
      <Heading HeadingTag="h1">Web Waves</Heading>
      <p>
        I created a personal blog website where I occasionally write as a hobby
        in my free time. The topics I cover range from educational content to
        fun and engaging reads.
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
            I chose Sanity.io for my blog because Sanity is a customizable,
            flexible, API-based CMS that pairs perfectly with Next.js. It made
            managing and publishing content easy while allowing me to customize
            the design to match my style.
          </p>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Home page with an elegant and user-friendly design"
          src={b1}
        />
        <p>Home page with an elegant and user-friendly design</p>
      </div>

      {/* PROCESS */}
      <div>
        <Heading HeadingTag="h2">Proccess</Heading>
        <ul>
          <li>
            <strong>Backend Integration</strong>: Configured Sanity CMS to
            manage blog content dynamically, including posts, categories, and
            media files. Implemented GROQ queries for efficient data fetching.
          </li>
          <li>
            <strong>Frontend Development</strong>: Built responsive and
            SEO-friendly pages using Next.js, leveraging static site generation
            (SSG) for improved performance.
          </li>
          <li>
            <strong>Custom Design</strong>: Designed and implemented a
            personalized layout using Tailwind CSS to match the blog’s style and
            branding.
          </li>
          <li>
            <strong>Real-Time Previews</strong>: Integrated Sanity’s real-time
            preview feature to allow instant content updates during editing.
          </li>
          <li>
            <strong>Rich Content Handling</strong>: Added support for rich text
            formatting and media embedding to enhance the flexibility of blog
            posts.
          </li>
          <li>
            <strong>Optimization</strong>: Improved website performance by
            optimizing images, enabling lazy loading, and utilizing Next.js
            features like route-based code splitting.
          </li>
          <li>
            <strong>Deployment</strong>: Deployed the website on Vercel for
            seamless hosting, CI/CD workflows, and efficient content delivery.
          </li>
        </ul>
      </div>

      {/* PAIN POINTS FOUND */}
      <Heading HeadingTag="h2">Pain Points Found</Heading>
      <p>
        Working on this blog was a bit challenging when I had to integrate the
        visual editing feature provided by Sanity.io, as it required more than
        basic knowledge. Fortunately, I found a helpful{" "}
        <Link
          className={styles.linkText}
          href="https://www.sanity.io/docs/visual-editing-with-next-js-app-router-and-sanity-studio"
          target="_blank"
        >
          tutorial{" "}
        </Link>
        online, and it was a success.
      </p>

      {/* WHAT I LEARNED */}
      <Heading HeadingTag="h2">What I learned? </Heading>
      <p>
        In this project, I learned how to integrate Sanity.io for real-time
        content management and live editing, using GROQ queries to fetch data
        efficiently. I also improved my skills in Next.js for SEO and static
        site generation (SSG) and customized the design with Tailwind CSS.
        Overcoming integration challenges and ensuring smooth CMS-to-front-end
        synchronization helped me enhance my problem-solving abilities.{" "}
        <b>Feel free to take a look at this working app demo:</b>
      </p>

      {/* GITHUB & WEBSITE LINKS */}
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            className={styles.link}
            href="https://sanity-nextjs-blog-mu.vercel.app/"
            target="_blank"
          >
            <CgWebsite />
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={styles.link}
            href="https://github.com/MARSIF123/sanity-nextjs-blog"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>
      </ul>
    </>
  );
}
