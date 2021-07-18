import React, { useState } from 'react'
import './PlayerList.css'
import PlayerCard from '../PlayerCard/PlayerCard'

const PlayerList = ({screenWidth, players, friends, handleFriends}) => {
  const [playerType, setPlayerType] = useState('friends')  

  const mapPlayers = (type) => {
    return type.map(p => (
      <PlayerCard
        key={p.id}
        playerInfo={p}
        friends={friends}
        handleFriends={handleFriends}
      />
    ))
  }

  return (
    <aside className={screenWidth > 480 ? 'player-list-desktop' : 'player-list-mobile'}>
      <span className={screenWidth > 480 ? 'player-type-select-desktop' : 'player-type-select-mobile'}>
        <button
          className={playerType === 'friends' ? 'player-type-btn' : 'player-type-btn unselected'}
          onClick={() => { if (playerType === 'community') setPlayerType('friends')}}>
          Friends
        </button>
        <button
          className={playerType === 'community' ? 'player-type-btn' : 'player-type-btn unselected'}
          onClick={() => { if (playerType === 'friends') setPlayerType('community')}}>
          Community
        </button>
      </span>
      <ul className='player-list-wrapper'>
        {playerType === 'friends' ? mapPlayers(friends) : mapPlayers(players)}
      </ul>
      <span className='player-type-select'>
      <span className={screenWidth > 480 ? 'player-type-select-desktop' : 'player-type-select-mobile'}>
        <button
          className={playerType === 'friends' ? 'player-type-btn' : 'player-type-btn unselected'}
          onClick={() => { if (playerType === 'community') setPlayerType('friends')}}>
          Friends
        </button>
        <button
          className={playerType === 'community' ? 'player-type-btn' : 'player-type-btn unselected'}
          onClick={() => { if (playerType === 'friends') setPlayerType('community')}}>
          Community
        </button>
      </span>
      {playerType === 'friends' ? mapPlayers(userFriends) : mapPlayers(players)}
      <ul className='player-list-wrapper'>
        {playerType === 'friends' ? mapPlayers(userFriends) : mapPlayers(players)}
      </ul>
      </span>
    </aside>
  )
}

export default PlayerList
