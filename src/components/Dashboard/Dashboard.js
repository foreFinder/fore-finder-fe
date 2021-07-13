import { useState } from 'react'

import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = () => {
  const [teeTimeType, setTeeTimeType] = useState('committed')

  return (
    <div className='dashboard'>
      <h1 className='dashboard-title'>My Tee Times</h1>
      <span className='event-type-select'>
        <button
          className={teeTimeType === 'committed' ? 'event-type-btn' : 'event-type-btn unselected'}
          onClick={() => { if (teeTimeType === 'available') setTeeTimeType('committed')}}
        >
          Committed
        </button> 
        | 
        <button
          className={teeTimeType === 'available' ? 'event-type-btn' : 'event-type-btn unselected'}
          onClick={() => { if (teeTimeType === 'committed') setTeeTimeType('available')}}
        >
          Available
        </button>
      </span>
      <div className='tt-containers'>
        <TeeTimeContainer title='Committed Tee Times' />
        <TeeTimeContainer title='Available Tee Times' />
      </div>
    </div>
  )
}

export default Dashboard
