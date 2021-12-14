import { css } from '@emotion/react'

const globalStyles = theme => css`
  body {
    margin: 0;
    font-family: sans-serif;
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