import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import { HeaderContainer, Logo, MobileIcon, MobileMenu } from './Header.elements'


const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <HeaderContainer>
        <Logo to='/'>
          ForeFinder
        </Logo> 
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
        </MobileIcon> 
        <MobileMenu onClick={handleClick} click={click}>

        </MobileMenu>
      </HeaderContainer>
    </>
  )
}

export default Header
