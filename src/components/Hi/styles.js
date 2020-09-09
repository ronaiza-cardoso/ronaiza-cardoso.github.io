import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    transform: translate3d(0,40px,0)
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1
  }
`

const bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(-100px); }
  100% { transform: scale(1,1)      translateY(0); }
`

export const Content = styled.div`
  padding: 2rem;
`

export const GreetingContainer = styled.div``

export const GreetingLine = styled.h1`
  font-size: min(15vw, 20vw);
  line-height: min(12vw, 15vw);
  font-weight: 300;

  font-family: 'Playfair Display', serif;

  animation-duration: 1s;
  animation-fill-mode: both;
  opacity: 0;
  animation-name: ${fadeInUp};
`

export const Description = styled.p`
  color: grey;
  font-size: 5vw;
  font-weight: 300;
  margin-top: 3rem;
`

export const ArrowDown = styled.img`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: block;
  margin-right: auto;
  margin-bottom: 40px;
  margin-left: auto;
  width: min(4vw, 1vw);

  transform-origin: bottom;
  animation-duration: 2s;

  animation-name: ${bounce};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
`
