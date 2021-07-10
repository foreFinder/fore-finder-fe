import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const TTWrapper = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
`

const TTLabel = styled.h2`
  align-self: center;
  margin: 16px 0;
  font-size: 1.25em;
  font-weight: 600;
`

const TeeTimeContainer = ({ title }) => {
  return (
    <TTWrapper>
      <TTLabel>{title}</TTLabel>
      <TeeTime />
    </TTWrapper>
  )
}

export default TeeTimeContainer
