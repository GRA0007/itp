import { useState } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { Route, Routes, Navigate } from 'react-router-dom'

import theme, { globalStyles } from 'theme'
import { Footer, Navigation } from 'components'

import Dictionary from './Dictionary/Dictionary'
import Glyphs from './Glyphs/Glyphs'
import Word from './Word/Word'

import About from './About/About'
import Privacy from './Privacy/Privacy'
import NotFound from './NotFound/NotFound'

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
        <Route path="/ilonimi" element={<Navigate to="/" replace={true} />} />
        <Route path="/ilonimi/:word" element={<Word />} />
        <Route path="/sitelenpona" element={<Glyphs />} />

        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  )
}

export default Pages