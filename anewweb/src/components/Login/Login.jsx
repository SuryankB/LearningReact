import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Login() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext); // From Context API  
  const navigate = useNavigate(); // For redirecting

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username); // Save user email globally
    navigate('/'); // Redirect to Home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block mb-1 text-gray-600 font-medium">UserName</label>
            <input 
              type="text"
              required
              value={username}
              onChange={(e) => setUser(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Username "
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">Password</label>
            <input 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Password"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-700 text-white py-2 rounded-lg hover:bg-orange-800 transition font-medium"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
