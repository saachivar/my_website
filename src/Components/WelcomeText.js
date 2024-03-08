import React, { useState, useEffect } from 'react';

const WelcomeText = () => {
  const textToType = " I'm Saachi :D";
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(prevTypedText => prevTypedText + textToType[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed here (e.g., 100 milliseconds for each character)

    return () => clearInterval(typingInterval);
  }, [currentIndex, textToType]);

  return (
    <div className = "WelcomeText">
      <p>{typedText}</p>
    </div>
  );
};

export default WelcomeText;
