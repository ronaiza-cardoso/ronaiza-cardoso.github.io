import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

/**
 * from https://joshwcomeau.com/snippets/react-components/fade-in
 */

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const FadeIn = ({ duration = 300, delay = 0, children, style = {} }) => {
  return (
    <Wrapper
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

FadeIn.propTypes = {
  duration: PropTypes.number,
  delay: PropTypes.number,
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
}

FadeIn.defaultProps = {
  duration: 300,
  delay: 0,
  style: {},
}

export default FadeIn
