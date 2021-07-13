import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({playerInfo}) => {
  return (
    <div className='player-card'>
      <p>{playerInfo.name}</p>
    </div>
  )
}

export default PlayerCard
