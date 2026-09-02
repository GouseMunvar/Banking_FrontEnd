import React, { useState } from 'react'
import Input from '../components/input'
import "./login.css"
import Header from '../components/header'
import Button from '../components/Button'
import { loginUser } from '../api/apiService'


const Login = () => {

    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    })


    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }


    const handleLogin = async () => {

        try {

            const response = await loginUser(loginData)

            console.log(response)

            window.location.href="/dashboard"

        } catch(error) {

            console.log(error)

        }

    }


    return (
        <div className="loginDiv">

            <div className="loginCard">

                <Header />

                <Input
                    placeholder="Email"
                    text="Email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                />


                <Input
                    placeholder="Password"
                    text="Password"
                    name="password"
                    type="password"
                    value={loginData.password}
                    onChange={handleChange}
                />


                <Button
                    text="Login"
                    onClick={handleLogin}
                />


                <p>
                    New here? <a href="/register">Register</a>
                </p>

            </div>

        </div>
    )
}


export default Login