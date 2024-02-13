import React from 'react'
import "./contactUs.css"
export default function ContactUs() {
  return (
    <section className='contact-us'>
      <h1 className='contact-header'>
        <span className='icon-envelope'></span>
        ContactUs
      </h1>
      <p className='paraghraph'>Contact us for more information and Get notified when I publish something new.</p>
      <div className="email-contact">
        <form >
          <div className='email'style={{margin: "15px"}}>
            <label for="email">Email Address:</label>
            <input type='email' id="email"></input>
            </div>
          <div className='Message'>
            <label for="Message">Your Message:</label>
            <textarea id="Message"></textarea>
          </div>
          <button style={{margin: "15px"}}>Submit</button>
          
        </form>
        <div className="animatin"></div>
      </div>
    </section>
  )
}
