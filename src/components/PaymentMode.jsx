import React from 'react'
import { useSelector } from 'react-redux';

function PaymentMode({setClick}) {
  const {cartItems} = useSelector(state => state.cart);

  return <>
    { cartItems.length==0 ?"":<div>
    <h3 className='text-lg font-semibold mt-3 lg:ml-3 lg:mt-10 text-neutral-800'>Mode Of Payment:</h3>
    <div className='flex flex-col w-full lg:w-[35rem] px-3 '>
        <div className='flex mt-2'>
       <input type="radio" name="mode" id="cash" />
       <h3 className="font-semibold text-lg text-nowrap ml-4 text-gray-800">Pay On Delivery</h3>
       </div>
        <div className='flex mt-2'>
       <input type="radio" name="mode" id="cash" />
       <h3 className="font-semibold text-lg text-nowrap ml-4 text-gray-800">Net banking</h3>
       </div>
        <div className='flex mt-2'>
       <input type="radio" name="mode" id="cash" />
       <h3 className="font-semibold text-lg text-nowrap ml-4 text-gray-800">Pay With UPI</h3>
       </div>
      <div className='flex mt-2'>
       <input type="radio" name="mode" id="cash" />
       <h3 className="font-semibold text-lg text-nowrap ml-4 text-gray-800">Paytm Wallet</h3>
       </div>
       <button type="button" className=' bg-green-500 hover:bg-green-600 rounded px-3 py-1 text-1xl text-white font-semibold mt-8 mb-3 w-full' onClick={()=>setClick(true)} >Place Order</button>
    </div>
    </div>}
  </>
}

export default PaymentMode
