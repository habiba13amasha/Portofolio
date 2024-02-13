import React from 'react'
import "./mainContent.css"
export default function MainContent() {
  return (
    <main className='main'>
      <div className='left-side'>
        <button className='active'>all Projects</button>
        <button>Html & Css</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </div>
      <div className='right-side'>
      {[1,2,3,4,5,6].map((item)=>{
        return(
          <article className='card' key={item} >
          <img width={230} src="../public/code-image.png" alt="" />
          <div className="box" style={{width:"230px"}}>
            <h1 className='titel'>Airbnb Clone with NEXT.JS! </h1>
            <p className='subtitel'>In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.</p>
            <div className="links">
             <div className='icons'>
              <div className="icon-unlink"/>
              <div className="icon-github"/>
             </div>
             <a href='https://www.youtube.com/watch?v=yelcI4CFN_o' className='more-link'>more
             <span  className='icon-arrow-right'></span>
             </a>
            </div>
          </div>
        </article>
        )
      })}
      </div>
    </main>
  )
}
