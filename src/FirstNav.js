import React from 'react'
import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar12(props) {
  return (
    <>
    <div className='icons'>
      <div className='socialicon'>
          <p><FacebookIcon/></p>
          <p><InstagramIcon/></p>
          <p><TwitterIcon/></p>
          <p><YouTubeIcon/></p>
      </div>
    </div>
    <div className='symbol'>
      <div className='callus'>
        <p><PhoneInTalkIcon/></p>
        <h6><span>Call Us</span><br/>9673738945 / 9145506106</h6>
      </div>
      <img  src={require("file:///D:/React%20batch%206%20to%208/FrontEnd/ecommerce/src/Image/BG/SW%20logo.png")} alt="" />
      
      <div className='whislist'>
        <input className='search' type="search" name="search" placeholder='Search Products & Brands' />
        <h5><Link className='linked'><SearchIcon/></Link></h5>
        <h5><Link className='linked' to='/Whishlist'><FavoriteIcon/></Link></h5>
        <h5><Link className='linked' to='/Cart'><ShoppingCartIcon/></Link></h5>
        <h5><Link className='linked' to='/Login'><AccountCircleIcon/></Link></h5>
      </div>
    </div>
    
<div className='Navbar'>

<Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
          <ul>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/About'>About us</Link></li>
            <li><Link className='link' to='/Products'>Products</Link></li>
            <li><Link className='link' to='/ManWear'>Men's Wear</Link>
            
            <ul className='dropdown'>
              <li>Formal</li>
              <li>Casual</li>
              <li>Watch</li>
              <li>Pants</li>
              <li>Shirt</li>
              <li>T-Shirt</li>
              <li>Sneaker</li>
            </ul>
            </li>


            
            <li><Link className='link' to='/WomenWear'>Women Wear</Link></li>
            <li><Link className='link' to='/Contact'>Contact us</Link></li>
        </ul>
          </Nav>
          <Form className="d-flex">
                       
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  </>
  )
}

export default Navbar12;
