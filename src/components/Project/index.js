import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'
import FadeIn from '../FadeIn'

function Project({ item, index }) {
  return (
    <FadeIn duration={4000} delay={index * 100}>
      <S.Container href={item.link} target="_blank">
        <S.Image src={item.img} />
        <S.TextContainer>
          <S.Title>{item.title}</S.Title>
          <S.Description>{item.shortDescription}</S.Description>
        </S.TextContainer>
      </S.Container>
    </FadeIn>
  )
}

Project.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    shortDescription: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default Project
