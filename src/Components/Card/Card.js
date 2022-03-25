import React from 'react';
import './Card.css';
import { BsCartPlusFill } from "react-icons/bs";

const Card = (props) => {
   const {id, name, img, bullet, capacity, action, price} = props.guns;

   
   return (
      <div className='card'>
         <div className="image-container">
            <img src={img} alt="" />
         </div>
         <div className="gun-info">
            <h2>{name}</h2>
            <p>Bullet type: {bullet}</p>
            <p>capacity: {capacity}</p>
            <p>Action: {action}</p>
         </div>
         <div className='add-to-cart'>
            <button onClick={()=>props.addToCart(props.guns)} className='icon'><BsCartPlusFill/></button>
            <h1>$ {price}</h1>
         </div>
      </div>
   );
   
};

export default Card;