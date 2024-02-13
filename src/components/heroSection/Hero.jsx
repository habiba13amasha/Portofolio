import React from 'react'
import "./hero.css"
import Lottie from "lottie-react"
import DevAnimation from "../../../public/animation/DevAnimation.json"
import { motion } from "framer-motion"
export default function Hero() {
  return (
    <section className='hero  flex'>
       <div className='left-section'>
        <div className="parent-avatar ">
          <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:2}}
          src='../public/photo_2022-05-25_17-08-14-modified.png' className='avatar'/>
          <span className='icon-star'></span>
          <motion.h1 initial={{scale:0}} animate={{scale:1}} transition={{duration:2}} 
          className='titel'>Software designer founder,and amateuar astronaut. </motion.h1>
          <p className='subtitel'>I’m Habiba Amasha, and my mission is to provide a High-Quality Arabic Content which focused on project-base courses, and start every course from scratch by building Real-World Projects to prepare you for today's Job Market.</p>
          <div className="all-icons ">
            <div className="icon  icon-twitter "></div>
            <div className="icon  icon-instagram "></div>
            <div className="icon  icon-github "></div>
            <div className="icon  icon-linkedin-square "></div>
          </div>
        </div>
       </div>
      <div className='right-section animation'>
       <Lottie animationData={DevAnimation}  />
      </div>
    </section>
  )
}
