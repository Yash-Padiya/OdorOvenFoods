import React from 'react'
import { useNavigate } from 'react-router-dom'
function MsgForPlaceOrder() {
    const navigate = useNavigate();
  return <>
  <h3 className='text-3xl font-semibold ml-3 mt-4 text-neutral-800'>Hi, There. Thanks for reviewing my Food Delievery App Project. <br /> I hope you do liked the project. <br />I appreciate the suggetions and honest reviews. <br />Thank you. </h3>
  <div className='flex justify-center items-center'>
  <button type="submit" className=' bg-green-500 hover:bg-green-600 rounded px-3 py-1 text-1xl text-white font-semibold mt-10 w-full lg:w-[33%]' onClick={()=>{navigate("/")
    location.reload();}} >Go Back To Home</button>
  </div>
  </>
}

export default MsgForPlaceOrder
