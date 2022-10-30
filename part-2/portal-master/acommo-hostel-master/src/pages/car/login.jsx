import React from "react"
import { Redirect, useHref } from 'react-router-dom';
import "./login.css"
import Car from './car.jpeg'
import CarPage from './Car.jsx'
import { useState } from "react"
import { Link } from "@mui/material"
// import { width } from "@mui/system"
import { app, database } from './fireBaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, isSignInWithEmailLink, sendPasswordResetEmail } from 'firebase/auth'
import { collection, addDoc} from 'firebase/firestore'
import { useNavigate } from "react-router-dom";


const Login = () => {

  function redirect() {
    const email = prompt("Enter your email")
    console.log(email)
    sendPasswordResetEmail(auth, email)
      .then((response) => {
        console.log("verified")
        alert("link was sent to the prvided email")
      })
      .catch((err) => {
        console.log("Not verified")
        console.log(err.message)
      })
  }

  let auth = getAuth();
  const [data, setData] = useState({})

  const handelInput = (event) => {
    {
      let newInput = { [event.target.name]: event.target.value };
      setData({ ...data, ...newInput })
    }
  }

  const handleSubmit = () => {
    var email = new String(data.email)
    var password = new String(data.password)
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        window.location.href = './car';
        console.log("login Successful")
      })
      .catch((err) => {
        console.log(err.message)
        alert(err.message)
      })
  }

  const [datas, setDatas] = useState({
    email: "",
    password: ""
  })
  const { email, password } = datas;
  const changeHandler = e => {
    setData({ ...datas, [e.target.name]: e.target.value })
  }

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => console.log(user)
    ).catch(err => console.log(err))
  }

  return (
    <div>
      <div id="Main">
        {/* <div className="Mleft">
          <img src={Car}/>
        </div> */}
        <div className="Mright">
          <h1>Login</h1>
          <div className="formDiv">
            <form className="loginForm">

              <div className="portion">
                <input id="email" name="email" onChange={(event) => handelInput(event)} type={"email"} placeholder={"Username or Mail"} />
              </div>

              <div className="portion">
                <input id="password" name="password" onChange={(event) => handelInput(event)} type={"password"} placeholder={"enter your password"} />
              </div>

              <div className="buttonDiv">
                <input id="submitTypeInput" onClick={event => handleSubmit()} placeholder={"submit"}/>
              </div>

              <div className="forgotPassword">
                <a id="forgotPassword" onClick={redirect}>Forgot Password ?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login