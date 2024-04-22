import React from 'react'
import {Link} from 'react-router-dom';

const Clothing = () => {
  return (
    <>
    <div className='Container-flex'>
        <div className='Contain-box'>
            <h2>MEN'S CLOTHING</h2>
            <Link className='link' to='/Pants'><img src="Image/BG/Categoires/Man1.png" alt="" /></Link> 
            <Link className='link' to='/Shirts'><img src="Image/BG/Categoires/Man2.png" alt="" /></Link>
           <Link className='link' to='/Kurta'><img src="Image/BG/Categoires/Man3.png" alt="" /></Link>
            <img src="Image/BG/Categoires/Man4.png" alt="" />
           <Link className='link' to='/TShirts'><img src="Image/BG/Categoires/Man5.png" alt="" /></Link>
      </div>
    </div>
    <div className='Container-flex'>
        <div className='Contain-box'>
            <h2>WOMEN'S CLOTHING</h2>
            <Link className='link' to='/Kurti'><img src="Image/BG/Categoires/Women1.png" alt="" /></Link>
            <Link className='link' to='/Saree'><img src="Image/BG/Categoires/Women2.png" alt="" /></Link>
            <Link className='link' to='/Western'><img src="Image/BG/Categoires/Women3.png" alt="" /></Link>
            <img src="Image/BG/Categoires/Women4.png" alt="" />
            <img src="Image/BG/Categoires/Women5.png" alt="" />
        </div>
    </div>

    <div className='Container-flex'>
        <div className='Contain-box'>
            <h2>ACCESSORIES</h2>
           <Link className='link' to='/Watch'><img src="Image/BG/Categoires/Accessories1.png" alt="" /></Link>
            <img src="Image/BG/Categoires/Accessories2.png" alt="" />
            <img src="Image/BG/Categoires/Accessories3.png" alt="" />
            <img src="Image/BG/Categoires/Accessories4.png" alt="" />
            <img src="Image/BG/Categoires/Accessories5.png" alt="" />
        </div>
    </div>
  </>
  )
}

export default Clothing
