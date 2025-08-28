import { FaArrowTrendUp } from "react-icons/fa6";
import { projects } from "../constants/project";
import Carousel from "./Carousel";

function Projects() {
  return (
    <div className="px-6 xl:px-10 mx-auto mt-16 w-full">
      <h4 className="lg:text-3xl text-2xl w-fit border-b-2 mx-auto lg:pb-2 mb-4 lg:mb-12 border-purple-600 font-bold text-neutral-700">
        Projects
      </h4>

      {/* Projects Row */}
      <div className="grid xl:grid-cols-2 gap-12 w-full">
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
            }}
            key={project.id}
            className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden"
          >
            <div className="pt-6 pb-6 relative px-6">
              <h3 className="text-2xl font-bold mb-4 bg-purple-200 w-fit px-3 py-1 rounded-lg text-neutral-700">
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-700">
                {project.desc}
              </p>
            </div>
            {/* Carousel */}
            <Carousel slides={project.slides} />

            {/* Content */}
            <div className="pt-6 pb-10 relative px-6">
              <motion.a
                href={project.url}
                whileHover={{ scale: 1.1, color: "#9333ea" }}
                className="absolute bottom-4 right-6 flex items-center gap-2 border-b border-neutral-500 pb-1 text-neutral-700"
              >
                <p className="text-sm font-medium">View in Code</p>
                <FaArrowTrendUp className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
