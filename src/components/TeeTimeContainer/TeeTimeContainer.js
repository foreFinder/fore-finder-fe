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
  const [publicInvites, setPublicInvites] = useState([]);
  const [privateInvites, setPrivateInvites] = useState([]);
  const [committedTeeTimes, setCommittedTeeTimes] = useState([]);
  const [invitesToDisplay, setInvitesToDisplay] = useState(
    title === 'Committed Tee Times' ? '' : 'private'
  );

  const getEventType = useCallback(() => {
    if (title === 'Committed Tee Times') {
      return 'committed';
    } else if (title === 'Available Tee Times') {
      return 'available';
    }
  }, [title]);

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
  
  const getTeeTimes = (eventsType) => {
    return eventsType.map(event => {
      return (
        <TeeTime
          key={event.id}
          type={getEventType()}
          event={event}
          handleInviteAction={handleInviteAction}
        />
      );
    });
  };

  const revealNoInviteMessage = (message) => {
    setTimeout(() => message.classList.remove('hidden'), 500)
  }

  useEffect(() => {
    if (getEventType() === 'available') {
      setPublicInvites(events.filter(event => !event.attributes.private));
      setPrivateInvites(events.filter((event) => event.attributes.private));
    } else {
      setCommittedTeeTimes(events)
    }
  }, [events]);

  useEffect(() => {
    const noInviteMessages = Array.from(document.querySelectorAll('.no-invites-card'));
    if (noInviteMessages) {
      noInviteMessages.forEach(m => revealNoInviteMessage(m))
    }
  }, [publicInvites, privateInvites, invitesToDisplay])
  
  return (
    <div className='tee-time-container'>
      <div className='container-title'>
        <h2>{title}</h2>
      </div>
      {title === 'Available Tee Times' && windowWidth < 768 && (
        <InviteTypeSelect handleClick={setInvitesToDisplay} />
      )}
      <div className='tee-times'>
        {title === 'Committed Tee Times' && getTeeTimes(committedTeeTimes)}
        {invitesToDisplay === 'private' ? getTeeTimes(privateInvites) : getTeeTimes(publicInvites)}
        {(invitesToDisplay === 'private' && !privateInvites.length) && displayNoInviteMessage()}
        {(invitesToDisplay === 'public' && !publicInvites.length) && displayNoInviteMessage()}

      </div>
      {title === 'Available Tee Times' && windowWidth >= 768 && (
        <div className='type-select-con'>
          <InviteTypeSelect handleClick={setInvitesToDisplay} />
        </div>
      )}
    </div>
  );
};

export default TeeTimeContainer;
