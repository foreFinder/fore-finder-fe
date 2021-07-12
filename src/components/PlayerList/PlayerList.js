import React from 'react'
import './PlayerList.css'
import { players } from '../../APICalls/sampleData'

const PlayerList = () => {

  const showPlayers = () => {
    players.forEach(p => console.log(p))
  }
  return (
    <aside className='player-list'>
      {showPlayers()}
    </aside>
  )
}

export default PlayerList
