import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FloatingNavbar from './Components/FloatingNavbar';
import Aboutus from './Pages/Aboutus';
import Skills from './Pages/Skills';
import FourZeroFour from './Pages/FourZeroFour';
import ComingSoon from './Pages/ComingSoon';



function App() {
  return (
    <React.Fragment>
      <Router>
        <main>
          <FloatingNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<ComingSoon />} />
            <Route path="/projects" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
            <Route path="/*" element={<FourZeroFour />} />

          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
