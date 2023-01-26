import React from 'react';

const AdminButton=()=> {
    function selectWinner(id) {
        let winnerNumber = document.querySelector(id).innerHTML;
        document.getElementById("winningNumber").value = winnerNumber;
   }
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-0.5 h-[400px] w-[500px]">
        <div className="col-span-1 row-span-1  ">
       
            <button  onClick={() => selectWinner('#winnerNumber1')} id="winnerNumber1"  className="bg-blue-500  rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 1
            </button>
       
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber2')} id="winnerNumber2" className="bg-green-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 2
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber3')} id="winnerNumber3" className="bg-red-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 3
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber4')} id="winnerNumber4" className="bg-yellow-500 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4">
                 4
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber5')} id="winnerNumber5" className="bg-purple-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 5
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber6')} id="winnerNumber6" className="bg-pink-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 6
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber7')} id="winnerNumber7" className="bg-teal-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 7
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber8')} id="winnerNumber8" className="bg-indigo-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 8
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber9')} id="winnerNumber9" className="bg-orange-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 9
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber10')} id="winnerNumber10" className="bg-gray-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 10
            </button>
        </div>
        <div className="col-span-1 row-span-1">
        <button  onClick={() => selectWinner('#winnerNumber11')} id="winnerNumber11" className="bg-green-200 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4">
                 11
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button  onClick={() => selectWinner('#winnerNumber12')} id="winnerNumber12" className="bg-purple-200 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 12
            </button>
        </div>
        <div id="winningNumber" value=""></div>
        
    </div>
  );
}

export default AdminButton;