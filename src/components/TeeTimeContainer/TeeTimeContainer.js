import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TeeTime from '../TeeTime/TeeTime'
import TypeSelector from './TypeSelector/TypeSelector'

import './TeeTimeContainer.css'

const TeeTimeContainer = ({ title, windowWidth }) => {
  const getEventType = () => {
    if (title === 'Committed Tee Times') {
      return 'committed'
    } else if (title === 'Available Tee Times') {
      return 'available'
    }
  }

  return (
    <div className='tee-time-container'>
      {windowWidth >= 768 &&
        <div className='container-title'>
          <h2>{title}</h2>
        </div>
      }
      {(title === 'Available Tee Times' && windowWidth < 768) && <TypeSelector mobile={true} />}
      <div className='tee-times'>
        <TeeTime type={getEventType()}/>
      </div>
      <div className='type-select-con'>
        {(title === 'Available Tee Times' && windowWidth >= 768) && <TypeSelector mobile={false} />}
      </div>
    </div>
  )
}

export default TeeTimeContainer
