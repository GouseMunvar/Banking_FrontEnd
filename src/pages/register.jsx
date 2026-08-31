import React from 'react'
import Header from '../components/header'
import Input from '../components/input'
import Button from '../components/Button'
import './register.css'

const Register = () => {
  return (
    <div className='registerDiv'>
      
            <div className='Card'>
                <Header />
                <Input value="Email" text="Email" ></Input>
                <Input value="Password" text="Password"></Input>
                <Input value="CnfPassword" text="Confirm Password"></Input>
                <Button text="Register" />
                <p>
                    New here? <a href="/register">Register</a>
                </p>
            </div>
    </div>
  )
}

export default Register
