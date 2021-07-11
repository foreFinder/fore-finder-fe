import './TeeTime.css'

const TeeTime = ({ type }) => {
  return (
    <div className='tee-time'>
      <h3 className='course-name'>Augusta National Golf Club</h3>
      <div className='tt-details'>
        <div className='host-name'>
          <h3>Host</h3>
          <p>Elon Musk</p>
        </div>
        <div className='date'>
          <h3>Date</h3>
          <p>Jul 10th</p>
        </div>
        <div className='time-slot'>
          <h3>Time slot</h3>
          <p>8:15 AM</p>
        </div>
        <div className='hole-count'>
          <h3>Holes</h3>
          <p>18</p>
        </div>
        <div className='spot-counter'>
          <h3>Open spots</h3>
          <p>1 of 4</p>
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
