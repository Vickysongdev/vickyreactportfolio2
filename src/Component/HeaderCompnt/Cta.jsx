import React from 'react'
import Cv from '../../Asset/VickyC.v.pdf'

const Cta = () => {
  return (
    <div  className="Cta">
        <a href={Cv} download className='btn'>Download Cv</a>
        <a href="#contact"  className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta