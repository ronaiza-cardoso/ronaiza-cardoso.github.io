import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body,html {
    
      height: 100vh;

      font-family: 'Inter', sans-serif;
      font-size: 16px;
  }
  * {
      box-sizing: border-box;

      margin: 0;
      padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #333;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`

export default GlobalStyle
