import React, { useEffect } from 'react';
const ScrollLogic = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Perform actions on scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div>My Component</div>;
};
export default ScrollLogic