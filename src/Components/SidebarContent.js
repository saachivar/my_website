import "../App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function SidebarContent() {
    return (
        <div className="SidebarContent">
            <div className="title">saachily.com</div>
            <div className="sidebarElement">
                <button onClick={() => scrollToElement("Page1")} className="meTag sidebarElement " >me</button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToElement("Page2")} className="aboutTag sidebarElement ">about</button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToElement("Page3")} className="projectsTag sidebarElement ">projects</button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToElement("Page4")} className="projectsTag sidebarElement ">contact</button>
            </div>
        </div>
        
    )

}

function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
}
export default SidebarContent;
