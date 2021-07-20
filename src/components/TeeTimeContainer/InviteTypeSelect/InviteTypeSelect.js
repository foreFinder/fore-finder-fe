import { useState } from 'react';
import './InviteTypeSelect.css';

const TypeSelector = ({ handleClick }) => {
  const [allSelected, setAllSelected] = useState(false);

  return (
    <div className='invite-type-select'>
      <button
        className={
          allSelected ? 'type-select-btn unselected' : 'type-select-btn'
        }
        onClick={() => {
          if (allSelected) {
            setAllSelected(!allSelected);
            handleClick('private');
          }
        }}
      >
        Friends
      </button>
      <button
        className={
          allSelected ? 'type-select-btn' : 'type-select-btn unselected'
        }
        onClick={() => {
          if (!allSelected) {
            setAllSelected(!allSelected);
            handleClick('public');
          }
        }}
      >
        Public
      </button>
    </div>
  );
};

export default TypeSelector;
