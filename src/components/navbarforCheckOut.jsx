import React from 'react'
import Logo from '../assets/FoodFavicon.png';

function NavbarforCheckOut() {
  return <nav className='bg-orange-50 p-2'>
  <div className='flex justify-normal items-center'>
    <img src={Logo} alt="" className='w-16 h-16'/>
    <h1 class="text-3xl font-bold ml-4">OdorOven Foods</h1>
  </div>
</nav>
}

export default NavbarforCheckOut
