import React from 'react'
import Typical from 'react-typical'
import './typicalinput.css'

const TypicalInput = () => {
  return (
    <div className='typicalstyle'>
        <Typical
        steps={['16', 1000, '25', 1000, '35',1000, '18',1000 , '60', 1000]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
  )
}

export default TypicalInput