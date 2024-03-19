import React from 'react'; 
import { useInView } from 'react-intersection-observer';

function About2() {
    const { ref: myRef, inView: myElementIsVisible} = useInView();
 

    return (
        <div  className={`about about2 ${myElementIsVisible ? 'animateTestAbout' : ''}`}>
            <p style={{fontSize: '35px', marginBottom: '30px'}}>skills</p>
            <div  ref={myRef} id="skillsBox"  style={{fontSize: '40px', }}>
               <p  style={{fontSize: '40px', margin: '0px' }}>HTML   |   CSS    |   JavaScript    |   Java   |   C</p>
            </div>
            </div>
        );
    
    }
    export default About2;