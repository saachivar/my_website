import React, { useEffect, useState } from 'react';
import "../App.css";

function SidebarContent() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
            setScrollPosition(scrollY);
        };
    
        // Attach scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array to run the effect only once
    

    return (
        <div className="SidebarContent">
            <div className="title">saachily.com</div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(0)} className="meTag sidebarElement " >
                    {scrollPosition < window.innerHeight * 1 ? <p>  ⌄ me </p> : <p> > me</p>}
                    </button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(1)} className="aboutTag sidebarElement ">
                    {scrollPosition < window.innerHeight * 2 ? <p>  ⌄ about </p> : <p> > about</p>}
                </button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(2)} className="projectsTag sidebarElement ">
                {scrollPosition < window.innerHeight * 3 ? <p>  ⌄ projects </p> : <p> > projects</p>}
                </button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(3)} className="projectsTag sidebarElement ">
                {scrollPosition < window.innerHeight * 4 ? <p>  ⌄ contact </p> : <p> > contact</p>}
                </button>
            </div>
        </div>
        
    )

}

const scrollToHeight = (height) => {
    window.scrollTo({
      top: window.innerHeight * height,
      behavior: 'smooth'
    });
}

export default SidebarContent;
