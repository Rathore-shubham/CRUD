// const mongoose = require('mongoose');
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  name: { type: String, required: false },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['doctor','patient'], required: true },
  specialization: { type: String } 
}, { timestamps: true });

const User = mongoose.model("User", UserSchema); 
export default User;