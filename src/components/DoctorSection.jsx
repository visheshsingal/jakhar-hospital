import React from 'react';

const doctors = [
  {
  img: 'https://i.ibb.co/7xZQbwVG/Whats-App-Image-2025-09-09-at-00-26-25.jpg',
    name: 'Dr. Sanjay Jakhar',
    title: 'Founder & Medical Director',
    desc: 'Over 20 years of expertise in Panchkarma, leading integrative treatments for detoxification, rejuvenation, and lifestyle disorders.',
  },
  {
    img: 'https://i.ibb.co/Z17NRjbC/Whats-App-Image-2025-09-09-at-00-26-25-1.jpg',
    name: 'Dr. Sunita Jakhar',
    title: 'Co-Founder (Panchkarma Expert/HR )',
    desc: 'Renowned for her expertise in Ayurvedic detox and women’s health, helping patients restore natural balance through Panchkarma therapies.',
  },
  {
    img: 'https://i.ibb.co/d4P5gCPW/Whats-App-Image-2025-09-09-at-00-26-26.jpg',
    name: 'Dr. Ruchi Jain',
    title: 'Expert in Uttar Basti/ Agnikarma/ Vidh Chikitsa',
    desc: 'Specializes in Uttar Basti, Agnikarma, and Vidh Chikitsa therapies, providing targeted treatments for urogenital health, pain management, and personalized Ayurvedic care.',
  },
  {
    img: 'https://i.ibb.co/qv5Cbjp/Whats-App-Image-2025-09-09-at-00-26-25-2.jpg',
    name: 'Dr. Amit Batra',
    title: 'Senior Ayurvedic Consultant',
    desc: 'Specializes in chronic illness management and holistic healing with a modern approach to traditional Ayurvedic science.',
  },
];

export default function DoctorSection() {
  return (
    <section id='doctors' className="bg-[#F8F9F4] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2F3E2E] mb-6 animate__animated animate__fadeInDown">
          Meet Our Ayurvedic Doctors
        </h2>
        <p className="text-[#555] max-w-2xl mx-auto mb-12 animate__animated animate__fadeInDown animate__delay-1s">
          Our experienced team of Vaidyas and Ayurvedic healers are dedicated to restoring your natural state of balance and health.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-10 animate__animated animate__fadeInUp">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9E7D2] shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="rounded-full w-32 h-32 object-cover mx-auto shadow-md mb-4 border-4 border-[#E5F4EC]"
              />
              <h3 className="text-xl font-semibold text-[#2F4F3E]">{doc.name}</h3>
              <p className="text-sm text-[#4A7C59] mb-2">{doc.title}</p>
              <p className="text-[#666] text-sm">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
