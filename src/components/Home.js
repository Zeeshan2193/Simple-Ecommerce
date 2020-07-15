import React from 'react';
import image from '../image/Sneaker.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';
 

export const Home = () => {
  //  var element = document.querySelector('#move');
  //  element.animate([
  //      {transform : 'translate(0,0)'},
  //      {transform : 'translate(500,0)'}
  //  ],{
  //      duration: 1500
  //  })
    return (
        <div className="container">
             <h1 id="move">WELCOME EveryOne : Run With Us</h1>
        <img src ={image} alt="shoe" className="image" />
        
          <Link to="/products"><Button /></Link>
          
        </div>
      
    )
}
