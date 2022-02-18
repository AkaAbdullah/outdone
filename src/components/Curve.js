import React from 'react';
import image from '../Assets/edit.png'

const Curve = () => {
  return (
      <>
    <div className='background-clr'>
    <div className='heading'>
        <p>Gift with<br/>Confidence</p>

    </div>
    <div className='main-image'>
    <img src={image} className="image-prop" alt="imags" ></img>
    </div>
    </div>
    <div className='curve'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L80,186.7C160,149,320,75,480,74.7C640,75,800,149,960,170.7C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
    </>
  )
}

export default Curve