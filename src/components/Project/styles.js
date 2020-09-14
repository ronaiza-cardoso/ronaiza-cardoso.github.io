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
  width: 50%;
  background-position: 100% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 5vw 0;
`

export const TextContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  margin: 5vw 0;
  padding-right: 10vw;
  padding-left: 15vw;
  flex: 0 0 auto;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
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
