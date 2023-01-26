import React from 'react';

const MyButtons = () => {
    function validate(id) {
        let amount = document.querySelector(id).innerHTML;
        document.getElementById("bettingNumber").value = amount;
   }
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-0.5 h-[400px] w-[500px]">
        <div className="col-span-1 row-span-1  ">
       
            <button  onClick={() => validate('#bettee1')} id="bettee1"  className="bg-blue-500  rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 1
            </button>
       
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee2')} id="bettee2" className="bg-green-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 2
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee3')} id="bettee3" className="bg-red-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 3
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee4')} id="bettee4" className="bg-yellow-500 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4">
                 4
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee5')} id="bettee5" className="bg-purple-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 5
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee6')} id="bettee6" className="bg-pink-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 6
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee7')} id="bettee7" className="bg-teal-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 7
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee8')} id="bettee8" className="bg-indigo-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 8
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee9')} id="bettee9" className="bg-orange-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 9
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee10')} id="bettee10" className="bg-gray-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 10
            </button>
        </div>
        <div className="col-span-1 row-span-1">
        <button  onClick={() => validate('#bettee11')} id="bettee11" className="bg-green-200 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4">
                 11
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => validate('#bettee12')} id="bettee12" className="bg-purple-200 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 12
            </button>
        </div>
        <div id="bettingNumber" className='display-none' value=""></div> {/* We use the bettingNumber div to store value of the bettingNumber selected by the user */}

    </div>
  );
}

export default MyButtons;
