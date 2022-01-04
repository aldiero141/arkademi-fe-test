import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import keranjang from '../assets/shopping-basket.svg';
import Course from '../pages/course';

export const Nav = styled.nav`
  background: #FFF;
  height: 3.5em;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 0.2em 1em;
  z-index: 12;
  color: #1C1D20;
  position: relative;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const Line = styled.div`
  border-left: 1px solid #ccc;
  height: 1.625em;
  
  left: 50%;
  margin: 0 1em;
  top: 0;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-left: 1em;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const SignIn = styled(Link)`
  border-radius: 4px;
  background: #FFF;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: 0.1px solid #ccc;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const SignUp = styled(Link)`
  border-radius: 4px;
  background: #0872C7;
  padding: 10px 22px;
  color: #FFF;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
 
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' activeStyle>
            <img alt="logo" src='/image/arkademi-icon.svg' height="30em"/>
          </NavLink>
          <SearchBar/>
        </NavMenu>
        
        <NavMenu>
          <NavLink to='/course' activeStyle>
            Kategori
          </NavLink>
          <NavLink to='/mitra' activeStyle>
            Mitra
          </NavLink>
          <NavLink to='/tentang' activeStyle>
            Tentang
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/keranjang' activeStyle>
            <img alt="keranjang" src={keranjang} height="15em"/>
          </NavLink>

          <Line/>

          <NavBtn>
            <SignIn to='/masuk'>Masuk</SignIn>
            <SignUp to='/daftar'>Daftar</SignUp>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;