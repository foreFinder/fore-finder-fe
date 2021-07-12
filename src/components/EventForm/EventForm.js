import './EventForm.css';
import { useState, useEffect } from 'react';
import { courses, players } from '../../APICalls/sampleData';

function EventForm() {
  const currentUser = players.find((player) => player.id === 2); // need to make this dynamic to match what user is logged in
  const userFriends = currentUser.friends.map((friendId) => {
    return players.find((player) => player.id === friendId).name;
  });
  const [date, setDate] = useState('');
  const [teeTime, setTeeTime] = useState('');
  const [openSpots, setOpenSpots] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [numHoles, setNumHoles] = useState('');
  const [golfCourse, setGolfCourse] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [allFriends, setAllFriends] = useState(false);

  // need to useEffect call api for current user's friends and golf courses to load on page render

  const addFriendToInvite = (e) => {
    if (e.target.checked) {
      setSelectedFriends([...selectedFriends, e.target.value]);
    } else if (!e.target.checked) {
      setSelectedFriends(selectedFriends.filter((f) => f !== e.target.value));
    }
  };

  const inviteAllFriends = (e) => {
    if (e.target.checked) {
      setSelectedFriends([...userFriends]);
      setAllFriends(true);
    } else if (!e.target.checked) {
      setSelectedFriends(filterCheckedFriends);
      setAllFriends(false);
    }
  };

  const filterCheckedFriends = () => {
    const friends = Array.from(document.querySelectorAll('.friends'));
    const checked = friends.filter((f) => f.checked);
    return checked.map((f) => f.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Add a Tee Time</h2>
      <div className='form-components'>
        <label for='golfCourse'>
          Golf Course:
          <select
            name='golfCourse'
            id='golfCourse'
            value={golfCourse}
            onChange={(event) => setGolfCourse(event.target.value)}
          >
            <option>-* Please Select a Course *-</option>
            {courses.map((course) => {
              return <option value={course.name}>{course.name}</option>;
            })}
          </select>
        </label>
        <label for='Date'>
          Date:
          <input
            type='date'
            name='Date'
            id='Date'
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>
        <label for='teeTime'>
          Tee Time:
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
        </label>
        <label for='numPlayers'>
          Total Players (including you):
          <select
            name='num players'
            id='numPlayers'
            value={openSpots}
            onChange={(event) => setOpenSpots(event.target.value)}
          >
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </label>
        <label for='numHoles'>
          Number of Holes:
          <label for='18'>
            18
            <input
              type='radio'
              id='18'
              name='numHoles'
              value='18'
              onClick={(event) => setNumHoles(event.target.value)}
            />
          </label>
          <label for='9'>
            9
            <input
              type='radio'
              id='9'
              name='numHoles'
              value='9'
              onClick={(event) => setNumHoles(event.target.value)}
            />
          </label>
        </label>
        <label for='publicStatus'>
          Public or Private:
          <label for='public'>
            Public
            <input
              type='radio'
              id='public'
              name='publicStatus'
              value='public'
              defaultChecked
              onClick={() => setIsPrivate(false)}
            />
          </label>
          <label for='private'>
            Private
            <input
              type='radio'
              id='private'
              name='publicStatus'
              value='private'
              onClick={() => setIsPrivate(true)}
            />
          </label>
        </label>
        {isPrivate && (
          <>
            <p>Friends:</p>
            <div className='friend-list-container'>
              {userFriends.map((friend) => {
                return (
                  <div className='friend-list'>
                    <input
                      className='friends'
                      type='checkbox'
                      value={friend}
                      key={friend}
                      onClick={addFriendToInvite}
                      disabled={allFriends ? true : false}
                    />
                    <label for={friend}>{friend}</label>
                  </div>
                );
              })}
            </div>
            <div className='friend-list'>
              <input
                type='checkbox'
                id='allFriends'
                value={[...userFriends]}
                onClick={inviteAllFriends}
              />
              <label for='allFriends'>Invite All Friends</label>
            </div>
          </>
        )}
      </div>
      <button /* onClick needs to send post with info*/>Create Tee Time</button>
    </form>
  );
}

export default EventForm;
