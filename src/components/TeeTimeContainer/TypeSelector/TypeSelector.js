import { useState } from 'react'
import styled from 'styled-components'

const StyleWrapper = styled.span`
  align-self: ${({ mobile }) => mobile ? 'flex-end' : 'unset'};
  margin: ${({ mobile }) => mobile ? '0 12px 12px 0' : 'unset'};

  .type-select-btn {
    background-color: unset;
    padding: unset;
    border: unset;
    font-size: 1.15em;
    font-weight: 500;
    cursor: pointer;
  }

  .type-select-btn:nth-child(1) {
    margin-right: 6px;
  }

  .type-select-btn:nth-child(2) {
    margin-left: 6px;
  }

  .unselected {
    color: rgba(0, 0, 0, .25);
`

const TypeSelector = ({ mobile }) => {
  const [allSelected, setAllSelected] = useState(false)

  return (
    <StyleWrapper mobile={mobile}>
      <button 
        className={allSelected ? 'type-select-btn unselected' : 'type-select-btn'}
        onClick={() => {
          if (allSelected) setAllSelected(!allSelected)
        }}
      >
        Friends
      </button> 
      | 
      <button
        className={allSelected ? 'type-select-btn' : 'type-select-btn unselected'}
        onClick={() => {
          if (!allSelected) setAllSelected(!allSelected)
        }}
      >
        All
      </button>
    </StyleWrapper>
  )
}

export default TypeSelector
