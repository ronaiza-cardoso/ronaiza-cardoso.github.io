import React from 'react'

import * as S from './style'
import Hi from '../../components/Hi'
import Project from '../../components/Project'

function Home() {
  const items = [
    {
      title: '5 COMMON ERRORS IN A REACT NATIVE APP WHEN USING EXPO',
      shortDescription:
        'When creating a mobile app with React Native, you can use Expo to streamline some complexities. Meet the most common errors and how to solve them....',
      img: 'https://images.unsplash.com/photo-1511376777868-611b54f68947',
      link:
        'https://www.imaginarycloud.com/blog/5-common-errors-found-in-a-react-native-app-using-expo/',
    },
    {
      title: 'DEMYSTIFYING REACT HOOKS VS REDUX',
      shortDescription:
        "What is the difference between Redux and React Hooks? In this article, you'll find a walkthrough into these features and how they fit in each use-case....",
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef',
      link: 'https://www.imaginarycloud.com/blog/react-hooks-vs-redux/',
    },
    {
      title: 'IONIC VS REACT NATIVE: PROS AND CONS',
      shortDescription:
        "Building a mobile app with a cross-platform tool has its pros and cons. Here's a comparison of Ionic vs React Native, two of the most popular choices....",
      img: 'https://images.unsplash.com/photo-1524226108234-3cccbbbfa86d',
      link:
        'https://www.imaginarycloud.com/blog/ionic-vs-react-native-pros-and-cons/',
    },
  ]

  const links = [
    {
      icon: require('../../assets/images/dev.svg'),
      url: 'https://bit.ly/3kFF5jD',
    },
    {
      icon: require('../../assets/images/github.svg'),
      url: 'https://bit.ly/3iSyLEN',
    },
    {
      icon: require('../../assets/images/linkdin.svg'),
      url: 'https://bit.ly/3kFETRr',
    },
  ]

  return (
    <S.Container>
      <S.LinksContainer>
        {links.map((item) => (
          <S.Link
            key={item.url}
            src={item.icon}
            href={item.url}
            target="__blank"
          />
        ))}
      </S.LinksContainer>
      <S.Content>
        <Hi />

        <S.ProjectsContainer>
          {items.map((item, index) => (
            <Project {...{ item, index }} key={item.link} />
          ))}
        </S.ProjectsContainer>
      </S.Content>
    </S.Container>
  )
}

export default Home
