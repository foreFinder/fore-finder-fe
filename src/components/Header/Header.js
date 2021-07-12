import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
  HeaderContainer, 
  HeaderWrapper, 
  Logo, 
  LogoIcon, 
  MobileIcon, 
  NavMenu,
  NavItem, 
  NavLinks,
  UserOptions,
  UserIcon
} from './Header.elements'


const Header = ({screenWidth}) => {
  const [mobileNav, setMobileNav] = useState(false)
  const handleMobileNav = () => {
    setUserDropdown(false) 
    return setMobileNav(!mobileNav)
  }
   
  const [userDropdown, setUserDropdown] = useState(false)
  const handleUserDropdown = () => {
    setMobileNav(false)
    return setUserDropdown(!userDropdown)
  }

  const handleMenus = () => {
    setUserDropdown(false) 
    setMobileNav(false)
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <HeaderContainer>
          <HeaderWrapper userDropdown={userDropdown}>
            <MobileIcon onClick={handleMobileNav} data-cy='mobile-menu'>
              {mobileNav ? <FaTimes/> : <FaBars/>}
            </MobileIcon> 
            <Logo to='/dashboard' onClick={handleMenus}>
              <LogoIcon data-cy='logo'/>
              ForeFinder
            </Logo> 
            <NavMenu 
              onClick={handleMenus} 
              mobileNav={mobileNav}
              userDropdown={userDropdown} 
              >
              {/* <NavItem data-cy='dash-link'>
                <NavLinks to='/dashboard'>
                  Home
                </NavLinks>
              </NavItem> */}

              <NavItem data-cy='form-link'>
                <NavLinks to='/form'>
                  Add Tee Time
                </NavLinks>
              </NavItem>
              
              {/* <NavItem data-cy='friends-link'>
                <NavLinks to='/friends'>
                  My Friends
                </NavLinks>
              </NavItem> */}
          {screenWidth <= 480 && 
              <NavItem data-cy='community-link'>
                <NavLinks to='community'>
                  My Community
                </NavLinks>
              </NavItem>
              }
            </NavMenu>
            <UserIcon 
              onClick={handleUserDropdown} data-cy='user-dropdown'/>
            <UserOptions 
              onClick={handleUserDropdown} 
              userDropdown={userDropdown} 
              mobileNav={mobileNav}>
                User Name
              <NavItem data-cy='logout-link'>
                <NavLinks to='/login'>
                  Log Out
                </NavLinks>
              </NavItem>
            </UserOptions>
          </HeaderWrapper>
        </HeaderContainer>
      </IconContext.Provider>
    </>
  )
}

export default Header
