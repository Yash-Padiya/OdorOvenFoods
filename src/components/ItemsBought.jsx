import React from 'react'

function ItemsBought({item,itemQuantity}) {
  return <>
  <div className="p-5 w-full lg:w-[35rem] flex justify-center items-center rounded-lg ">
        <img
            src={item.img}
            alt=""
            className="w-10 h-[40px]"
        />
        <div className="flex items-center justify-between w-full ">
              <h3 className="font-semibold text-lg text-wrap lg:text-nowrap pl-1">{item.name}</h3>
              <span className=" text-gray-800 float-right font-medium">₹{item.price}</span>
        </div>
        <h3 className="font-semibold text-lg text-nowrap ml-4 text-neutral-500">Quantity: {itemQuantity}</h3>
        <h3 className="font-semibold text-lg text-nowrap ml-4 text-gray-800">: ₹{itemQuantity * item.price}</h3>
    </div>
  </>
}

export default ItemsBought
