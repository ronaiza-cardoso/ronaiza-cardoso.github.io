import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body,html {
    margin: 0;
    padding: 0;

    margin: 0;
    height: 100vh;
}
* {
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
`

export default GlobalStyle
