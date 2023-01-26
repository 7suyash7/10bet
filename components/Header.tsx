import React, { useEffect, useState } from 'react'
import CountdownTimer from './CountDownTimer';
import MyTable from './Table';

function Header() {

  const getFormattedTime = () => {
   const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  return `${hour}:${minute < 10 ? '0' : ''}${minute} ${ampm}`;
}

  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  
  

  return (
    <div className='flex'>
      <h1 className='text-[30px] pl-[30px] text-white'>Balance: {/*Moneyhere*/}</h1>

      <h1 className='text-white text-[30px] pl-[250px] font-mono'>Draw:{time}</h1>
      <div className='pl-[40px]'>
      <CountdownTimer/>
      </div>

      <div className='pl-[150px] mt-[10px] flex space-x-5 '>
        <img className='h-[35px]' src='/question.png'/>
        <img className='h-[35px]' src='/refresh.png'/>
        <img className='h-[35px]' src='/close.png'/>
      </div>

    </div>

  )
}

export default Header
