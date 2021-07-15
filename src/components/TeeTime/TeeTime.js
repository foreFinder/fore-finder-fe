import './TeeTime.css'

const TeeTime = ({ type, event }) => {
  return (
    <div className='tee-time'>
      <h3 className='course-name'>Augusta National Golf Club</h3>
      <div className='tt-details'>
        <div className='host-name'>
          <h3>Host</h3>
          <p>{event.host_id}</p>
        </div>
        <div className='date'>
          <h3>Date</h3>
          <p>{event.date}</p>
        </div>
        <div className='time-slot'>
          <h3>Time slot</h3>
          <p>{event.tee_time}</p>
        </div>
        <div className='hole-count'>
          <h3>Holes</h3>
          <p>{event.number_of_holes}</p>
        </div>
        <div className='spot-counter'>
          <h3>Open spots</h3>
          <p>{event.players.length} of {event.invitees.length + 1}</p>
        </div>
      </div>
      <div className='invitation-actions'>
        {type === 'committed' && 
          <button className='primary-btn cancel'>Cancel</button>
        }
        {type === 'available' &&
          <>
            <button className='secondary-btn decline'>Decline</button>
            <button className='primary-btn accept'>Accept</button>
          </> 
        }
      </div>
    </div>
  )
}

export default TeeTime
