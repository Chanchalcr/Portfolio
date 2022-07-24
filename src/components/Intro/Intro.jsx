import React from "react";
import "./Intro.css";
// import Typewriter from "typewriter-effect";
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Chanchal from '../../img/chanchal.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString("Hi! I'm ")
              .start();
            }}
          /> */}
          <span>Hi! I'm </span>
          <span>Chanchal</span>
          <span>I am an engineering student and a tech enthusiast. I love full-stack web development and coding Java!</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href="https://github.com/Chanchalcr" target="_blank">
            <img src={Github} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/chanchal-rai-4456b2216/" target="_blank">
            <img src={LinkedIn} alt=""/>
            </a>
            <a href="https://www.instagram.com/chanchal.rai.8/?hl=en" target="_blank">
            <img src={Instagram} alt=""/>
            </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Chanchal} alt="" width={500}/>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
      </div>
    </div>
  );
}
