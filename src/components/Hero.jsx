import React from 'react';
import ayur1 from '../assets/ayur1.png';
import ayur2 from '../assets/ayur2.png';
import ayur3 from '../assets/ayur3.png';
import ayur4 from '../assets/ayur4.png';

export default function Hero() {
  return (
    <section className="bg-[#F5EFE6] pt-24 pb-16 px-4 md:px-10 min-h-screen flex items-center relative overflow-hidden">



      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* LEFT TEXT */}
        <div className="space-y-5 animate__animated animate__fadeInLeft">
          <h3 className="uppercase tracking-widest text-[#4A7C59] font-semibold text-sm">
            Welcome to Jakhar Ayurved
          </h3>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2F3E2E] leading-tight">
            Embrace the Ancient Science of Healing & Harmony
          </h1>
          <p className="text-[#555] max-w-lg text-base leading-relaxed">
            At Jakhar Hospital Ashtang Ayurved & Panchkarma, we don’t just treat – we transform. Rooted in timeless Ayurvedic principles, we help you detox, rejuvenate, and align your body-mind-soul through personalized Panchkarma therapies and natural healing rituals.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#4A7C59] hover:bg-[#3a6647] text-white font-medium text-sm px-6 py-3 rounded-md shadow-md transition-all duration-300"
          >
            🌿 Book an Appointment
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 animate__animated animate__zoomIn">
          <img
            src={ayur1}
            alt="Herbal blend"
            className="rounded-[60%_40%_60%_40%/40%_60%_40%_60%] shadow-lg object-cover w-full h-40 sm:h-52 md:h-60 lg:h-72 animate-float"
          />
          <img
            src={ayur2}
            alt="Detox therapy"
            className="rounded-[50%_50%_40%_60%/60%_40%_60%_40%] shadow-lg object-cover w-full h-40 sm:h-52 md:h-60 lg:h-72 animate-float delay-100"
          />
          <img
            src={ayur3}
            alt="Massage therapy"
            className="rounded-full shadow-lg object-cover w-full h-40 sm:h-52 md:h-60 lg:h-72 animate-float delay-200"
          />
          <div className="relative w-full h-40 sm:h-52 md:h-60 lg:h-72">
            <img
              src={ayur4}
              alt="Wellness setup"
              className="rounded-[55%_45%_55%_45%/45%_55%_45%_55%] shadow-lg object-cover w-full h-full animate-float delay-300"
            />
            <div className="absolute inset-0 rounded-inherit flex items-center justify-center">

              <span className="text-white text-sm md:text-base font-semibold">Relax. Rejuvenate. Realign.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
