import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiGolfTee, GiGolfFlag } from 'react-icons/gi'
import { VscAccount } from 'react-icons/vsc'

export const HeaderContainer = styled.header`
  background: #59A371;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-bottom: 2em;
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

@media screen and (max-width: 991px) {
  padding-right: 30px;
  padding-left: 30px;
}
`;

export const Logo = styled(Link)`
  color:#fff;
  position: static;
  text-decoration: none;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-self: center;

  @media screen and (max-width: 960px) {
    font-size: 2.4rem;
    margin-left: 2rem;

  }
`;

export const LogoIcon = styled(GiGolfTee)`
  margin-right:0.5rem;
`;

export const MobileIcon = styled.span`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    left: 20;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  padding: 0;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({mobileNav}) => (mobileNav ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #59A371;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const UserIcon = styled(VscAccount)`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 2;
`;

export const UserOptions = styled.ul`
  /* display: flex; */
  display: ${({userDropdown}) => (userDropdown ? 'flex' : 'none')};
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1.5rem;
  flex-direction: column;
  width: 30%;
  height: 20vh;
  position: absolute;
  right: ${({userDropdown}) => (userDropdown ? '0' : '-100%')};
  top: ${({userDropdown}) => (userDropdown ? '80px' : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #59A371;
  z-index: 0;
  color: #fff;
  padding: 0;
  padding-top: 12px;

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
    /* display: ${({userDropdown}) => (userDropdown ? 'flex' : 'none')};
    overflow-y: hidden; */
  }
`;

