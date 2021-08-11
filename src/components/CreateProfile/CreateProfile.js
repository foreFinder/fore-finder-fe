import './CreateProfile.css'
import { useState, useEffect } from 'react'
import { setCacheNameDetails } from 'workbox-core'

function CreateProfile({ animateLabels }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const submitProfile = () => {
    // Post to BE DB and redirect to homepage
  }

  const confirmSamePW = () => {
    return password === passwordConfirm
  }

  useEffect(() => {
    animateLabels(80)
  })

  return (
    <div className='form-container'>
      <form>
        <div className='form-title'>
          <h2>Create a New Profile</h2>
        </div>
        <div className='form-components-container'>
          <div className='form-components'>
            <label htmlFor='firstName'>
              First Name:
              <input 
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder='ex: John'
                required
              />
            </label>
            <label htmlFor='lastName'>
              Last Name:
              <input 
                type='text'
                id='lastName'
                name='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder='ex: Doe'
                required
              />
            </label>
            <label htmlFor='phone'>
              Phone:
              <input 
                type='tel'
                id='phone'
                name='phone'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                placeholder='123-456-7890'
                value={phone}
                onChange={e => () => setPhone(e.target.value)}
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
                placeholder='ex: john.doe@email.com'
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
                type='text'
                id='password'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete='new-password'
                pattern="[0-9a-fA-F]{8,}"
                title='Password must be at least 8 characters and include at least 1 number and 1 uppercase letter'
                required
              />
            </label>
            <label htmlFor='passwordConfirm'>
              Confirm Password:
              <input 
                type='text'
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