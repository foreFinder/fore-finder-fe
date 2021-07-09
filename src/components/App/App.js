import './App.css';
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route 
        exact path='/'
          render={() => (
            <Dashboard
              // passing state
            />
          )}
        />

      </Switch>
    </Router>
  )
}

export default App;
