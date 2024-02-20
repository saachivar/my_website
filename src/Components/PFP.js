import "../App.css";
import "../images/logo192.png"
function PFP() {
    return (
        <div className="pfpImage">
            <img src={ require ('../images/logo192.png')} alt="something" width="320"/>
        </div>

    )
}

export default PFP