import TeeTime from '../TeeTime/TeeTime'
import InviteTypeSelect from './InviteTypeSelect/InviteTypeSelect'

import './TeeTimeContainer.css'

const TeeTimeContainer = ({ title, events, windowWidth }) => {
  const getEventType = () => {
    if (title === 'Committed Tee Times') {
      return 'committed'
    } else if (title === 'Available Tee Times') {
      return 'available'
    }
  }

  const teeTimes = events.map(event => {
    return <TeeTime type={getEventType()} event={event.attributes} />
  })

  return (
    <div className='tee-time-container'>
      <div className='container-title'>
        <h2>{title}</h2>
      </div>
      {(title === 'Available Tee Times' && windowWidth < 768) && <InviteTypeSelect />}
      <div className='tee-times'>
        {teeTimes}
      </div>
      <div className='type-select-con'>
        {(title === 'Available Tee Times' && windowWidth >= 768) && <InviteTypeSelect />}
      </div>
    </div>
  )
}

export default TeeTimeContainer
