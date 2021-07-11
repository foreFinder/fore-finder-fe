import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    justify-content: center;
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
  display: flex;
  margin-bottom: 12px;

  h3 {
    font-size: 1.1em;
    font-weight: 500;
  }

  h3:nth-child(1) {
    margin-right: 6px;
  }

  h3:nth-child(2) {
    margin-left: 6px;
    color: rgba(0, 0, 0, .25)
  }
`

const TeeTimeContainer = ({ title }) => {
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
          <h3>Friends</h3> | <h3>All</h3>
        </TypeSelector>
      }
      <TeeTime type={getEventType()}/>
    </StyleWrapper>
  )
}

export default TeeTimeContainer
