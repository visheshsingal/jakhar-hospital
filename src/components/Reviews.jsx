import React from 'react';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';

// Emojis representing smiling patients (no real images)
const emojis = ['😄', '😊', '😁', '🙂', '😃', '😌'];

const reviews = [
  {
    name: "Rajesh Kundu",
    rating: 5,
    text: "It's a wonderful experience to be a part of the hospital as a user of the services. We are recommending the every services in a natural way because my better half improved 60-70 percent within two weeks. We are very happy with the positive vibrations of the hospital staff and particularly both the Managing Directors Dr. Sanjay & Dr. Sunita's most positive & friendly behaviour.",
  },
  {
    name: "Ami Jangra",
    rating: 4,
    text: "I was searching for a good ayurvedic treatment for my mother's RA. Fortunately came across this wonderful ayurvedic clinic, Ashtang ayurved .. I am really happy.. my mother's disease is under control . I feel blessed .. thank you Ashtang ayurved",
  },
  {
    name: "Sunil Kumar",
    rating: 5,
    text: "Very nice & properly treatment &very friendly staff. I'm feeling very batter after few days and I feel positive vibration here....very nice..",
  },
  {
    name: "Foji sahab",
    rating: 4,
    text: "The doctor will give u proper time n has a cordial behaviour with patients he is the best doctor in Rohtak for any kind of disease will recommend others too",
  },
  {
    name: "Alka Chauhan",
    rating: 5,
    text: "Genuine hospital with lot of facilities..doctor's behavior is cordial with his patients.he is good at his profession..",
  },
  {
    name: "DEVRAJ GURJAR",
    rating: 4.5,
    text: "I am very very happy with The entire staff and management of jakhar hospital. Services and treatment is very quick and satisfactory..",
  },
];

// Helper to render stars
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-[#FFC107]" />
      ))}
      {hasHalf && <FaStarHalfAlt className="text-[#FFC107]" />}
    </>
  );
};

export default function Reviews() {
  return (
    <section id='testimonials' className="bg-gradient-to-b from-[#f8fff8] to-[#f0f9f0] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2F3E2E] mb-6 animate__animated animate__fadeInDown">
          🌼 Patient Reviews
        </h2>
        <p className="text-[#4A7C59] mb-12 max-w-xl mx-auto animate__animated animate__fadeInDown animate__delay-1s">
          Real experiences. Real healing. Real transformations from our Ayurvedic care.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 animate__animated animate__fadeInUp animate__delay-2s">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-[#e6f1dc] rounded-lg shadow-md p-6 relative text-left hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{emojis[index % emojis.length]}</div>
                <div>
                  <h4 className="text-[#2F4F3E] font-semibold text-sm">{review.name}</h4>
                  <div className="flex text-sm">{renderStars(review.rating)}</div>
                </div>
              </div>

              <FaQuoteLeft className="text-[#A3C9A8] text-2xl mb-3" />
              <p className="text-[#444] text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
