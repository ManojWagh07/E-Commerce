import React from 'react';
import Shirts from './Comman/Shirts';
import {Link} from 'react-router-dom';

// import Card from 'react-bootstrap/Card';


const ManCard = () => {
  return (
<section>
  <div className='Mancard'>
    <div className='coloms'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Shirt</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <Link path='/Shirts' to="/Shirts"> Know More</Link>
        </div>
      </div>
    </div>
    <div className='coloms2'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Watch</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
    <div className='coloms3'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Formal</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
    <div className='coloms4'>
      <div className='overlay'>
        <div className='content'>
          <h4><span className='name'>Shoes</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
 </div>   
</section>
  )
}

export default ManCard;
