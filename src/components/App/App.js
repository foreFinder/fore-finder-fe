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
import { getAllCourses, getAllPlayers } from '../../APICalls/APICalls';
import {players, teeTimes } from '../../APICalls/sampleData'

function App() {
  const [events, setEvents] = useState([])
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [allPlayers, setAllPlayers] = useState([]);
  const [hostPlayer, setHostPlayer] = useState('');
  const [friends, setFriends] = useState([]);
  const [courses, setCourses] = useState([]);

  const makeFriendList = () => {
    const friends = allPlayers.filter((p) =>
      hostPlayer?.attributes?.friends?.includes(parseInt(p.id))
    );
    return friends.map((f) => ({ name: f.attributes.name, id: f.id }));
  };

  const updateInvite = (eventId, accepted) => {
    const event = events.find(event => event.id === eventId)
    const inviteeIndex = event.attributes.pending.indexOf(parseInt(hostPlayer.id))

    if (accepted) {
      event.attributes.accepted.push(parseInt(hostPlayer.id))
    } else if (!accepted) {
      event.attributes.declined.push(parseInt(hostPlayer.id))
    }

    event.attributes.pending.splice(inviteeIndex, 1)
    event.attributes.remaining_spots--

    setEvents([...events.filter(e => e.id !== event.id), event])
  }

  const cancelCommitment = (eventId) => {
    const event = events.find(event => event.id === eventId)
    const inviteeIndex = event.attributes.accepted.indexOf(parseInt(hostPlayer.id))

    event.attributes.accepted.splice(inviteeIndex, 1)
    event.attributes.declined.push(parseInt(hostPlayer.id))

    event.attributes.open_spots++
    setEvents([...events.filter(e => e.id !== event.id), event])
  }

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    getAllPlayers().then((players) => {
      setAllPlayers(players.data);
      setHostPlayer(players.data[0]);
    });
    getAllCourses().then((courses) => setCourses(courses.data));
    setEvents(teeTimes.data)
  }, []);
  

  useEffect(() => {
    setFriends(makeFriendList());
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
            />
          )}
        />
        {screenWidth > 480 && <Redirect from='/community' to='/dashboard'/>}
        <Route 
          exact path='/community'
          render={() => (
            <PlayerList 
              screenWidth={screenWidth}
              players={players}
              friends={friends}
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
