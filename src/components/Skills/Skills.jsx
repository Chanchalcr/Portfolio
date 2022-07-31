import React from "react";
import "./Skills.css";
import Html from './logos/html.png'
import Sql from './logos/html (2).png'
import Clan from './logos/html (3).png'
import Java from './logos/html (4).png'
import Rea from './logos/html (5).png'
import {themeContext} from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'

export default function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skills" id="Skills">
      <h1 style={{color: darkMode? 'white' : ''}}>Skills</h1>
      <motion.div 
      initial = {{ marginTop : '6rem'}}
      whileInView = {{ marginTop : ' 2rem'}}
      transition = {{duration: '1', type: 'spring'}}
      className="contain">
      <img src={Html} alt="" className="skillLogo1"/>
      <img src={Rea} alt="" className="skillLogo"/>
      <img src={Java} alt="" className="skillLogo"/>
      <img src={Clan} alt="" className="skillLogo"/>
      <img src={Sql} alt="" className="skillLogo"/>
      </motion.div>
    </div>
  );
}
