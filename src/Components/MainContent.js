import WelcomeContent from "./WelcomeContent";
import Descrip1 from "./Descrip1.js"
import About1 from "./About1.js";
import About2 from "./About2.js";
import About3 from "./About3.js";
import ProjectDescrip from "./ProjectDescrip.js";

const heading = 'Links Section';
const links = [
        { text: 'Link 1', url: '/link1' },
        { text: 'Link 2', url: '/link2' },
        { text: 'Link 3', url: '/link3' }
    ];

function MainContent() {
return (
    <div className = "MainContent">
        <WelcomeContent />
        <Descrip1 />
        <About1 />
        <About2 />
        <About3 />
        <ProjectDescrip heading={heading} links={links} />
        </div>
);

}
export default MainContent;