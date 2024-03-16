import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"
    }
},{timestamps:true});

const User = mongoose.model("user",userScheme);
export default User;