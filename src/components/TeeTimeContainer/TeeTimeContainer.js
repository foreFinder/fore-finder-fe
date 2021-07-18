import { useState, useEffect, useCallback } from 'react';

import TeeTime from '../TeeTime/TeeTime';
import InviteTypeSelect from './InviteTypeSelect/InviteTypeSelect';
import { Link } from 'react-router-dom';

import './TeeTimeContainer.css';

const TeeTimeContainer = ({
  title,
  events,
  windowWidth,
  handleInviteAction,
}) => {
  const [privateInvites, setPrivateInvites] = useState([]);
  const [invitesToDisplay, setInvitesToDisplay] = useState('private');

  const getEventType = useCallback(() => {
    if (title === 'Committed Tee Times') {
      return 'committed';
    } else if (title === 'Available Tee Times') {
      return 'available';
    }
  }, [title]);

  const getTeeTimes = () => {
    let teeTimes = events;

    if (getEventType() === 'available' && invitesToDisplay === 'private') {
      teeTimes = privateInvites;
    }

    return teeTimes.map((teeTime) => {
      return (
        <TeeTime
          key={teeTime.id}
          type={getEventType()}
          event={teeTime}
          handleInviteAction={handleInviteAction}
        />
      );
    });
  };

  const displayNoInviteMessage = () => {
    return (
      <p className='no-invites-card hidden'>
        There are currently no tee time invitations from{' '}
        {invitesToDisplay === 'private'
          ? 'your friends'
          : 'the ForeFinder community'}
        . Would you like to{' '}
        <Link className='no-invites-link' to='/event-form'>
          create an event
        </Link>
        ?
      </p>
    );
  };

  const revealNoInviteMessage = (message) => {
    setTimeout(() => message.classList.remove('hidden'), 1000)
  }

  useEffect(() => {
    if (getEventType() === 'available') {
      setPrivateInvites(events.filter((event) => event.attributes.private));
    }
    const noInviteMessages = Array.from(document.querySelectorAll('.no-invites-card'));
    if (noInviteMessages) {
      noInviteMessages.forEach(m => revealNoInviteMessage(m))
    }

  }, [events, getEventType]);

  return (
    <div className='tee-time-container'>
      <div className='container-title'>
        <h2>{title}</h2>
      </div>
      {title === 'Available Tee Times' && windowWidth < 768 && (
        <InviteTypeSelect handleClick={setInvitesToDisplay} />
      )}
      <div className='tee-times'>
        {events.length ? getTeeTimes() : displayNoInviteMessage()}
      </div>
      <div className='type-select-con'>
        {title === 'Available Tee Times' && windowWidth >= 768 && (
          <InviteTypeSelect handleClick={setInvitesToDisplay} />
        )}
      </div>
    </div>
  );
};

export default TeeTimeContainer;
