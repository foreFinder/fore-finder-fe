import './Login.css'
import {useState, useEffect} from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  handleLogin = () => {
    return
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label for='email'>Email:</label>
      <input 
        type='email' 
        id='email'
        name='email'
        value={email} 
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label for='password'>Password:</label>
      <input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button onClick={() => handleLogin}>Login</button>
      <button onClick={}>Create Profile</button>
    </form>
  )
}

export default Login