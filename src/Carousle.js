// import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselSlider() {
  return (
    <div className='carousel'>
      
          <Carousel>
                <div>
                  <img src="Image/BG/ManSlider1.jpg" alt="" />
                </div>
                <div>
                    <img src="./Image/BG/TheGirls.jpg" />
                </div>
                <div>
                    <img src="./Image/BG/Men  Watches.jpg" />
                </div>
                <div>
                    <img src="./Image/BG/Fixed.jpg" />
                </div>
          </Carousel>
    </div>
  );
}

export default CarouselSlider;