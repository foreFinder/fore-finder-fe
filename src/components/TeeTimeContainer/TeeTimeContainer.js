import { useState } from 'react'

import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    height: 560px;
    display: grid;
    grid-template-rows: 4.5rem auto;
    grid-auto-rows: 3.75rem;
    margin-bottom: unset;
    border-radius: 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  }
`

const ContainerTitle = styled.div`
  margin-bottom: 24px;

  h2 {
    font-size: 1.25em;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    background-color: rgb(241, 243, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: unset;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`

const TypeSelector = styled.span`
  background-color: rgb(241, 243, 244);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  // border-top: solid 1px rgb(213, 214, 215);

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

const TeeTimes = styled.div`
  padding: 20px 20px 0 20px;
  overflow: auto;
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
      <ContainerTitle>
        <h2>{title}</h2>
      </ContainerTitle>
      <TeeTimes>
        <TeeTime type={getEventType()}/>
      </TeeTimes>
      <TypeSelector>
        {title === 'Available Tee Times' &&
          <>
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
          </>
        }
      </TypeSelector>
    </StyleWrapper>
  )
}

export default TeeTimeContainer
