import './Login.css'
import {useState, useEffect} from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <label for='email'>Email:</label>
      <input 
        type='email' 
        id='email'
        value={email} 
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label for='password'>Password:</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
    </form>
  )
}

export default Login