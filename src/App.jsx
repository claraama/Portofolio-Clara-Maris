import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Clicktopia from "./pages/Clicktopia";
import InteractiveMenu from "./pages/InteractiveMenu";
import Quantux from "./pages/Quantux";
import Borderless from './pages/Borderless';
import Echonos from './pages/Echonos';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clicktopia" element={<Clicktopia />} />
        <Route path="/interactiveMenu" element={<InteractiveMenu />} />
        <Route path="/quantux" element={<Quantux />} />
        <Route path="/borderless" element={<Borderless />} />
        <Route path="/echonos" element={<Echonos />} />
      </Routes>
    </Router>
  );
}
