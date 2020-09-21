import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.a`
  margin: 2rem auto;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(auto, 100vw));
  gap: 1.5rem;
  justify-content: space-evenly;
  width: 100%;

  border-radius: 5px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  border-bottom: 1px solid var(--secondary);

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }

  @media (max-width: 550px) {
    width: 85vw;
    flex-direction: column;
  }
`

export const Image = styled.div`
  width: 100%;
  height: 20vw;
  background: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 550px) {
    width: 80vw;
    height: 30vw;
  }
`

export const TextContainer = styled.div`
  padding: 1rem;
`

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  color: #eee;
  margin-bottom: 1rem;
`

export const Description = styled.h3`
  font-family: 'Inter', sans-serif;
  color: #eee;
  font-weight: 300;
`
