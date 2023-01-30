// import User from "../../models/schema";

// async function login(userId, password) {
//     const user = await User.findOne({ userId });

//     if (!user) {
//         return { error: 'User not found' };
//     }

//     if (user.password !== password) {
//         return { error: 'Incorrect password' };
//     }

//     return { role: user.role };
// }

// import React, { useState } from 'react';
// // import { login } from 'path/to/login';

// const LoginPage = () => {
//     const [userId, setUserId] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const result = await login(userId, password);
//         if (result.error) {
//             setError(result.error);
//         } else {
//             console.log('Role: ', result.role);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="userId">User ID:</label>
//                 <input
//                     type="text"
//                     id="userId"
//                     value={userId}
//                     onChange={(e) => setUserId(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             {error && <div>{error}</div>}
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginPage;

