import "../images/spotifystats.png"
import "../images/foodiez.png"
import React from 'react'; 
import { useInView } from 'react-intersection-observer';


function ProjectDescrip2 ()  {
    const { ref: myRef, inView: myElementIsVisible} = useInView();
    return (
        <div ref={myRef} className={`ProjectDescrip ${myElementIsVisible ? 'fadeIt' : ''}`}>
            <div> <p style={{ marginBottom: '3px', marginTop: '28px', fontSize: '35px'}} > group projects: </p> </div>
            <div className="grid-container">
            <div className="grid-item">
                <div className="project-picture" id="foodiez-img">
                        <a href="https://github.com/saachivar/Foodiez " target="_blank" rel="noreferrer" className="grid-item">
                            <img src={ require ('../images/foodiez.png')} alt="website"/> 
                        </a>
                    </div>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> april 2024 </h3>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> uses: react, flask, python, beautifulsoup library </h3>
                    <p style={{  fontSize: '25px', paddingLeft: '18px', marginBottom: '0px', color: "#380652"}}> Foodiez </p>
                </div>
                <div className="grid-item">
                    <div className="project-picture" id="spotifystats-img">
                        <a href="https://github.com/saachivar/SpotifyStats " target="_blank" rel="noreferrer" className="grid-item">
                            <img src={ require ('../images/spotifystats.png')} alt="website"/> 
                        </a>
                    </div>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> febuary 2024 </h3>
                    <h3 style={{ marginBottom: '5px', fontSize: '17px', paddingLeft: '18px', color: "grey" }}> uses: javafx </h3>
                    <p style={{  fontSize: '25px', paddingLeft: '18px', marginBottom: '0px', color: "#380652"}}> Spotify Stats </p>
                </div>
               
            </div>
        </div>


    )
}


export default ProjectDescrip2;