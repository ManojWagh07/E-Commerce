import React from 'react'
import Slider123 from '../Component/Slider';
import WomenSlider from './WomenWear'
import Carousel from 'react-bootstrap/Carousel';


const WomenWear = () => {
  return (
  <div>
    <Carousel className='carousel23'>
        <Carousel.Item>
        <img
          className="d-block"
          src="./Image/BG/WomenSlider4.jpg"
          alt="First slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block"
          src="./Image/BG/WomenSlider2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className='Categories'>
        <img src="./Image/Women Wear/Kurtis/K2.jpg" alt="" />
        <img src="./Image/Women Wear/Saree/S7.jpg" alt="" />
        <img src="./Image/Women Wear/FootWear/GSLJ037_MULTI.jpg" alt="" />
        <img src="./Image/Women Wear/Perfume/p6.jpg" alt="" />
        <img src="./Image/Women Wear/Skirt/S11.jpg" alt="" />


        <div className='Cate'>
            <li>Kurtis</li>
            <li>Saree</li>
            <li>FootWear</li>
            <li>Perfume</li>
            <li>Western</li>
        </div>
        
    </div>
        <WomenSlider/>
    
</div>
  )
}

export default WomenWear
