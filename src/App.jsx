import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialProof from './components/SocialProof';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import WhatsAppButton from './components/WhatsAppButton';

// Conversion flow: Problem → Guide → Services → Proof → Process → CTA
const PortfolioHome = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />          {/* I understand your problem */}
        <About />         {/* I can guide you */}
        <Process />       {/* Here's how I work — builds trust early */}
        <Skills />        {/* Here's what I offer */}
        <Projects />      {/* Here's proof */}
        <SocialProof />   {/* Social proof — trust */}
        <Experience />    {/* Track record */}
        <Contact />       {/* Let's start */}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500">
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<PortfolioHome />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<PortfolioHome />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
