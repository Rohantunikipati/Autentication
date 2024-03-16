import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user_actions } from "../Redux";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../componets/OAuth";

const SignUp = () => {
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(store => store.user);

  let HandleSubmit = async e => {
    e.preventDefault();
    let dataObject = Object.fromEntries(new FormData(e.currentTarget));

    // e.currentTarget.reset();
    // setLoading(true);
    try {
      dispatch(user_actions.signInStart());
      let res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObject),
      });
      let data = await res.json();
      console.log(data);
      if (data.success == "false") {
        dispatch(user_actions.signInFail(data.message));
        return;
      } else {
        dispatch(user_actions.signInSuccess(data));
        navigate("/");
      }
      // setLoading(false);
    } catch (err) {
      dispatch(user_actions.signInFail(err.message));
    }
  };

  return (
    <div className="signCard">
      <h1>SIGN-IN</h1>
      <form action="" onSubmit={HandleSubmit}>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button disabled={loading}>{loading ? "Loading..." : "Sign-In"}</button>
        <OAuth/>
      </form>
      <div className="info">
        <p>Dont Have an account ?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
      <p className="error">{error ? error : ""}</p>
    </div>
  );
};

export default SignUp;
