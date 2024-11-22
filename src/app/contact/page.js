import Heading from "@/components/Heading/Heading";
import { WEBSITE_TITLE } from "../../utils/constants";
import ProjectGrid from "@/components/ProjectsGrid/ProjectsGrid";
import ContactForm from "@/components/ContactForm/ContactForm";
export const metadata = {
  title: `${WEBSITE_TITLE} | Contact Me `,
  description:
    "Browse my collection of web development projects where I use Next.js, React, and other modern technologies to solve real-world problems and deliver high-quality digital solutions.",
};
export default function Projects() {
  return <ContactForm />;
}
