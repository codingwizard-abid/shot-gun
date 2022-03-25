import React from 'react';

const CartModal = (props) => {
   console.log(props.items);
   return (
      <div>
         <h2>{props.items.name}</h2>
         <p>Price: {props.items.price}</p>
      </div>
   );
};

export default CartModal;