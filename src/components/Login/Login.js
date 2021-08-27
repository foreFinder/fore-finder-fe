import './Login.css'
import { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import CreateProfile from '../CreateProfile/CreateProfile'
import { GoogleLogin } from 'react-google-login' 

function Login({ validateLogin }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const  handleStandardLogin = () => {
    
  }

  const handleCreateProfile = () => {
    return(
      <Route 
        exact path='/create-profile'
        render={() => <CreateProfile />}
      />
    )
  }

  const responseGoogle = response => {
    console.log(response) 
  }

  return (
    <div className='form-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-title'>
          <h2>Welcome to ForeFinder</h2>
        </div>
        <div className='form-components-container'>
          <div className='form-components'>
            <label htmlFor='email' className='logLab'>
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
            <label htmlFor='password' className='logLab'>
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
        <div className='login-btn-container'>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_KEY}
            buttonText='Login with Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className='form-submit'
          />
          <button onClick={() => validateLogin(email, password)} className='form-submit'>Login</button>
          <Link to='/create-profile'>
            <button onClick={() => handleCreateProfile} className='form-submit'>Create Profile</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login