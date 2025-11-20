// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Certificates() {
  return (
    <div className="px-10 xl:px-16 mt-16">
      <motion.h3 className="lg:text-3xl text-2xl font-bold w-fit text-neutral-700 mx-auto mb-6 border-b-2 lg:pb-2 border-purple-600">
        Certificates & Training
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

          {/* Deutsch Zertifikat B2 & Führerschein  */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Sep 2022 – Sep 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              German language Certificate B2 & Driving Licence
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              I completed my German language course, received my B2 German
              certificate, and I also obtained my driving license.
            </p>
          </motion.li>

          {/* MFT Tehran, Karaj */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Apr 2019 – Nov 2019
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              MFT Tehran, Karaj
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">Web Design</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              Web design training (200 hours) with HTML, CSS, JavaScript, Less,
              Sass, Bootstrap and AJAX
            </p>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              Final project:{" "}
              <a
                href="https://github.com/ZahraR85/Notes-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Notes App (GitHub)
              </a>
            </p>
          </motion.li>

          {/* MFT Tehran, Tehran */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Apr 2009 – Feb 2010
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              MFT Tehran, Tehran
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              ASp.Net, VB.Net, Sql Server
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              Final project:{" "}
              <span className="text-purple-700">
                {" "}
                Registration system for an institute with Sql Server, VB.Net and
                Asp.Net(both in Windows and Web)
              </span>
            </p>
          </motion.li>
        </motion.ol>
      </motion.div>
    </div>
  );
}

export default Certificates;
