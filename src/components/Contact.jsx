import React from "react";
import { motion } from "framer-motion";


import GmailIcon from "../assets/gmail.png";
import GithubIcon from "../assets/github1.png";
import LinkedinIcon from "../assets/linkdin.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative w-[800px] h-auto bg-MainPink rounded-[30px] mx-auto mt-85 mb-40 pb-20
                before:absolute before:-top-5 before:-left-5 before:-right-5 before:-bottom-5
              before:bg-MainPink before:blur-[60px] before:opacity-50 before:rounded-[30px] before:z-[-1]"
    >
      <motion.p
        className="font-text text-white text-center p-15 text-[25px] font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        CONTACT
      </motion.p>

      <div className="text-center">
      <p className="font-light italic text-gray-700 text-[25px] px-10 leading-relaxed">
            For any inquiries or to learn more, feel <br />
            free to reach out via the links below.
      </p>

        <div className="flex justify-center gap-20 mt-20">
          <a href="mailto:12clarama12@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src={GmailIcon}
              alt="Email"
              className="w-16 h-14 hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://github.com/claraama?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-17 h-16 hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://www.linkedin.com/in/clara-maris-483b9a235/" target="_blank" rel="noopener noreferrer">
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-14 h-14 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
