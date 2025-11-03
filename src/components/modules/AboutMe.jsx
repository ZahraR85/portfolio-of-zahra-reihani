// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div
      className=" xl:flex sm:grid md:grid lg:flex md:items-center xl:px-16 px-6 items-center justify-between"
      id="about"
    >
      <div className="grid">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="lg:text-3xl text-2xl w-fit border-b-2 mx-auto lg:pb-2 mb-4 lg:mb-8 border-purple-600 font-bold text-neutral-800">
            About Me
          </h4>
          <p className="lg:text-xl text-m mx-auto leading-8 text-neutral-600 text-justify ">
            I’m a passionate and detail-oriented software developer with over 10
            years background in computer engineering and a strong focus on
            building practical, user-friendly web applications. My career began
            in enterprise systems using <span className="font-bold">SQL </span>
            and <span className="font-bold">ASP.NET (VB and C#)</span>, and has
            since evolved into full-stack development with modern technologies
            like <span className="font-bold">JavaScript, React, Node.js</span>,
            and <span className="font-bold">MongoDB</span>. I enjoy transforming
            ideas into responsive, clean, and efficient code with a sharp focus
            on user experience and maintainability. I thrive in collaborative,
            agile environments where learning and continuous improvement drive
            progress.
          </p>
          <p className="mb-4 lg:text-xl text-m leading-8 text-neutral-600 text-justify">
            These days, I spend most of my time sharpening my skills with
            JavaScript, React, and TypeScript. I've also been exploring backend
            tools like GraphQL and MongoDB, and building full-stack projects
            with Next.js. This portfolio is part of my journey to challenge
            myself, explore new tools, and build with curiosity.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
