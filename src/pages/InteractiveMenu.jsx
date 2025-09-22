import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InteractiveMenuPic from "../assets/InteractiveMenu.png";

import Footer from "../components/Footer";
import ImagePortofolioCarousel from "../components/ImageCarousel";
import NavbarHome from "../components/NavbarHome";
import InteractiveMenuCarousel from "../components/InteractivMenuCarousel";


export default function InteractiveMenu() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <NavbarHome />

      <main className="flex-1 flex flex-col items-center justify-start px-4 text-center mt-24">
        <h1 className="font-text md:text-3xl font-bold mb-1">INTERACTIVE MENU</h1>
        <p className=" font-text text-sm md:text-lg text-gray-600 mb-6">
        UI/UX &amp; Interaction Design
        </p>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-10">
                <img
                    src={InteractiveMenuPic}
                     alt="interactive menu preview"
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
                This project has begun as a  part of a <b className="text-darkPink">Human-Computer Interaction (HCI) </b>course at <b className="text-darkPink">Télécom Paris</b>, focused on designing a visually appealing, accessible, and user-centered interface. 
                <br></br>We followed an iterative workflow, starting with low fidelity prototypes in Figma then refined interaction patterns through usability testing, and progressing to a high-fidelity, fully functional web application.
                Emphasis was placed on accessibility and intuitive interaction design to ensure the interface is inclusive, efficient, and enjoyable for all users.
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
            This project is situated primarily in the field of <b className="text-darkPink">Human-Computer Interaction (HCI)</b>, 
            with connections to <b className="text-darkPink">user experience design</b>, <b className="text-darkPink">accessibility</b> and <b className="text-darkPink">digital service design</b>. It addresses real world challenges in digital ordering systems, exploring how an interactive, intuitive, and inclusive menu interface can reduce cognitive load, enhance decision-making, and improve the overall dining experience for a diverse range of users, including those with accessibility needs.
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
            A mobile first web application designed to modernize the restaurant dining experience by replacing traditional paper menus with an intuitive digital solution.
            <br></br> Many restaurants have adopted digital menus that are either too simplistic (static PDFs) or overly complex with cluttered interfaces, creating usability barriers and excluding users with accessibility needs.
            Proposed a solution for this issue that balances functionality with simplicity all in one digital menu, featuring:
            </p>
    
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div> <b className="text-darkPink">Dietary filtering</b> (vegetarian, vegan, gluten-free)
                    </div>
                </li>
                <li>
                   
                    <div> <b className="text-darkPink">Order customization</b> with kitchen notes</div>
                </li>
                <li>
                    
                    <div> <b className="text-darkPink">Bill splitting</b>  options for group dining</div>
                </li>
                <li>
                   
                    <div> <b className="text-darkPink">Accessibility</b> options (high contrast, font sizing)</div>
                </li>
                <li>
                    
                    <div> <b className="text-darkPink">QR code </b> table integration</div>
                </li>
                <li>
                    
                    <div> <b className="text-darkPink">Rating and leaving notes</b> regarding the meals after paying for future customers. </div>
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
            The project followed an iterative design methodology:
            </p>
            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div className="font-bold text-darkPink text-[20px]">Low-fidelity prototype</div>
                    <div>Low fidelity wireframes in Figma where we created four prototypes exploring different priorities (accessibility, minimalism, personalization, structured ordering). After comparing and evaluating all four designs, we synthesized the most effective features into a consolidated design.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">High fidelity prototype</div>
                    <div>Developed a high-fidelity prototype in Figma that established the complete visual identity including color palette, typography hierarchy, component styling, and detailed user interaction flows.
                         This prototype simulated the entire user journey from QR code scanning through menu browsing, customization, cart management, payment processing, and post meal rating, allowing us to validate the complete experience before implementation</div>
                </li>
                
            </ul>
        </div>

        <InteractiveMenuCarousel/>


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
            <p className="px-6 py-8 sm:px-10 sm:py-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            We conducted <b className="text-darkPink">user testing</b> of our system through <b className="text-darkPink">Google Forms </b>surveys with <b className="text-darkPink">16 participants</b> across diverse age ranges (20-80 years) and task based usability testing.
             Users completed realistic restaurant scenarios including dietary filtering, order customization, and bill splitting, allowing us to validate our design solutions through direct prototype interaction.
             What we gathered from that was:
            </p>

            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div>Bill splitting became the most valued feature.</div>
                </li>
                <li>

                    <div>Visual elements significantly improved decision making over text only menus</div>
                </li>
                <li>

                    <div>Simple, clutter free interfaces maximized accessibility and usability</div>
                </li>
                <li>
                    
                    <div>Some users prefered more the paper menus.</div>
                </li>
            </ul>
            <p className="px-6 pb-8 sm:px-10 sm:pb-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
            As per challanges that we faced:
            </p>

            <ul className="list-disc list-inside marker:text-darkPink px-6 mb-10 sm:px-10 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div> <b className="text-darkPink">Navigation struggles</b> with older users experiencing more issues.</div>
                </li>
                <li>

                    <div> <b className="text-darkPink">Accessibility features untested</b> due to task design gaps resulted in missing perspective from target accessibility users</div>
                </li>
                <li>

                    <div>Static data couldn't demonstrate <b className="text-darkPink">real time capabilities</b></div>
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
                    <div className="font-bold text-darkPink text-[20px]  text-left">Collaborative Design Process</div>
                    <div className=" text-left"> Learned that group work with independent prototypes creates stronger solutions than working alone, different perspectives improve the final design.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left">Accessibility & Inclusive Design</div>
                    <div className=" text-left">Learned that accessibility means more than just meeting requirements it's about designing for all users from the start, not adding features later.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left"> Research Methodology & Critical Analysis</div>
                    <div className=" text-left"> Improved skills in analyzing qualitative user feedback and identifying testing limitations, learning to combine user comments with survey data for better insights. </div>
                </li>
            </ul>

            
        </div>


        <div className="font-bold text-darkPink text-lg sm:text-xl md:text-2xl text-center">
        Test Interactive menu <br />
            <a
                href="https://clicktopia.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-700 break-words"
            >
                https://interactive-menu-app.netlify.app
            </a>
            </div>
       


      </main>

      <Footer />
    </div>
  );
}
