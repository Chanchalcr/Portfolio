import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

export default function Footer() {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: '100%'}}/>
      <div className="f-content">
        <span>chanchalrai193@gmail.com</span>
        <div className="f-icons">
            <a href="https://github.com/Chanchalcr" target="_blank" rel="noreferrer"><Github color='white' size='3rem' /></a>
            <a href="https://www.linkedin.com/in/chanchal-rai-4456b2216/" target="_blank" rel="noreferrer"><Facebook color='white' size='3rem' /></a>
            <a href="https://www.instagram.com/chanchal.rai.8/?hl=en/" target="_blank" rel="noreferrer"><Insta color='white' size='3rem' /></a>
        </div>
      </div>
    </div>
  )
}
 