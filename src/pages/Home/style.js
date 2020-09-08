import styled from 'styled-components'

import image from '../../assets/images/background.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  background-image: url('${image}');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1d585140;
    z-index: 2;
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin: 50px 0;
`

export const Description = styled.p`
  font-size: 8rem;
  color: #fff;
`
