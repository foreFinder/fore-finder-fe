import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  }
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
