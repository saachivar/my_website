import { Carousel } from 'react-bootstrap';
function About3() {
    return (
        <div className="about about3">
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