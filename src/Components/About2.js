import React from 'react'; 
import { useInView } from 'react-intersection-observer';

function About2() {
    const { ref: myRef, inView: myElementIsVisible} = useInView();
 

    return (
        <div ref={myRef} className={`about about2 ${myElementIsVisible ? 'fadeIt' : ''}`}>
            <p style={{fontSize: '35px', marginBottom: '30px'}}>skills</p>
            <div   id="skillsBox"  style={{fontSize: '40px', }}>
               <p  style={{fontSize: '40px', margin: '0px' }}>HTML   |   CSS    |   JavaScript    |   Java   |   C</p>
            </div>
            </div>
        );
    
    }
    export default About2;