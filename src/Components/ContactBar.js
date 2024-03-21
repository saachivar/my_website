import "../images/email.png"
import "../images/github-mark.png"
import "../images/linkedin.png"
function ContactBar() {
    return (
        <div className="ContactBar">
            <button className="ContactBarButton"> 
                <img className="ContactBarImg" src={ require ('../images/email.png')} alt="email" 
                style={{ marginRight: "-6px", height: "70px", marginTop: "-14px"}}></img>
            </button>
            <button className="ContactBarButton"> 
                <img className="ContactBarImg" src={ require ('../images/linkedin.png')} alt="linkedin" ></img>
            </button>
            <button className="ContactBarButton"> 
                <img className="ContactBarImg" src={ require ('../images/github-mark.png')} alt="github" ></img>
            </button>
        </div>

    )
}

export default ContactBar;