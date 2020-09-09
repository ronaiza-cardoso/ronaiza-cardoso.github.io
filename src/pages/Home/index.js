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
        <ParallaxLayer offset={1} speed={1} style={{ background: '#eee' }} />
        <ParallaxLayer offset={2} speed={1} />
        <ParallaxLayer offset={3} speed={1} style={{ background: '#eee' }} />

        <ParallaxLayer offset={0} speed={0.1}>
          <Hi />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '20vw',
          }}
        >
          About
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '20vw',
          }}
        >
          Projects
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '20vw',
          }}
        >
          Blog
        </ParallaxLayer>
      </Parallax>
    </S.Container>
  )
}

export default Home
