import React, { useState, useEffect } from 'react';
function About1() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const element = document.querySelector('.fade-in');
        if (element) {
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            const windowHeight = window.innerHeight;
            if (scrollY + windowHeight > elementTop) {
            setIsVisible(true);
            }
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fade-in ${isVisible ? 'active' : ''}`}>
        <div className="about about1">
             <p style={{fontSize: '50px', marginBottom: '-2px'}}> about</p>   
            <p style={{fontSize: '19px'}}>I’m Saachi! I am a computer science student at UGA
                 as well as a member of the Morehead
                 Honors College. Right now I’m learning systems
                  programming as well as React JS for 
                 web development. My main interests for the future a
                 data analytics and AI.  </p>
            </div>
            </div>
        )
    
    }
    export default About1;