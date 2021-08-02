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
    <div className='form-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-title'>
          <h2>Welcome to ForeFinder</h2>
        </div>
        <div className='form-components-container'>
          <div className='form-components'>
            <label for='email' className='logLab'>
              Email:
              <input 
                type='email' 
                id='email'
                name='email'
                value={email} 
                onChange={e => setEmail(e.target.value)}
                required
              />
            </label>
            <label for='password' className='logLab'>
              Password:
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
        </div>
        <button onClick={() => handleLogin} className='form-submit'>Login</button>
        <button onClick={() => handleCreateProfile} className='form-submit'>Create Profile</button>
      </form>
    </div>
  )
}

export default Login