import './CreateProfile.css'
import { useState } from 'react'

function CreateProfile() {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')

  return (
    <form>
      <label for='name'>Name:</label>
      <input 
        type='text'
        id='name'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='ex: John Doe'
      />
      <label for='userName'>Username:</label>
      <input 
        type='text'
        id='userName'
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
    </form>
  )
}

export default CreateProfile