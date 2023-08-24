import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import "./Login.css"


const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                history("/")
            }).catch((error) => {
                alert(error)
            })
        // firebase chitttt.................
    }
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    // console.log(auth ,"frrrrrr");
                    history('/')
                }
            })
            .catch((error) => {
                console.log(error)
            });
        // firebase register chittttt.............
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="https://d33wubrfki0l68.cloudfront.net/aeb605e058892092958dd6a9b399c7d0607e1f08/dfc05/img/amazon-com.svg" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className='login__signin__btn' onClick={signIn}>SignIn</button>
                </form>
                <p>By signin you agree to Amazon's Condition . Plz see ur privacy Notice ,our cookeis notice and our intrest based ads.</p>
                <button className='login__register__btn' onClick={register}>Create Account</button>
            </div>

        </div>
    )
}

export default Login