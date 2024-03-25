import "../images/email.png"
import "../images/github-mark.png"
import "../images/linkedin.png"
function ContactBar() {
    return (
        <div className="ContactBar">
            <div className="ContactBarButton"> 
                <a href="mailto:saachi.varshney@gmail.com" target="_blank" rel="noreferrer">
                    <img className="ContactBarImg" src={require('../images/email.png')} alt="email" style={{ marginRight: "-6px", height: "70px", marginTop: "-14px"}} />
                </a>
            </div>
            <div className="ContactBarButton"> 
                <a href="https://www.linkedin.com/in/saachi-varshney-1a13241a5/" target="_blank" rel="noreferrer">
                    <img className="ContactBarImg" src={require('../images/linkedin.png')} alt="linkedin" />
                </a>
            </div>
            <div className="ContactBarButton"> 
                <a href="https://github.com/saachivar " target="_blank" rel="noreferrer">
                    <img className="ContactBarImg" src={require('../images/github-mark.png')} alt="github" />
                </a>
            </div>
        </div>
    )
}

export default ContactBar;