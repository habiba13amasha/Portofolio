import React from 'react'
import "./hero.css"
export default function Hero() {
  return (
    <section className='hero  flex'>
       <div className='left-section'>
        <div className="parent-avatar ">
          <img src='../public/photo_2022-05-25_17-08-14-modified.png' className='avatar'/>
          <span className='icon-star'></span>
          <h1 className='titel'>Software designer founder,and amateuar astronaut.</h1>
          <p className='subtitel'>I’m Habiba Amasha, and my mission is to provide a High-Quality Arabic Content which focused on project-base courses, and start every course from scratch by building Real-World Projects to prepare you for today's Job Market.</p>
          <div className="all-icons ">
            <div className="icon  icon-twitter "></div>
            <div className="icon  icon-instagram "></div>
            <div className="icon  icon-github "></div>
            <div className="icon  icon-linkedin-square "></div>
          </div>
        </div>
       </div>
      <div className='right-section animation'>animation</div>
    </section>
  )
}
