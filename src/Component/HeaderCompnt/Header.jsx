import React from 'react'
import './Header.css'
import Cta from '../HeaderCompnt/Cta'
import me from '../../Asset/gop_pic-removebg-preview (1).png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ibrede Victor</h1>
        <h5  className="text-light">Fullstack Developer</h5>
        <Cta/>
        <HeaderSocials/>

        <div className="me">
          <img src={me} alt="me" />
        </div>
        <div>
          <a href="#contact"  className="scroll__down">Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header