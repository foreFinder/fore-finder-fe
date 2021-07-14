import { useState, useEffect } from 'react'

import TeeTime from '../TeeTime/TeeTime'
import InviteTypeSelect from './InviteTypeSelect/InviteTypeSelect'

import './TeeTimeContainer.css'

const TeeTimeContainer = ({ title, events, windowWidth }) => {
  const [privateInvites, setPrivateInvites] = useState([])
  const [invitesToDisplay, setInvitesToDisplay] = useState('private')

  const getEventType = () => {
    if (title === 'Committed Tee Times') {
      return 'committed'
    } else if (title === 'Available Tee Times') {
      return 'available'
    }
  }

  const getTeeTimes = () => {
    let teeTimes = events

    if (getEventType() === 'available' && invitesToDisplay === 'private') {
      teeTimes = privateInvites
    }

    return teeTimes.map(teeTime => {
      return (
        <TeeTime 
          type={getEventType()} 
          event={teeTime.attributes} />
      )
    })
  }

  useEffect(() => {
    if (getEventType() === 'available') {
      setPrivateInvites(events.filter(event => event.attributes.invitees.includes(1)))
    }
  }, [events])

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
