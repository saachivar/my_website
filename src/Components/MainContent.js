import WelcomeContent from "./WelcomeContent.js";
import Descrip1 from "./Descrip1.js";
import About1 from "./About1.js";
import About2 from "./About2.js";
import About3 from "./About3.js";
import ProjectDescrip1 from "./ProjectDescrip1.js";
import ProjectDescrip2 from "./ProjectDescrip2.js";
import Contact from "./Contact.js";
import React, { useEffect, useRef } from 'react';


function MainContent() {
const myRef = useRef();
useEffect(() => {
    if (myRef.current) {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        console.log('entry', entry);
    })
    observer.observe(myRef.current); 
}
}, [])
return (
    <div className = "MainContent">
        <WelcomeContent/>
        <Descrip1 />
        <About1 />
        <About2 ref={myRef}/>
        <About3 />
        <ProjectDescrip1/>
        <ProjectDescrip2/>
        <Contact/>
        </div>
);

}
export default MainContent;