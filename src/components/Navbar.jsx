import React, { useRef } from 'react';
import Logo from '../assets/FoodFavicon.png'
import { useDispatch } from 'react-redux';
import { FoodItemsActions } from '../Store/slices/FoodItemsSlice';
import { GrLocationPin } from "react-icons/gr";

function Navbar() {
  const dispatch = useDispatch();
  const currentSearch = useRef();
  const handleInput = (event)=>{
    const allowedValue = /^[a-zA-Z0-9]$/
    if(event.key.match(allowedValue)){
      dispatch(FoodItemsActions.searchProduct(currentSearch.current.value));
    }
    else if(event.key ==='Backspace'){
      dispatch(FoodItemsActions.listAll())
      let newStr = currentSearch.current.value.slice(0,-2);
      dispatch(FoodItemsActions.searchProduct(newStr));
    }
  }
  return <nav className='bg-orange-50 p-2'>
    <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div className='flex justify-between items-center'>
        <img src={Logo} alt="" className='w-16 h-16'/>
        <h1 class="text-3xl font-bold ml-4 text-gray-900">OdorOven Foods</h1>
        </div>
        <div className='flex gap-x-6 lg:gap-32 items-center justify-center mt-5 lg:mt-0'>
        <input type="textbox" className="w-full lg:w-[35vw] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-3 focus:ring-offset focus:ring-amber-400 sm:text-sm sm:leading-6" placeholder="Find your food" ref={currentSearch} onKeyDown={handleInput} />
        <h3 className='text-base lg:text-lg font-semibold border-b-2 border-b-gray-700 border-dashed text-gray-800 flex items-center'><GrLocationPin />Mumbai,MH</h3>
        </div>
    </div>
  </nav>
}

export default Navbar