import React, { useContext, useState } from 'react'
import { Log } from '../../Context/Login.jsx'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const { login } = useContext(Log)  

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username) 
    navigate('/')   
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        className='text-black dark:text-white'
          type="email" 
            required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="text" 
          className='text-black'
          required
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
        className='text-black '
          type="password" 
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
