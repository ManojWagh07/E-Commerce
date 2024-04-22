import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PaymentIcon from '@mui/icons-material/Payment';

const Shipping = () => {
  return (
<div className='contain'>
    <div className='boxes'>
      <div className='Cards'>
        <h1><LocalShippingIcon className='shipping'/></h1>
        <h2>Free Shipping</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, totam?</p>
      </div>
      <div className='Cards'>
        <h1><KeyboardReturnIcon className='shipping'/></h1>
        <h2>30 Days Return </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ut!</p>
      </div>
      <div className='Card'>
        <h1><PaymentIcon className='shipping'/></h1>
        <h2>100% Payment Secure </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rerum!</p>
      </div>
    </div>
</div>
  )
}

export default Shipping;
