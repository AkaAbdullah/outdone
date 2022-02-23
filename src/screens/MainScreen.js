import React from 'react'
import NavigationBar from '../components/NavigatiionBar.jsx'
import { useState } from 'react'
import Step2 from '../components/Form/Step2'
import Landingpage from './Landingpage.js'
import Form from '../components/Form/Form.jsx'

const MainScreen = () => {

    const [page, setPage]= useState(0)
    const PageDisplay = () => {
      if(page === 0){
        return <Landingpage />
      }else if (page ===1){
        return <Form />
      }else if (page ===2){
          return <Step2/>
      }
    }
  
  return (
    <>
        <div>
            <NavigationBar/>
        </div>
        <div>
            {PageDisplay()}
        </div>
        <div className='has-text-centered'>
            <button onClick={() => {setPage((currPage) =>currPage +1)}}  className='button is-success '>NEXT</button>
        </div>
    </>
  )
}

export default MainScreen