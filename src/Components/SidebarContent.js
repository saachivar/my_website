import React, { useEffect, useState } from 'react';
import "../App.css";
import "../images/Picture1.png"
import "../images/Picture2.png"


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
                    {scrollPosition > window.innerHeight * .5 ? (
                        <div className="scrollUp"> 
                            <div className="scrollArrowUp">
                              <img src={ require ('../images/Picture1.png')} alt="something" width='12' />
                            </div>
                        <p>me</p> 
                        </div>
                        ) : (
                        <div className="scrollDown"> 
                            <div className="scrollArrowDown">
                                <img src={ require ('../images/Picture2.png')} alt="something" width='20'/>
                            </div>
                            <p>me</p>
                        </div>
                        )}
                    </button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(1)} className="aboutTag sidebarElement ">
                    {scrollPosition >= window.innerHeight * 2 ? (
                        <div className="scrollUp"> 
                            <div className="scrollArrowUp">
                                <img src={ require ('../images/Picture1.png')} alt="something" width='12' />
                            </div>
                            <p>about</p> 
                        </div>
                        ) : (
                        <div className="scrollDown"> 
                            <div className="scrollArrowDown">
                                <img src={ require ('../images/Picture2.png')} alt="something" width='20'/>
                            </div>
                            <p>about</p>
                        </div>
                        )}
                </button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(2)} className="projectsTag sidebarElement ">
                {scrollPosition > window.innerHeight * 3 ? (
                        <div className="scrollUp"> 
                            <div className="scrollArrowUp">
                                <img src={ require ('../images/Picture1.png')} alt="something" width='12' />
                            </div>
                            <p>projects</p> 
                        </div>
                        ) : (
                        <div className="scrollDown"> 
                            <div className="scrollArrowDown">
                                <img src={ require ('../images/Picture2.png')} alt="something" width='20'/>
                            </div>
                            <p>projects</p>
                        </div>
                        )}
                </button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(3)} className="projectsTag sidebarElement ">
                {scrollPosition > window.innerHeight * 4 ? (
                        <div className="scrollUp"> 
                            <div className="scrollArrowUp">
                                <img src={ require ('../images/Picture1.png')} alt="something" width='12' />
                            </div>
                            <p>contact</p> 
                        </div>
                        ) : (
                        <div className="scrollDown"> 
                            <div className="scrollArrowDown">
                                <img src={ require ('../images/Picture2.png')} alt="something" width='20'/>
                            </div>
                            <p>contact</p>
                        </div>
                        )}
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
