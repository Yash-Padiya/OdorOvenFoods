import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { CartActions } from '../Store/slices/Cart';
import { QuantitySliceActions } from '../Store/slices/Quantity';
import { TotalPriceActions } from '../Store/slices/TotalPrice';

function AddedItems({item}) {
  const quantity = useSelector(store => store.quantity);
  const dispatch = useDispatch();
  const handleDelete = ()=>{
    dispatch(CartActions.discardFromCart(item.id));
    dispatch(QuantitySliceActions.deleteProperty(item.id));
    dispatch(TotalPriceActions.deleteAmount([item.price,quantity[item.id]]));
  }
  const handleAddQuantity = ()=>{
    dispatch(TotalPriceActions.updateAmount(item.price));
    dispatch(QuantitySliceActions.addQuantity(item.id));
  }
  const handleSubtractQuantity = ()=>{
    dispatch(QuantitySliceActions.subQuantity(item.id));
    if(quantity[item.id] > 1)
      dispatch(TotalPriceActions.subtractAmount(item.price));
  }
  return <div className='flex flex-row items-center py-1 px-2 shadow-md rounded-md mt-1'>
    <div>
      <img src={item.img} alt="" className='h-12 w-12'/>
    </div> 
    <div className='flex flex-col flex-1 gap-y-2'>
        <div className='flex justify-between items-center'>
            <h4 className='font-semibold text-stone-800'>{item.name}</h4>
            <button type="button"className='hover:bg-red-500 border-2 border-gray-500 hover:text-white rounded-md transition-all ease-linear' onClick={()=>handleDelete()}>
            <MdOutlineDelete size={18}/></button>
        </div>
        <div className='flex justify-between items-center px-1'>
            <h4 className='font-semibold text-green-600'>₹ {item.price}</h4>
            <div className='flex gap-x-2'>
            <button type="button" className=' border-2 border-black rounded-md p-1 hover:bg-green-400 transition-all ease-linear' onClick={()=>handleSubtractQuantity()}>
              <FaMinus size={11}/></button>
            <h3 className='font-semibold'>{quantity[item.id]}</h3>
            <button type="button" className=' border-2 border-black rounded-md p-1 hover:bg-green-400 transition-all ease-linear' onClick={()=>handleAddQuantity()}>
              <FaPlus size={11}/></button>
            </div>
        </div>
    </div>
  </div>
}

export default AddedItems
