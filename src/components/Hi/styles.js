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

const typing = keyframes`
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(-100px); }
  100% { transform: scale(1,1)      translateY(0); }
`

export const Content = styled.div`
  padding: 16px;
`

export const GreetingContainer = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const GreetingLine = styled.h1`
  font-size: clamp(35px, 35vw, 200px);
  line-height: clamp(35px, 35vw, 270px);
  font-weight: 300;
  color: var(--secondary);
  letter-spacing: -10px;

  font-family: 'Source Code Pro', monospace;

  animation-duration: 1s;
  animation-fill-mode: both;
  opacity: 0;
  animation-name: ${fadeInUp};
`

export const DescriptionContainer = styled.div``

export const Description = styled.p`
  color: grey;
  font-size: clamp(16px, 5vw, 25px);
  font-weight: 300;
  margin-top: 3rem;

  overflow: hidden;
  border-right: 0.15em solid #333;

  display: inline-block;
  width: 820px;
  opacity: 0;
  animation: ${typing} 2s steps(20, end), ${blink} 0.5s step-end alternate;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  white-space: nowrap;
  @media (max-width: 550px) {
    width: 100%;
    white-space: normal;
    animation-play-state: paused;
    opacity: 1;
    border: 0;
  }

  strong {
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: transform 250ms;
      z-index: -1;
      width: 100%;
      height: 100%;
    }

    &:hover::after {
      transform: scale(1.1);
    }
  }
`

export const ArrowDown = styled.img`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 80px;
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
