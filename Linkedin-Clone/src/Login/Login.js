import React from 'react'
import { useState } from 'react'
import "./Login.css"
import { auth } from "../firebase"
import { login } from "../features/userSlice"
import { useDispatch } from 'react-redux'

function Login() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [profilepic, setProfilepic] = useState('')
    const dispatch = useDispatch()
// REGISTERT THE APP IN FIRST TIME
    const register = () => {
        if (!name) {
            return alert("Plz Enter your Full name");
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilepic,
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilepic
                    }));
                })
            }).catch(error => alert(error.message));
    }
    // LOGIN TO THE APP
    const loginToApp = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(
                userAuth => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.name,
                        photoUrl: userAuth.user.photoURL
                    }))
                }
            ).catch(error => alert(error))
    }
    return (
        <div className="login">
            <img src="https://www.pngkey.com/png/detail/14-143268_file-linkedin-logo-svg-linkedin-logo-png-no.png" alt="" />
            <form action="">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your full name (Required)"
                    type="text"
                />
                <input
                    value={profilepic}
                    onChange={e => setProfilepic(e.target.value)}
                    placeholder="Profile Pic URL (Optional)"
                    type="text"
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" placeholder="Email@gmail.com"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <button
                    type="submit"
                    onClick={loginToApp}>Sign in
                </button>
            </form>
            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now </span>
            </p>
        </div>
    )
}

export default Login
