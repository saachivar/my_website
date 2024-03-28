import WelcomeContent from "./WelcomeContent.js";
import Descrip1 from "./Descrip1.js";
import About1 from "./About1.js";
import About2 from "./About2.js";
import About3 from "./About3.js";
import ProjectDescrip1 from "./ProjectDescrip1.js";
import ProjectDescrip2 from "./ProjectDescrip2.js";
import Thanks from "./Thanks.js"



function MainContent() {
    
  

return (
    <div className = "MainContent">
        <WelcomeContent/>
        <Descrip1 />
        <About1 />
        <About2 />
        <About3 />
        <ProjectDescrip1/>
        <ProjectDescrip2/>
        <Thanks />
        </div>
);

}
export default MainContent;