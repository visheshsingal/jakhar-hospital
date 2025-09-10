// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import DoctorSection from './components/DoctorSection';
// import Reviews from './components/Reviews';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="bg-gray-50 text-gray-900 scroll-smooth">
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <DoctorSection />
//       <Reviews />
//       <Contact />
//       <Footer/>
//     </div>
//   );
// }

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DoctorSection from './components/DoctorSection';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ✅ New Components
import WelcomePopup from './components/WelcomePopup';
import NatureSoundToggle from './components/NatureSoundToggle';

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <DoctorSection />
      <Reviews />
      <Contact />
      <Footer />

      {/* ✅ Show welcome greeting after delay */}
      <WelcomePopup />

      {/* ✅ Show toggle button for background sound */}
      {/* <NatureSoundToggle /> */}
    </div>
  );
}
