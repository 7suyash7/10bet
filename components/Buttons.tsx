import React from 'react';

const MyButtons = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-0.5 h-[400px] w-[500px]">
        <div className="col-span-1 row-span-1  ">
       
            <button className="bg-blue-500  rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 1
            </button>
       
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-green-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 2
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-red-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 3
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-yellow-500 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4">
                 4
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-purple-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 5
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-pink-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 6
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-teal-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 7
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-indigo-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 8
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-orange-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 9
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-gray-500 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 10
            </button>
        </div>
        <div className="col-span-1 row-span-1">
        <button className="bg-green-200 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4">
                 11
            </button>
        </div>
        <div className="col-span-1 row-span-1">
            <button className="bg-purple-200 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4">
                 12
            </button>
        </div>
    </div>
  );
}

export default MyButtons;
