import React from 'react'

import * as S from './style'

function Home() {
  return (
    <S.Container>
      <S.Title>
        <span role="img" aria-labelledby="raising hands emoji">
          👋
        </span>
        , I&apos;m Ronaíza
      </S.Title>
      <S.Description>
        a frontend developer transforming <strong>data</strong> into
        <strong>information</strong>
      </S.Description>
    </S.Container>
  )
}

export default Home
