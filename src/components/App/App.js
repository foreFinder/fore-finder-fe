import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import PlayerList from '../PlayerList/PlayerList';
import Login from '../Login/Login'
import CreateProfile from '../CreateProfile/CreateProfile'
import React, { useState, useEffect, useRef } from 'react';
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
  const makeFriendList = useRef(() => {});

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

  makeFriendList.current = () => {
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

  const validateGoogleLogin = () => {
    // need to validate the user exists in the database
      // otherwise, needs to redirect to another page to complete the rest of login information needed (mainly phone and email)
    // upon good validation, need to setHostPlayer, setEvents, setFriends
  }

  const validateLogin = () => {
    // need to validate the user exists in the database
      // otherwise, needs to redirect to another page to complete the rest of login information needed (mainly phone and email)
    // upon good validation, need to setHostPlayer, setEvents, setFriends
  }

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

  const animateLabels = (rate) => {
    const allLabels = Array.from(document.querySelectorAll('label'));
    const labels = allLabels.filter((l) => !l.classList.contains('sub-label'));
    labels.forEach((l, i) => {
      setTimeout(() => l.classList.add('fade-in'), i * rate);
    });
  };

  useEffect(() => {
    // future iterations will need to find player from login table and setHostPlayer from login information
    getAllPlayers().then((players) => {
      setAllPlayers(
        players.data.map((p) => ({ name: p.attributes.name, id: p.id }))
      );
      setHostPlayer(players.data[0]);
    });
    getAllCourses().then((courses) => setCourses(courses.data));
  }, []);

  useEffect(() => {
    setFriends(makeFriendList.current());

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
          exact path='/login'
          render={() => <Login /> }
        />
        <Route 
          exact path='/create-profile'
          render={() => <CreateProfile 
            animateLabels={animateLabels}
          />}
        />
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
              userId={parseInt(hostPlayer.id)}
              players={allPlayers}
              friends={friends}
              handleFriends={{ add: addFriend, remove: removeFriend }}
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
              animateLabels={animateLabels}
            />
          )}
        />
        {/* <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route> */}
        <Redirect to='/login' />
      </Switch>
    </Router>
  );
}

export default App;
