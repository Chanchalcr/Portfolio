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
export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I'm </span>
          <span>Chanchal</span>
          <span><Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString("I am an engineering student and a tech enthusiast. I love full-stack web development and coding Java!")
              .start();
            }}
          /></span>
        </div>
        <button className="button i-button">Hire_me</button>
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
        <div style={{top:"64%", left: "0%", zIndex:'2'}}>
          <FlotingDiv image={crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:"38%", left: "77%", zIndex: '2'}}>
          <FlotingDiv image={thumbup} txt1='Data' txt2='Structures'/>
        </div>
        <div style={{top:"64%", left: "70%", zIndex: '2'}}>
          <FlotingDiv image={thumbup} txt1='Algorithms' txt2=''/>
        </div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}>
        </div>
        <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left: '-9rem'}}></div>
      </div>
    </div>
  );
}
