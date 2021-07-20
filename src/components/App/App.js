import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import PlayerList from '../PlayerList/PlayerList';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import EventForm from '../EventForm/EventForm';
import {
  getAllCourses,
  getAllPlayers,
  getAllEvents,
  postInviteAction,
  deleteEvent,
  postFriendship,
  deleteFriendship,
} from '../../APICalls/APICalls';

function App() {
  const [events, setEvents] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [allPlayers, setAllPlayers] = useState([]);
  const [hostPlayer, setHostPlayer] = useState('');
  const [friends, setFriends] = useState([]);
  const [courses, setCourses] = useState([]);

  const addFriend = (friend) => {
    postFriendship(parseInt(hostPlayer.id), friend.id).then((data) =>
      setFriends([
        ...friends,
        {
          id: data.data.attributes.followee.id,
          name: data.data.attributes.followee.name,
        },
      ])
    );
  };

  const removeFriend = (unFriend) => {
    deleteFriendship(parseInt(hostPlayer.id), parseInt(unFriend.id)).then(
      (data) => {
        setFriends([
          ...friends.filter((f) => parseInt(f.id) !== parseInt(unFriend.id)),
        ]);
      }
    );
  };

  const makeFriendList = () => {
    const friends = allPlayers.filter((p) =>
      hostPlayer?.attributes?.friends?.includes(parseInt(p.id))
    );
    return friends.map((f) => ({ name: f.name, id: f.id }));
  };

  const updateInvite = (eventId, status) => {
    postInviteAction(hostPlayer.id, eventId, status).then((events) =>
      setEvents(events.data)
    );
  };

  const cancelCommitment = (event) => {
    if (event.attributes.host_id === parseInt(hostPlayer.id)) {
      deleteEvent(event.id, hostPlayer.id).then((events) =>
        setEvents(events.data)
      );
    } else {
      postInviteAction(hostPlayer.id, event.id, 'declined').then((events) =>
        setEvents(events.data)
      );
    }
  };

  const refreshEvents = () => {
    getAllEvents(hostPlayer.id).then((events) => setEvents(events.data));
  };

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    getAllPlayers().then((players) => {
      setAllPlayers(
        players.data.map((p) => ({ name: p.attributes.name, id: p.id }))
      );
      setHostPlayer(players.data[0]);
    });
    getAllCourses().then((courses) => setCourses(courses.data));
  }, []);

  useEffect(() => {
    setFriends(makeFriendList());

    if (hostPlayer) {
      getAllEvents(hostPlayer.id).then((events) => setEvents(events.data));
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
          exact
          path='/dashboard'
          render={() => (
            <Dashboard
              events={events}
              currentUserId={parseInt(hostPlayer.id)}
              screenWidth={screenWidth}
              handleInviteAction={{
                update: updateInvite,
                cancel: cancelCommitment,
              }}
              players={allPlayers}
              friends={friends}
              handleFriends={{ add: addFriend, remove: removeFriend }}
            />
          )}
        />
        {screenWidth > 1024 && <Redirect from='/community' to='/dashboard' />}
        <Route
          exact
          path='/community'
          render={() => (
            <PlayerList
              screenWidth={screenWidth}
              players={allPlayers}
              friends={friends}
              handleFriends={{ add: addFriend, remove: removeFriend }}
              screenWidth={screenWidth}
            />
          )}
        />
        {screenWidth > 480 && <Redirect from='/community' to='/dashboard' />}
        <Route
          exact
          path='/community'
          render={() => <PlayerList screenWidth={screenWidth} />}
        />
        <Route
          exact
          path='/event-form'
          render={() => (
            <EventForm
              courses={courses}
              friends={friends}
              hostId={hostPlayer.id}
              refreshEvents={refreshEvents}
            />
          )}
        />
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <Redirect to='/dashboard' />
      </Switch>
    </Router>
  );
}

export default App;
