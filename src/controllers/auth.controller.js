import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const user = await User.create({
      username,
      email,
      password,
    });
    if (user) {
      return res.status(200).json({
        success: true,
        message: "Registered successfully",
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "some error occured" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        success: true,
        message: "Logged in successfully",
        data: {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "user not exists" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
