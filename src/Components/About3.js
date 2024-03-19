import { Carousel } from 'react-bootstrap';
import React from 'react'; 
import { useInView } from 'react-intersection-observer';

function About3() {
  const { ref: myRef, inView: myElementIsVisible} = useInView();
    return (
        <div ref={myRef} className={`about about3 ${myElementIsVisible ? 'fadeIt' : ''}`}>
            <p style={{fontSize: '35px', marginBottom: '30px'}}>fun facts</p>
            <div>
            <Carousel>
              <Carousel.Item>
                <div className="carouselFeatures">
                  <h3> my mom is super annoying </h3>
                </div>
              </Carousel.Item>

              <Carousel.Item >
                <div className="carouselFeatures">
                  <h3> my dad is super annoying </h3>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carouselFeatures">
                  <h3> my brother is super annoying </h3>
                </div>
              </Carousel.Item>
            </Carousel> 
            </div>
        
        </div>
        
        )
    
    }
    export default About3;