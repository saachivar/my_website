import React from 'react'; 

const About2 = React.forwardRef((props, ref) => {
 

    return (
        <div ref={ref} className="about about2">
            <p style={{fontSize: '35px', marginBottom: '30px'}}>skills</p>
            <div id="skillsBox"  style={{fontSize: '40px', }}>
               <p  style={{fontSize: '40px', margin: '0px' }}>HTML   |   CSS    |   JavaScript    |   Java   |   C</p>
            </div>
            </div>
        );
    
    });
    export default About2;