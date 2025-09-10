import React from "react";
import logo from "../assets/logo.png"; // Ensure this exists in assets

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#d6f5e7] to-[#f0fff0] text-[#2F4F3E] py-10 px-6 md:px-16 border-t border-green-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 items-start">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Jakhar Ayurved Logo" className="w-[10rem] mb-3" />
          
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#4A7C59] transition">About</a></li>
            <li><a href="#services" className="hover:text-[#4A7C59] transition">Our Services</a></li>
            <li><a href="#doctors" className="hover:text-[#4A7C59] transition">Our Doctors</a></li>
            <li><a href="#testimonials" className="hover:text-[#4A7C59] transition">Patient Reviews</a></li>
            <li><a href="#contact" className="hover:text-[#4A7C59] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-base text-gray-600 mt-1">
  728/28 C/O Jakhar Hospital, near railway crossing, Sonipat Road, Rohtak - 124001, Haryana
</p>

          <p className="mt-2 text-sm">
            📞 <a href="tel:09896066211" className="hover:underline">09896066211</a>
          </p>
        </div>

        {/* Timings */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Timings</h4>
          <p className="text-sm">🕘 Monday - Sunday</p>
          <p className="text-sm">10:00 AM - 7:00 PM</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-xs text-[#555] border-t border-green-100 pt-6">
        © {new Date().getFullYear()} Jakhar Hospital Ayurved. All rights reserved.
      </div>
    </footer>
  );
}
