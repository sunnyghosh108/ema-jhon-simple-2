import React, { useState } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import './Orders.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const Orders = () => {
    const savedCart=useLoaderData();
   // console.log(products);
   const [cart,setCart]=useState(savedCart);
   const handleRemoveFromCart=(id)=>{
    console.log(id);
    const remaining=cart.filter(product=>product.id!== id);
    setCart(remaining);
    removeFromDb(id);
   }
   const handleClearCart =()=>{
    setCart([]);
    deleteShoppingCart();
}
    return (
        <div className='shop-container'>
           <div className='review-container'>
           {
            cart.map(product=><ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
           }
           </div>
           <div className='Cart-container'>
              <Cart cart={cart}
              handleClearCart={handleClearCart}>
                <Link className='proceed-link' to="/checkout">
                    <button className='btn-proceed'>Proceed Checkout</button>
                </Link>
                </Cart>
           </div>
        </div>
    );
};

export default Orders;