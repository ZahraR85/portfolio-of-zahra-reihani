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
            years of experience in computer engineering, focused on building
            practical, user-friendly web applications. I began my career working
            on enterprise systems using <span className="font-bold">SQL</span>{" "}
            and <span className="font-bold">ASP.NET (VB and C#)</span>, and
            later transitioned into full-stack development with modern
            technologies such as{" "}
            <span className="font-bold">JavaScript, React, Vue.js</span> and{" "}
            <span className="font-bold">Node.js</span>, along with{" "}
            <span className="font-bold">MongoDB</span>. I enjoy turning ideas
            into clean, efficient, and responsive solutions, with a strong focus
            on user experience, performance, and maintainability. I thrive in
            collaborative, agile environments where continuous learning drives
            growth.
          </p>

          <p className="mb-4 lg:text-xl text-m leading-8 text-neutral-600 text-justify">
            Currently, I’m focused on strengthening my skills in{" "}
            <span className="font-bold">TypeScript, and Vue.js</span>, while
            expanding my backend experience with{" "}
            <span className="font-bold">MongoDB</span>. I actively build
            full-stack projects to apply my knowledge in real-world scenarios.
            This portfolio represents my ongoing journey to explore new
            technologies, challenge myself, and create meaningful digital
            experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
