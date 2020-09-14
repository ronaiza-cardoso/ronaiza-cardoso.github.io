import React from 'react'

import * as S from './styles'

function Project({ item }) {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.TextContainer>
          <S.GreetingLine dangerouslySetInnerHTML={{ __html: item.title }} />
          <S.Description
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </S.TextContainer>

        <S.ImageContainer src="https://images.unsplash.com/photo-1586861375621-b28d7c63858d" />
      </S.ContentContainer>
    </S.Container>
  )
}

export default Project
