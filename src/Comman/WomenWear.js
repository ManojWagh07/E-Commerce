import React from 'react'
import Data from './WomenKurtis.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function WomenSlider() {
  return (
    <>
<div className='container1'>
<h1 className='heading'>Saree</h1>
  <div className='row'>
<Carousel responsive={responsive}>
    {Data.Kurtis.map((value) => (
      
    <div className='d-flex flex-row' key={value.id}>
      <div className='p-2'>
        <div className='HoverImg'>
            <img src={value.image} alt={""} className="img-fluid d-block mx-auto h-50 w-100"/>
        </div>
        <h5>{value.name}</h5>
        <p>{value.desc}</p>
         <h5>₹ {value.price}</h5>
         <button className="buttons"><Link className='link' to='/Cart'>Add to Card <ShoppingCartIcon/></Link> </button>
      </div>
    </div>
    ))}
  </Carousel>;
  </div>
</div>


<div className='container2'>
      <h1 className='heading'>Saree</h1>
    <div className='row'>
  <Carousel responsive={responsive}>


    {Data.Saree.map((value) => (
      
    <div className='d-flex flex-row' key={value.id}>
      
      <div className='p-2'>
      <div className='HoverImg'>
        <img src={value.image} alt={""} className="img-fluid d-block mx-auto h-50 w-100"/>
      </div>
        <h5>{value.name}</h5>
        <p>{value.desc}</p>
         <h5>₹ {value.price}</h5>
         <button className="buttons"><Link className='link' to='/Cart'>Add to Card <ShoppingCartIcon/></Link> </button>
      </div>
    </div>
    ))}
  </Carousel>;
  </div>
</div>


  <div className='container3'>
      <h1 className='heading'>FootWear</h1>
  <div className='row'>
  <Carousel responsive={responsive}>
    
    {Data.FootWear.map((value) => (
      
    <div className='d-flex flex-row' key={value.id}>
      
      <div className='p-2'>
      <div className='HoverImg'>
        <img src={value.image} alt={""} className="img-fluid d-block mx-auto h-50 w-100"/>
      </div>
        <h5>{value.name}</h5>
        <p>{value.desc}</p>
         <h5>₹ {value.price}</h5>
         <button className="buttons"><Link className='link' to='/Cart'>Add to Card <ShoppingCartIcon/></Link> </button>
      </div>
    </div>
    ))}
  </Carousel>;
  </div>
</div>


<div className='container4'>
      <h1 className='heading'>Saree</h1>
    <div className='row'>
  <Carousel responsive={responsive}>

    {Data.Perfume.map((value) => (
      
    <div className='d-flex flex-row' key={value.id}>
      
      <div className='p-2'>
        <div className='HoverImg'>
            <img src={value.image} alt={""} className="img-fluid d-block mx-auto h-50 w-100"/>
        </div>
        <h5>{value.name}</h5>
        <p>{value.desc}</p>
         <h5>₹ {value.price}</h5>
         <button className="buttons"><Link className='link' to='/Cart'>Add to Card <ShoppingCartIcon/></Link> </button>
      </div>
    </div>
    ))}
  </Carousel>;
  </div>
</div>

</>
  )
}

export default WomenSlider