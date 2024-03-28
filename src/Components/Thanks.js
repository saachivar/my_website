import React from 'react'; 
import { useInView } from 'react-intersection-observer';

function Thanks() {
    const { ref: myRef, inView: myElementIsVisible} = useInView();    

return (
    
    <div  ref={myRef} className={`Thanks ${myElementIsVisible ? 'popIt' : ''}`}> 
       <h1> thanks for coming! </h1>
    </div>
);

}
export default Thanks;