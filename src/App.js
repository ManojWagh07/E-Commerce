import logo from './logo.svg';
import './App.css';
import './MediaQuery.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
import Nav from './FirstNav';
import Home from './Home';
import Products from './Component/Products';
import About from './Component/About';
import Contact from './Component/Contact';
import ManWear from './Comman/ManWear'
import SecondNav from './SecondNav';
import Whishlist from './Component/Whishlist';
import Cart from './Component/Cart';
import Login from './Component/Login';
import WomenWear from './Comman/WomenSlider';
import Shirts from './Comman/Shirts';
import Kurta from './Comman/Kurta';
import TShirts from './Comman/T-Shirts';
import Watch from './Comman/Watch';
import Pants from './Comman/Pants';
import Saree from './Woman/Saree';
import Kurti from './Woman/Kurti';
import Western from './Woman/Western';
import Register from './Component/Register';
function App() {

  return (
    <div>
      <BrowserRouter>
      <SecondNav/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/ManWear' element={<ManWear/>}/>
        <Route path='/Whishlist' element={<Whishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/WomenWear' element={<WomenWear/>}/>
        <Route path='/Pants' element={<Pants/>}/>
        <Route path='/Shirts' element={<Shirts/>}/>
        <Route path='/Kurta' element={<Kurta/>}/>
        <Route path='/TShirts' element={<TShirts/>}/>
        <Route path='/Watch' element={<Watch/>}/>
        <Route path='/Saree' element={<Saree/>}/>
        <Route path='/Kurti' element={<Kurti/>}/>
        <Route path='/Western' element={<Western/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
   
  
  );
}

export default App;
