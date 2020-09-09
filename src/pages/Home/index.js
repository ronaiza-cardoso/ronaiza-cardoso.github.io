import React, { useRef } from 'react'

import { Parallax, ParallaxLayer } from 'react-spring/addons'

import * as S from './style'
import Header from '../../components/Header'
import Hi from '../../components/Hi'
import Project from '../../components/Project'

function Home() {
  const parallax = useRef()
  const projects = [
    {
      title: 'Menos Mosquito',
      description: `
      <p>O Menos Mosquito é um aplicativo do Ministério da Saúde que possibilita capacitar o cidadão para que atue no trabalho de prevenção, combate e eliminação dos criadouros de mosquito Aedes aegypti - vetor de transmissão da dengue, zika e chikungunya.
      Por meio deste aplicativo, é possível:</p>
      <ul>
        <li>- Realizar inspeções nos locais onde você frequenta;</li>
        <li>- Verificar a identidade do Agente Comunitário de Saúde;</li>
        <li>- Aprender a se prevenir dos focos do Mosquito.</li>
      </ul>
      `,
    },
    {
      title: 'Emenda Parlamentar',
      description: `
      <p>O aplicativo Emendas Parlamentares permite melhor controle dos recursos destinados aos parlamentares, provenientes das emendas do Ministério da Saúde e pretende:</p>
      <ul>
        <li>- Disponibilizar um canal seguro e de fácil acesso para consulta de emendas;</li>
        <li>- Simplificar a pesquisa de dados referente às emendas, beneficiários e propostas;</li>
        <li>- Obter visão macro das informações por meio de gráficos;</li>
        <li>- Acompanhar o trâmite das propostas até seu devido pagamento.</li>
      </ul>
      `,
    },
    {
      title: 'Novoic',
      description: `
      <p>The Novoic app provides a secure, compliant collection of voice data for clinical studies, including remote assessment. To be eligible for using the app, you must be a clinician/researcher involved in an approved study, or a participant taking part in one of these studies.</p>

      <p>The Novoic app can help you:</p>
      <ul>
        <li>- Securely collect speech data during clinician-led assessments;</li>
        <li>- Design custom at-home assessments that the patient can do on their own;</li>
        <li>- Define an automated calendar of assessments and notify the patient when a new assessment is ready.</li>
      </ul>
      `,
    },
  ]
  return (
    <S.Container>
      <Header onItemClicked={(item) => parallax.current.scrollTo(item)} />

      <Parallax ref={parallax} pages={4} style={{ position: 'relative' }}>
        <ParallaxLayer offset={0} speed={1} />
        <ParallaxLayer offset={1} speed={1} style={{ background: '#eee' }} />
        <ParallaxLayer offset={2} speed={1} />

        <ParallaxLayer offset={0} speed={0.1}>
          <Hi />
        </ParallaxLayer>

        {projects.map((item, index) => (
          <ParallaxLayer
            offset={index + 1}
            speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '20vw',
            }}
          >
            <Project {...{ item }} />
          </ParallaxLayer>
        ))}
      </Parallax>
    </S.Container>
  )
}

export default Home
