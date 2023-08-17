import React, { useState, useEffect } from 'react';


const TypewriterText = ({ texts,staticText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const text = texts[currentIndex];
    let timeout;

    if (typing) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
        if (currentText.length === text.length) {
          setTyping(false);
          setTimeout(() => setTyping(false), 1000); // Pause before erasing
        }
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setTyping(true);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, typing, texts]);

  return (
    <div className="typewriter-text font-semibold text-2xl text-[#F1C40F] ">
       <span className=' font-bold text-2xl uppercase text-blue-900 '> {staticText}:</span>
     {currentText} |
    
    </div>
  );
};

export default TypewriterText;
