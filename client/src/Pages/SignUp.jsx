import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  let HandleSubmit = async e => {
    e.preventDefault();
    let dataObject = Object.fromEntries(new FormData(e.currentTarget));
    console.log(dataObject);

    e.currentTarget.reset();
    setLoading(true);
    let res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    });
    let data = await res.json();
    setLoading(false);
  };

  return (
    <div className="signCard">
      <h1>SIGN-UP</h1>
      <form action="" onSubmit={HandleSubmit}>
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button disabled={loading}>{loading ? "Loading..." : "Sign-Up"}</button>
        <a href="">Continue with Google</a>
      </form>
      <div className="info">
        <p>Have an account ?</p>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
