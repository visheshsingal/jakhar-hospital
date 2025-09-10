// import React, { useState, useRef } from 'react';
// import { FaPlay, FaPause } from 'react-icons/fa';
// // import soundFile from '../assets/nature.mp3';

// export default function NatureSoundToggle() {
//   const [playing, setPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const toggleSound = () => {
//     if (playing) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setPlaying(!playing);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={toggleSound}
//         className="bg-[#4A7C59] hover:bg-[#3a6647] text-white p-3 rounded-full shadow-md"
//       >
//         {playing ? <FaPause /> : <FaPlay />}
//       </button>
//       <audio ref={audioRef} src={soundFile} loop />
//     </div>
//   );
// }
import React from 'react'

const NatureSoundToggle = () => {
  return (
    <div>
      
    </div>
  )
}

export default NatureSoundToggle
