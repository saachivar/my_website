import "../images/spotifystats.png"


function ProjectDescrip2 ()  {
    return (
        <div className="ProjectDescrip">
            <div> <p style={{ marginBottom: '3px', marginTop: '28px', fontSize: '35px'}} > group projects: </p> </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="project-picture" id="spotifystats-img">
                        <a href="https://github.com/saachivar/SpotifyStatms " target="_blank" rel="noreferrer" className="grid-item">
                            <img src={ require ('../images/spotifystats.png')} alt="website"/> 
                        </a>
                    </div>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> febuary </h3>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> uses: javafx </h3>
                    <p style={{  fontSize: '25px', paddingLeft: '18px', marginBottom: '0px', color: "#380652"}}> Spotify Stats </p>
                </div>
            </div>
        </div>


    )
}


export default ProjectDescrip2;