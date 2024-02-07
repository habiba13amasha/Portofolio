import React from 'react'
import './appHeader.css'
import { useState } from 'react'
export default function AppHeader() {
  const [showmodel,setshowmodel]=useState(false)
  return (
    <header className='flex'>
      <button className='menu  icon-menu  flex' onClick={()=>{ setshowmodel(true);}} />
      <div/>
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button className='mode  flex'>
        <span className='icon-moon-o'></span>
      </button>
      {showmodel &&(
       <div className=" fixed" >
        <ul className="model">
         <li>
          <button className='icon-close' onClick={()=>{setshowmodel(false)}} />
         </li>
         <li><a href="">About</a></li>
         <li><a href="">Articles</a></li>
         <li><a href="">Projects</a></li>
         <li><a href="">Speaking</a></li>
         <li><a href="">Uses</a></li>
        </ul>
       </div>
      )}
     
    </header>
  )
}

