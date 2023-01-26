import React from 'react'

function BetButtons() {

function btnClick(id) {
     let amount = document.querySelector(id).innerHTML;
     document.getElementById("bettingAmount").value = amount;
}
  return (
    <div className=" flex mt-[20px]">

   
        <button onClick={() => btnClick('#betAmt1')} id="betAmt1" className="bg-gray-100  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             10
        </button>
        <button onClick={() => btnClick('#betAmt2')} id="betAmt2" className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             20
        </button>
        <button onClick={() => btnClick('#betAmt3')} id="betAmt3" className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             30
        </button>   
        <button onClick={() => btnClick('#betAmt4')} id="betAmt4" className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             50
        </button>   
        <button  onClick={() => btnClick('#betAmt5')} id="betAmt5" className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             100
        </button>
        <button  onClick={() => btnClick('#betAmt6')} id="betAmt6" className="bg-gray-100 ml-[60px]  rounded-full h-[70px] w-[70px] text-black font-bold py-2 px-4">
             500
        </button>
        <h3 id='bettingAmount' className='display-none' value=""></h3>

    </div>
  )
}

export default BetButtons
