import Layout from "../../components/Layout";
import Link from "next/link";
import ArrowLeftIcon from "../../components/icons/ArrowLeft";
import { getAllProjects } from "@/functions/getAllProjects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage({ projects }) {
  console.log(projects);
  return (
    <Layout title={"Portfolio / Project"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt16">
        <Link
          href="/"
          className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-200"
        >
          <ArrowLeftIcon className="w-8 h-8 fill-current" />
          <span>Back to Home</span>
        </Link>
        {/*proje alani  */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
