import { useState } from 'react'
import './InviteTypeSelect.css'

const TypeSelector = ({ mobile }) => {
  const [allSelected, setAllSelected] = useState(false)

  return (
    <div className='invite-type-select'>
      <button 
        className={allSelected ? 'type-select-btn unselected' : 'type-select-btn'}
        onClick={() => {
          if (allSelected) setAllSelected(!allSelected)
        }}
      >
        Friends
      </button>
      <button
        className={allSelected ? 'type-select-btn' : 'type-select-btn unselected'}
        onClick={() => {
          if (!allSelected) setAllSelected(!allSelected)
        }}
      >
        All
      </button>
    </div>
  )
}

export default TypeSelector
