import React, { useEffect } from 'react';

function Descrip1() {
    useEffect(() => {
        const slideInDiv = document.getElementById('descrip1-slide-in');

        const slideInOnLoad = () => {
        slideInDiv.style.left = '0'; // Move the div to its final position when the component mounts
      }; // Empty dependency array ensures the effect runs only once after the component mounts

      // Add event listener to trigger slide-in animation when the page loads
    window.addEventListener('load', slideInOnLoad);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('load', slideInOnLoad);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts




      
    
return (
    <div className="Descrip1" id="descrip1-slide-in">
        <p>I’m a first year student computer science major at the University of Georgia.</p>
        <p>Scroll down to find out more.</p>
        </div>
    )

}
export default Descrip1;