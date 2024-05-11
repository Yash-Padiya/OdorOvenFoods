import React from 'react'
import Navbar from '../components/Navbar'
import SelectCategory from '../components/SelectCategory'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
function Home() {
  return <>
    <Navbar />
    <SelectCategory />
    <FoodItems />
    <Cart />
  </>
}

export default Home