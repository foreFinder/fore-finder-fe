import TeeTime from '../TeeTime/TeeTime'
import './TeeTimeContainer.css'

const TeeTimeContainer = ({title}) => {
  return (
    <div className='tee-time-container'>
      <h2>{title}</h2>
      <TeeTime />
    </div>
  )
}

export default TeeTimeContainer
