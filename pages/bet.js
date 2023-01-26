import React from 'react'
import Header from '../components/Header'
import MyTable from '../components/Table'
import Buttons from '../components/Buttons'
import BetButtons from '../components/BetButtons'

function bet() {
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
    </main>
  )
}

export default bet