import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <TeeTimeContainer title='Committed Tee Times'/>
      <TeeTimeContainer title='Available Tee Times'/>
    </div>
  )
}

export default Dashboard
