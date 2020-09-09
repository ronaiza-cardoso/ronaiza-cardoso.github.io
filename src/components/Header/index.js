import React from 'react'

import * as S from './styles'

function Header() {
  const menu = [
    {
      title: 'About',
    },
    {
      title: 'Projects',
    },
    {
      title: 'Blog',
    },
  ]
  return (
    <S.Container>
      <S.Logo>R</S.Logo>

      <S.NavBarContainer>
        {menu.map((item) => (
          <S.NavItem key={item.title}>{item.title}</S.NavItem>
        ))}
      </S.NavBarContainer>
    </S.Container>
  )
}

export default Header
