import React from "react";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Chanchal from '../../img/chanchal.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FlotingDiv from "../FlotingDiv/FlotingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

export default function Intro() {
  const transition = {duration : 2, type : 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white' : ''}}>Hi! I'm </span>
          <span>Chanchal</span>
          <span><Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString("I am an engineering student and a tech enthusiast. I love full-stack web development and coding Java!")
              .start();
            }}
          /></span>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
        <motion.button 
        whileTap={{scale : 0.95}}
        className="button i-button">Hire_me</motion.button>
        </Link>
        <div className="i-icons">
            <a href="https://github.com/Chanchalcr" target="_blank" rel="noreferrer">
            <img src={Github} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/chanchal-rai-4456b2216/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt=""/>
            </a>
            <a href="https://www.instagram.com/chanchal.rai.8/?hl=en" target="_blank" rel="noreferrer">
            <img src={Instagram} alt=""/>
            </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Chanchal} alt="" width={500}/>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div className="imogi">
        <img src={glassesimoji} alt=""/>
        </div>
        <motion.div 
        initial ={{top: '64%', left : '-20%'}}
        whileInView = {{left:'0%'}}
        transition ={transition}
        className = 'floating-div one'
        style={{top:"64%", left: "-20%", zIndex:'2'}}>
          <FlotingDiv image={crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div 
        initial ={{top: '38%', left : '90%'}}
        whileInView = {{left:'77%'}}
        transition ={transition}
        className = 'floating-div two'
        style={{top:"38%", left: "90%", zIndex: '2'}}>
          <FlotingDiv image={thumbup} txt1='Data' txt2='Structures'/>
        </motion.div>
        <motion.div
         initial ={{top: '64%', left : '90%'}}
         whileInView = {{left:'60%'}}
         transition ={transition}
         className = 'floating-div three'
         style={{top:"64%", left: "70%", zIndex: '2'}}>
          <FlotingDiv image={thumbup} txt1='Algorithms' txt2=''/>
        </motion.div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}>
        </div>
        <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left: '-9rem'}}></div>
      </div>
    </div>
  );
}
