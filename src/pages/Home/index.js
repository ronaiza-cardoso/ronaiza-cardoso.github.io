import React, { useRef } from 'react'

import { Parallax, ParallaxLayer } from 'react-spring/addons'

import * as S from './style'
import Header from '../../components/Header'
import Hi from '../../components/Hi'

function Home() {
  const parallax = useRef()

  return (
    <S.Container>
      <Header onItemClicked={(item) => parallax.current.scrollTo(item)} />

      <Parallax ref={parallax} pages={4} style={{ position: 'relative' }}>
        <ParallaxLayer offset={0} speed={1} />

        <ParallaxLayer offset={0} speed={0.1}>
          <Hi />
        </ParallaxLayer>
      </Parallax>
    </S.Container>
  )
}

export default Home
