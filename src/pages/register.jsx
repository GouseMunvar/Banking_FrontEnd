import React, { useState } from 'react'
import Header from '../components/header'
import Input from '../components/input'
import Button from '../components/Button'
import './register.css'
import { registerUser } from '../api/apiService'

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
    role: "user"
  })


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleRegister = async () => {

    try {

      const response = await registerUser(formData)

      console.log(response)

    } catch(error){

      console.log(error)

    }

  }


  return (
    <div className='registerDiv'>

      <div className='Card'>

        <Header />

        <Input
          placeholder="Name"
          text="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          placeholder="Email"
          text="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />


        <Input
          placeholder="Password"
          text="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />


        <Input
          placeholder="Confirm Password"
          text="Confirm Password"
          name="cnfPassword"
          type="password"
          value={formData.cnfPassword}
          onChange={handleChange}
        />


        <label>Role</label>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">
            User
          </option>

          <option value="admin">
            Admin
          </option>

        </select>


        <Button 
          text="Register"
          onClick={handleRegister}
        />


        <p>
          New here? <a href="/login">Login</a>
        </p>

      </div>

    </div>
  )
}

export default Register