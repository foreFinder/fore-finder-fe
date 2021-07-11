import { useState } from 'react'

import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    align-items: center;
    padding: 16px 16px 32px 16px;
    border-radius: 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  }
`

const ContainerTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 1.25em;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: solid 1px rgba(0, 0, 0, .2);
    text-align: center;
  }
`

const TypeSelector = styled.span`
  align-self: flex-end;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-right: 12px;

  .type-select-btn {
    background-color: unset;
    padding: unset;
    border: unset;
    font-size: 1.2em;
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

const TeeTimeContainer = ({ title }) => {
  const [allSelected, setAllSelected] = useState(false)

  const getEventType = () => {
    if (title === 'Committed Tee Times') {
      return 'committed'
    } else if (title === 'Available Tee Times') {
      return 'available'
    }
  }

  return (
    <StyleWrapper>
      <ContainerTitle>{title}</ContainerTitle>
      {title === 'Available Tee Times' &&
        <TypeSelector>
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
        </TypeSelector>
      }
      <TeeTime type={getEventType()}/>
    </StyleWrapper>
  )
}

export default TeeTimeContainer
