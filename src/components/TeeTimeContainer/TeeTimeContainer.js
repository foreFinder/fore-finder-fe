import { useState, useEffect, useCallback } from 'react'

import TeeTime from '../TeeTime/TeeTime'
import InviteTypeSelect from './InviteTypeSelect/InviteTypeSelect'

import './TeeTimeContainer.css'

const TeeTimeContainer = ({ title, events, windowWidth, handleInviteAction }) => {
  const [privateInvites, setPrivateInvites] = useState([])
  const [invitesToDisplay, setInvitesToDisplay] = useState('private')

  const getEventType = useCallback(() => {
    if (title === 'Committed Tee Times') {
      return 'committed'
    } else if (title === 'Available Tee Times') {
      return 'available'
    }
  }, [title])

  const getTeeTimes = () => {
    let teeTimes = events

    if (getEventType() === 'available' && invitesToDisplay === 'private') {
      teeTimes = privateInvites
    }

    return teeTimes.map(teeTime => {
      return (
        <TeeTime
          key={teeTime.id} 
          type={getEventType()} 
          event={teeTime}
          handleInviteAction={handleInviteAction} 
        />
      )
    })
  }

  useEffect(() => {
    if (getEventType() === 'available') {
      setPrivateInvites(events.filter(event => event.attributes.pending.includes(1)))
    }
  }, [events, getEventType])

  return (
    <div className='tee-time-container'>
      <div className='container-title'>
        <h2>{title}</h2>
      </div>
      {(title === 'Available Tee Times' && windowWidth < 768) && <InviteTypeSelect handleClick={setInvitesToDisplay} />}
      <div className='tee-times'>
        {getTeeTimes()}
      </div>
      <div className='type-select-con'>
        {(title === 'Available Tee Times' && windowWidth >= 768) && <InviteTypeSelect handleClick={setInvitesToDisplay} />}
      </div>
    </div>
  )
}

export default TeeTimeContainer
