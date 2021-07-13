import React from 'react'
import './PlayerList.css'
import { players } from '../../APICalls/sampleData'
import PlayerCard from '../PlayerCard/PlayerCard'

const PlayerList = () => {
  const currentUser = players.find((player) => player.id === 2); // need to make this dynamic to match what user is logged in
  const userFriends = currentUser.friends.map((friendId) => {
    return players.find((player) => player.id === friendId).name;
  });
  
  const showPlayers = () => {
    return players.map(p => (
      <PlayerCard
        key={p.id}
        playerInfo={p}
      />
    ))
  }

  return (
    <aside className='player-list'>
      {showPlayers()}
    </aside>
  )
}

export default PlayerList
