import React from 'react'
import "./contactUs.css"
import Lottie from "lottie-react"
import { useForm, ValidationError } from '@formspree/react';
import DoneAnimation from "../../../public/animation/DoneAnimation.json"
import EmailAnimation from "../../../public/animation/EmailAnimation.json"

export default function ContactUs() {
 const [state, handleSubmit] = useForm("mvoeagyd");
 if (state.succeeded) {
  return(<> 
        <h1 style={{textAlign:"center" , marginBottom:"5px"}}>Thanks for joining!</h1>
        <Lottie animationData={DoneAnimation} style={{height:60}}/>
        </>
      )}

  return (
    <section className='contact-us ' style={{margin: "15px"}} >
      <h1 className='contact-header'>
        <span className='icon-envelope'></span>
        ContactUs
      </h1>
      <p className='paraghraph'>Contact us for more information and Get notified when I publish something new.</p>
      <div className="email-contact" style={{justifyContent:"space-between"}}>
        <form onSubmit={handleSubmit}>
          <div className='email'style={{margin: "15px"}}>
            <label htmlFor="email">Email Address:</label>
            <input type='email' id="email" name='email' autoComplete='off' required></input>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          <div className='Message'>
            <label htmlFor="Message">Your Message:</label>
            <textarea id="Message" name='Message' required></textarea>
            <ValidationError prefix="Message"  field="message" errors={state.errors}/>
          </div>
          <button className='submit' type="submit" disabled={state.submitting}>Submit</button>  
        </form>
        <div className="animation">
         <Lottie animationData={EmailAnimation} style={{height:350}} />
        </div>
      </div>
    </section>
  )
}
