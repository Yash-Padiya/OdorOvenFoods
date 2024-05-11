import React, { useState }  from 'react'
import { IoClose } from "react-icons/io5";
import AddedItems from './AddedItems';
import {useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import EmptyCart from './EmptyCart';
import {useNavigate } from 'react-router-dom';

function Cart() {
  const {cartItems} = useSelector(state => state.cart);
  const AmountPayable = useSelector(store => store.amountPayable);
  const [isActiveCart,setActiveCart] = useState(false);
  const navigate = useNavigate();
  const handlePlaceOrder = ()=>{
    if(cartItems.length>0)
      navigate("/checkout");
  }
  return <>
  <div className={`fixed right-0 top-0 lg:w-[20vw] w-full bg-white h-full ${isActiveCart ? "translate-x-0" : "translate-x-full"} transition-all duration-300 z-50 scroll-smooth`}>
    <div className='flex justify-between items-center pt-4 px-2 mb-2 '>
        <h4 className='text-3xl font-semibold text-gray-500'>My Order</h4>
        <button type="button" className='hover:bg-red-500 hover:text-white border-2 rounded-lg border-gray-500 transition-all ease-linear'
        onClick={()=>setActiveCart(false)}
        >
        <IoClose size={25}/></button>
    </div>
    <div className='max-[430px]:h-[53%] max-sm:h-[75%] lg:h-[75%]  overflow-y-auto scrollbar'>
    {cartItems.length==0 ? <EmptyCart /> :cartItems.map(item=><AddedItems item={item}/>)}
    </div>

    <div className={`p-2 ${cartItems.length>=7 ? "fixed" : "absolute"} max-[430px]:top-[60%] max-sm:top-[85%] md:top-[85%] lg:top-[85%] w-full bg-white`}>
      <h3 className=' font-semibold text-stone-800'>Items: {cartItems.length}</h3>
      <h3 className=' font-semibold text-stone-800'>Total Amount: ₹ {AmountPayable}</h3>
      <hr className=' h-1 bg-gray-300 rounded-sm'/>
      <button type="button" className=' bg-green-500 hover:bg-green-600 rounded px-3 py-1 text-1xl text-white font-semibold mt-1 w-full' onClick={handlePlaceOrder}>Place Order</button>
    </div>
  </div>
  <button className={`bg-amber-500 p-4 shadow-2xl rounded-full cursor-pointer hover:bg-amber-600 hover:text-white z-10 border-2 border-gray-500 ${cartItems.length>=1 ? "animate-bounce" : ""} max-[430px]:top-[58%] max-[430px]:left-[68%] max-sm:top-[75%] max-sm:left-[75%] max-[820px]:top-[45%] max-[820px]:left-[80%]  lg:top-[75%] lg:left-[85%] fixed h-auto w-auto`} onClick={()=>setActiveCart(true)}>
    <FaCartShopping size={45}/>
    <span className=' absolute right-1 top-[-14px] bg-amber-500 px-3 rounded-full z-20 text-green-800 font-bold text-[1.3rem]  '>{cartItems.length>=1 ? cartItems.length : "" }</span>
  </button>
  </>

}

export default Cart
