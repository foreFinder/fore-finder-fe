import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({playerInfo, friends}) => {
  return (
    <li className='player-card'>
      <p className='player-name'>{playerInfo.name}</p>
      {friends.includes(playerInfo) ?
      <span className='friend-option'>
        <button className='btn'>Remove Friend</button> 
      </span> :
      <span className='friend-option'>
        <button className='btn'>Add Friend</button>
      </span>
    }
    </li>
  )
}

export default PlayerCard
