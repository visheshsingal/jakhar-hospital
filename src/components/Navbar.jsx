import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink =
    "text-[#4A7C59] font-medium hover:text-[#F4C430] transition duration-300 ease-in-out";

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Info Strip */}
      <div
        className={`bg-[#F5EFE6] border-b border-[#e0d6c9] text-xs transition-all duration-500 ease-in-out ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-1">
          <div className="flex items-center space-x-2">
            <img
              src="https://i.ibb.co/KMD6JzK/Whats-App-Image-2025-09-10-at-01-00-30.jpg"
              alt="NABH Accreditation"
              className="w-6 h-6 object-contain"
            />
            <span className="text-[#4A7C59] font-semibold">NABH Accredited</span>
          </div>
          <a
            href="tel:+919896066211"
            className="flex items-center gap-1 text-[#4A7C59] hover:text-[#F4C430] font-medium"
          >
            <FaPhoneAlt className="text-xs" /> +91 98960 66211
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-[#F5EFE6] transition-all duration-500 ease-in-out ${
          scrolled ? "shadow-md py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Branding */}
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co/kVFDPmZH/Whats-App-Image-2025-09-09-at-00-26-27.jpg"
              alt="Jakhar Ayurved Logo"
              className="w-[4rem] h-[4rem] rounded-full object-cover"
            />
            <div>
              <h1 className="text-[1rem] font-extrabold text-[#4A7C59] leading-tight">
                Jakhar Hospital
              </h1>
              <p className="text-xs text-[#8D6E63] leading-tight">
                Ashtang Ayurved & Panchkarma, Rohtak
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="space-x-6 hidden md:flex items-center">
            <a href="#about" className={navLink}>
              About
            </a>
            <a href="#services" className={navLink}>
              Services
            </a>
            <a href="#doctors" className={navLink}>
              Doctors
            </a>
            <a href="#testimonials" className={navLink}>
              Testimonials
            </a>
            <a href="#contact" className={navLink}>
              Contact
            </a>
            <a
              href="tel:+919896066211"
              className="bg-[#4A7C59] hover:bg-[#3a6647] text-white font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-sm"
            >
              <FaPhoneAlt className="text-xs" /> Book Consultation
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#4A7C59] text-xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#F5EFE6] px-6 py-3 transition-all duration-500 ease-in-out transform ${
            menuOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col space-y-3">
            <a onClick={toggleMenu} href="#about" className={navLink}>
              About
            </a>
            <a onClick={toggleMenu} href="#services" className={navLink}>
              Services
            </a>
            <a onClick={toggleMenu} href="#doctors" className={navLink}>
              Doctors
            </a>
            <a onClick={toggleMenu} href="#testimonials" className={navLink}>
              Testimonials
            </a>
            <a onClick={toggleMenu} href="#contact" className={navLink}>
              Contact
            </a>
            <a
              href="tel:+919896066211"
              className="inline-block bg-[#4A7C59] hover:bg-[#3a6647] text-white font-semibold px-3 py-1.5 rounded-md text-center text-sm transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              📞 Book Consultation
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
