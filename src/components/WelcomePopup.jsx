import React, { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce z-50">
      <span className="text-[#4A7C59] font-semibold">🙏 Namaste! Welcome</span>
    </div>
  );
}
