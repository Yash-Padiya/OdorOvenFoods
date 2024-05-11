import React from 'react'
import EmptyCartImg from "../assets/emptyCart.svg";
function EmptyCart() {
  return <img src={EmptyCartImg} alt={<h3>Your Cart is Empty</h3>} className='w-[600px] h-[500px] mt-24 lg:mt-10 ' />
}

export default EmptyCart
