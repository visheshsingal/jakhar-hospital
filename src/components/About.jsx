import React from 'react';
import hospitalImg from '../assets/main.jpg';

// NABH certificate images
const nabhCertificateFront = "https://i.ibb.co/VWFXX2nk/515565716-24524672453824377-8157284868484051810-n.jpg";
const nabhCertificateBack = "https://i.ibb.co/SDqFbSRZ/514427646-24524672450491044-2342445839580651362-n.jpg";

export default function About() {
  return (
    <section id="about" className="bg-[#FFF9F0] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2F3E2E] mb-4">
            About <span className="text-[#4A7C59]">Jakhar Ayurved Hospital</span>
          </h2>
          <div className="w-24 h-1 bg-[#4A7C59] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Hospital Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <img 
              src={hospitalImg} 
              alt="Jakhar Ayurvedic Hospital" 
              className="w-full h-auto object-cover rounded-2xl" 
            />
          </div>
          
          {/* Right - About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#2F3E2E]">
              Holistic Healing Through Ayurveda
            </h3>
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              Located in the heart of Rohtak, Jakhar Hospital Ashtang Ayurved is a beacon of holistic healing and traditional wellness. 
              We specialize in <span className="font-medium text-[#4A7C59]">authentic Panchkarma therapies, natural detoxification, 
              chronic illness management, and mind-body balance</span>.
            </p>
            <p className="text-[#555]">
              Our Ayurvedic physicians and Panchkarma therapists bring decades of expertise, ensuring each treatment is personalized 
              to your unique dosha and health journey. We invite you to experience a deeper healing — rooted in nature, nurtured by tradition.
            </p>
            <div className="pt-4">
              <button className="bg-[#4A7C59] hover:bg-[#3A6B49] text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Learn More About Our Treatments
              </button>
            </div>
          </div>
        </div>
        
        {/* NABH Certification Section */}
        <div className="bg-gradient-to-r from-[#f8fbf8] to-[#f0f7f0] rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-[#2F3E2E]">
              NABH Accredited Healthcare Provider
            </h3>
            <p className="text-[#4A4A4A] mt-2 max-w-3xl mx-auto">
              We are proud to be accredited by the National Accreditation Board for Hospitals & Healthcare Providers (NABH), 
              India's highest recognition for quality healthcare.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-shrink-0 lg:w-2/5">
              {/* Certificate Images Front & Back */}
              <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
                <div className="relative max-w-sm w-full overflow-hidden rounded-xl border-4 border-white shadow-2xl transform transition duration-500 hover:scale-105">
                  <img 
                    src={nabhCertificateFront} 
                    alt="NABH Accreditation Certificate (Front)" 
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 border-2 border-[#4A7C59] rounded-xl pointer-events-none"></div>
                </div>
                <div className="relative max-w-sm w-full overflow-hidden rounded-xl border-4 border-white shadow-2xl transform transition duration-500 hover:scale-105">
                  <img 
                    src={nabhCertificateBack} 
                    alt="NABH Accreditation Certificate (Back)" 
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 border-2 border-[#4A7C59] rounded-xl pointer-events-none"></div>
                </div>
              </div>
              <p className="text-center text-sm text-[#4A4A4A] mt-4 italic">
                NABH Accreditation Certificate (Front & Back)
              </p>
            </div>
            
            <div className="flex-grow lg:w-3/5">
              <h4 className="text-xl font-semibold text-[#2F3E2E] mb-4">
                What Our Accreditation Means For You
              </h4>
              <p className="text-[#4A4A4A] mb-6">
                This prestigious certification reflects our unwavering commitment to excellence in healthcare delivery and patient safety.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#4A7C59]">
                  <h5 className="font-medium text-[#2F3E2E]">Patient Safety</h5>
                  <p className="text-sm text-[#555] mt-1">Highest standards of care and safety protocols</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#4A7C59]">
                  <h5 className="font-medium text-[#2F3E2E]">Quality Systems</h5>
                  <p className="text-sm text-[#555] mt-1">Rigorous quality management implementation</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#4A7C59]">
                  <h5 className="font-medium text-[#2F3E2E]">Continuous Improvement</h5>
                  <p className="text-sm text-[#555] mt-1">Ongoing enhancement of healthcare services</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#4A7C59]">
                  <h5 className="font-medium text-[#2F3E2E]">International Standards</h5>
                  <p className="text-sm text-[#555] mt-1">Adherence to national and global benchmarks</p>
                </div>
              </div>
              
              <p className="mt-6 text-[#4A4A4A]">
                Our NABH accreditation assures you that we follow the best practices in healthcare delivery, 
                making your healing journey with us both effective and safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
