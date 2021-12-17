import { useState } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'

import theme, { globalStyles } from 'theme'
import { Footer, Navigation } from 'components'

import Dictionary from './Dictionary/Dictionary'

const Pages = () => {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const [isDark, setIsDark] = useState(darkQuery.matches)

  // Register dark mode listener
  darkQuery.addEventListener('change', e => setIsDark(e.matches))

  return (
    <ThemeProvider theme={theme(isDark)}>
      <Global styles={globalStyles} />

      <Navigation />

      <Routes>
        <Route path="/" element={<Dictionary />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  )
}

export default Pages