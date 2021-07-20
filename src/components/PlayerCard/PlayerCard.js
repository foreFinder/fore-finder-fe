import React from 'react';

import './PlayerCard.css';

const PlayerCard = ({ playerInfo, friends, handleFriends }) => {
  return (
    <li data-cy='player-card' className='player-card'>
      <p className='player-name'>{playerInfo.name}</p>
      {friends.some((f) => f.name === playerInfo.name) ? (
        <span
          data-cy='friend-option'
          className='friend-option'
          onClick={() => handleFriends.remove(playerInfo)}
        >
          <button className='btn'>Remove Friend</button>
        </span>
      ) : (
        <span
          data-cy='friend-option'
          className='friend-option'
          onClick={() => handleFriends.add(playerInfo)}
        >
          <button className='btn'>Add Friend</button>
        </span>
      )}
    </li>
  );
};

export default PlayerCard;
