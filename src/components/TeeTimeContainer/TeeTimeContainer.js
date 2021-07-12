import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TeeTime from '../TeeTime/TeeTime'
import TypeSelector from './TypeSelector/TypeSelector'

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

const TeeTimes = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 20px 20px 0 20px;
    overflow: auto;
  }
`

const TeeTimeContainer = ({ title }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const getEventType = () => {
    if (title === 'Committed Tee Times') {
      return 'committed'
    } else if (title === 'Available Tee Times') {
      return 'available'
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  return (
    <StyleWrapper>
      <ContainerTitle>
        <h2>{title}</h2>
      </ContainerTitle>
      {(title === 'Available Tee Times' && windowWidth < 768) && <TypeSelector mobile={true} />}
      <TeeTimes>
        <TeeTime type={getEventType()}/>
      </TeeTimes>
      <div className='type-select-con'>
        {(title === 'Available Tee Times' && windowWidth >= 768) && <TypeSelector mobile={false} />}
      </div>
    </StyleWrapper>
  )
}

export default TeeTimeContainer
