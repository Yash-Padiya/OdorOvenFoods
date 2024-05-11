import React from 'react'
import { useSelector } from 'react-redux'
import ItemsBought from './ItemsBought';
import Empty from "../assets/emptyCart.svg"
function Billing() {
    const {cartItems} = useSelector(state => state.cart);
    const quantity = useSelector(store => store.quantity);
    const AmountPayable = useSelector(store => store.amountPayable);
    return <> 
  { cartItems.length==0 ?<img src={Empty} className='w-full lg:h-[600px] m-auto' alt="" />:<div>
  <h3 className='text-lg font-semibold ml-3 mt-4 text-neutral-500'>Your Cart :-</h3>
  <div className='flex flex-col justify-center'>
  {cartItems.map(item => <ItemsBought item={item} itemQuantity={quantity[item.id]}/>)}
  </div>
  <hr className='h-1 w-16 bg-black lg:float-none float-end mr-2 lg:ml-[30rem] rounded-full'/>
  <div className='flex px-5 justify-between items-center w-full lg:w-[35rem]'>
  <h3 className='text-lg font-semibold ml-3 mt-4 text-neutral-500'>Total Amount Payable : </h3>
  <h3 className='text-lg font-semibold ml-3 mt-4 text-red-500'>₹ {AmountPayable} </h3>
  </div>
  </div>}
  </>
}

export default Billing
