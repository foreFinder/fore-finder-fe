import TeeTime from '../TeeTime/TeeTime'

import styled from 'styled-components';
import './TeeTimeContainer.css'

const TTWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-radius: 8px;
`

const TTLabel = styled.h2`
  margin-bottom: 16px;
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
