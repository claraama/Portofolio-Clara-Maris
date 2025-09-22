import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Borderlesspic from "../assets/borderlessBanner.png";
import Borderless1 from "../assets/Borderless1.png";
import Borderless2 from "../assets/Borderless2.png"

import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import VideoPlayer from "../components/VideoPlayer"

import BordelessDemo from "../assets/BordelessDemo.mp4";



export default function Borderless() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <NavbarHome />

      <main className="flex-1 flex flex-col items-center justify-start px-4 text-center mt-24">
        <h1 className="font-text md:text-3xl font-bold mb-1">BORDERLESS</h1>
        <p className=" font-text text-sm md:text-lg text-gray-600 mb-6">
        Collaborative Design Tools & UI/UX Prototyping
        </p>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-10">
        <img
            src={Borderlesspic}
            alt="Borderless preview"
            className="w-full h-auto rounded-lg shadow-md object-contain mx-auto"
        />
        </div>

        <p className=" font-text max-w-xl text-sm md:text-base text-gray-700 leading-relaxed mt-10">
        A Collaborative Whiteboard Tool for Creative Teams.
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
            This project was developed as part of the <b className="text-darkPink">Groupware and Collaborative Work</b> course at <b className="text-darkPink">Paris Saclay University</b>, focusing on designing collaborative systems for distributed teams.
             The goal was to create an innovative collaborative whiteboard platform that addresses limitations in existing tools like Miro and FigJam by introducing new features destined for the use of creative professionals working remotely.
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
            This project is situated in the field of <b className="text-darkPink">Computer-Supported Cooperative Work (CSCW)</b> and <b className="text-darkPink">Human-Computer Interaction (HCI)</b>, with connections to <b className="text-darkPink">collaborative design</b> and <b className="text-darkPink">accessibility research</b>. 
            It addresses critical gaps in current collaborative platforms by exploring how infinite canvas environments, real time layering systems, and integrated communication tools can enhance creative team productivity.
             The work contributes to understanding how accessibility adaptations and version control mechanisms can create more inclusive digital workspaces for distributed creative professionals.
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
            Borderless is a <b className="text-darkPink">collaborative whiteboard</b> platform designed specifically for creative teams working remotely.
            Unlike existing tools that suffer from spatial constraints and limited collaborative features,
            Borderless provides an <b className="text-darkPink">infinite canvas</b> environment where teams can <b className="text-darkPink">brainstorm</b>, <b className="text-darkPink">sketch</b>, and <b className="text-darkPink">organize ideas</b> without boundaries.
            </p>
            <p className=" pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink pb-4">
                Identified Gaps in Existing Solutions
            </p>
           
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div> <b className="text-darkPink">Disorganized feedback systems</b> that create confusion during design reviews
                    </div>
                </li>
                <li>
                    <div> <b className="text-darkPink">Lack of real time collaborative editing</b>Lack of real time collaborative editing capabilities for creative work</div>
                </li>
                <li>
                    
                    <div> <b className="text-darkPink">Insufficient accessibility support</b> for diverse team members with different needs</div>
                </li>
                
            </ul>

            <p className="px-6 pt-2 pb-4 sm:px-10 sm:pt-3 sm:pb-5 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            Solution proposed to mittigate above issues
            </p>

            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div> <b className="text-darkPink">Infinite canvas</b> navigation with intuitive zooming and swiping
                    </div>
                </li>
                <li>
                    <div> <b className="text-darkPink">Collaborative sketching and layering tool</b>s for simultaneous multi-user input</div>
                </li>
                <li>
                    <div> <b className="text-darkPink">Integrated voice/video functionality</b> for seamless communication</div>
                </li>
                <li>
                    <div> <b className="text-darkPink">Version control</b> system inspired by Git for tracking design iterations</div>
                </li>
                <li>
                    <div>Advanced accessibility adaptations including <b className="text-darkPink">transcript mode and visual cues</b></div>
                </li>
                <li>
                    <div>Real time collaboration aided by <b className="text-darkPink">visual pointers and redirect tools</b></div>
                </li>
                
                
            </ul>
            
        </div>


        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-10">
        <img
            src={Borderless2}
            alt="Borderless preview"
            className="w-full h-auto rounded-lg shadow-md object-contain mx-auto"
        />
        </div>

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

            <p className="px-6 py-4 sm:px-10 sm:py-4 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            Our development approach followed a systematic user-centered methodology to ensure the platform addressed real professional needs:
            </p>
            <p className=" pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink pb-2">
            User Research & Assesments of needs
            </p>
            <p className="px-6 py-4 sm:px-10 sm:py-4 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            Conducted Google Forms surveys and interviews with 5 professionals in the design and animation industry to identify pain points and essential workflows in existing collaborative tools.
            </p>
            <p className=" pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink pb-2">
            Persona Development
            </p>
            <p className="px-6 py-4 sm:px-10 sm:py-4 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            We created three distinct user personas representing different collaboration scenarios: an <b className="text-darkPink">Expert user</b> requiring advanced features and team coordination capabilities, a <b className="text-darkPink">New User</b> needing intuitive onboarding and guided workflows for first-time platform use, and an <b className="text-darkPink">Accessibility Focused User</b> with hearing impairments requiring transcript mode and visual communication tools.
            These personas ensured our design addressed varying levels of technical expertise and accessibility needs within creative teams.
            </p>
            <p className=" pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink pb-2">
            Design Journey Map
            </p>
            <p className="px-6 py-4 sm:px-10 sm:py-4 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            Developed comprehensive <b className="text-darkPink">user journey scenarios</b> showing how each persona would interact with Borderless during a typical creative session, from initial setup through collaborative brainstorming to project completion.
            This mapping process identified key interaction points
            </p>
                        
        </div>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-20">
        <img
            src={Borderless1}
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
    
            <p className=" pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink pb-4">
                Insights
            </p>
           
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div>Industry professionals consistently requested Git-style version control and real time collaborative editing features
                    </div>
                </li>
                <li>

                    <div>Accessibility features must be core design elements, not add-ons</div>
                </li>
                <li>

                    <div>Different expertise levels require varied interface complexity and onboarding approaches</div>
                </li>
                <li>
                    
                    <div>Infinite canvas eliminates spatial constraints that limit creative exploration</div>
                </li>
            </ul>


            <p className=" pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink pb-4">
                Challenges
            </p>
            

            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div>Creating intuitive navigation for infinite canvas environments.</div>
                </li>
                <li>

                    <div>Accessibility features untested due to task design gaps resulted in missing perspective from target accessibility users</div>
                </li>
                <li>
                    <div>Static data couldn't demonstrate real time capabilities</div>
                </li>
                <li>

                    <div>Technical issues with the actual implementation fo the prototype</div>
                </li>
    
            </ul>

        </div>


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
                    <div className="font-bold text-darkPink text-[20px]  text-left">UX Research</div>
                    <div className=" text-left"> Applied user-centered design methodologies to conduct stakeholder interviews and synthesize qualitative data into functional requirements for collaborative systems.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left">Accessibility & Inclusive Design</div>
                    <div className=" text-left">Learned that accessibility means more than just meeting requirements it's about designing for all users from the start, not adding features later.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left"> Computer-Supported Cooperative Work (CSCW)</div>
                    <div className=" text-left">  Developed understanding of synchronous collaboration patterns, shared workspace design, and awareness mechanisms in distributed team environments. </div>
                </li>
            </ul>

         
        </div>

        <div className="font-bold text-darkPink text-[20px]">Video demo Borderless</div>

        <VideoPlayer 
        videoSrc={BordelessDemo} 
        posterImage={Borderlesspic}  
        altText="Borderless demo video" 
        />
      </main>

      <Footer />
    </div>
  );
}
