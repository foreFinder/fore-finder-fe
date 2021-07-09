import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background: #59A371;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;

  &:hover {
    color: red;
  }
`;

export const Logo = styled(Link)`
  color:#fff;
  justify-self: flex-start;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.span`
  height: 100%;
  /* align-items: center; */
  /* align-self: center; */
  justify-self: flex-end;
`;

export const MobileMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #59A371;
  }
`;