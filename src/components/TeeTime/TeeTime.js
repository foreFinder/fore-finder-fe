import dayjs from 'dayjs'
import './TeeTime.css'

const TeeTime = ({ type, event, handleInviteAction }) => {
  const formatTime = (time) => {
    let hours = time.split(':')[0]
    const minutes = time.split(':')[1]
    const period = (parseInt(hours) > 11) ? 'PM' : 'AM'

    if (hours < 10) {
      hours = hours.slice(1, 2)
    }

    return `${hours}:${minutes} ${period}`
  }

  console.log(event)

  return (
    <div className='tee-time'>
      <h3 className='course-name'>Augusta National Golf Club</h3>
      <div className='tt-details'>
        <div className='host-name'>
          <h3>Host</h3>
          <p>{event.attributes.host_id}</p>
        </div>
        <div className='date'>
          <h3>Date</h3>
          <p>{dayjs(event.attributes.date).format('MMM D')}</p>
        </div>
        <div className='time-slot'>
          <h3>Time slot</h3>
          <p>{formatTime(event.attributes.tee_time)}</p>
        </div>
        <div className='hole-count'>
          <h3>Holes</h3>
          <p>{event.attributes.number_of_holes}</p>
        </div>
        <div className='spot-counter'>
          <h3>Open spots</h3>
          <p>{event.attributes.open_spots} of {event.attributes.invitees.length + event.attributes.players.length}</p>
        </div>
      </div>
      <div className='invitation-actions'>
        {type === 'committed' && 
          <button 
            className='primary-btn cancel'
          >
            Cancel
          </button>
        }
        {type === 'available' &&
          <>
            <button 
              className='secondary-btn decline'
              onClick={() => handleInviteAction(event.id, 1, false)}
            >
              Decline
            </button>
            <button 
              className='primary-btn accept' 
              onClick={() => handleInviteAction(event.id, 1, true)}
            >
              Accept
            </button>
          </> 
        }
      </div>
    </div>
  )
}

export default TeeTime
