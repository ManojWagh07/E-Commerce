import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DB from'./Categories.json'
// import { width } from '@mui/system';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SliderBar from './SliderBar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Pants() {
  const[Buy,setBuy]=useState();
  return (
    <>
  <div className='centerbar'>
    <div className='centerslider'>
        <div>
            <input className='search' type="search" name="search" placeholder='Search Brands' />
        </div>
    <Row xs={1} md={4} className="g-4">
    {DB.Pants.map((value) => (
        <Col key={value}>
          <Card>
            <div className='hearticons'>
            <div className='cards2'>
              <div className='icones'>
              <Link  className='ICON' to="/Whishlist"><FavoriteIcon/></Link>
              <Link  className='ICON' to="/Cart"><ShoppingBagIcon/></Link>
                  
              </div>
                  <Card.Img className='cardimg' variant="top" src={value.image} />
            </div>
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text className='desc'>{value.desc}</Card.Text>
              <img className='star' src={value.images} alt="" />
              <h5>{value.price}</h5>
              <button className="Pants" onClick={Buy}>Buy<ShoppingCartIcon/></button>

            </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>

    <Row xs={1} md={4} className="g-4">
    {DB.Pants.map((value) => (
        <Col key={value}>
          <Card>
            <div className='hearticons'>
            <div className='cards2'>
              <div className='icones'>
                  <Link  className='ICON' to="/Whishlist"><FavoriteIcon/></Link>
                  <Link  className='ICON' to="/Cart"><ShoppingBagIcon/></Link>
              </div>
                  <Card.Img className='cardimg' variant="top" src={value.image} />
            </div>
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text className='desc'>{value.desc}</Card.Text>
              <img className='star' src={value.images} alt="" />
              <h5>{value.price}</h5>
              <button className="Pants"><Link className='AddCard' to='/Cart'>Add to Card <ShoppingCartIcon/></Link> </button>
            </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
</div>

    <div className='Sidebar'>
    <div className='FormControlLabel'>
          <h3>Brands</h3>
      <div className='Brand'>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="SJeware"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Adidas"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="CREATURE"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="SWAGR"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Scott International"
          labelPlacement="end"
        />
      </div>
    </div>

    <div className='FormControlLabel'>
        <h3>Size</h3>
      <div className='Brand'>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="S"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="M"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="L"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="X"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="XL"
          labelPlacement="end"
        />
      </div>
    </div>
    </div>
   
    </>
  )
}

export default Pants
