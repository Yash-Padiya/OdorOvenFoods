import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../Store/slices/Cart";
import { QuantitySliceActions } from "../Store/slices/Quantity";
import { TotalPriceActions } from "../Store/slices/TotalPrice";

function FoodCard({item}) {
  const dispatch = useDispatch();
  const quantity = useSelector(store => store.quantity);
  const[isFocused,setFocus] = useState(false);

  const handleAddToCart = ()=>{
    if(item.id in quantity){
    dispatch(QuantitySliceActions.initialiseQuantity(item.id));
  }
  else{
    dispatch(CartActions.addToCart(item));
    dispatch(QuantitySliceActions.initialiseQuantity(item.id));
  }
  dispatch(TotalPriceActions.updateAmount(item.price))
  }
  return (
    <>
      <div className="p-5 bg-white lg:w-[20rem] flex lg:flex-col sm:flex-row justify-center items-center rounded-lg">
        <img
            src={item.img}
            alt=""
            className="lg:w-auto w-[100px] h-[90px] lg:h-[140px] hover:scale-[1.02] lg:hover:scale-110 hover:cursor-grab transition-all duration-300 ease-out"
        />
        <div className="ml-2 lg:ml-0 ">
          <div className="flex items-center justify-between w-full lg:mt-2 ">
              <h3 className="font-semibold text-xl lg:text-2xl">{item.name}</h3>
              <span className=" text-red-600 float-right font-medium">₹{item.price}</span>
          </div>
          <p className="text-justify" onClick={()=>setFocus(!isFocused)}>
              {isFocused ? item.desc :item.desc.slice(0,50)}...
          </p>
          <div className={`flex items-center justify-between w-full ${item.name.length >=19 ? "mt-3" : "mt-7"}`}>
            <span className="flex items-center gap-1"><FaRegStar/>{item.rating}</span>
            <button type="button" className="font-semibold text-white text-1xl bg-green-600 hover:bg-green-500 hover:scale-100 px-2 py-1 rounded flex gap-x-2" onClick={()=>handleAddToCart()}><BsFillCartPlusFill size={24}/> Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
