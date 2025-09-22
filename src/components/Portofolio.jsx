import React from "react";
import { motion } from "framer-motion";
import Clicktopia from "../assets/Clicktopia.png";
import InteractiveMenu from "../assets/InteractiveMenu.png";
import Echonos from "../assets/Echonos.png";
import Borderless from "../assets/Borderless.png";
import QuantUx from "../assets/QuantUx.png";
import { useNavigate } from "react-router-dom"

export default function Portofolio() {
    const navigate = useNavigate();

    const projects = [
        {
          id: "clicktopia",
          title: "CLICKTOPIA",
          subtitle: "Educational Game Design & UI/UX Research",
          image: Clicktopia,
        },
        {
            id: "InteractiveMenu",
          title: "INTERACTIVE DIGITAL MENU",
          subtitle: "UI/UX & Interaction Design",
          image: InteractiveMenu,
        },
        {
            id: "echonos",
          title: "ECHONOS",
          subtitle: "Educational Game Design & UI/UX Research",
          image: Echonos,
        },
        {
            id: "borderless",
          title: "BORDERLESS",
          subtitle: "Collaborative Design Tools & UI/UX Prototyping",
          image: Borderless,
        },
        {
            id: "quantUx",
          title: "QUANTUX",
          subtitle: "UI Design & UX Research",
          image: QuantUx,
        },
      ];


  return (
    <div
    id="portfolio"
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
       PORTOFOLIO
      </motion.p>

      
      <motion.div
        className="w-[90%] mt-10 mx-auto  p-6 overflow-x-auto "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex space-x-6">
          {projects.map((project, index) => (
            
            <motion.div
              key={index}
              onClick={() => navigate(`/${project.id}`)}
              className="min-w-[250px] bg-white shadow-md hover:shadow-lg transition-all border-black border-1"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                className="w-full h-[200px] object-cover p-3 "
              />
              <div className="pt-4 pl-2 pb-2 ">
                <p className="font-moretext text-[15px] font-semibold">{project.title}</p>
                <p className="font-moretext text-[12px] ">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

  );
}
