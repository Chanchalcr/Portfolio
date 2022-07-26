import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import BlackJack from './promo/Black.png'
import Skill from './promo/skill.png'
import Snake from './promo/snake.png'
import Weather from './promo/weather.png'
import {themeContext} from '../../Context'
import { useContext } from "react";
export default function Projects() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Projects'>
      <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
      <span >Portfolio</span>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <a href="https://github.com/sarthakx30/Skill-Ladder"><img src={Skill} alt="" className='proimg'/></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://github.com/Chanchalcr/Snake_Mania"><img src={Snake} alt="" className='proimg'/></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://github.com/Chanchalcr/Blackjack-Game"><img src={BlackJack} alt="" className='proimg'/></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://github.com/Chanchalcr/Weather_App"><img src={Weather} alt="" className='proimg'/></a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
