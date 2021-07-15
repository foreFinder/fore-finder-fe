import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({playerInfo}) => {
  return (
    <li className='player-card'>
      <p>{playerInfo.name}</p>
    </li>
  )
}

export default PlayerCard
