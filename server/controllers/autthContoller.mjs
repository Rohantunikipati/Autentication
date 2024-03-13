import User from "../Models/user.mode.mjs";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.mjs";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  const saltedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: saltedPassword });
  try {
    await newUser.save();
    res.send("User is Created ");
  } catch (error) {
    next(errorHandler(300,error.message));
  }
};
