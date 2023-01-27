// import connect from "../../lib/mongodb";
// import User from '../../models/schema';
// const express = require('express')
// const app = express()
// connect()

// export default async function handler(req,res){

//     const {email,password}=req.body
//     const user = await User.findOne({email,password})
//     if(!user){
//         return res.json({status:'Not able to find the user'})
//     }
//     else{
//         res.redirect('/bet');
//     }
// }

// // app.post('/login', function(req, res) {
// //     // Find the user in the database
// //     User.findOne({username: req.body.username}, function(err, user) {
// //       if (err) {
// //         // Handle error
// //       }
// //       if (!user) {
// //         // Handle invalid username or password
// //       }
// //       if (user.password === req.body.password) {
// //         if (user.role === 'admin') {
// //           res.redirect('/admin');
// //         } else {
// //           res.redirect('/bet');
// //         }
// //       } else {
// //         // Handle invalid username or password
// //       }
// //     });
// //   });

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      const { role } = response.data;
      if (role === 'admin') {
        // Redirect to admin page
        window.location.href = '/admin';
      } else {
        // Redirect to bets page
        window.location.href = '/bets';
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Login;
