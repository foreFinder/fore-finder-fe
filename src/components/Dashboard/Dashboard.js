import { useCallback, useEffect, useState } from 'react'
import PlayerList from '../PlayerList/PlayerList'

import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = ({ events, currentUserId, screenWidth, handleInviteAction, friends, players }) => {
  const [availableTeeTimes, setAvailableTeeTimes] = useState([])
  const [committedTeeTimes, setCommittedTeeTimes] = useState([])
  const [teeTimeType, setTeeTimeType] = useState('committed')

  const getAvailable = useCallback(() => {
    return events.filter(event => {
      if (event.attributes.accepted.includes(1) || event.attributes.declined.includes(1)) {
        return false
      } 

      return true
    })
  }, [events])

  const getCommitted = useCallback(() => {
    return events.filter(event => event.attributes.accepted.includes(currentUserId))
  }, [events, currentUserId])
  
  useEffect(() => {
    setAvailableTeeTimes(getAvailable())
    setCommittedTeeTimes(getCommitted())
  }, [events, getAvailable, getCommitted])

  return (
    <div className='dashboard'>

      {screenWidth > 480 && 
          <PlayerList 
            screenWidth={screenWidth}
            friends={friends}
            players={players}
          />
      }
      <div className='tt-wrapper'>

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
    </div>
  )
}

export default Dashboard
