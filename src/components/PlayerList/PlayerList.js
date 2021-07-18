import React, { useState } from 'react'
import './PlayerList.css'
import PlayerCard from '../PlayerCard/PlayerCard'
import { getCurrentUser, getUserFriends } from '../../utilities'
import { players } from '../../APICalls/sampleData' // gonna fetch through app and pass into here

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
<<<<<<< HEAD
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
=======
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
>>>>>>> df1a7ed (Add styling for mobile view)
    </aside>
  )
}
export default PlayerList
