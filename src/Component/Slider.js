import Carousel from "react-multi-carousel";
import Db from'./db.json'
import "react-multi-carousel/lib/styles.css";
// import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FullCard from "./FullCard";
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
function Slider123(){
    return (
<section>
<div className='container'>
    <h2 className='bg-warning'>Women's Wear</h2>
<div className='row'>
<Carousel responsive={responsive}>

{Db.Formal.map((value) => (
      
      <div className='d-flex flex-row' key={value.id}>
        <div className='p-2'>
          <img src={value.image} alt={""} className="img-fluid d-block mx-auto h-65 w-100"/>
            <h6>{value.name}</h6>
            <p>{value.desc}</p>
            <h6>₹ {value.price}</h6>
          <button className="buttons"><Link className='link' to='/Cart'>Add to Card <ShoppingCartIcon/></Link> </button>
         </div>
      </div>
))}
</Carousel>;
</div>
</div>
</section>
    
)}

export default Slider123;