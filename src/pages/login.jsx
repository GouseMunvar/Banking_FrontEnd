import React from 'react'
import Input from '../components/input'
import "./login.css"
import Header from '../components/header'
import Button from '../components/Button'

const Login = () => {
    return (
        <div className="loginDiv" >

            <div className='Card'>
                <Header />
                <Input value="Email" text="Email" ></Input>
                <Input value="Password" text="Password"></Input>
                <Button text="login" />
                <p>
                    New here? <a href="/register">Register</a>
                </p>
            </div>

        </div>
    )
}

export default Login
