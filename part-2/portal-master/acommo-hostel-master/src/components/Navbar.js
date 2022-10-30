import React, {useEffect,useState} from 'react'
import "./navbar.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, isSignInWithEmailLink, sendPasswordResetEmail } from 'firebase/auth'


const Navbar=()=>{

  function home(){
    window.location.href = '/car'
  }

  function logout(){
    let auth = getAuth()
    auth.signOut().then(() =>{
      window.location.href = '/'
      // alert('sign out successful')
    })
    .catch((err) =>{
      alert(err.message)
    })
  }
    
  return (
    <div className='navbar' >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='links'>
            {/* <a href='/' className='home' onClick={home}><i class="fa fa-home"></i></a> */}
            <a href="" className='signout' onClick={logout}><i class="fa fa-sign-out"></i></a>
        </div>
    </div>
  )
}

export default Navbar