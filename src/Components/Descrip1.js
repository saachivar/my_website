import React, { useEffect } from 'react';
import "../images/IMG_0871.png"

    

function Descrip1() {
    useEffect(() => {
        const slideInDiv = document.getElementById('descrip1-slide-in');

        const slideInOnLoad = () => {
            slideInDiv.style.right = '0'; // Move the div to its final position when the component mounts
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
            <div id="Descrip1Words">
                <p>I’m a first year student computer science major at the University of Georgia.</p>
                <p>Scroll down to find out more.</p>
            </div>
            <div id="Descrip1Arrow">
                <img src={ require ('../images/IMG_0871.png')} alt="something" width="50"/>
            </div>
        </div>
        
        )

}
export default Descrip1;