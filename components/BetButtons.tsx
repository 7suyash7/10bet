import React from 'react'

function BetButtons() {
  return (
    <div className=" flex mt-[20px]">

   
        <button className="bg-gray-100  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             10
        </button>
        <button className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             20
        </button>
        <button className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             30
        </button>   <button className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             50
        </button>   <button className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             100
        </button>
        <button className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             500
        </button>

    </div>
  )
}

export default BetButtons
