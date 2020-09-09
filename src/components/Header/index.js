import React from 'react'

import * as S from './styles'

function Header({ onItemClicked }) {
  const menu = [
    {
      title: 'About',
      n: 1,
    },
    {
      title: 'Projects',
      n: 2,
    },
    {
      title: 'Blog',
      n: 3,
    },
  ]
  return (
    <S.Container>
      <S.Logo>R</S.Logo>

      <S.NavBarContainer>
        {menu.map((item) => (
          <S.NavItem key={item.title} onClick={() => onItemClicked(item.n)}>
            {item.title}
          </S.NavItem>
        ))}
      </S.NavBarContainer>
    </S.Container>
  )
}

export default Header
