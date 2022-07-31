import React from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";
import {themeContext} from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'

export default function Contact() {
  
    const form = useRef();
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j3bdx2s', 'template_7fv9mt6', form.current, 'DHVmlH1243MKSzSrs')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact" id="Contact">
      <div className="c-left">
        <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
        <span>Contact me</span>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="text"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <motion.input 
          whileTap={{scale : 0.95}}
          type="submit" value="Send" className="button" />
          <span style={{color: darkMode? 'white' : ''}}>{done && "Thanks for containing me"}</span>
          <div
            className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}
