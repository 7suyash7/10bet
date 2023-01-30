import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          return 10; // reset to 3 minutes and 5 seconds
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div id='countDownTime' className='text-green-200 text-[20px] mt-[10px] font-mono'>
      {minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}
    </div>
  );
}

export default CountdownTimer;
