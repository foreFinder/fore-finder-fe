import './Login.css'
import { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import CreateProfile from '../CreateProfile/CreateProfile'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const  handleLogin = () => {
    return (
      <Route
         exact path='/dashboard' 
         render={() => <Dashboard />}
      />
    )
  }

  const handleCreateProfile = () => {
    return(
      <Route 
        exact path='/create-profile'
        render={() => <CreateProfile />}
      />
    )
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label for='email' className='logLab'>Email:</label>
      <input 
        type='email' 
        id='email'
        name='email'
        value={email} 
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label for='password' className='logLab'>Password:</label>
      <input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button onClick={() => handleLogin}>Login</button>
      <button onClick={() => handleCreateProfile}>Create Profile</button>
    </form>
  )
}

export default Login