import React from 'react'
import './input.css'

const Input = ({
  value,
  text,
  name,
  placeholder,
  type = "text",
  onChange
}) => {

  return (
    <div className="inputDiv">

      <label className="label">
        {text}
      </label>

      <input
        className="input"
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />

    </div>
  )
}

export default Input