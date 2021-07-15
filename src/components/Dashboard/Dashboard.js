import { useState } from 'react'
import PlayerList from '../PlayerList/PlayerList'
import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = ({ screenWidth }) => {
  const [teeTimeType, setTeeTimeType] = useState('committed')

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
          <TeeTimeContainer title='Committed Tee Times' windowWidth={screenWidth} />
          <TeeTimeContainer title='Available Tee Times' windowWidth={screenWidth}/>
        </div>
      }
      {teeTimeType === 'committed'
        ? (screenWidth < 768) && <TeeTimeContainer title='Committed Tee Times' windowWidth={screenWidth} />
        : (screenWidth < 768) && <TeeTimeContainer title='Available Tee Times' windowWidth={screenWidth}/>
      }

      {screenWidth > 480 && 
        <PlayerList screenWidth={screenWidth}
        />
      }
    </div>
  )
}

export default Dashboard
