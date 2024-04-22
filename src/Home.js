import React from 'react'
// import Cards from './Cards';
import CarouselSlider from './Carousle';
// import Categories from './Comman/Categories';
import Clothing from './Comman/Clothing';
import Footer from './Component/Footer';
import ManCard from './ManCard';
import Shipping from './Shipping';
import Slogan from './Slogan';
import WomenCard from './WomenCard';
// import Slider123 from './Component/Slider';
// import WomenSlider from './WomenSlider';
// import SecondNav from './SecondNav';
// import Nav from './FirstNav';

const Home = () => {
  return (
    <div className='Container'>
      <div className='box'>
    </div>
 
      <CarouselSlider/>
      <Shipping/>
      <ManCard/>
      <WomenCard/>
      <Clothing/>
      <Slogan/>
      <Footer/>
    </div>
  )
}

export default Home;
