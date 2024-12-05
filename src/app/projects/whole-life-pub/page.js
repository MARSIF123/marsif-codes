import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import styles from "../todo-list-app/page.module.css";
import who1 from "../../../assets/who1.png";
import who2 from "../../../assets/who2.png";
import who4 from "../../../assets/who4.png";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { WEBSITE_TITLE } from "../../../utils/constants";
import Link from "next/link";

export const metadata = {
  title: `${WEBSITE_TITLE} | WHOLE LIFE PUB `,
  description:
    "Dive into the details of my WHOLE LIFE PUB project, a dynamic web app built with Next.js & DatoCMS. It features Blogs, real-time updates, and a clean, user-friendly interface.",
};

export default function WholeLifePub() {
  return (
    <>
      {/* INTRO */}
      <Heading HeadingTag="h1">WholeLifePub</Heading>
      <p>
        Inspired by The Art of Manliness, I recreated its design to sharpen my
        front-end styling skills. What started as a static page turned into a
        full-stack blog app using Next.js and DatoCMS, combining a clean,
        responsive design with dynamic content management.
      </p>

      {/* ROLE & TECH */}
      <div className={styles.flex}>
        <div className={styles["flex-item"]}>
          <Heading HeadingTag="h2">My Role</Heading>
          <p>
            As the sole developer for the web application, I handled both
            frontend and backend development.
          </p>
        </div>
        <div className={styles["flex-item"]}>
          <Heading HeadingTag="h2">Tech Stack</Heading>
          <p>
            This project is built with Next.js and React for the front end,
            using DatoCMS and GraphQL to manage and fetch content dynamically.
            The styling is done with CSS, and the app is deployed on Vercel for
            a smooth and reliable experience.
          </p>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Home page with an elegant and user-friendly design"
          src={who1}
        />
        <p>Home page with an elegant and user-friendly design</p>
      </div>

      {/* PROCESS */}
      <div>
        <Heading HeadingTag="h2">Proccess</Heading>
        <p>
          The blog lets you manage content dynamically with DatoCMS and fetch it
          using GraphQL, making updates super easy. It’s fully responsive, so it
          looks great on any device. Built with Next.js, it’s fast,
          SEO-friendly, and performs smoothly. The design stays true to the look
          of The Art of Manliness, and deploying it on Vercel keeps everything
          running reliably.
        </p>
      </div>

      {/* 2ND IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Post View"
          src={who2}
        />
        <p>Post View Page</p>
      </div>

      {/* 3RD IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          loading="lazy"
          alt="Related posts section"
          src={who4}
        />
        <p>Related posts section underneath the full post</p>
      </div>

      {/* WHAT I LEARNED */}
      <Heading HeadingTag="h2">What I learned? </Heading>
      <p>
        Working with DatoCMS was both fun and easy, and I picked up some great
        new skills along the way. I learned how to use <b>LQIP</b>
        (Low-Quality Image Placeholders) for smooth image loading, which really
        improved the user experience. I also got hands-on experience working on
        custom structured components of DatoCMS to render blog content with
        custom styling. Querying GraphQL became second nature as I fetched
        dynamic data for the blog, and I gained a deeper understanding of SEO
        and the techniques to optimize content for better visibility. This
        project really helped me grow as a full-stack developer!{" "}
        <b>Feel free to take a look at this working app demo:</b>
      </p>

      {/* LINKS */}
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            className={styles.link}
            href="https://whole-life-pub-5321.vercel.app/"
            target="_blank"
          >
            <CgWebsite />
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={styles.link}
            href="https://github.com/MARSIF123/whole-life-pub"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>
      </ul>
    </>
  );
}
