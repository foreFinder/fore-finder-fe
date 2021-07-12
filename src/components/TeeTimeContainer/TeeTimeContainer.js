import { useState } from 'react'

import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    height: 480px;
    align-items: center;
    margin-bottom: unset;
    border-radius: 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  }
`

const ContainerTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 1.25em;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    background-color: rgb(241, 243, 244);
    width: 100%;
    padding: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
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

const TeeTimeGrid = styled.span`
  width: 100%;
  display: grid;
  grid-auto-rows: auto;

  @media only screen and (min-width: 768px) {
    padding: 16px;
  }
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
      <TeeTimeGrid>
        <TeeTime type={getEventType()}/>
      </TeeTimeGrid>
    </StyleWrapper>
  )
}

export default TeeTimeContainer
