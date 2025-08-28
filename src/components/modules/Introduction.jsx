import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Introduction() {
  return (
    <div className="flex flex-col xl:flex-row lg:mt-16 mt-8 px-6 xl:px-16 py-10 bg-gradient-to-b from-stone-100 gap-10 xl:gap-20 items-center justify-center">
      {/* Column 1: Profile Image */}
      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        src="src/assets/projects/profileLittle.jpg"
        alt="Zahra's Profile"
        className="w-full max-w-xs xl:max-w-[280px] h-auto rounded-2xl object-cover shadow-md"
      />

      {/* Column 2: Text Info */}
      <div className="flex flex-col items-start">
        <motion.p
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="lg:text-2xl text-lg font-semibold text-neutral-700"
        >
          I am <span className="text-purple-600">Zahra</span>,
        </motion.p>

        <motion.p
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="lg:text-xl text-m font-semibold mt-1 text-neutral-700"
        >
          Full Stack Web Developer | Software Engineer
        </motion.p>
      </div>

      {/* Column 3: Social Icons */}
      <motion.div
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <FaGithub className="h-6 w-6 text-purple-700 hover:text-neutral-600" />
          <a
            href="https://github.com/ZahraR85"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ZahraR85
          </a>
        </p>

        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <FaLinkedin className="h-6 w-6 text-purple-700 hover:text-neutral-600" />
          <a
            href="https://www.linkedin.com/in/zahra-reihani85/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/zahra-reihani85
          </a>
        </p>

        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <MdEmail className="h-6 w-6 text-purple-700 hover:text-neutral-600" />
          <a
            href="mailto:zahra.reihani85@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            zahra.reihani85@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Introduction;
