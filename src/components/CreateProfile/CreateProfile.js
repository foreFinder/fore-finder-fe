import './CreateProfile.css'
import { useState } from 'react'

function CreateProfile() {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <form>
      <label for='name'>Name:</label>
      <input 
        type='text'
        id='name'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='ex: John Doe'
        required
      />
      <label for='userName'>Username:</label>
      <input 
        type='text'
        id='userName'
        value={userName}
        onChange={e => setUserName(e.target.value)}
        required
      />
      <label for='phone'>Phone:</label>
      <input 
        type='tel'
        id='phone'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        placeholder='123-456-7890'
        value={phone}
        onChange={e => () => setPhone(e.target.value)}
        required
      />
    </form>
  )
}

export default CreateProfile