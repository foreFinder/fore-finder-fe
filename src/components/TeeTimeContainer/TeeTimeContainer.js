import TeeTime from '../TeeTime/TeeTime'
import InviteTypeSelect from './InviteTypeSelect/InviteTypeSelect'

import './TeeTimeContainer.css'

const TeeTimeContainer = ({ title, windowWidth }) => {
  const getEventType = () => {
    if (title === 'Committed Tee Times') {
      return 'committed'
    } else if (title === 'Available Tee Times') {
      return 'available'
    }
  }

  return (
    <div className='tee-time-container'>
      <div className='container-title'>
        <h2>{title}</h2>
      </div>
      {(title === 'Available Tee Times' && windowWidth < 768) && <InviteTypeSelect />}
      <div className='tee-times'>
        <TeeTime type={getEventType()}/>
      </div>
      <div className='type-select-con'>
        {(title === 'Available Tee Times' && windowWidth >= 768) && <InviteTypeSelect />}
      </div>
    </div>
  )
}

export default TeeTimeContainer
