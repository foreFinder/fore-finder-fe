import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='tt-containers'>
        <TeeTimeContainer title='Committed Tee Times' />
        <TeeTimeContainer title='Available Tee Times' />
      </div>
    </div>
  )
}

export default Dashboard
