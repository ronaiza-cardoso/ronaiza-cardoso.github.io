import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 10vh;

  background: #eee;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
`

export const Logo = styled.h1`
  font-weight: 300;

  font-family: 'Playfair Display', serif;
  margin: 1rem;
`
export const NavBarContainer = styled.nav`
  margin: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavItem = styled.div`
  position: relative;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 16px;
  margin: 1rem;

  &:hover {
    transform: scale(1.5);
    margin: 0 4rem;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    top: 50%;
    margin-top: -0.5px;
    background: #333;
  }

  &:before {
    left: -2.5px;
  }
  &:after {
    right: 2.5px;
    background: #333;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:before {
    background: #333;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:after {
    background: transparent;
    width: 100%;
    transition: 0s;
  }
`
