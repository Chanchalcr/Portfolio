import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className='n-wrapper' id='Navbar'>
      <div className="n-left">
        <div className="n-name">Chanchal</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul>
                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                <li className='one'>Home</li>
                </Link>
                <Link spy={true} to='About' smooth={true}>
                <li className='one'>About</li>
                </Link>
                <Link spy={true} to='Skills' smooth={true}>
                <li className='one'>Skills</li>
                </Link>
                <Link spy={true} to='Projects' smooth={true}>
                <li className='one'>Projects</li>
                </Link>
            </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
        <motion.button 
        whileTap={{scale : 0.95}}
        className="button n-button">
            Contact
        </motion.button>
        </Link>
      </div>
    </div>
  )
}
