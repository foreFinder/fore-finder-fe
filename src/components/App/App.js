import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import EventForm from '../EventForm/EventForm';
import { getAllCourses, getAllPlayers } from '../../APICalls/APICalls';

function App() {
  const makeFriendList = () => {
    const friends = allPlayers.filter((p) =>
      hostPlayer?.attributes?.friends?.includes(parseInt(p.id))
    );
    return friends.map((f) => ({ name: f.attributes.name, id: f.id }));
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [allPlayers, setAllPlayers] = useState([]);
  const [hostPlayer, setHostPlayer] = useState('');
  const [friends, setFriends] = useState('');
  const [courses, setCourses] = useState([]);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getAllPlayers().then((players) => {
      setAllPlayers(players.data);
      setHostPlayer(players.data[0]);
    });
    getAllCourses().then((courses) => setCourses(courses.data));
  }, []);

  useEffect(() => {
    setFriends(makeFriendList());
  }, [allPlayers, hostPlayer]);

  return (
    <Router>
      <Header screenWidth={screenWidth} />
      <Switch>
        <Route
          exact
          path='/dashboard'
          render={() => <Dashboard screenWidth={screenWidth} />}
        />
        <Route exact path='/'>
          <Redirect to='/dashboard' /> // This is a quick fix, might want to
          default web server to http://localhost:3000/dashboard if possible
        </Route>
        <Route
          exact
          path='/event-form'
          render={() => <EventForm courses={courses} friends={friends} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
