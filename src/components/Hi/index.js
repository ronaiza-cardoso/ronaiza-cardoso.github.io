import React from 'react'

import * as S from './styles'

function Hi() {
  const content = [
    {
      title: 'Resume',
    },
    {
      title: 'Projects',
    },
  ]
  return (
    <S.Content>
      <S.GreetingContainer>
        <S.GreetingLine>Hello,</S.GreetingLine>
        <S.GreetingLine>You.</S.GreetingLine>
      </S.GreetingContainer>
      <S.DescriptionContainer>
        <S.Description>
          I&apos;m Ronaíza, a JavaScript developer and a acoustic Guitar player.
        </S.Description>
      </S.DescriptionContainer>

      <S.Menu>
        {content.map((item) => (
          <S.MenuItem key={item.title}>{item.title}</S.MenuItem>
        ))}
      </S.Menu>
    </S.Content>
  )
}

export default Hi
