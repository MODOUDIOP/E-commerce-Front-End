

import ProductList from '../src/compenents/ProductList'
import CategoryItem from './compenents/Categories';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import React from "react";
import {
  BrowserRouter as Router,
  
  Route, 
  Routes,
  
  
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>
         
        
      </Routes>

      <Routes>
        <Route path='ProductList/' element={ <ProductList/>}/>
         
        
      </Routes>

      <Routes>
        <Route path='/Cart' element={ <Cart/>}/>
         
        
      </Routes>

       <Routes>
        <Route path='/Register' element={ <Register/>}/>
         
        
      </Routes>

      <Routes>
        <Route path='/Login' element={<Login />} />
      </Routes>
    
       <Routes>
        <Route path='/CategoryItem' element={<CategoryItem />} />
      </Routes>

      
      
     
    </Router>
    
     
    
  );
};

export default App;
