import React, { useState } from 'react'
import './PlayerList.css'
import PlayerCard from '../PlayerCard/PlayerCard'
import { getCurrentUser, getUserFriends } from '../../utilities'
import { players } from '../../APICalls/sampleData' // gonna fetch through app and pass into here

const PlayerList = ({screenWidth}) => {
  const [playerType, setPlayerType] = useState('friends')

  const userFriends = getUserFriends()
  
  const mapPlayers = (type) => {
    return type.map(p => (
      <PlayerCard
        key={p.id}
        playerInfo={p}
      />
    ))
  }

  return (
    <aside className={screenWidth > 480 ? 'player-list-desktop' : 'player-list-mobile'}>
      <span className='player-type-select'>
        <button
          className={playerType === 'friends' ? 'friend-type-btn' : 'friend-type-btn unselected'}
          onClick={() => { if (playerType === 'community') setPlayerType('friends')}}        >
          Friends
        </button>
        <button
          className={playerType === 'community' ? 'friend-type-btn' : 'friend-type-btn unselected'}
          onClick={() => { if (playerType === 'friends') setPlayerType('community')}}        >
          Community
        </button>
      </span>
      {playerType === 'friends' ? mapPlayers(userFriends) : mapPlayers(players)}
    </aside>
  )
}
export default PlayerList
