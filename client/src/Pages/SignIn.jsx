import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let HandleSubmit = async e => {
    e.preventDefault();
    let dataObject = Object.fromEntries(new FormData(e.currentTarget));

    // e.currentTarget.reset();
    setLoading(true);
    let res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    });
    let data = await res.json();
    setLoading(false);
    navigate("/")
  };

  return (
    <div className="signCard">
      <h1>SIGN-IN</h1>
      <form action="" onSubmit={HandleSubmit}>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button disabled={loading}>{loading ? "Loading..." : "Sign-In"}</button>
        <a href="">Continue with Google</a>
      </form>
      <div className="info">
        <p>Dont Have an account ?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignUp;
