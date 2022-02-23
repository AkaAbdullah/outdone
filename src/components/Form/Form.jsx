import React from 'react'
import './form.css'
import exit from './exit.svg'
import { useState } from 'react'
import Landingpage from '../../screens/Landingpage'

const Form = () => {
  const [uinput, setUInput]= useState(0)
  console.log(uinput)

  const [close,setClose]= useState(false)


  return (
    <>
    {close 
    ?
    (<Landingpage/>)
    :
    (<div  className='bg'>
    <div>
    <img onClick={(e) =>  setClose(true)} src={exit} className="exit-icon" style={{width:'20px', height:'20px'}} alt ='exit'></img>
    </div>
    <div className='progressbar'>
    <div className='inner-div'></div>
    <div className='inner-div1'></div>
    <div className='inner-div1'></div>
    <div className='inner-div1'></div>
    <div className='inner-div1'></div>
    <div className='inner-div1'></div>
    </div>
    <div className='line1'>
    <p>You’re just a few clicks away from finding the perfect gift! First things first…</p>
    </div>
    <div className='quest'>
      <p>How old is the person you’re shopping for?</p>
    </div>
    <input onChange={(e) => setUInput(e.target.value) } className='input-age' type="number"></input>
    <div>
    <button className='ctn-btn'>CONTINUE</button>
    </div>
    </div>)
    }
    
    </>
  )
}

export default Form