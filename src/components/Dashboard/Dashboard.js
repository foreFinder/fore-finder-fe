import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2>Commited Tee Times</h2>
      <TeeTimeContainer />
      <h2>Available Tee Times</h2>
      <TeeTimeContainer />
    </div>
  )
}

export default Dashboard
