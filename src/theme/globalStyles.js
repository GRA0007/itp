import { css } from '@emotion/react'

const globalStyles = theme => css`
  @font-face {
    font-family: linja-pona;
    src: url('/fonts/linja-pona-4.9.otf') format('opentype');
  }
  body {
    margin: 0;
    font-family: 'Lexend', sans-serif;
    background: ${theme.background};
    color: ${theme.text};
    color-scheme: light dark;
  }
  body, #root {
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    box-sizing: border-box;
  }
  a {
    color: ${theme.secondary};
  }
`

export default globalStyles