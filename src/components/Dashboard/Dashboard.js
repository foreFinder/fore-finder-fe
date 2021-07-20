import { useCallback, useEffect, useState } from 'react';
import PlayerList from '../PlayerList/PlayerList';

import TeeTimeContainer from '../TeeTimeContainer/TeeTimeContainer';
import './Dashboard.css';

const Dashboard = ({
  events,
  currentUserId,
  screenWidth,
  handleInviteAction,
  friends,
  players,
  handleFriends,
}) => {
  const [availableTeeTimes, setAvailableTeeTimes] = useState([]);
  const [committedTeeTimes, setCommittedTeeTimes] = useState([]);
  const [teeTimeType, setTeeTimeType] = useState('committed');

  const getAvailable = useCallback(() => {
    return events.filter((event) => {
      if (
        event.attributes.declined.includes(currentUserId) ||
        event.attributes.accepted.includes(currentUserId)
      ) {
        return false;
      } else if (
        event.attributes.pending.includes(currentUserId) ||
        !event.attributes.private
      ) {
        return true;
      }

      return false;
    });
  }, [events, currentUserId]);

  const getCommitted = useCallback(() => {
    return events.filter((event) =>
      event.attributes.accepted.includes(currentUserId)
    );
  }, [events, currentUserId]);

  useEffect(() => {
    setAvailableTeeTimes(getAvailable());
    setCommittedTeeTimes(getCommitted());
  }, [events, getAvailable, getCommitted]);

  return (
    <div className='dashboard'>
      {screenWidth >= 1025 && (
        <PlayerList
          userId={currentUserId}
          screenWidth={screenWidth}
          friends={friends}
          players={players}
          handleFriends={handleFriends}
        />
      )}
      <span className='event-type-select'>
        <button
          className={
            teeTimeType === 'committed'
              ? 'event-type-btn'
              : 'event-type-btn unselected'
          }
          onClick={() => {
            if (teeTimeType === 'available') setTeeTimeType('committed');
          }}
        >
          Committed
        </button>
        <button
          className={
            teeTimeType === 'available'
              ? 'event-type-btn'
              : 'event-type-btn unselected'
          }
          onClick={() => {
            if (teeTimeType === 'committed') setTeeTimeType('available');
          }}
        >
          Available
        </button>
      </span>
      {screenWidth >= 768 && (
        <div className='tt-containers'>
          <TeeTimeContainer
            title='Committed Tee Times'
            events={committedTeeTimes}
            windowWidth={screenWidth}
            handleInviteAction={handleInviteAction}
          />
          <TeeTimeContainer
            title='Available Tee Times'
            events={availableTeeTimes}
            windowWidth={screenWidth}
            handleInviteAction={handleInviteAction}
          />
        </div>
      )}
      {teeTimeType === 'committed' && screenWidth < 768 && (
        <TeeTimeContainer
          title='Committed Tee Times'
          events={committedTeeTimes}
          windowWidth={screenWidth}
          handleInviteAction={handleInviteAction}
        />
      )}
      {teeTimeType === 'available' && screenWidth < 768 && (
        <TeeTimeContainer
          title='Available Tee Times'
          events={availableTeeTimes}
          windowWidth={screenWidth}
          handleInviteAction={handleInviteAction}
        />
      )}
    </div>
  );
};

export default Dashboard;
