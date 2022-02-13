import React, { useState } from 'react';
import './style.scss'

export const Main = () => {

  const [ slideItems, setSwitchItems ] = useState([])

  return (
    <div className='main app-page' >
      <div className='main-slider' >
        <div className='main-slider-slides'>
            <video className='main-slider-slide-item' width="750" height="500" autoPlay muted loop >
              <source src='https://jolybell.com/video/slider/SygSecTq61CKMMZ.mp4?' type="video/mp4" />
            </video>
        </div>
        <div className='main-slider-switch'>
          {
            slideItems.map(item => <div className='main-slider-switch-item'/>)
          }
        </div>
      </div>
      <div className='main-phrase' >
        <div className='main-phrase-content' >
          <div className='main-phrase-text' >
            Есть только <span>белый</span> и чёрный. Остальные - оттенки.
          </div>
        </div>
      </div>
    </div>
  )
}