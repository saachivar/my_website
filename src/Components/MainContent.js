import WelcomeContent from "./WelcomeContent";
import Descrip1 from "./Descrip1.js"
import About1 from "./About1.js";
import About2 from "./About2.js";
import About3 from "./About3.js";
import ProjectDescrip from "./ProjectDescrip.js";

const heading1 = 'Solo Projects:';
const links1 = [
        { text: 'Link 1', url: '/link1' },
        { text: 'Link 2', url: '/link2' },
        { text: 'Link  adf3', url: '/link3' }
    ];

const heading2 = 'Group Projects';
const links2 = [
        { text: 'Link 1', url: '/link1' },
        { text: 'Link 2', url: '/link2' },
        { text: 'Link  adf3', url: '/link3' }
    ];

function MainContent() {
return (
    <div className = "MainContent">
        <WelcomeContent />
        <Descrip1 />
        <About1 />
        <About2 />
        <About3 />
        <ProjectDescrip heading={heading1} links={links1} />
        <ProjectDescrip heading={heading2} links={links2} />
        </div>
);

}
export default MainContent;