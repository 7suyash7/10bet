import React, { useState } from 'react';
import Header from "../components/Header"
import AdminButton from "../components/AdminButton";

function AdminPanel() {

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
        if(winningNumber == ""){
            winningNumber = Math.floor((Math.random() * 12) + 1);
        }
        let obj = {time: winningTime, number: winningNumber}
        setDataArray([...dataArray, obj])
        winningNumber = "";
    }
  } 
  
  setInterval(updateTable, 1000);
  
  
    return (
        <main>
            <Header/>
            <div className='mt-[-0px] ml-[1050px]'>{renderTable()}</div>
            <AdminButton/>
        </main>
    )
}

export default AdminPanel;