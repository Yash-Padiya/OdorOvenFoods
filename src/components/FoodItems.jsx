import React from 'react'
import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'

function FoodItems() {
  const FoodData = useSelector(store=>store.foodItems);

  return <>
  <div className='container flex flex-wrap gap-3 lg:gap-10 justify-center px-4 pt-8 lg:pt-8 lg:justify-normal lg:pl-[60px] md:justify-center md:pl-[60px] md:pt-8'>
    {
      FoodData.map(item =>{
        return <FoodCard item ={item}/>
      })
    }
  </div>
  </>
}

export default FoodItems
