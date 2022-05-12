import React from 'react'
import  './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav ==='#' ? 'action' : ''}><AiOutlineHome/></a>
      <a href="#about"onClick={() => setActiveNav("#about")} className={activeNav ==='#about' ? 'action' : ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav ==='#experience' ? 'action' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav ==='#services' ? 'action' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav ==='#contact' ? 'action' : ''}><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav