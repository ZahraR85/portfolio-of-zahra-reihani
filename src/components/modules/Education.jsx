// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="px-10 xl:px-16 mt-16">
      <motion.h3 className="lg:text-3xl text-2xl font-bold w-fit text-neutral-700 mx-auto mb-6 border-b-2 lg:pb-2 border-purple-600">
        Education
      </motion.h3>
      <motion.div className="bg-white rounded-lg shadow-xl py-2 px-3">
        <motion.ol
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="relative border-s border-gray-200 dark:border-gray-700"
        >
          {/* Bootcamp */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Sep 2024 – Jan 2025
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              WEB CODING SCHOOL
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Web & App Development Bootcamp
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              Project-based, practice-oriented, online coding training using{" "}
              <span className="text-purple-700">
                HTML, CSS, JavaScript, React, Express.js, Node.js, MongoDB
              </span>{" "}
              with agile methodology.
            </p>
          </motion.li>

          {/* TU Kaiserslautern */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020 – 2022
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              TU Kaiserslautern University
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Computer Science (M.Sc.)
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              Completed 3 semesters (40 credit units) with focus on{" "}
              <span className="text-purple-700">project management</span> before
              discontinuing the program.
            </p>
          </motion.li>

          {/* Azad University Gilan */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb 2013 – Feb 2015
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Islamic Azad University, Science and Research Branch, Gilan, Iran
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Computer Software Engineering (M.Sc.)
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              Thesis: <span className="text-purple-700">Image Processing</span>
            </p>
          </motion.li>

          {/* Azad University Lahijan */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Sep 2004 – Feb 2009
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Islamic Azad University, Lahijan, Iran
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Computer Software Engineering (B.Sc.)
            </h3>
            <p className="mt-2 mb-2 text-gray-500 text-base font-normal">
              Thesis:{" "}
              <span className="text-purple-700">
                Implementation of an Institute site with SQL Server and ASP.NET
              </span>
            </p>
          </motion.li>
        </motion.ol>
      </motion.div>
    </div>
  );
}

export default Education;
