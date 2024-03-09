import "../images/websitelogo.png"
import "../images/codenotes.png"
import { hover } from "@testing-library/user-event/dist/hover";

function ProjectDescrip1 ()  {
    return (
        <div className="ProjectDescrip">
            <div> <p style={{ marginBottom: '3px', fontSize: '47px'}}  > solo projects: </p> </div>
            <div className="grid-container">
            <a href="https://github.com/saachivar/my_website " target="_blank" rel="noreferrer" className="grid-item">
                <div className="grid-item">
                    <div className="project-picture" id="website-img">
                        
                            <img src={ require ('../images/websitelogo.png')} alt="website"/> 
                        
                    </div>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> uses: react, javascript, html, css </h3>
                    <p style={{  fontSize: '28px', paddingLeft: '18px', marginBottom: '0px', color: "#380652", }}> this website </p>
                    
                </div>
            </a>
            <a href="https://github.com/saachivar/CodeNotes" target="_blank" rel="noreferrer" className="grid-item">   
                <div className="grid-item">
                    <div className="project-picture" id="codenotes-img">
                            <img src={ require ('../images/codenotes.png')} alt="grid"/> 
                    </div>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> uses: google apps script </h3>
                    <p style={{  fontSize: '28px', paddingLeft: '18px', marginBottom: '0px', color: "#380652", }}> CodeNotes </p>
                    
                </div>
            </a>
            </div>

        </div>
        


    )
}


export default ProjectDescrip1;