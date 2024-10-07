// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import sign from '../../../assets/logo_bl.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1> Judiciary of Tanzania </h1>
        <button className='btn'><img src={sign} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
