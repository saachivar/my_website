import "../App.css";
import "../images/pfp.png"
function PFP() {
    return (
        <div className="pfpImage">
            <img src={ require ('../images/pfp.png')}  width="300"/>
        </div>

    )
}

export default PFP