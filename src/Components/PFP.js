import "../App.css";
import "../images/pfp.png"
function PFP() {
    return (
        <div id="pfpImage" className='fadeIt'>
            <img src={ require ('../images/pfp.png')} alt="something" width="320"/>
        </div>

    )
}

export default PFP