import './EventForm.css';
import { useState, useEffect } from 'react';
import { postEvent } from '../../APICalls/APICalls';

function EventForm({ courses, friends, hostId }) {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(new Date(today).getTime() + 86400000)
    .toISOString()
    .slice(0, 10);

  const [date, setDate] = useState(tomorrow);
  const [teeTime, setTeeTime] = useState('');
  const [openSpots, setOpenSpots] = useState('2');
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [numHoles, setNumHoles] = useState('18');
  const [golfCourse, setGolfCourse] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [allFriends, setAllFriends] = useState(false);

  const addFriendToInvite = (e) => {
    if (e.target.checked) {
      setSelectedFriends([...selectedFriends, e.target.value]);
    } else if (!e.target.checked) {
      setSelectedFriends(selectedFriends.filter((f) => f !== e.target.value));
    }
  };

  const animateLabels = (rate) => {
    const allLabels = Array.from(document.querySelectorAll('label'));
    const labels = allLabels.filter((l) => !l.classList.contains('sub-label'));
    labels.forEach((l, i) => {
      setTimeout(() => l.classList.add('fade-in'), i * rate);
    });
  };

  useEffect(() => {
    animateLabels(80);
  }, []);

  const inviteAllFriends = (e) => {
    const friendIds = friends.map((f) => f.id);
    if (e.target.checked) {
      setSelectedFriends([...friendIds]);
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

  const submitForm = (e) => {
    postEvent(
      golfCourse,
      date,
      teeTime,
      openSpots,
      numHoles,
      isPrivate,
      hostId,
      selectedFriends
    )
      .catch((e) => console.log(e));
  };

  return (
    <div className='form-container'>
      <form
        // className='animate__animated animate__fadeInRight'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='form-title'>
          <h2>Create a New Tee Time</h2>
        </div>
        <div className='form-components-container'>
          <div className='form-components'>
            <label htmlFor='golfCourse'>
              Golf Course:
              <select
                name='golfCourse'
                id='golfCourse'
                value={golfCourse}
                required
                onChange={(event) => setGolfCourse(event.target.value)}
                required
              >
                <option>Please Select a Course</option>
                {courses.map((course, i) => {
                  return (
                    <option key={i} value={course.id}>
                      {course.attributes.name}
                    </option>
                  );
                })}
              </select>
            </label>
            <label htmlFor='Date'>
              Date:
              <input
                type='date'
                name='Date'
                id='Date'
                value={date}
                min={tomorrow}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </label>
            <label htmlFor='teeTime'>
              Tee Time (7am to 5pm):
              <input
                type='time'
                name='Tee Time'
                id='teeTime'
                min='07:00:00'
                max='17:00:00'
                value={teeTime}
                onChange={(event) => setTeeTime(event.target.value)}
                required
              />
            </label>
            <label htmlFor='numPlayers'>
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
            <label htmlFor='numHoles'>
              Number of Holes:
              <label className='sub-label' htmlFor='18'>
                18
                <input
                  type='radio'
                  id='18'
                  name='numHoles'
                  value='18'
                  defaultChecked
                  onClick={(event) => setNumHoles(event.target.value)}
                />
              </label>
              <label className='sub-label' htmlFor='9'>
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
            <label htmlFor='publicStatus'>
              Public or Private:
              <label className='sub-label' htmlFor='public'>
                Public
                <input
                  type='radio'
                  id='public'
                  name='publicStatus'
                  value='public'
                  onClick={() => setIsPrivate(false)}
                  defaultChecked
                  required
                />
              </label>
              <label className='sub-label' htmlFor='private'>
                Private
                <input
                  type='radio'
                  id='private'
                  name='publicStatus'
                  value='private'
                  onClick={() => {
                    setIsPrivate(true);
                    setTimeout(() => {
                      const title = document.querySelector('.friends-title');
                      title?.scrollIntoView();
                    }, 100);
                  }}
                />
              </label>
            </label>
            {isPrivate && (
              <>
                <p className='friends-title'>Friends to Invite:</p>
                <div className='friend-list-container'>
                  {friends.map((friend, i) => {
                    return (
                      <div key={i} className='friend-list sub-label'>
                        <input
                          className='friends'
                          type='checkbox'
                          value={friend.id}
                          onClick={addFriendToInvite}
                          disabled={allFriends ? true : false}
                        />
                        <label className='sub-label' htmlFor={friend}>
                          {friend.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className='friend-list sub-label'>
                  <input
                    type='checkbox'
                    id='allFriends'
                    onClick={inviteAllFriends}
                  />
                  <label className='sub-label' htmlFor='allFriends'>
                    Invite All Friends
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
        <div className='btn-container'>
          <button onClick={submitForm} className='form-submit'>
            Create Tee Time
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
