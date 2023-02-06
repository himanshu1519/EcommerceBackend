import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema, model } = mongoose;
const reqString = { type: String, required: true };

const userSchema = new Schema({
  username: reqString,
  email: { ...reqString, unique: true },
  password: reqString,
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = model("user", userSchema);
export default User;
