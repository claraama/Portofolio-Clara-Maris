import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InteractiveMenuPic from "../assets/QuantUx.png";

import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import QuantUXCarousel from "../components/QuantUXCarousel";

import QuantUXCarousel2 from "../components/QuantUXCarousel2";
import quantUx1 from "../assets/QuantUX1.png"


export default function Quantux() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <NavbarHome />

      <main className="flex-1 flex flex-col items-center justify-start px-4 text-center mt-24">
        <h1 className="font-text md:text-3xl font-bold mb-1">QUANT UX</h1>
        <p className=" font-text text-sm md:text-lg text-gray-600 mb-6">
        UI Design  &amp; UX Research
        </p>

        <div className="w-full max-w-2xl mb-6">
          <img
            src={InteractiveMenuPic}
            alt="Clicktopia preview"
            className="w-full h-auto rounded-lg shadow-md object-contain mx-auto"
          />
        </div>

        <p className=" font-text max-w-xl text-sm md:text-base text-gray-700 leading-relaxed mt-10">
        An interactive digital menu that that makes browsing, customizing, and ordering fast and intuitive while enhancing overall accessibility.
        </p>

        <div className="relative w-10/12 sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto bg-MainPink rounded-2xl mx-auto mt-30
            before:absolute before:-top-4 sm:before:-top-5 md:before:-top-6
            before:-left-4 sm:before:-left-5 md:before:-left-6
            before:-right-4 sm:before:-right-5 md:before:-right-6
            before:-bottom-4 sm:before:-bottom-5 md:before:-bottom-6
            before:bg-MainPink before:blur-2xl sm:before:blur-3xl md:before:blur-4xl
            before:opacity-50 before:rounded-2xl before:z-[-1]">

            <p className="font-text text-white text-center font-bold text-xl sm:text-2xl md:text-3xl pt-8">
                Academic Context
            </p>

            <p className="px-6 py-8 sm:px-10 sm:py-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            This project was developed as part of the <b className="text-darkPink">Quantitative UX</b> course at <b className="text-darkPink">Télécom Paris</b>, focusing on using data and testing methods to improve user experiences. 
            The course taught how to measure and analyze user behavior through controlled experiments and statistical analysis.
            Our study aimed to optimize the <b className="text-darkPink">AI Act Game</b>, an educational web application that teaches people about European AI regulations through interactive gameplay.
            </p>

        </div>

        <div className="relative w-10/12  sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto bg-MainPink rounded-2xl mx-auto mt-30
            before:absolute before:-top-4 sm:before:-top-5 md:before:-top-6
            before:-left-4 sm:before:-left-5 md:before:-left-6
            before:-right-4 sm:before:-right-5 md:before:-right-6
            before:-bottom-4 sm:before:-bottom-5 md:before:-bottom-6
            before:bg-MainPink before:blur-2xl sm:before:blur-3xl md:before:blur-4xl
            before:opacity-50 before:rounded-2xl before:z-[-1]">

            <p className="font-text text-white text-center font-bold text-xl sm:text-2xl md:text-3xl pt-8">
                Domain & Significance
            </p>

            <p className="px-6 py-8 sm:px-10 sm:py-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            This project is situated in the fields of <b className="text-darkPink">Human-Computer Interaction (HCI)</b>, <b className="text-darkPink">Digital Education</b>, and <b className="text-darkPink">UX Research</b>. 
            It addresses the challenge of making complex regulatory frameworks accessible through data-driven design optimization. 
            The work contributes to understanding how quantitative evaluation methods can improve educational technology effectiveness.
            </p>

        </div>


        <div className="relative w-10/12  sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto bg-MainPink rounded-2xl mx-auto mt-30 mb-15
            before:absolute before:-top-4 sm:before:-top-5 md:before:-top-6
            before:-left-4 sm:before:-left-5 md:before:-left-6
            before:-right-4 sm:before:-right-5 md:before:-right-6
            before:-bottom-4 sm:before:-bottom-5 md:before:-bottom-6
            before:bg-MainPink before:blur-2xl sm:before:blur-3xl md:before:blur-4xl
            before:opacity-50 before:rounded-2xl before:z-[-1]">

            <p className="font-text text-white text-center font-bold text-xl sm:text-2xl md:text-3xl pt-8">
                Project Overview
            </p>

            <p className="px-6 py-8 sm:px-10 sm:py-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
             
            The <b className="text-darkPink">AI Act Game </b>is an educational web application developed by <b className="text-darkPink">Dr. Thomas Le Goff</b> that teaches users about <b className="text-darkPink">European AI regulations</b> through interactive scenarios.
            Educational tools for complex <b className="text-darkPink">legal frameworks</b> often suffer from poor user engagement and comprehension due to text heavy, static interfaces that fail to effectively communicate regulatory nuances to diverse audiences.
            <br></br>
            We conducted a <b className="text-darkPink"></b>comparative UX study evaluating two versions of the game using <b className="text-darkPink"></b>A/B testing methods:
            </p>
    
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div> <b className="text-darkPink">Version A</b>: Original text heavy, slide based interface with traditional presentation format
                    </div>
                </li>
                <li>
                <div> <b className="text-darkPink">Version B</b>: Redesigned version featuring improved content segmentation, interactive hover elements, and enhanced overall flow
                </div>
                </li>
                
            </ul>
            
        </div>

        <div className="font-bold text-darkPink text-[20px]">Version A - Original game & Version B - Redesigned flow and Visuals </div>
        <QuantUXCarousel />


        <div className="relative w-10/12  sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto bg-MainPink rounded-2xl mx-auto mt-30
            before:absolute before:-top-4 sm:before:-top-5 md:before:-top-6
            before:-left-4 sm:before:-left-5 md:before:-left-6
            before:-right-4 sm:before:-right-5 md:before:-right-6
            before:-bottom-4 sm:before:-bottom-5 md:before:-bottom-6
            before:bg-MainPink before:blur-2xl sm:before:blur-3xl md:before:blur-4xl
            before:opacity-50 before:rounded-2xl before:z-[-1]">

            <p className="font-text text-white text-center font-bold text-xl sm:text-2xl md:text-3xl pt-8">
               Design Process
            </p>

            <p className="px-6 py-8 sm:px-10 sm:py-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            Our methodology followed a systematic quantitative UX research approach to evaluate interface effectiveness:
            </p>
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div className="font-bold text-darkPink text-[20px]">Experimental Design & Participant Recruitment</div>
                    <div>
                        Conducted controlled A/B testing with 20 participants  using a counterbalanced within subject design.
                        <br></br> 
                        Each participant experienced both game versions with different use cases to minimize learning effects and ensure comparative validity.
                    </div>
                    
                </li>
                <li>
                    
                        <div className="font-bold text-darkPink text-[20px]">Data Collection</div>
                        <div>Used mixed methods approach combining:</div>
                        </li>
                        <li>
                        <div> <b className="text-darkPink">Behavioral analytics</b>: heatmaps for click patterns and navigation analysis</div>
                        </li>
                        <li>
                        <div> <b className="text-darkPink">Standardized usability instruments</b>: System Usability Scale and User Experience Questionnaire</div>
                        </li>
                        <li>
                        <div> <b className="text-darkPink">Qualitative methods</b>: think-aloud protocols and semi-structured interviews to capture comprehensive user experience data</div>
                    
              
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Statistical Analysis & Evaluation</div>
                    <div> Performed quantitative comparison of learning outcomes through quiz performance analysis, measured engagement through dwell time metrics, and identified usability pain points. Applied thematic analysis to qualitative feedback to extract key friction points and design improvement opportunities.</div>
                </li>
                
            </ul>
        </div>
        
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-20">
                        <img
                            src={quantUx1}
                            alt="Borderless preview"
                            className="w-full h-auto rounded-lg shadow-md object-contain mx-auto"
                        />
                        </div>
       


        <div className="relative w-10/12 sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto bg-MainPink rounded-2xl mx-auto mt-35 mb-20
            before:absolute before:-top-4 sm:before:-top-5 md:before:-top-6
            before:-left-4 sm:before:-left-5 md:before:-left-6
            before:-right-4 sm:before:-right-5 md:before:-right-6
            before:-bottom-4 sm:before:-bottom-5 md:before:-bottom-6
            before:bg-MainPink before:blur-2xl sm:before:blur-3xl md:before:blur-4xl
            before:opacity-50 before:rounded-2xl before:z-[-1]">

            <p className="font-text text-white text-center font-bold text-xl sm:text-2xl md:text-3xl pt-8 pb-10">
                 Key Insights & Challenges 
            </p>
            
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
            <li>
            <div className="font-bold text-darkPink text-[18px]">Redefinition of Target Audience</div>
            <div>Content complexity fell between user groups too basic for legal professionals yet too advanced for general audiences, highlighting need for clearer user segmentation and adaptation of the content.</div>
            </li>
            <li>
            <div className="font-bold text-darkPink text-[18px]">Insufficient Gamification Elements</div>
            <div>Users identified lack of core game mechanics including progression systems, meaningful decision making  making the experience feel more like an interactive document than an actual game.</div>
            </li>
            
            <li>
            <div className="font-bold text-darkPink text-[18px]">User Interface Confusion</div>
            <div>Heatmap analysis revealed significant navigation difficulties with users frequently clicking non-interactive elements and struggling to understand game flow, resulting in inefficient task completion.</div>
            </li>
            <li>
            <div className="font-bold text-darkPink text-[18px]">Version B prefered by the users</div>
            <div>Redesigned version achieved higher UX scores and improved usability metrics, though fundamental engagement and content clarity issues persisted across both versions.</div>
            </li>
            </ul>

           


        </div>

        <QuantUXCarousel2 />

        <div className="relative w-10/12 sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto bg-MainPink rounded-2xl mx-auto mt-10 mb-20
            before:absolute before:-top-4 sm:before:-top-5 md:before:-top-6
            before:-left-4 sm:before:-left-5 md:before:-left-6
            before:-right-4 sm:before:-right-5 md:before:-right-6
            before:-bottom-4 sm:before:-bottom-5 md:before:-bottom-6
            before:bg-MainPink before:blur-2xl sm:before:blur-3xl md:before:blur-4xl
            before:opacity-50 before:rounded-2xl before:z-[-1]">

            <p className="font-text text-white text-center font-bold text-xl sm:text-2xl md:text-3xl pt-8">
                Reflections & Professional Growth
            </p>

            <p className="px-6 py-8 sm:px-10 sm:py-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            Through this experience, skills that have been strenghten:
            </p>

            <ul className="list-disc list-inside marker:text-darkPinkpx-6 sm:px-10 font-text leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4 mb-20">
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left">Quantitative UX Research Methods</div>
                    <div className=" text-left"> Applied statistical analysis and controlled experimental design to measure user behavior and interface effectiveness through  A/B testing methodologies</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left"> Design Optimization</div>
                    <div className=" text-left"> Identified usability pain points through data analysis and heatmap interpretation, translating findings into an improved interface</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left"> Evaluation Methods</div>
                    <div className=" text-left">Integrated behavioral analytics, standardized usability instruments, and qualitative research techniques to generate valuable user experience insights. </div>
                </li>
            </ul>


        </div>


      </main>

      <Footer />
    </div>
  );
}
