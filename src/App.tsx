import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from './routes/AboutUs';
import CreditPABS from './routes/CreidtPABS';
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/sobreNosotros" element={<AboutUs />} />
        <Route path="/creditoPABS" element={<CreditPABS />} />
        <Route path="*" element={<div>Ruta no encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
