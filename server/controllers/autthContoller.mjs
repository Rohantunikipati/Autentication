import User from "../Models/user.mode.mjs";
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{
    const {username,email,password}  = req.body;
    const saltedPassword =  bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:saltedPassword});
    await newUser.save();
    res.send("User is Created ");
}