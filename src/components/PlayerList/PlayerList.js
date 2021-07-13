import React, { useState } from 'react'
import './PlayerList.css'
import { players } from '../../APICalls/sampleData'
import PlayerCard from '../PlayerCard/PlayerCard'

const PlayerList = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const currentUser = players.find((player) => player.id === 2); // need to make this dynamic to match what user is logged in
  const userFriends = currentUser.friends.map((friendId) => {
    return players.find((player) => player.id === friendId).name;
  });
  
  const mapPlayers = () => {
    return players.map(p => (
      <PlayerCard
        key={p.id}
        playerInfo={p}
      />
    ))
  }

  return (
    <aside className='player-list'>
      <span className='event-type-select'>
        <button
          className={click ? 'friend-type-btn' : 'friend-type-btn unselected'}
          onClick={handleClick}
        >
          Friends
        </button>
        <button
          className={click ? 'friend-type-btn' : 'friend-type-btn unselected'}
          onClick={handleClick}
        >
          Community
        </button>
      </span>
      {mapPlayers()}
    </aside>
  )
}
export default PlayerList
