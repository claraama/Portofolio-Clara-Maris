import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="relative w-[800px] h-auto bg-MainPink rounded-[30px] mx-auto mt-85 pb-20
                before:absolute before:-top-5 before:-left-5 before:-right-5 before:-bottom-5
              before:bg-MainPink before:blur-[60px] before:opacity-50 before:rounded-[30px] before:z-[-1]">


      <motion.p
        className="font-text text-white text-center p-15 text-[25px] font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT ME
      </motion.p>

      
      <motion.div
        className="w-[580px] h-auto bg-white mt-20 mx-auto border-black border-1 p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-text text-xl text-center font-semibold pt-2 pb-5">
          Educational Background
        </p>

        <div className="flex mb-8">
          <div className="w-1/3 text-DatesPink font-moretext font-semibold pl-6">
            2024 – Present
          </div>
          <div className="w-2/3">
            <p className="font-bold">Institut Polytechnique de Paris <br></br>TELECOM Paris</p>
            <p className="text-gray-500">Paris, France</p>
            <p className="italic">Master’s in Interaction, Graphics & Design</p>
          </div>
        </div>

        <div className="flex mb-8">
          <div className="w-1/3 text-DatesPink font-moretext font-semibold pl-6">
            2021 – 2024
          </div>
          <div className="w-2/3">
            <p className="font-bold">University Babeș-Bolyai</p>
            <p className="text-gray-500">Cluj-Napoca, Romania</p>
            <p className="italic">
              Bachelor’s in Mathematics and Computer Science <br />
              (English Track)
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 text-DatesPink font-moretext font-semibold pl-6">
            2017 – 2021
          </div>
          <div className="w-2/3">
            <p className="font-bold">National College Gheorghe Șincai</p>
            <p className="text-gray-500">Cluj-Napoca, Romania</p>
            <p className="italic">
              Mathematics & Computer Science <br />
              (Bilingual English Program)
            </p>
          </div>
        </div>
      </motion.div>


      <motion.div
        className="w-[580px] h-auto bg-white mt-20 mx-auto border-black border-1 p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-text text-xl text-center font-semibold pt-2 pb-5">
          Languages
        </p>
        <ul className="list-disc list-inside space-y-3 text-lg pl-8">
          <li>
            <span className="font-bold font-text">Romanian</span> – Native language
          </li>
          <li>
            <span className="font-bold font-text">English</span> – C1{" "}
            <span className="italic text-gray-500">
              Certificate of language proficiency (Cambridge)
            </span>
          </li>
          <li>
            <span className="font-bold font-text">French</span> – B2
          </li>
          <li>
            <span className="font-bold font-text">Spanish</span> – B1
          </li>
        </ul>
      </motion.div>


      <motion.div
        className="w-[580px] h-auto bg-white mt-20 mx-auto border-black border-1 p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-text text-xl text-center font-semibold pt-2 pb-5">Skills</p>
        <div className="grid grid-cols-2 gap-8 ml-7">
          <div>
            <h3 className="font-bold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "HTML", "JavaScript", "CSS", "Tailwind"].map(skill => (
                <span key={skill} className="bg-MainPink/43 px-3 py-1 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Tools & Workflow</h3>
            <div className="flex flex-wrap gap-2">
              {["Git/Github", "Agile", "Notion", "Trello"].map(skill => (
                <span key={skill} className="bg-MainPink/43 px-3 py-1 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Design & UX</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Wireframing", "Accessibility", "Prototyping", "UI/UX Design"].map(skill => (
                <span key={skill} className="bg-MainPink/43 px-3 py-1 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["C++", "Python", "Java"].map(skill => (
                <span key={skill} className="bg-MainPink/43 px-3 py-1 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>


      <motion.div
        className="w-[580px] h-auto bg-white mt-20 mx-auto border-black border-1 p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-text text-xl text-center font-semibold pt-2 mb-10">Experience</p>

        <div className="mb-10">
            <p className="text-DatesPink font-semibold">
                September 2024 – October 2024
            </p>
            <p className="font-bold">
                Prodigy IT Solutions –{" "} <span className="text-DatesPink">Cluj-Napoca, Romania</span>
            </p>
            <p className="italic">Entry-level Frontend Developer</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
                Developed and maintained the project’s website features using{" "}
                <span className="font-semibold">React</span> and{" "}
                <span className="font-semibold">Tailwind CSS</span>, ensuring alignment
                with design specifications.
            </li>
            <li>
                Conducted <span className="font-semibold">functional testing</span> and{" "}
                <span className="font-semibold">debugging</span> to identify and resolve
                issues.
            </li>
            <li>
                Collaborated with design and development teams to enhance{" "}
                <span className="font-semibold">UI/UX</span> based on project
                requirements.
            </li>
            </ul>
        </div>

     
        <div>
            <p className="text-DatesPink font-semibold">July 2023 – August 2023</p>
            <p className="font-bold">Prodigy IT Solutions –{" "} <span className="text-DatesPink">Cluj-Napoca, Romania</span>
            </p>
            <p className="italic">Intern Frontend Developer</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
                Created and customized <span className="font-semibold">WordPress</span>{" "}
                designs for various projects.
            </li>
            <li>
                Implemented styling and functionality using{" "}
                <span className="font-semibold">HTML</span>,{" "}
                <span className="font-semibold">CSS</span>, and{" "}
                <span className="font-semibold">JavaScript</span>.
            </li>
            <li>
                Began learning and applying{" "}
                <span className="font-semibold">React</span> to enhance dynamic user
                interfaces.
            </li>
            </ul>
        </div>
        
      </motion.div>
    </div>
  );
}
