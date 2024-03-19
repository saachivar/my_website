import "../images/websitelogo.png"
import "../images/codenotes.png"
import React from 'react'; 
import { useInView } from 'react-intersection-observer';

function ProjectDescrip1 ()  {
    const { ref: myRef, inView: myElementIsVisible} = useInView();
    return (
        <div ref={myRef} className={`ProjectDescrip ${myElementIsVisible ? 'fadeIt' : ''}`} >
            <div> <p style={{ marginBottom: '3px', fontSize: '35px'}}  > solo projects: </p> </div>
            <div className="grid-container">
            <a href="https://github.com/saachivar/my_website " target="_blank" rel="noreferrer" className="grid-item">
                <div className="grid-item">
                    <div className="project-picture" id="website-img">
                        
                            <img src={ require ('../images/websitelogo.png')} alt="website"/> 
                        
                    </div>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> march 2024 </h3>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> uses: react, javascript, html, css </h3>
                    <p style={{  fontSize: '25px', paddingLeft: '18px', marginBottom: '0px', color: "#380652"}}> this website </p>
                    
                </div>
            </a>
            <a href="https://github.com/saachivar/CodeNotes" target="_blank" rel="noreferrer" className="grid-item">   
                <div className="grid-item">
                    <div className="project-picture" id="codenotes-img">
                            <img src={ require ('../images/codenotes.png')} alt="grid"/> 
                    </div>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> febuary 2024 </h3>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> uses: google apps script </h3>
                    <p style={{  fontSize: '25px', paddingLeft: '18px', marginBottom: '0px', color: "#380652"}}> CodeNotes </p>
                    
                </div>
            </a>
            </div>

        </div>
        


    )
}


export default ProjectDescrip1;