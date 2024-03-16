import User from "../Models/user.mode.mjs";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.mjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const saltedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: saltedPassword });
  try {
    await newUser.save();
    res.json({ message: "User is Created" });
  } catch (error) {
    next(errorHandler(300, error.message));
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const valid_user = await User.findOne({ email });
    if (!valid_user) return next(errorHandler(404, "invalid user"));
    const valid_password = bcryptjs.compareSync(password, valid_user.password);
    if (!valid_password) return next(errorHandler(401, "invalid password"));
    const { password: saltedPassword, ...rest } = valid_user._doc;
    const token = jwt.sign({ id: valid_user._id }, "secret_key");
    const expiredate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiredate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, "secret_key");
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('_').toLowerCase() +
          Math.random().toString(10).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, "secret_key");
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
