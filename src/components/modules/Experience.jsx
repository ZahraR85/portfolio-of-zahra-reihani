// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="px-10 xl:px-16 mt-16">
      <motion.h3 className="lg:text-3xl text-2xl font-bold w-fit text-neutral-700 mx-auto mb-6 border-b-2 lg:pb-2 border-purple-600">
        Professional Experience
      </motion.h3>
      <motion.div className="bg-white rounded-lg shadow-xl py-2 px-3">
        <motion.ol
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="relative border-s border-gray-200 dark:border-gray-700"
        >
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb 2025 – Now
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Personal Developement and Career Pursuit
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Hanau, Germany
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>
                Focused on advancing my skills in{" "}
                <span className="text-purple-700">Web Developement </span>
                through an intensive Bootcamp and self-learning (React,
                TypeScript, Next.js).
              </li>
              <li>
                Additionally, I explored job opportunities to apply my skills in
                practice.
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb 2023 – Jul 2024
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Backend Developer – Part-time
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              BMZ Germany GmbH, Karlstein am Main, Germany
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>
                Applied <span className="text-purple-700">C programming </span>
                to configure gateway settings and adjust BMS (Battery Management
                System) parameters,
              </li>
              <li>improved system performance and reliability.</li>
              <li>
                Employed <span className="text-purple-700">Phyton </span> to
                extract, transform, and organize data from over 200 .c and .h
                files, delivering structured and insightful datasets for
                development and analysis
              </li>
            </ul>
          </motion.li>

          {/* Portfolio */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Apr 2016 – Apr 2019
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Full-Stack Developer
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Modiriat Tarah Samaneh (MTS), Tehran, Iran
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>
                {" "}
                Provided software installation, support, and maintenance for
                clients to ensure smooth operation
              </li>
              <li>
                Enhanced the Office Automation Program using VB.NET and SQL
                Server.
              </li>
              <li> Created reports using Crystal Reports in Visual Studio.</li>
              <li> Diagnosed and fixed system errors.</li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Apr 2010 - Nov 2011
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Full-Stack Developer
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Farayande Sabze Pakan Company (FSP), Tehran, Iran
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>
                Developed a web application for HSE management using HTML, CSS,
                Ajax Toolkit, and ASP.NET for clients including Tehran Oil
                Refinery.
              </li>
              <li>
                Designed and implemented the project’s database using SQL Server
                and C#.NET.
              </li>
              <li>Created custom reports using Crystal Reports</li>
            </ul>
          </motion.li>
        </motion.ol>
      </motion.div>
    </div>
  );
}

export default Experience;
