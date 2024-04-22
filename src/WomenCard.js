import React from 'react';
import {Link} from 'react-router-dom';

// import Card from 'react-bootstrap/Card';


const WomenCard = () => {
  return (
<section>
 <div className='Mancard'>
    <div className='coloms5'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Jeans</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
    <div className='coloms6'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Sandel</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
    <div className='coloms7'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Skirt</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <Link path='/Western' to="/Western">Know More</Link>
        </div>
      </div>
    </div>
    <div className='coloms8'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Saree</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <Link path='/Saree' to="/Saree">Know More</Link>
        </div>
      </div>
    </div>
</div>    
</section>
  )
}

export default WomenCard;
