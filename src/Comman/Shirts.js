import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Database from'./Categories.json'
import { width } from '@mui/system';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SliderBar from './SliderBar';


function Shirts() {
  
  return (
    <>
  <div className='centerbar'>
    <div className='centerslider'>
        <div>
            <input className='search' type="search" name="search" placeholder='Search Brands' />
        </div>
    <Row xs={1} md={4} className="g-4">
    {Database.Shirts.map((value) => (
        <Col key={value}>
          <Card>
            <div className='hearticons'>
            <div className='cards2'>
`                             `              <div className='icones'>
              <Link  className='ICON' to="/Whishlist"><FavoriteIcon/></Link>
              <Link  className='ICON' to="/Cart"><ShoppingBagIcon/></Link>
                  {/* <a href="" className='ICON'><FavoriteIcon/></a> */}
              </div>
                <h5>{value.Sale}</h5>
                
                  <Card.Img className='cardimg' variant="top" src={value.image} />
            </div>
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text className='desc'>{value.desc}</Card.Text>
              <h6>Size: {value.size}</h6>
              <img className='star' src={value.images} alt="" />
            <div className='delete'>
              <h5>{value.price}/-</h5>
              <s>{value.num} / -</s>
              <p>{value.discount}</p>
            </div>  
              <button className="Pants">Buy<ShoppingCartIcon/></button>
            </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>

  </div>
</div>

    <div className='Sidebar'>
        <SliderBar/>
    </div>
   
    </>
  )
}

export default Shirts
