import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div  class="container contact__container">
        <div  class="contact__options">
            <article  id="contact__option">
              <MdOutlineEmail  className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>Click Me</h5>
              <a href="mailto:ibredevictor@gmail.com"target="_blank">Send a message</a>
            </article>
            <article  id="contact__option">
              <RiMessengerLine  contact__option-icon/>
              <h4>Messager</h4>
              <h5>Click Me</h5>
              <a href="https://m.me/ibrede1"target="_blank">Send a message</a>
            </article>
            <article  id="contact__option">
              <BsWhatsapp  contact__option-icon/>
              <h4>Whatsapp</h4>
              <h5>Click Me</h5>
              <a href="https://api.whatsapp.com/send?phone+2348065896915"   target="_blank">Send a message</a>
            </article>
        </div>

        <form action="">
        <input type="text"name="name"placeholder='Your Full Name'required />
          <input type="email" name="email" placeholder="Your Email"required />
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit"  class="btn btn-primary ">Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact