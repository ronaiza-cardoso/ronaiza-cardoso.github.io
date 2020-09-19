import React from 'react'

import * as S from './styles'

function Hi() {
  return (
    <>
      <S.Content>
        <S.GreetingContainer>
          <S.GreetingLine>Hello,</S.GreetingLine>
          <S.GreetingLine>You.</S.GreetingLine>
        </S.GreetingContainer>
        <S.DescriptionContainer>
          <S.Description>
            I&apos;m Ronaíza, a JavaScript developer and a acoustic Guitar
            player.
          </S.Description>
        </S.DescriptionContainer>
      </S.Content>
    </>
  )
}

export default Hi
