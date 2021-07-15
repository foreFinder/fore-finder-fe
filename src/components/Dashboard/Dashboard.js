import { useEffect, useState } from 'react'

import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = ({ events, screenWidth }) => {
  const [availableTeeTimes, setAvailableTeeTimes] = useState([])
  const [committedTeeTimes, setCommittedTeeTimes] = useState([])
  const [teeTimeType, setTeeTimeType] = useState('committed')

  const getAvailable = () => {
    return events.filter(event => {
      return (event.attributes.invitees.includes(1) || !event.attributes.private)
    })
  }

  const getCommitted = () => {
    return events.filter(event => event.attributes.players.includes(1))
  }
  
  useEffect(() => {
    setAvailableTeeTimes(getAvailable())
    setCommittedTeeTimes(getCommitted())
  }, [])

  console.log(committedTeeTimes)

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
          <TeeTimeContainer title='Committed Tee Times' events={committedTeeTimes} windowWidth={screenWidth} />
          <TeeTimeContainer title='Available Tee Times' events={availableTeeTimes} windowWidth={screenWidth}/>
        </div>
      }
      {teeTimeType === 'committed'
        ? (screenWidth < 768) && 
          <TeeTimeContainer title='Committed Tee Times' events={committedTeeTimes} windowWidth={screenWidth} />
        : (screenWidth < 768) && 
          <TeeTimeContainer title='Available Tee Times' events={availableTeeTimes} windowWidth={screenWidth}/>
      }
    </div>
  )
}

export default Dashboard
