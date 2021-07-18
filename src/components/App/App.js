import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import PlayerList from '../PlayerList/PlayerList'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import EventForm from '../EventForm/EventForm';
import { getAllCourses, getAllPlayers, getAllEvents, postInviteAction } from '../../APICalls/APICalls';
import { players } from '../../APICalls/sampleData'

function App() {
  const [events, setEvents] = useState([])
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [allPlayers, setAllPlayers] = useState([]);
  const [hostPlayer, setHostPlayer] = useState('');
  const [friends, setFriends] = useState([]);
  const [courses, setCourses] = useState([]);

  const addFriend = friend => setFriends([...friends, friend])
  const removeFriend = friend => setFriends([...friends.filter(f => f.id !== friend.id)])

  const makeFriendList = () => {
    const friends = allPlayers.filter((p) =>
      hostPlayer?.attributes?.friends?.includes(parseInt(p.id))
    );
    return friends.map((f) => ({ name: f.attributes.name, id: f.id }));
  };

  const updateInvite = (eventId, status) => {
    postInviteAction(hostPlayer.id, eventId, status).then(events => setEvents(events.data))
  }

  console.log(hostPlayer)

  const cancelCommitment = (event) => {
    if (event.attributes.host_id === hostPlayer.id) {

    } else {
      postInviteAction(hostPlayer.id, event.id, 'declined').then(events => setEvents(events.data))
    }
  }

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    getAllPlayers().then((players) => {
      setAllPlayers(players.data);
      setHostPlayer(players.data[0]);
    });
    getAllCourses().then((courses) => setCourses(courses.data));
  }, []);
  
  useEffect(() => {
    setFriends(makeFriendList());
    
    if (hostPlayer) {
      getAllEvents(hostPlayer.id).then(events => setEvents(events.data));
    }
  }, [allPlayers, hostPlayer]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Header screenWidth={screenWidth} />
      <Switch>
        <Route 
          exact path='/dashboard'
          render={() => (
            <Dashboard
              events={events}
              currentUserId={parseInt(hostPlayer.id)}
              screenWidth={screenWidth}
              handleInviteAction={{ update: updateInvite, cancel: cancelCommitment }}
              players={players}
              friends={friends}
              handleFriends={{add: addFriend, remove: removeFriend}}
            />
          )}
        />
        <Route exact path='/'>
          <Redirect to='/dashboard' /> // This is a quick fix, might want to default web server to http://localhost:3000/dashboard if possible
        </Route>
        {screenWidth > 1024 && <Redirect from='/community' to='/dashboard'/>}
        <Route 
          exact path='/community'
          render={() => (
            <PlayerList 
              screenWidth={screenWidth}
              players={players}
              friends={friends}
              handleFriends={{add: addFriend, remove: removeFriend}}
            />
          )}
        />
        <Route
          exact
          path='/event-form'
          render={() => <EventForm courses={courses} friends={friends} hostId={hostPlayer.id} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
