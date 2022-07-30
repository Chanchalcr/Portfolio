import React from 'react'
import { useState } from 'react'
import './SlideShow.css'

export default function SlideShow({imgs}) {
  const [index,setIndex] = useState(0)
  function pre(){
    if(index === 0) {
      setIndex(imgs.length-1)
    } else {
      setIndex(index-1)
    }
  }
  function nex(){
    if(index === imgs.length-1) {
      setIndex(0)
    } else {
      setIndex(index+1)
    }
  }
  return (
    <div className='slide'>
      <img src={imgs[index]} alt="" className='photo'/>
      <button className='previous' onClick={pre}>&#8592;</button>
      <button className='next' onClick={nex}>&#8594;</button>
    </div>
  )
}
