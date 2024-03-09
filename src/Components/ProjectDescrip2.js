import "../images/spotifystats.png"


function ProjectDescrip2 ()  {
    return (
        <div className="ProjectDescrip">
            <div> <p> group projects: </p> </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="project-picture" id="spotifystats-img">
                        <a href="https://github.com/saachivar/SpotifyStats " target="_blank" rel="noreferrer" className="grid-item">
                            <img src={ require ('../images/spotifystats.png')} alt="website"/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default ProjectDescrip2;