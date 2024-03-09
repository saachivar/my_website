import "../images/websitelogo.png"
import "../images/codenotes.png"

function ProjectDescrip1 ()  {
    return (
        <div className="ProjectDescrip">
            <div> <p> Solo Projects: </p> </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="project-picture" id="website-img">
                        <a href="https://github.com/saachivar/my_website " target="_blank" rel="noreferrer" className="grid-item">
                            <img src={ require ('../images/websitelogo.png')} alt="website"/> 
                        </a>
                    </div>
                    <h3 style={{ marginBottom: '-30px' }}> more stuff</h3>
                    <p> more stuff </p>
                    
                </div>
                <div className="grid-item">
                    <div className="project-picture" id="codenotes-img">
                        <a href="https://github.com/saachivar/CodeNotes" target="_blank" rel="noreferrer" className="grid-item">
                            <img src={ require ('../images/codenotes.png')} alt="grid"/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default ProjectDescrip1;