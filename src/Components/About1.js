import React from 'react'; 
import { useInView } from 'react-intersection-observer';

function About1() {
    const { ref: myRef, inView: myElementIsVisible} = useInView();

    return (
        
        <div ref={myRef} className={`about about1 ${myElementIsVisible ? 'fadeIt' : ''}`}>
             <p style={{fontSize: '50px', marginBottom: '-2px'}}> about</p>   
            <p style={{fontSize: '19px'}}>I’m Saachi! I am a computer science student at UGA
                 as well as a member of the Morehead
                 Honors College. Right now I’m learning systems
                  programming as well as React JS for 
                 web development. My main interests for the future a
                 data analytics and AI.</p>
        </div>
          
        )
    
    }
    export default About1;