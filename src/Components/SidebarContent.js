import "../App.css";

function SidebarContent() {
    return (
        <div className="SidebarContent">
            <div className="title">saachily.com</div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(0)} className="meTag sidebarElement " >me</button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(1)} className="aboutTag sidebarElement ">about</button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(2)} className="projectsTag sidebarElement ">projects</button>
            </div>
            <div className="sidebarElement">
                <button onClick={() => scrollToHeight(3)} className="projectsTag sidebarElement ">contact</button>
            </div>
        </div>
        
    )

}

const scrollToHeight = (height) => {
    window.scrollTo({
      top: window.innerHeight * height,
      behavior: 'smooth'
    });
}

export default SidebarContent;
