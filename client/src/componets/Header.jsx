import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const {current_user} = useSelector(state => state.user);
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
            <Link to="/signin" style= { { textDecoration: "none" }}>
                {current_user ? ( <img src={current_user.photo} alt="profile" /> ) : (<li>SignIn</li>)}
                
            </Link>
        </ul>
    </nav>
  )
}

export default Header