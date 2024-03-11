import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../Pages/SignUp'

const Header = () => {
  return (
    <nav>
        <div className="logo">Mern-Auth</div>
        <ul>
            <Link to="/" style= { { textDecoration: "none" }}>
                <li>Home</li>
            </Link>
            <Link to="/about" style= { { textDecoration: "none" }}>
                <li>About</li>
            </Link>
            <Link to="/signup" style= { { textDecoration: "none" }}>
                <li>SignUp</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Header