import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mvgbojlp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="px-6 lg:px-16 mt-16">
      <motion.h3
        className="lg:text-3xl text-2xl font-bold text-center text-gray-800 mb-10 border-b-2 border-purple-600 w-fit mx-auto pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h3>

      <section className="flex justify-center items-start">
        <motion.div
          className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {status === "success" ? (
            <motion.div
              className="text-center text-green-600 text-lg font-semibold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Thank you! Your message has been sent.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all shadow-sm hover:shadow-md"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all shadow-sm hover:shadow-md"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all shadow-sm hover:shadow-md resize-none"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition-all disabled:opacity-50 shadow-md hover:shadow-lg"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "error" && (
                <p className="text-red-600 text-center text-base font-medium">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </motion.form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
