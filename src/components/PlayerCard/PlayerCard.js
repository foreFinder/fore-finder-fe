import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({playerInfo, playerType, friends}) => {
  return (
    <li className='player-card'>
      <p>{playerInfo.name}</p>
      {playerType === 'friends' && friends.includes(playerInfo) ?
      <span>
        <button>Remove Friend</button> 
      </span> :
      <span>
        <button>Add Friend</button>
        <button>Remove Friend</button>
      </span>
    }
    </li>
  )
}

export default PlayerCard
