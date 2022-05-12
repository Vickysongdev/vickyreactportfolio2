import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'
import {FiMapPin} from 'react-icons/fi'

const Service = () => {
  return (
    <section id="services">
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div  className="container services__container">
         <article  className="service">
            <div  className="service__head">
              <h3>Web Design</h3>
           </div> 
           <ul  className="service__list">
             <li>
               <FiMapPin className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
           </ul>
         </article>
         <article  className="service">
            <div  className="service__head">
              <h3>Web Development</h3>
           </div> 
           <ul  className="service__list">
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
           </ul>
         </article>
         <article  className="service">
            <div  className="service__head">
              <h3>Content Creation</h3>
           </div> 
           <ul  className="service__list">
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
             <li>
               <BiCheck className="service__list-icons"/>
               <p>lorem ipsum dolor sit</p>
             </li>
           </ul>
         </article>
      </div>
    </section>
  )
}

export default Service