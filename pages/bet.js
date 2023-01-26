import React from 'react'
import Header from '../components/Header'
import MyTable from '../components/Table'
import Buttons from '../components/Buttons'
import BetButtons from '../components/BetButtons'
import AdminButton from '../components/AdminButton'


function bet() {

  function placeBet(){ //checks if bettingAmount and bettingNumber is provided and if it is done so, then it is displayed
    let bettingAmount = document.getElementById("bettingNumber").value //gets bettingAmount from BetButtons.jsx
    let bettingNumber = document.getElementById("bettingAmount").value //gets bettingNumber from Buttons.jsx
    console.log(bettingAmount)
    console.log(bettingNumber)
    if(bettingNumber == undefined || bettingAmount == undefined){
      alert("please, put the betting Amount and/or betting Number before clicking on place bets")
    } else {
      document.getElementById("selectedBettingAmount").innerHTML = `your betting amount : ${bettingAmount}`;
      document.getElementById("selectedBettingNumber").innerHTML = `your betting number : ${bettingNumber}`;
    }
  }

function updateTable(){
  let finalTime = document.querySelector('#countDownTime').innerText;
  let winningNumber = document.getElementById("winningNumber").value;
  let winningTime = document.getElementById("currentTime").innerHTML;
  console.log(finalTime, winningNumber, winningTime)
  if(finalTime == "0:00"){
    document.getElementById("resultTime").innerHTML=winningTime;
    document.getElementById("resultValue").innerHTML=winningNumber;
  }
} 

setInterval(updateTable, 1000);



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
    <div id='selectedBettingNumber' className="text-white"> </div>
    <div id='selectedBettingAmount' className="text-white"> </div>
    <button onClick={() => placeBet()} className="bg-purple-200 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4 ml-0">place bets</button>
    <h1 className="text-white">Admin Panel</h1>
    <AdminButton/>
    </main>
  )
}

export default bet