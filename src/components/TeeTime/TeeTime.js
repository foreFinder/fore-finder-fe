import './TeeTime.css'

const TeeTime = () => {
  return (
    <div className='tee-time'>
      <h3 className='course-name'>Augusta National Golf Club</h3>
      <div className='tt-details'>
        <div className='host-name'>
          <h3>Host</h3>
          <p>Eric Rabun</p>
        </div>
        <div className='date-and-time'>
          <h3>When</h3>
          <p>July 10, 2021</p>
          <p>@ 8:15 AM</p>
        </div>
      </div>
    </div>
  )
}

export default TeeTime

      // <div className='invitation-actions'>
      //   <button>Decline</button>
      //   <button>Accept</button>
      // </div>
