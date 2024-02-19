import React, { useEffect } from 'react';

function Descrip1() {
    useEffect(() => {
        console.log("test");
        const slideInDiv = document.getElementById('descrip1-slide-in');

        const slideInOnMount = () => {
            console.log("test2");
            slideInDiv.style.right = '0'; // Move the div to its final position when the component mounts
        }; // Empty dependency array ensures the effect runs only once after the component mounts

        // Slide in the div when the component mounts
        slideInOnMount();
    }, []); // Empty dependency array ensures the effect runs only once after the component mounts


      
    
    return (
        <div className="Descrip1" id="descrip1-slide-in">
            <p>I’m a first year student computer science major at the University of Georgia.</p>
            <p>Scroll down to find out more.</p>
            </div>
        )

}
export default Descrip1;