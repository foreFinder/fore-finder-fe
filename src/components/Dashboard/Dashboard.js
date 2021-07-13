import { useState, useEffect } from 'react'

import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = () => {
  const [teeTimeType, setTeeTimeType] = useState('committed')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

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
      {windowWidth >= 768 && 
        <div className='tt-containers'>
          <TeeTimeContainer title='Committed Tee Times' windowWidth={windowWidth} />
          <TeeTimeContainer title='Available Tee Times' windowWidth={windowWidth}/>
        </div>
      }
      {teeTimeType === 'committed'
        ? (windowWidth < 768) && <TeeTimeContainer title='Committed Tee Times' windowWidth={windowWidth} />
        : (windowWidth < 768) && <TeeTimeContainer title='Available Tee Times' windowWidth={windowWidth}/>
      }
    </div>
  )
}

export default Dashboard
