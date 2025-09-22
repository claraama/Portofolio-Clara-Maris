import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import echonosbanner from "../assets/Echonos.png";

import Footer from "../components/Footer";

import NavbarHome from "../components/NavbarHome";
import EchonosCarousel from "../components/EchonosCarousel";

import VideoPlayer from "../components/VideoPlayer";
import seriousg1 from "../assets/seriousgames1.png";

import seriousgames from "../assets/seriousgames.mp4";


export default function Echonos() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <NavbarHome />

      <main className="flex-1 flex flex-col items-center justify-start px-4 text-center mt-24">
        <h1 className="font-text md:text-3xl font-bold mb-1">ECHONOS</h1>
        <p className=" font-text text-sm md:text-lg text-gray-600 mb-6">
        Educational Game Design & UI/UX Research
        </p>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-10">
                <img
                     src={echonosbanner}
                        alt="echonos preview"
                    className="w-full h-auto rounded-lg shadow-md object-contain mx-auto"
                />
        </div>


        <p className=" font-text max-w-xl text-sm md:text-base text-gray-700 leading-relaxed mt-10">
        Echonos is a Serious Game designed using CBT methods for people that suffer from Social Anxiety Disorder.
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
            This project was developed as part of the <b className="text-darkPink">Serious Games</b> course at <b className="text-darkPink">Paris Saclay University</b>, focusing on the design and evaluation of games intended 
            for educational or therapeutic purposes beyond entertainment. 
            The course emphasized applying game design principles to address real world challenges, specifically exploring how interactive digital environments
             can serve as effective tools for mental health interventions. 
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
            This project is situated at the intersection of <b className="text-darkPink">Serious Games design</b>, <b className="text-darkPink">digital therapeutics</b>, and <b className="text-darkPink">mental health intervention research</b>. 
            It addresses a critical gap in accessible mental health tools such as Social Anxiety Disorder. The work contributes to understanding how game mechanics can effectively simulate
             real world social scenarios while integrating evidence based <b className="text-darkPink">CBT (Cognitive Behavioral Therapy)</b> principles for cognitive distortion recognition and restructuring. 
            </p>

        </div>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-20">
                <img
                    src={seriousg1}
                    alt="Borderless preview"
                    className="w-full h-auto rounded-lg shadow-md object-contain mx-auto"
                />
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
            Echonos is a  <b className="text-darkPink">therapeutic serious game </b>designed to help adults with  <b className="text-darkPink">Social Anxiety Disorder (SAD)</b> learn and practice  <b className="text-darkPink">Cognitive Behavioral Therapy (CBT)</b> techniques through interactive gameplay.
            Current CBT tools often rely on traditional methods leaving a gap for accessible digital interventions that can complement traditional therapy.
            We developed a visual novel style game where players act as guides helping villagers overcome their cognitive distortions.
            <br></br>
             Key features include:
            </p>
    
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div>  <b className="text-darkPink">Interactive dialogue</b> scenarios representing real world social anxiety situations
                    </div>
                </li>
                <li>
                   
                    <div> <b className="text-darkPink">Structured CBT process </b>: identification, recognition, and restructuring of cognitive distortions</div>
                </li>
                <li>
                    
                    <div> <b className="text-darkPink">Eight unique villager characters</b>, each representing different distortion types (catastrophizing, personalization, mind reading, etc.)</div>
                </li>
                <li>
                   
                    <div>  <b className="text-darkPink">Third person perspective</b> to reduce anxiety while practicing therapeutic techniques</div>
                </li>
                
            </ul>
            
            
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

            <p className="px-6 py-8 sm:px-10 sm:py-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            Our development approach followed a systematic methodology combining literature based insights with evidence based therapeutic principles:
            </p>
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div className="font-bold text-darkPink text-[20px]">Literature Review & Research Foundation</div>
                    <div>Analyzed serious games, psychology, and CBT implementations to identify gaps in adult focused therapeutic games and establish design principles based on player typologies and therapeutic effectiveness.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Game Design Framework </div>
                    <div>Selected visual novel format with third person perspective to reduce anxiety, creating BridgeVille as a therapeutic metaphor where cognitive distortions manifest as trapped villagers requiring assistance. </div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Characters & Scenario Development</div>
                    <div>Created eight unique villagers embodying specific cognitive distortions with realistic dialogue scenarios that mirror real world social anxiety triggers while maintaining therapeutic relevance. </div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Therapeutic Integrationt</div>
                    <div>Created eight unique villagers embodying specific cognitive distortions with realistic dialogue scenarios that mirror real world social anxiety triggers while maintaining therapeutic relevance. </div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Prototyping & Implementation</div>
                    <div>Used Figma to create detailed interactive prototypes mapping complete user flow. </div>
                </li>
                
            </ul>
        </div>

        <EchonosCarousel/>


        <div className="relative w-10/12 sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto bg-MainPink rounded-2xl mx-auto mt-35 mb-20
            before:absolute before:-top-4 sm:before:-top-5 md:before:-top-6
            before:-left-4 sm:before:-left-5 md:before:-left-6
            before:-right-4 sm:before:-right-5 md:before:-right-6
            before:-bottom-4 sm:before:-bottom-5 md:before:-bottom-6
            before:bg-MainPink before:blur-2xl sm:before:blur-3xl md:before:blur-4xl
            before:opacity-50 before:rounded-2xl before:z-[-1]">

            <p className="font-text text-white text-center font-bold text-xl sm:text-2xl md:text-3xl pt-8 pb-10">
                 Key Insights & Limitations
            </p>
            

            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                <div>Most existing <b className="text-darkPink">therapeutic games</b> focus on children, leaving <b className="text-darkPink">adults underserved</b> in digital mental health interventions.</div>
                </li>
                <li>
                <div><b className="text-darkPink">Character based distortions</b> allow players to practice recognizing patterns without <b className="text-darkPink">personal defensiveness</b></div>
                </li>
                <li>
                <div><b className="text-darkPink">Visual novel format</b> provides safe environment for practicing <b className="text-darkPink">CBT techniques</b> without real world social pressure</div>
                </li>
                <li>
                <div><b className="text-darkPink">Metaphorical game settings</b> effectively externalize internal <b className="text-darkPink">psychological struggles</b></div>
                </li>
                </ul>
                <p className="px-6 pb-8 sm:px-10 sm:pb-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
                As per the projects limitations:
                </p>
                <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                <div>Limited <b className="text-darkPink">evidence base</b> for serious games' actual <b className="text-darkPink">therapeutic effectiveness</b> compared to traditional CBT methods.</div>
                </li>
                <li>
                <div>Risk of <b className="text-darkPink">oversimplifying complex therapeutic processes</b> into game mechanics</div>
                </li>
                <li>
                <div>Limited resources prevented full <b className="text-darkPink">visual development</b> of the eight character personas and <b className="text-darkPink">avatar customization features</b>, restricting the project to <b className="text-darkPink">conceptual framework</b> rather than complete implementation</div>
                </li>
                <li>
                <div>Uncertainty about <b className="text-darkPink">optimal frequency</b> for therapeutic effectiveness</div>
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
                    <div className="font-bold text-darkPink text-[20px]  text-left">Human-Computer Interaction & Digital Health</div>
                    <div className=" text-left"> Learned to integrate user-centered design with clinical requirements and accessibility standards when developing therapeutic interfaces for safety-critical health applications.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left">Prototype Evaluation Methodologys</div>
                    <div className=" text-left">Gained experience designing evaluation frameworks for therapeutic systems, understanding limitations of low-fidelity prototypes in validating complex interaction behaviors.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left"> Design Research & Literature Reviews</div>
                    <div className=" text-left"> Enhanced systematic literature review skills across HCI, clinical psychology, and game design domains to identify design opportunities and methodological gaps. </div>
                </li>
            </ul>

           
        </div>

        <div className="font-bold text-darkPink text-[20px]">Video demo Echonos</div>
        <VideoPlayer 
                videoSrc={seriousgames} 
                posterImage={echonosbanner}  
                altText="serious games demo video" 
        />

      </main>

      <Footer />
    </div>
  );
}
