import './CreateProfile.css'
import { useState, useEffect } from 'react'
import { setCacheNameDetails } from 'workbox-core'

function CreateProfile({ animateLabels }) {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const submitProfile = () => {

  }

  useEffect(() => {
    animateLabels(80)
  }, [])

  return (
    <div className='form-container'>
      <form>
        <div className='form-title'>
          <h2>Create a New Profile</h2>
        </div>
        <div className='form-components-container'>
          <div className='form-components'>
            <label htmlFor='name'>
              Name:
              <input 
                type='text'
                id='name'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='ex: John Doe'
                required
              />
            </label>
            <label htmlFor='userName'>
              Username:
              <input 
                type='text'
                id='userName'
                value={userName}
                onChange={e => setUserName(e.target.value)}
                required
              />
            </label>
            <label htmlFor='password'>
              Username:
              <input 
                type='text'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
            <label htmlFor='phone'>
              Phone:
              <input 
                type='tel'
                id='phone'
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
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='ex: john.doe@email.com'
                required
              />
            </label>
            <button onClick={submitProfile} className='form-submit'>Create Profile</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProfile