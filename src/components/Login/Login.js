import './Login.css'
import {useState, useEffect} from 'react'

function Login() {

  const [email, setEmail] = useState('')
  return (
    <form>
      <label for='email'>Email:</label>
      <input 
        type='email' 
        id='email'
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />
    </form>
  )
}

export default Login