import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-radius: 8px;
`

const EventTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 1.25em;
  font-weight: 600;
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
    <Wrapper>
      <EventTitle>{title}</EventTitle>
      <TeeTime type={getEventType()}/>
    </Wrapper>
  )
}

export default TeeTimeContainer
