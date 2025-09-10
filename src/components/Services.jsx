// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBone, FaCrutch, FaXRay, FaProcedures } from 'react-icons/fa';

// const services = [
//   {
//     title: "Joint & Bone Diseases",
//     icon: <FaBone className="text-3xl text-[#67c0b3]" />,
//     desc: "Diagnosis and treatment of arthritis, osteoporosis, and chronic joint pain.",
//   },
//   {
//     title: "Trauma & Fracture Care",
//     icon: <FaCrutch className="text-3xl text-[#67c0b3]" />,
//     desc: "Emergency and surgical care for all types of bone fractures and trauma injuries.",
//   },
//   {
//     title: "Arthroscopy (Knee & Shoulder)",
//     icon: <FaXRay className="text-3xl text-[#67c0b3]" />,
//     desc: "Minimally invasive arthroscopic procedures for joint repair and diagnostics.",
//   },
//   {
//     title: "Knee & Hip Replacement",
//     icon: <FaProcedures className="text-3xl text-[#67c0b3]" />,
//     desc: "Advanced joint replacement surgeries with high success rate and recovery support.",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Title */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center text-[#2d3f4e] mb-14"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Our <span className="text-[#67c0b3]">Services</span>
//         </motion.h2>

//         {/* Service Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#f7f9fa] p-6 rounded-2xl shadow hover:shadow-lg transition"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-[#2d3f4e] mb-2">{service.title}</h3>
//               <p className="text-gray-600 text-sm">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { FaSpa, FaLeaf, FaHeartbeat, FaStethoscope, FaHandsHelping, FaYinYang } from 'react-icons/fa';

const services = [
  {
    icon: <FaSpa size={32} className="text-[#3A7A49]" />,
    title: 'Panchakarma Therapy',
    desc: 'Detox and cleanse with personalized Panchakarma sessions guided by ancient Ayurvedic techniques.',
  },
  {
    icon: <FaLeaf size={32} className="text-[#3A7A49]" />,
    title: 'Herbal Remedies',
    desc: 'Pure, potent herbal formulas to balance your Doshas and heal naturally from within.',
  },
  {
    icon: <FaHeartbeat size={32} className="text-[#3A7A49]" />,
    title: 'Chronic Disease Care',
    desc: 'Holistic Ayurvedic management for lifestyle disorders like diabetes, arthritis, and PCOD.',
  },
  {
    icon: <FaHandsHelping size={32} className="text-[#3A7A49]" />,
    title: 'Stress Relief Programs',
    desc: 'Calming rituals like Shirodhara, Abhyanga, and guided meditation to restore inner peace.',
  },
  // {
  //   icon: <FaYinYang size={32} className="text-[#3A7A49]" />,
  //   title: 'Ayurvedic Spa & Rejuvenation',
  //   desc: 'Luxurious Ayurvedic massages and therapies to energize your body and calm your mind.',
  // },
  {
    icon: <FaStethoscope size={32} className="text-[#3A7A49]" />,
    title: 'Nadi Analysis (Computerized and Classical Nadi)',
    desc: 'Discover hidden imbalances through the ancient art of Nadi Pariksha by expert Vaidyas.',
  },
];

export default function Services() {
  return (
    <section id='services' className="py-20 px-6 md:px-12 bg-gradient-to-br  from-[#F3F4E8] to-[#E0F2E9]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2F3E2E] font-bold mb-4 animate__animated animate__fadeInDown">
          Our Ayurvedic Services
        </h2>
        <p className="text-[#4A4A4A] max-w-2xl mx-auto mb-12 animate__animated animate__fadeInDown animate__delay-1s">
          We combine age-old wisdom with personalized care to guide your journey toward complete wellness.
        </p>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 animate__animated animate__fadeInUp">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#CDE4D3] shadow-md p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#2F4F3E] mb-2">{service.title}</h3>
              <p className="text-sm text-[#555]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
