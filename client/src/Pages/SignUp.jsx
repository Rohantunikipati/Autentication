import React from 'react'
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className="signCard">
      <h1>SIGN-UP</h1>
      <form action="">
        <input type="text" placeholder='username' name='username' />
        <input type="email" placeholder='email' name='emali' />
        <input type="password" name="password" placeholder='password' />
        <button>Sign-Up</button>
        <a href="">Continue with Googgle</a>
      </form>
      <div className="info">
        <p>Have an account ?</p>
        <Link to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default SignUp