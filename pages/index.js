
// export default function Home(){
//   return(
//     <div>
//       {/* <h1> Registration </h1>
//       <form action="/api/register" method="post">
//         <label>
//           Email Address
//         </label>
//         <input type='email' name='email' placeholder='Type your email'></input>
//         <label>
//           Password
//         </label>
//         <input type='password' name='password' placeholder='Type your password'></input>
//         <input type='submit' value='Register'></input>

//       </form> */}

//       <h1>Login</h1>
//       <form action="/api/login" method="post">
//         <label>
//           Email Address
//         </label>
//         <input type='email' name='email' placeholder='Type your email'></input>
//         <label>
//           Password
//         </label>
//         <input type='password' name='password' placeholder='Type your password'></input>
//         <input type='submit' value='Login'></input>

//       </form>
//     </div>
//   )
// }
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
      <label text-white>
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