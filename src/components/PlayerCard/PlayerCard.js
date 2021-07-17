import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({playerInfo, friends, handleFriends}) => {
  return (
    <li className='player-card'>
      <p className='player-name'>{playerInfo.name}</p>
      {friends.some(f => f.name === playerInfo.name) ?
      <span className='friend-option' onClick={() => handleFriends.remove(playerInfo)}>
        <button className='btn'>Remove Friend</button> 
      </span> :
      <span className='friend-option' onClick={() => handleFriends.add(playerInfo)}>
        <button className='btn'>Add Friend</button>
      </span>
    }
    </li>
  )
}

export default PlayerCard
