import './EventForm.css'
import { useState, useEffect } from 'react'


function EventForm() {
  const [date, setDate] = useState('')
  const [teeTime, setTeeTime] = useState('')
  const [openSpots, setOpenSpots] = useState('')
  const []

  return(
    <>
      <form>
        <label for='Date'>Date of tee time:</label>
        <input
          type='date'
          name='Date'
          id='Date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <label for='Tee Time'>Tee Time:</label>
        <input
          type='time'
          name='Tee Time'
          id='Tee Time'
          min='07:00'
          max='17:00'
          value={teeTime}
          onChange={(event) => setTeeTime(event.target.value)}
          required
        />
        <label for='num players'>Open Positions:</label>
        <select
          name='num players'
          id='num players'
          value={openSpots}
          onChange={(event) => setOpenSpots(event.target.value)}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </form>
    </>
  )
}

export default EventForm