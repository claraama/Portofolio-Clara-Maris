
import Navbar from "../components/Navbar";
import ColorBlock from '../components/ColorBlock';
import AboutMe from '../components/AboutMe';
import Portofolio from '../components/Portofolio';
import Contact from '../components/Contact';
import Footer from "../components/Footer";

export default function Home() {


  return (

    <div className="App">
    <Navbar />
    <ColorBlock />
    <AboutMe />
    <Portofolio />
    <Contact />
    <Footer />
  </div>
    
  );
}
