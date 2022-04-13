import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import PortfolioWrapper from "./components/Portfolio/Portfolio_wrapper";
import Contact from "./components/Contact/Contact";
// import Skills from "./components/Skills/Skills";
// import Footer from "./components/Footer/Footer";
// import { Hooks } from "./components/Hooks/Hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="wholeContainer">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/project" element={<PortfolioWrapper />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
