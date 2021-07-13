import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1 className='dashboard-title'>My Tee Times</h1>
      <span className='event-type-select'><h2>Committed</h2> | <h2>Available</h2></span>
      <div className='tt-containers'>
        <TeeTimeContainer title='Committed Tee Times' />
        <TeeTimeContainer title='Available Tee Times' />
      </div>
    </div>
  )
}

export default Dashboard
