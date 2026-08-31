import React from 'react'
import './input.css'

const Input = ({value,text}) => {
  return (
    <div className="inputDiv">
        <label className='label' htmlFor="">{text}</label>
        <input className='input' value={value}></input>
    </div>
  )
}

export default Input
