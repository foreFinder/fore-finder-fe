import './App.css';
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'
import React, { useState, useEffect } from 'react' 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Header screenWidth={screenWidth}/>
      <Switch>
        <Route 
        exact path='/dashboard'
          render={() => (
            <Dashboard
              // passing state
            />
          )}
        />
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
