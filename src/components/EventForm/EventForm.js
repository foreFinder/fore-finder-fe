import './EventForm.css'
import { useState, useEffect } from 'react'


function EventForm() {
  const [date, setDate] = useState('')
  const [teeTime, setTeeTime] = useState('')
  const [openSpots, setOpenSpots] = useState('')
  const [friendList, setFriendList] = useState([])
  const [numHoles, setNumHoles] = useState('')

  return(
    <>
      <form>
        <h2>Add a Tee Time</h2>
        <label for='Date'>Date of tee time:</label>
        <input
          type='date'
          name='Date'
          id='Date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <label for='teeTime'>Tee Time:</label>
        <input
          type='time'
          name='Tee Time'
          id='teeTime'
          min='07:00'
          max='17:00'
          value={teeTime}
          onChange={(event) => setTeeTime(event.target.value)}
          required
        />
        <label for='numPlayers'>Open Positions:</label>
        <select
          name='num players'
          id='numPlayers'
          value={openSpots}
          onChange={(event) => setOpenSpots(event.target.value)}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <div>
          <label for='numHoles'>Number of Holes:</label>
          <label for='18'>18</label>
          <input 
            type='radio'
            id='18'
            name='numHoles'
            value='18'
            onClick={(event) => setNumHoles(event.target.value)}
          />
          <label for='9'>9</label>
          <input 
            type='radio'
            id='9'
            name='numHoles'
            value='9'
            onClick={(event) => setNumHoles(event.target.value)}
          />
        </div>
        

      </form>
    </>
  )
}

export default EventForm