import Heading from "@/components/Heading/Heading";
import { WEBSITE_TITLE } from "../../utils/constants";
import ProjectGrid from "@/components/ProjectsGrid/ProjectsGrid";
export const metadata = {
  title: `${WEBSITE_TITLE} | Projects `,
  description:
    "Browse my collection of web development projects where I use Next.js, React, and other modern technologies to solve real-world problems and deliver high-quality digital solutions.",
};
export default function Projects() {
  return (
    <div>
      <Heading HeadingTag="h1">Projects</Heading>
      <ProjectGrid />
    </div>
  );
}
