import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  color: #333;
`

export const ContentContainer = styled.div`
  background: #eee;
  display: flex;
  margin: 2vw;
`

export const ImageContainer = styled.div`
  background: ${({ src }) => `url(${src})`};
  background-size: 70%;
  background-position: center;
  width: 50vw;
  padding: 10vw;
  background-repeat: no-repeat;
`

export const TextContainer = styled.div`
  width: 50vw;
  padding: 10vw;
`

export const Content = styled.div`
  padding: 2rem;
`

export const GreetingLine = styled.h1`
  font-size: 3vw;
  line-height: 10vw;
  font-weight: 300;

  font-family: 'Playfair Display', serif;
`

export const Description = styled.div`
  p,
  li,
  ul {
    font-size: 2vw;
    font-weight: 300;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    margin-top: 2vw;
  }
`
