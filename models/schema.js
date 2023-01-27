// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     role: {
//         type: String,
//         enum: ['admin', 'normal'],
//         default: 'normal'
//     }
// })

// module.exports = mongoose.models.User || mongoose.model('User',userSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
