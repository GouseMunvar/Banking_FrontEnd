import React from 'react'
import './Button.css'

const Button = ({ text, icon }) => {
  return (
    <button className='Button'>
      {icon && icon}
      
      {text}
    </button>
  )
}

export default Button