import { useEffect, useState } from 'react'

import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = ({ events, screenWidth, handleInviteAction }) => {
  const [availableTeeTimes, setAvailableTeeTimes] = useState([])
  const [committedTeeTimes, setCommittedTeeTimes] = useState([])
  const [teeTimeType, setTeeTimeType] = useState('committed')

  const getAvailable = () => {
    return events.filter(event => {
      return (event.attributes.pending.includes(1) || !event.attributes.private)
    })
  }

  const getCommitted = () => {
    return events.filter(event => event.attributes.accepted.includes(1))
  }
  
  useEffect(() => {
    setAvailableTeeTimes(getAvailable())
    setCommittedTeeTimes(getCommitted())
  }, [events])

  return (
    <div className='dashboard'>
      <span className='dashboard-title'>
        <h1>My Tee Times</h1>
      </span>
      <span className='event-type-select'>
        <button
          className={teeTimeType === 'committed' ? 'event-type-btn' : 'event-type-btn unselected'}
          onClick={() => { if (teeTimeType === 'available') setTeeTimeType('committed')}}
        >
          Committed
        </button>
        <button
          className={teeTimeType === 'available' ? 'event-type-btn' : 'event-type-btn unselected'}
          onClick={() => { if (teeTimeType === 'committed') setTeeTimeType('available')}}
        >
          Available
        </button>
      </span>
      {screenWidth >= 768 && 
        <div className='tt-containers'>
          <TeeTimeContainer 
            title='Committed Tee Times' events={committedTeeTimes} windowWidth={screenWidth} handleInviteAction={handleInviteAction}
          />
          <TeeTimeContainer 
            title='Available Tee Times' events={availableTeeTimes} windowWidth={screenWidth} handleInviteAction={handleInviteAction}
          />
        </div>
      }
      {teeTimeType === 'committed'
        ? (screenWidth < 768) && 
          <TeeTimeContainer 
            title='Committed Tee Times' events={committedTeeTimes} windowWidth={screenWidth} handleInviteAction={handleInviteAction}
          />
        : (screenWidth < 768) && 
          <TeeTimeContainer 
            title='Available Tee Times' events={availableTeeTimes} windowWidth={screenWidth} handleInviteAction={handleInviteAction}
          />
      }
    </div>
  )
}

export default Dashboard
