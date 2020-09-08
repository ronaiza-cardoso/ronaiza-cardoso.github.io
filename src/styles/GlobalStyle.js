import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body,html {
  
    height: 100vh;

    font-family: 'Inter', sans-serif;
}
* {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
}

html {
  scroll-behavior: smooth;
}
`

export default GlobalStyle
