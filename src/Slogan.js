import React from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

// import CountDown from './Countdown'


const Completionist = () => <span>You are good to go!</span>;

const Slogan = () => {
  return (
<>
    <div className='slogan'>
      
    <div className='Container-columns'>
        <div className='Container-Inline'>
          <img src="./Image/BG/Categoires/Cate2.jpg" alt="" />
          <img src="./Image/BG/Categoires/Cate3.jpg" alt="" />
          <img src="./Image/BG/Categoires/Cate4.jpg" alt="" />
          <img src="./Image/BG/Categoires/Cate5.jpg" alt="" />
        </div>
      </div>
       <div className='Deal'>
          <h1>Deal of</h1>
          <h1>The Day</h1>
       </div>

      <div className='Container-column'>
        <Countdown className='countdown' date={Date.now() + 50000000}>
          <Completionist />
        </Countdown>
       
      </div>
    </div>

</>   
  )
}

export default Slogan
