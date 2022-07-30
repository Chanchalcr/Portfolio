import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='n-wrapper'>
      <div className="n-left">
        <div className="n-name">Chanchal</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
        </div>
        <button className="button n-button">
            Contact
        </button>
      </div>
    </div>
  )
}
