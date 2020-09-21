import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  background: var(--primary);
  position: relative;
`

export const ProjectsContainer = styled.div`
  height: 100vh;
  width: 50vw;

  background: var(--primary);
  position: relative;
`

export const Content = styled.div`
  margin-left: 5vw;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 5vw;
  position: absolute;
  color: #ddd;
  top: 50%;
  margin-left: 1rem;
`

export const Link = styled.a`
  background-color: var(--secondary);
  mask: ${({ src }) => `url(${src}) no-repeat center`};
  width: 35px;
  height: 35px;
  margin: 1rem 0;
  cursor: pointer;
`
