import React, { useState } from 'react'
import "./mainContent.css"
import {motion,AnimatePresence} from "framer-motion"
export default function MainContent() {
  const myProjects=[{
    projectTitel:"React project",category:"React",imgPath:"../public/1.jpg"},
   {projectTitel:"Html&Css project",category:"Html&Css",imgPath:"../public/2.jpg"},
   {projectTitel:"JS project",category:"JS",imgPath:"../public/3.jpg"},
   {projectTitel:"Bootstrab project",category:"Bootstrab",imgPath:"../public/4.jpg"}]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let[arr,setarr]=useState(myProjects);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let[currentActive,setcurrentActive]=useState("all")
  let newarr;
  const handelClick=(category)=>{
   setcurrentActive(category) ;
   newarr=myProjects.filter((item) => 
    item.category===category);
    setarr(newarr)
  }
   
  return (
    <main className='main'>
      <div className='left-side'>
        <button  className={currentActive === "all" ? "active" :null} onClick={()=>{setcurrentActive("all") ;setarr(myProjects);}} >All Projects</button>
        <button  className={currentActive === "Html&Css" ? "active": null} onClick={()=>{handelClick("Html&Css")}} >Html & Css</button>
        <button  className={currentActive === "JS" ? "active": null} onClick={()=>{handelClick("JS")}}>JavaScript</button>
        <button  className={currentActive === "Bootstrab" ? "active": null} onClick={()=>{handelClick("Bootstrab")}}>Bootstrab</button>
        <button className={currentActive === "React" ? "active": null}   onClick={()=>{handelClick("React")}} >React</button>
        
      </div>
      <div className='right-side'>
       <AnimatePresence>
        {arr.map((item)=>{
         return(
          <motion.article  
           layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            exit={{ transform: "scale(0)" }}
           className='card' key={item.projectTitel} >
           <img width={280} src={item.imgPath}  />
           <div className="box" style={{width:"280px"}}>
            <h1 className='titel'>{item.projectTitel} </h1>
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
         </motion.article>
         )
       })}
       </AnimatePresence>
      </div>
    </main>
  )
}
