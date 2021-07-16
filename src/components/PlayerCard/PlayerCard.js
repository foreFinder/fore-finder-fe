import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({playerInfo, friends}) => {
  console.log("info in card", playerInfo)
  console.log("friends", friends)
  return (
    <li className='player-card'>
      <p className='player-name'>{playerInfo.name}</p>
      {friends.some(f => f.name === playerInfo.name) ?
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
