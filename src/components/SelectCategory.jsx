import React, { useRef, useState } from 'react'
import { FoodItemsActions } from '../Store/slices/FoodItemsSlice'
import { useDispatch } from 'react-redux'
import { FaStar } from "react-icons/fa";
import { BiFoodTag } from "react-icons/bi";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";


function SelectCategory() {
  const dispatch = useDispatch();
  const[activeCategory,setActiveCatagory] = useState("All");
  const scrollValue = useRef(null);
  const handleScrollRight = ()=>{
    scrollValue.current.scrollBy({
      left : 600,
      behavior : 'smooth'
    });
  }
  const handleScrollLeft = ()=>{
    scrollValue.current.scrollBy({
      left : -600,
      behavior : 'smooth'
    });
  }
  const handleCategory = (category)=>{
    if(category =="All"){
    setActiveCatagory("All");
    dispatch(FoodItemsActions.listAll());
  }
  if(category =="pizza"){
    setActiveCatagory("pizza");
    dispatch(FoodItemsActions.listAll());
    dispatch(FoodItemsActions.listPizzas());
  }
  if(category =="toprated"){
    setActiveCatagory("toprated");
    dispatch(FoodItemsActions.listAll());
    dispatch(FoodItemsActions.listTopRated());
  }
  if(category =="sandwich"){
    setActiveCatagory("sandwich");
    dispatch(FoodItemsActions.listAll());
    dispatch(FoodItemsActions.listSandwiches());
  }
  if(category =="burger"){
    setActiveCatagory("burger");
    dispatch(FoodItemsActions.listAll());
    dispatch(FoodItemsActions.listBurgers());
  }
  if(category =="coffee"){
    setActiveCatagory("coffee");
    dispatch(FoodItemsActions.listAll());
    dispatch(FoodItemsActions.listCoffee());
  }
  if(category =="pasta"){
    setActiveCatagory("pasta");
    dispatch(FoodItemsActions.listAll());
    dispatch(FoodItemsActions.listPasta());
  }
  if(category =="veg"){
    dispatch(FoodItemsActions.listAll());
    setActiveCatagory("veg");
    dispatch(FoodItemsActions.listVeg());
  }
  if(category =="nonveg"){
    dispatch(FoodItemsActions.listAll());
    setActiveCatagory("nonveg");
    dispatch(FoodItemsActions.listNonVeg());
    }
  }
  return <>
    <h3 className='text-lg font-semibold ml-3 mt-4 text-neutral-500'>Get Yout Favourite Food</h3>
    <div className='relative'>
      <button type="button" className={`absolute top-0 left-0 block lg:hidden z-50 bg-[rgb(238,238,235)] h-full`} onClick={handleScrollLeft}>
      <CiCircleChevLeft size={30} className=' hover:bg-green-300 rounded-full'/>
      </button>
    <div className='flex flex-row justify-start items-center px-9 gap-4 mt-3 overflow-x-scroll lg:px-4 lg:overflow-x-hidden categoryscroll scroll-smooth py-2 z-10
    bg-[rgb(233,235,230)]' ref={scrollValue}>
      <button type="button" className={`${activeCategory=="All" ? "bg-green-500" : "bg-zinc-300"} rounded-md px-2 py-1 hover:bg-green-600 hover:text-white shadow-md text-nowrap`}
      onClick={()=>handleCategory("All")}>All</button>

      <button type="button" className={`${activeCategory=="toprated" ? "bg-green-500" : "bg-zinc-300"} rounded-md px-2 py-1 hover:bg-green-500 hover:text-white flex items-center text-nowrap shadow-md`}
      onClick={()=> handleCategory("toprated")}><FaStar className=' text-yellow-600 mr-1'/>Top Rated</button>

      <button type="button" className= {`${activeCategory=="pizza" ? "bg-green-500" : "bg-zinc-300"} rounded-md px-2 py-1 hover:bg-green-500 hover:text-white shadow-md text-nowrap`}
      onClick={()=> handleCategory("pizza")}>Pizza</button>

      <button type="button" className={`${activeCategory=="sandwich" ? "bg-green-500" : "bg-zinc-300"}  rounded-md px-2 py-1 hover:bg-green-500 hover:text-white text-nowrap shadow-md`}
      onClick={()=> handleCategory("sandwich")}>Sandwiches</button>

      <button type="button" className={`${activeCategory=="burger" ? "bg-green-500" : "bg-zinc-300"}  rounded-md px-2 py-1 hover:bg-green-500 hover:text-white text-nowrap shadow-md`}
      onClick={()=> handleCategory("burger")}>Burgers</button>

      <button type="button" className={`${activeCategory=="coffee" ? "bg-green-500" : "bg-zinc-300"}  hover:bg-green-500 hover:text-white  rounded-md px-2 py-1 text-nowrap shadow-md`}
      onClick={()=> handleCategory("coffee")}>Coffee & Mocktails</button>

      <button type="button" className={`${activeCategory=="pasta" ? "bg-green-500" : "bg-zinc-300"}  hover:bg-green-500 hover:text-white  rounded-md px-2 py-1 text-nowrap shadow-md`}
      onClick={()=> handleCategory("pasta")}>Pasta & Noodles</button>

      <button type="button" className={`${activeCategory=="veg" ? "bg-green-400" : "bg-zinc-300"}  hover:bg-green-300 hover:text-black  rounded-md px-2 py-1 flex gap-1 items-center text-nowrap shadow-md`}
      onClick={()=> handleCategory("veg")}><BiFoodTag className=' text-green-500'/>Veg</button>

      <button type="button" className={`${activeCategory=="nonveg" ? "bg-red-400" : "bg-zinc-300"}  hover:bg-red-300 hover:text-black  rounded-md px-2 py-1 flex gap-1 items-center text-nowrap shadow-md`}
      onClick={()=> handleCategory("nonveg")}><BiFoodTag className=' text-red-600'/>Non-Veg</button>
    </div>
    <button type="button" className='absolute top-0 right-0 h-full z-50 block lg:hidden bg-[rgb(238,238,235)]' 
    onClick={handleScrollRight}>
    <CiCircleChevRight size={30} className=' hover:bg-green-300 rounded-full'/>
    </button>
    </div>
  </>
}

export default SelectCategory
