import React from 'react'
import Slider123 from '../Component/Slider';
// import Carousel from 'react-bootstrap/Carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import ManWear from './ManWear';


const ManSlider = () => {
  return (
  <div>
    {/* <Carousel className='carousel23'>
        <Carousel.Item>
        <img className="d-block" src="./Image/BG/ManSlider2.jpg" alt="First slide"/>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block"
          src="./Image/BG/ManSlider1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel> */}
          <Carousel className='carousel23'>
                <div>
                    <img src="./Image/BG/ManSlider2.jpg" />
                </div>

                <div>
                    <img src="./Image/BG/ManSlider1.jpg" />
                </div>
          </Carousel>

    
    <div className='Categories'>
        <img src="./Image/Men's Wear/Shirts/Formal Shirt/F4.jpg" alt="" />
        <img src="./Image/Men's Wear/Kurta/K1.jpg" alt="" />
        <img src="./Image/Men's Wear/T-Shirts/T1.jpg" alt="" />
        <img src="./Image/Men's Wear/Accessories/Watches/W1.jpg" alt="" />
        <img src="./Image/Men's Wear/Shoes/Casual Shoes/CS-1.jpg" alt="" />


        <div className='Cate'>
            <li>Formal</li>
            <li>Kurta</li>
            <li>T-Shirt</li>
            <li>Watch</li>
            <li>Shoes</li>
        </div>
        
    </div>
    
</div>
  )
}

export default ManSlider
