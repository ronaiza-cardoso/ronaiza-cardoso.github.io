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
        <S.Description>
          I&apos;m Ronaíza, a frontend developer transforming{' '}
          <strong>data</strong> into <strong>information.</strong>
        </S.Description>
      </S.Content>
      <S.ArrowDown
        src={require('../../assets/images/5b2a8936920a7989fd639958_arrow.svg')}
        alt="arrow down"
      />
    </>
  )
}

export default Hi
