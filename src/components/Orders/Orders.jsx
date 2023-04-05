import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import './Orders.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart=useLoaderData();
   // console.log(products);
   const [cart,setCart]=useState(savedCart);
   const handleRemoveFromCart=(id)=>{
    console.log(id);
    const remaining=cart.filter(product=>product.id!==id);
    setCart(remaining);
    removeFromDb(id);
   }
    return (
        <div className='shop-container'>
           <div className='review-container'>
           {
            cart.map(product=><ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
           }
           </div>
           <div className='Cart-container'>
              <cart cart={cart}></cart>
           </div>
        </div>
    );
};

export default Orders;