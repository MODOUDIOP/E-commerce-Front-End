import React from 'react'
import Annoncement from '../compenents/annoncement';
import Categories from '../compenents/Categories';
import Footer from '../compenents/Footer';
import Navbar from '../compenents/Navbar';
import Newsletter from '../compenents/Newsletter';
import NosSujet from '../compenents/NosSujet';
import Products from '../compenents/Products';
import Slider from '../compenents/Slider';




const Home = () => {
  return (
    <div>
    <Annoncement/>
     <Navbar />
      <Slider/>
      <Categories />
       <NosSujet/>
      <Products />
      <Newsletter />
       
      <Footer />
       
    </div>
  )
}

export default Home;