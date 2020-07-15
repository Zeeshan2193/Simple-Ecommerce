import React from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Home} from './components/Home';
import {About} from './components/About';
import {Product} from './components/Product';
import {PageNotFound} from './components/PageNotFound';
import {ProductDetail} from './components/ProductDetail';

import './App.css';

import {Routes, Route} from "react-router";

function App() {
  return (
    <div className="App">

      
       <NavBar />
      
      <Routes>
       <Route path="/" element={ <Home />}></Route>
      <Route  path="about" element ={<About />}> </Route>
      <Route  path="products" element ={<Product />}> </Route>
      <Route  path="/products/:id" element ={<ProductDetail />}> </Route>
    <Route path="*" element ={<PageNotFound />}>Page Not Found</Route>
      </Routes>
     <Footer />
     
      
    </div>
  );
}

export default App;
