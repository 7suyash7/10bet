import React from 'react'
import Header from '../components/Header'
import MyTable from '../components/Table'
import Buttons from '../components/Buttons'
import BetButtons from '../components/BetButtons'


function bet() {
  function placeBet(){
    let bettingAmount = document.getElementById("bettingNumber").value
    let bettingNumber = document.getElementById("bettingAmount").value
    console.log(bettingAmount)
    console.log(bettingNumber)
    if(bettingNumber == undefined || bettingAmount == undefined){
      alert("please, put the betting Amount and/or betting Number before clicking on place bets")
    } else {
      // whatever you want to do with the data.
    }
  }

  return (
    <main>
    <Header/>
    <div className='mt-[-70px] ml-[1050px]'>
      <MyTable/>
      </div>
      <div className='ml-[50px] mt-[-100px]'>
    <Buttons/>
    </div>  
    <BetButtons/>
    <div className='selectedBettingAmount'></div>
    <div className='selectedBettingNumber'></div>
    <button onClick={() => placeBet()} className="bg-purple-200 rounded-full h-[100px] w-[100px] text-white font-bold py-2 px-4"></button>
    </main>
  )
}

export default bet