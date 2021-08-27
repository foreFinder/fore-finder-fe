import './CreateProfile.css'
import { useState, useEffect } from 'react'
import { createNewProfile } from '../../APICalls/APICalls'
import { setCacheNameDetails } from 'workbox-core'

function CreateProfile({ animateLabels }) {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const submitProfile = () => {
    // Post to BE DB and redirect to homepage
    confirmSamePW ? 
    createNewProfile(name, phone, email, userName, password, passwordConfirm)
      .then(resp => console.log(resp)) :
    alert('Passwords do not match, please try again!')
  }

  const confirmSamePW = () => {
    return password === passwordConfirm
  }

  useEffect(() => {
    animateLabels(80)
  })

  return (
    <div className='form-container'>
      <form onSubmit={(e) => e.preventDefault}>
        <div className='form-title'>
          <h2>Create a New Profile</h2>
        </div>
        <div className='form-components-container'>
          <div className='form-components'>
            <label htmlFor='name'>
              Full Name:
              <input 
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='ex: John Doe'
                required
              />
            </label>
            <label htmlFor='phone'>
              Phone:
              <input 
                type='tel'
                id='phone'
                name='phone'
                placeholder='123-456-7890'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </label>
            <label htmlFor='email'>
              Email:
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='ex: john.doe@example.com'
                required
              />
            </label>
            <label htmlFor='userName'>
              Username:
              <input 
                type='text'
                id='userName'
                name='userName'
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder='golfer1234'
                required
              />
            </label>
            <label htmlFor='password'>
              Password:
              <input 
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete='new-password'
                pattern="[0-9a-fA-F]{8}"
                title='Password must be at least 8 characters and include at least 1 number and 1 uppercase letter'
                required
              />
            </label>
            <label htmlFor='passwordConfirm'>
              Confirm Password:
              <input 
                type='password'
                id='passwordConfirm'
                name='passwordConfirm'
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                autoComplete='new-password'
                pattern="[0-9a-fA-F]{4,8}"
                required
              />
            </label>
            <div className='profile-btn-container'>
              <button onClick={submitProfile} className='form-submit profile-btn'>Create Profile</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProfile