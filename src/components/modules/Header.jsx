// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false);

  return (
    <header className="fixed w-screen border-b-2 xl:max-w-[1380px] border-b-neutral-100 mx-auto bg-white z-20">
      <div className="flex xl:px-20 px-5 xl:py-6 py-3 justify-between items-center">
        <span
          className="text-lg md:text-xl xl:text-2xl font-bold tracking-wide text-purple-700"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          ZAHRA REIHANI
        </span>

        {/* Desktop Menu */}
        <span className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li className="text-lg font-bold hover:text-purple-600">
              <a href="#home">Home</a>
            </li>
            <li className="text-lg font-bold hover:text-purple-600">
              <a href="#about">About</a>
            </li>
            <li className="text-lg font-bold hover:text-purple-600">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-lg font-bold hover:text-purple-600">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-lg font-bold hover:text-purple-600">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-lg font-bold hover:text-purple-600">
              <a href="#education">Education</a>
            </li>
            <li className="text-lg font-bold hover:text-purple-600">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* CV Dropdown */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              Download CV
            </button>

            {isCVDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50"
              >
                <a
                  href="./resume.pdf"
                  download
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                >
                  English
                </a>
                <a
                  href="./Lebenslauf.pdf"
                  download
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                >
                  Deutsch
                </a>
              </motion.div>
            )}
          </div>
        </span>

        {/* Mobile Menu Button */}
        <span className="block md:hidden">
          <button
            className="text-purple-600 text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </span>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40 md:hidden"
          />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 left-0 right-0 md:hidden px-5 pb-4 bg-white shadow-md z-50"
          >
            <ul className="flex flex-col gap-3">
              <li className="text-base hover:text-purple-600">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li className="text-base hover:text-purple-600">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className="text-base hover:text-purple-600">
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li className="text-base hover:text-purple-600">
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="text-base hover:text-purple-600">
                <a
                  href="#experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li className="text-base hover:text-purple-600">
                <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>
                  Education
                </a>
              </li>
              <li className="text-base hover:text-purple-600">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>

              {/* Mobile CV Dropdown */}
              <li className="relative mt-2">
                <button
                  onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full text-left"
                >
                  Download CV
                </button>

                {isCVDropdownOpen && (
                  <div className="mt-1 bg-white border rounded shadow-lg">
                    <a
                      href="./resume.pdf"
                      download
                      className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                    >
                      English
                    </a>
                    <a
                      href="./Lebenslauf.pdf"
                      download
                      className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                    >
                      Deutsch
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </header>
  );
}

export default Header;
