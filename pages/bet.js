import React, {useState} from 'react'
import Header from '../components/Header'
import Buttons from '../components/Buttons'
import BetButtons from '../components/BetButtons'
import AdminButton from '../components/AdminButton'


function bet() {
  const selectedBets = [];

  function placeBet(){ //checks if bettingAmount and bettingNumber is provided and if it is done so, then it is displayed
    let bettingAmount = document.getElementById("bettingNumber").value //gets bettingAmount from BetButtons.jsx
    let bettingNumber = document.getElementById("bettingAmount").value //gets bettingNumber from Buttons.jsx
    // console.log(bettingAmount)
    // console.log(bettingNumber)
    if(bettingNumber == undefined || bettingAmount == undefined){
      alert("please, put the betting Amount and/or betting Number before clicking on place bets")
    } else {
      document.getElementById("selectedBettingAmount").innerHTML = `your betting amount : ${bettingAmount}`;
      document.getElementById("selectedBettingNumber").innerHTML = `your betting number : ${bettingNumber}`;
      let obj = {Amount: bettingAmount, Number: bettingNumber};
      selectedBets.push(JSON.stringify(obj));
      document.getElementById("placedBets").innerHTML = selectedBets;
    }
  }


 // Use the useState hook to store the data for the table
 const [dataArray, setDataArray] = useState([
  { time: 'Time', number: 'Result'},
]);

// Function to render the table
function renderTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr className='text-white font-bold uppercase' key={index}>
            <td className="border px-4 py-2 bg-red-600">{item.time}</td>
            <td className="border px-4 py-2 bg-red-600">{item.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function updateTable(){
  let finalTime = document.getElementById('countDownTime').innerText;
  let winningNumber = document.getElementById("winningNumber").value;
  let winningTime = document.getElementById("currentTime").innerHTML;
  // console.log(finalTime, winningNumber, winningTime)
  if(finalTime == "0:00"){
    let obj = {time: winningTime, number: winningNumber}
    setDataArray([...dataArray, obj])
  }
} 

setInterval(updateTable, 1000);


  return (
    <main>
    <Header/>
    <div className='mt-[-0px] ml-[1050px]'>
      {renderTable()}
    </div>
    <div className='ml-[50px] mt-[0px]'>
      <Buttons/>
    </div>  
      <BetButtons/>
    <div id='selectedBettingNumber' className="text-white"> </div>
    <div id='selectedBettingAmount' className="text-white"> </div>
    <button onClick={() => placeBet()} className="bg-purple-200 rounded-full h-[100px] w-[100px] text-black font-bold py-2 px-4 ml-0">place bets</button>
    <div id="placedBets" className="text-white"></div>
    <h1 className="text-white">Admin Panel</h1>
    <AdminButton/>
    </main>
  )
}

export default bet