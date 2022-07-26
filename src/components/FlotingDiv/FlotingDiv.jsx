import React from 'react'
import './Floting.css'

export default function FlotingDiv({image, txt1,   txt2}) {
  return (
    <div className='floatingdiv'>
      <img src={image} alt="" />
      <span>
        {txt1} 
        <br/>
        {txt2}
      </span>
    </div>
  )
}
