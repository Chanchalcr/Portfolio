import React from 'react'
import SlideShow from '../SlideShow/SlideShow'
import './About.css'
import humble from '../../img/humble.png'
// import SlideShow from '../SlideShow/SlideShow.css'
import img1 from './pics/img0.jpg'
import img2 from './pics/img1.jpg'
import img3 from './pics/img2.jpg'
import img4 from './pics/img3.jpg'
import img5 from './pics/img4.jpg'
import Resume from './Chanchal_Resume_2022 (3).pdf'
import {themeContext} from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'

export default function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='aboutMe' id='About'>
      <div className="a-left">
        <span className='heading1' style={{color: darkMode? 'white' : ''}}>ABout</span>
        <span className='heading2'> Me</span>
        <div className='bio'>Innovative Web Developer and a Student. I am pursuing an engineering degree from Manipal University. I am a passionate coder and I love to play my guitar and sing Bollywood songs. I also create art in my free time.                             <br/><br/> I enjoy connecting with people and I am open to interesting work offers from clients in India and abroad, so send me a quick email and we can take it from there.</div>
        <a href={Resume} download>
        <button className='button btn-abt'>Download CV</button>
        </a>
      </div>
      <motion.div 
      initial = {{left: ' 10%'}}
      whileInView ={{left: '0%'}}
      transition ={{duration:'1', type:'spring'}}
      className='a-right'>
        <img src={humble} alt="" className='hum'/>
        <SlideShow imgs={[img1,img2,img3,img4,img5]}/>
        <div className="blur" style={{background: '#C1F5FF', right:'0%'}}>
        </div>
        <div className="blur" style={{background:"rgb(238 210 255)", top:'14rem', width:'21rem', height:'11rem', left: '-22rem'}}></div>
      </motion.div>
    </div>
  )
}
