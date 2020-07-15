import React from 'react'
import Shoe from './shoes.json';
import { Link } from 'react-router-dom';
import Button from './Button';

export const Product = () => {
    console.log(Shoe)
    return (
        <>
        <h1>Products List </h1>
        <div className="proContainer">
            
            {Object.keys(Shoe).map(keyName =>{
                const shoes = Shoe[keyName];
                return(
                
                <div key={keyName}>
                    <Link to={`/products/${keyName}`}>
                <h2>{shoes.name}</h2>
                <img src={shoes.img} height={250} alt={keyName}/><br />
                
                </Link>
                <strong>Price :{shoes.price} <Link to={`/products/${keyName}`}><button className="btnChart">Add Chart</button></Link></strong>
                </div>

                )

            })}
        </div>
        </>
    )
}
