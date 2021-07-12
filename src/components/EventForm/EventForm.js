import './EventForm.css'
import { useState, useEffect } from 'react'
import { courses, players } from '../../APICalls/sampleData'


function EventForm() {
  const [date, setDate] = useState('')
  const [teeTime, setTeeTime] = useState('')
  const [openSpots, setOpenSpots] = useState('')
  const [friendList, setFriendList] = useState([])
  const [numHoles, setNumHoles] = useState('')
  const [golfCourse, setGolfCourse] = useState('')

  // need to useEffect call api for current user's friends and golf courses to load on page render
  const currentUser = players.find(player => player.id === 2)  // need to make this dynamic to match what user is logged in
  const userFriends = currentUser.friends.map(friendId => {
    return players.find(player => player.id === friendId).name
  })

  return(
    <>
      <form>
        <h2>Add a Tee Time</h2>
        <label for='golfCourse'>Which golf course?</label>
        <select
          name='golfCourse'
          id='golfCourse'
          value={golfCourse}
          onChange={(event) => setGolfCourse(event.target.value)}
        >
          <option>-* Please Select a Course *-</option>
          {courses.map(course => {return <option value={course.name}>{course.name}</option>})}
        </select>
        <label for='Date'>Date of tee time:</label>
        <input
          type='date'
          name='Date'
          id='Date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
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
        <div>   
          <p>Invite other players:</p>
          <div>             
            {userFriends.map(friend => { 
              return (
                <div>
                  <input type='checkbox' value={friend} key={friend} />  
                  <label for={friend}>{friend}</label>
                </div>
              )
            })}
          </div>
          <input type='checkbox' value='All Users' id='allUsers' /* need to set state with checked values *//> 
          <label for='allUsers'>All Users</label>
        </div>
        <button /* onClick needs to send post with info*/>Create Tee Time</button>
      </form>
    </>
  )
}

export default EventForm