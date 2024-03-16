import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const { current_user } = useSelector(state => state.user);

  const HandleSubmit = () =>{
    console.log("object");
  }

  return (
    <div className="signCard">
      <h1>Profile</h1>
      <img src={current_user.photo} alt="profile" />
      <form action="" onSubmit={HandleSubmit}>
        <input type="text" defaultValue={current_user.username} placeholder="Username" name="username" />
        <input type="email" defaultValue={current_user.email} placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button>Update</button>
      </form>
      <div className="info">
        <span style={{cursor:'pointer',color:"red"}}>Delete Account</span>
        <span style={{cursor:'pointer',color:"red"}}>SignOut</span>
      </div>
    </div>
  );
}

export default Profile