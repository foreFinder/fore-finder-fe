import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({ validateLogin }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          <button onClick={() => validateLogin(email, password)} className='form-submit'>Login</button>
          <Link to='/create-profile'>
            <button className='form-submit'>Create Profile</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login