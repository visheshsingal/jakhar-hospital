// import React, { useState } from 'react';
// import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import 'animate.css';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     service: '',
//     contact: '',
//     date: '',
//     time: '',
//     otherService: '',
//   });

//   const services = [
//     'Panchkarma',
//     'Shirodhara',
//     'Detox Therapy',
//     'Joint Pain Relief',
//     'Stress Management',
//     'Skin & Hair Treatment',
//     'Others (please specify)',
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, service, contact, date, time, otherService } = formData;
//     const finalService = service === 'Others (please specify)' ? otherService : service;

//     const message = `नमस्ते! 🙏\nमैं ${name} हूँ।\nसेवा: ${finalService}\nसंपर्क: ${contact}\nतारीख: ${date}\nसमय: ${time}`;
//     const encodedMessage = encodeURIComponent(message);
//     const phone = '9896066211';

//     window.open(`https://wa.me/91${phone}?text=${encodedMessage}`, '_blank');
//   };

//   return (
//     <section id='contact' className="bg-[#F7FFF4] py-20 px-6 md:px-12 font-sans animate__animated animate__fadeIn">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3B5A3C] mb-8">
//           📞 Contact Us
//         </h2>

//         {/* Info Panel */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border border-[#cdeccf]">
//             <FaMapMarkerAlt className="text-green-600 text-3xl" />
//             <div>
//               <h3 className="text-lg font-semibold text-[#2f5133]">Our Address</h3>
//               <p className="text-sm text-[#444]">
//                 Jakhar Hospital Ashtang Ayurved & Panchkarma, <br />
//                 Rohtak - Sonipat Rd, Subhash Nagar, Rohtak, Haryana 124001
//               </p>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border border-[#cdeccf]">
//             <FaPhoneAlt className="text-green-600 text-3xl" />
//             <div>
//               <h3 className="text-lg font-semibold text-[#2f5133]">Call or WhatsApp</h3>
//               <p className="text-sm text-[#444]">+91 98960 66211</p>
//               <a
//                 href="https://wa.me/919896066211"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 text-green-700 font-semibold mt-2 hover:underline"
//               >
//                 <FaWhatsapp /> Chat on WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-xl shadow-lg p-8 space-y-6 border border-[#dff0db]"
//         >
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
//             />
//             <input
//               type="text"
//               name="contact"
//               placeholder="Contact Number"
//               required
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <select
//               name="service"
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
//             >
//               <option value="">Select Service</option>
//               {services.map((srv, idx) => (
//                 <option key={idx} value={srv}>
//                   {srv}
//                 </option>
//               ))}
//             </select>

//             {formData.service === 'Others (please specify)' && (
//               <input
//                 type="text"
//                 name="otherService"
//                 placeholder="Specify your service"
//                 required
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
//               />
//             )}
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="date"
//               name="date"
//               required
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
//             />
//             <select
//               name="time"
//               required
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
//             >
//               <option value="">Preferred Time</option>
//               {[
//                 '10:00 AM',
//                 '11:00 AM',
//                 '12:00 PM',
//                 '1:00 PM',
//                 '2:00 PM',
//                 '3:00 PM',
//                 '4:00 PM',
//                 '5:00 PM',
//                 '6:00 PM',
//                 '7:00 PM',
//               ].map((slot, i) => (
//                 <option key={i} value={slot}>
//                   {slot}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all text-lg font-medium"
//           >
//             📲 Book via WhatsApp
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
// 'animate.css' is no longer needed if you prefer framer-motion, but you can keep both
// import 'animate.css'; 

const initialFormData = {
  name: '',
  service: '',
  contact: '',
  date: '',
  time: '',
  otherService: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  // NEW: State for loading and submission status
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [minDate, setMinDate] = useState('');

  // NEW: Set the minimum selectable date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const services = [
    'Panchkarma',
    'Shirodhara',
    'Detox Therapy',
    'Joint Pain Relief',
    'Stress Management',
    'Skin & Hair Treatment',
    'Others (please specify)',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a short delay for better UX
    setTimeout(() => {
      const { name, service, contact, date, time, otherService } = formData;
      const finalService = service === 'Others (please specify)' ? otherService : service;

      const message = `नमस्ते! 🙏\nI'm interested in booking an appointment.\n\n*Name:* ${name}\n*Service:* ${finalService}\n*Contact:* ${contact}\n*Date:* ${date}\n*Time:* ${time}`;
      const encodedMessage = encodeURIComponent(message);
      const phone = '9896066211';

      window.open(`https://wa.me/91${phone}?text=${encodedMessage}`, '_blank');
      
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData(initialFormData); // Reset form

      // After 5 seconds, hide the success message to allow another booking
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500); // 1.5-second delay
  };

  // NEW: Animation variants for Framer Motion
  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };
  
  const formContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id='contact' className="bg-[#F7FFF4] py-20 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#3B5A3C] mb-12"
        >
          Book Your Appointment
        </motion.h2>

        {/* Info Panel */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-xl shadow-md p-6 flex items-start gap-5 border border-[#cdeccf]"
          >
            <FaMapMarkerAlt className="text-green-600 text-4xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-[#2f5133]">Our Address</h3>
              <p className="text-base text-gray-600 mt-1">
  728/28 C/O Jakhar Hospital, near railway crossing, Sonipat Road, Rohtak - 124001, Haryana
</p>

            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-xl shadow-md p-6 flex items-start gap-5 border border-[#cdeccf]"
          >
            <FaPhoneAlt className="text-green-600 text-4xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-[#2f5133]">Call or WhatsApp</h3>
              <p className="text-base text-gray-600 mt-1">+91 98960 66211</p>
              <a
                href="https://wa.me/919896066211"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-green-700 font-semibold mt-3 hover:text-green-800 transition-colors"
              >
                <FaWhatsapp /> Chat with us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Form Container */}
        <motion.div 
          variants={formContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-[#dff0db]"
        >
          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-10"
              >
                <h3 className="text-2xl font-bold text-green-700">Thank You! 🙏</h3>
                <p className="mt-2 text-gray-600">Your appointment details are ready. You will be redirected to WhatsApp.</p>
                 <p className="mt-1 text-sm text-gray-500">You can now close this tab.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="e.g., John Doe" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <input type="tel" id="contact" name="contact" placeholder="e.g., 9876543210" required value={formData.contact} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option value="" disabled>-- Choose a service --</option>
                    {services.map((srv, idx) => <option key={idx} value={srv}>{srv}</option>)}
                  </select>
                </div>

                <AnimatePresence>
                  {formData.service === 'Others (please specify)' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label htmlFor="otherService" className="block text-sm font-medium text-gray-700 mb-1">Please Specify</label>
                      <input type="text" id="otherService" name="otherService" placeholder="Specify your required service" required value={formData.otherService} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <input type="date" id="date" name="date" required value={formData.date} min={minDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                    <select id="time" name="time" required value={formData.time} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
                      <option value="" disabled>-- Select a time slot --</option>
                      {['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'].map((slot, i) => <option key={i} value={slot}>{slot}</option>)}
                    </select>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto inline-flex items-center justify-center py-3 px-10 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <FaSpinner className="animate-spin mr-3" />
                        Processing...
                      </>
                    ) : (
                     <> <FaWhatsapp className="mr-2" /> Book via WhatsApp </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

