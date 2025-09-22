import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ClicktopiaImg1 from "../assets/Clicktopia.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImagePortofolioCarousel from "../components/ImageCarousel";
import NavbarHome from "../components/NavbarHome";


export default function Clicktopia() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <NavbarHome />

      <main className="flex-1 flex flex-col items-center justify-start px-4 text-center mt-24">
        <h1 className="font-text md:text-3xl font-bold mb-1">CLICKTOPIA</h1>
        <p className=" font-text text-sm md:text-lg text-gray-600 mb-6">
          Educational Game Design &amp; UI/UX Research
        </p>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-10">
                <img
                    src={ClicktopiaImg1}
                    alt="Clicktopia preview"
                    className="w-full h-auto rounded-lg shadow-md object-contain mx-auto"
                />
                </div>

    

        <p className=" font-text max-w-xl text-sm md:text-base text-gray-700 leading-relaxed mt-10">
          An educational web based game teaching children to identify dark
          patterns in digital interfaces.
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
                This project was initiated as part of an <b className="text-darkPink">individual project</b> course at <b className="text-darkPink">Télécom Paris</b>. 
                The idea originated during discussions in another class about dark patterns, 
                which are deceptive user interface designs that manipulate users into making decisions they might not otherwise make. 
                The topic immediately piqued my interest because I initially knew very little about it. 
                Guided by my teacher from that class, I developed the concept of a serious game aimed at teaching the younger generation about the dangers of dark patterns 
                and helping them recognize manipulative design practices.
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
            with connections to related areas such as <b className="text-darkPink font-bold">educational technology</b>, <b className="text-darkPink font-bold"> game based learning</b>, <b className="text-darkPink font-bold">digital ethics</b>, <b className="text-darkPink font-bold">cognitive psychology</b> and <b className="text-darkPink font-bold">serious games</b>. 
            It explores how interactive game experiences can help young users recognize and understand <b className="text-darkPink font-bold">dark patterns</b> and develop the critical thinking skills needed to navigate digital environments safely.
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
            Research on existing games for children revealed that simple, colorful, and playful characters strongly appeal to young audiences. Inspired by this, I designed my own characters and background elements, giving the application a unique and personal identity that enhances both its aesthetic appeal and accessibility.
            The layout was first created in <b className="text-darkPink">Figma</b> which allowed me to prototype the experience, make adjustments efficiently, and maintain visual consistency. Once finalized, the design was implemented in <b className="text-darkPink">React</b> with <b className="text-darkPink">Tailwind CSS</b> for styling.

            </p>
            <p className=" pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink pb-4">
                Characters & Storyline
            </p>

            <ul className="list-disc list-inside marker:text-darkPink sm:px-10 pt-0 pb-3 sm:pt-0 sm:pb-4 font-text leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4">
                <li>
                    <div className="font-bold text-darkPink text-[20px] text-left">Beam</div>
                    <div className="text-left">The narrator and main character, guiding the player through the game.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px] text-left">Nova & Starkey</div>
                    <div className="text-left" > Beam’s friends who have been captured and must be rescued by learning how to avoid dark patterns.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px] text-left">The Manipulator</div>
                    <div className="text-left">The antagonist, representing dark patterns.</div>
                </li>
            </ul>

                <p className="px-6 pt-2 pb-4 sm:px-10 sm:pt-3 sm:pb-5 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
                The game begins with a short storytelling sequence that introduces the city of <span className="font-bold text-darkPink">Clicktopia</span> and the main characters. The player takes on the role of <span className="font-bold text-darkPink">Beam</span>, who embarks on a quest to rescue his friends, <span className="font-bold text-darkPink">Nova</span> and <span className="font-bold text-darkPink">Starkey</span>, trapped by the villain <span className="font-bold text-darkPink">The Manipulator</span> in a world filled with <span className="font-bold text-darkPink">dark patterns</span>. Each mission introduces a common dark pattern from children’s games, teaching players to recognize and overcome manipulative design through engaging challenges.
                </p>

                <p className="pl-10 text-left font-bold text-lg sm:text-xl md:text-2xl text-darkPink mt-4 pb-2">
                Missions
                </p>

                <p className="px-6 pt-2 pb-4 sm:px-10 sm:pt-3 sm:pb-5 font-text text-justify leading-relaxed text-base sm:text-[14px] md:text-[18px]">
                The first mission introduces the concept of <span className="font-bold text-darkPink">Nagging</span>, a common dark pattern. Players interact with a puzzle featuring the main characters while being interrupted by pop-ups which usen visual hierarchy and misleading language mimicking real world manipulative interfaces that simulate nagging behaviors. The game then progress as such:
                </p>

                <ul className="list-disc list-inside marker:text-darkPink px-6 pt-0 pb-3 sm:px-10 sm:pt-0 sm:pb-4 font-text leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4 mb-10">
                    <li>
                        <div className="font-bold text-darkPink text-[20px] text-left">Correct responses</div>
                        <div className="text-left">Place puzzle pieces correctly.</div>
                    </li>
                    <li>
                        <div className="font-bold text-darkPink text-[20px] text-left">Incorrect responses</div>
                        <div className="text-left">Remove previously placed pieces, reinforcing the consequences of giving in to manipulative prompts.</div>
                    </li>
                </ul>


            
        </div>

        <ImagePortofolioCarousel/>


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
                    <div className="font-bold text-darkPink text-[20px]">Mission expansion</div>
                    <div>Adding more missions will be crucial to cover a wider range of dark patterns in playful, educational ways.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Developing the narrative</div>
                    <div>Introducing new characters and story elements will make the gameplay more engaging and dynamic.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">User testing</div>
                    <div>Feedback from children and educators will be essential for refining both fun and educational impact.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Responsiveness</div>
                    <div>Ensuring the game is responsive across all devices will broaden accessibility for younger audiences.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink  text-[20px]">Long term vision</div>
                    <div>The ultimate goal is to build a scalable educational tool that raises awareness of manipulative digital practices.</div>
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
            Through this experience, I strengthened my skills in the following areas:
            </p>

            <ul className="list-disc list-inside marker:text-darkPinkpx-6 sm:px-10 font-text leading-relaxed text-base sm:text-[14px] md:text-[18px] space-y-4 mb-20">
                <li>
                    <div className="font-bold text-darkPink text-[20px] text-left">Front-end Development (React & Tailwind CSS)</div>
                    <div className=" text-left"> Enhanced my skills in front-end development, learning to structure components, manage state, and build responsive, interactive interfaces that translate designs into polished applications.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left">UI/UX Research & User-centered Design</div>
                    <div className=" text-left">Designing for young users and conducting research taught me the value of cognitive considerations and accessibility, helping me create intuitive interfaces that effectively teach concepts like dark patterns.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left">Interactive Storytelling</div>
                    <div className=" text-left">Developing the narrative and characters strengthened my ability to use story-driven engagement, guiding learning and motivation through visual and textual elements.</div>
                </li>
                <li>
                    <div className="font-bold text-darkPink text-[20px]  text-left">Prototyping</div>
                    <div className=" text-left">Refined my skills in Figma prototyping and  iterative design improving workflow efficiency and confidence in delivering well defined workflows.</div>
                </li>
            </ul>

            


        </div>

        <div className="font-bold text-darkPink text-lg sm:text-xl md:text-2xl text-center">
            Discover the Clicktopia experience <br />
            <a
                href="https://clicktopia.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-700 break-words"
            >
                https://clicktopia.netlify.app
            </a>
            </div>


      </main>

      <Footer />
    </div>
  );
}
