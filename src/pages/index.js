import { useState, useEffect, Suspense } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { Route, Routes, Navigate } from 'react-router-dom'

import theme, { globalStyles } from 'theme'
import { useUserStore } from 'stores'

import { Footer, Main, Navigation } from 'components'
import NavigationFallback from 'components/Navigation/Navigation.fallback'
import FooterFallback from 'components/Footer/Footer.fallback'

import Dictionary from './Dictionary/Dictionary'
import Glyphs from './Glyphs/Glyphs'
import Word from './Word/Word'
import Glyph from './Glyph/Glyph'

import About from './About/About'
import Privacy from './Privacy/Privacy'
import NotFound from './NotFound/NotFound'

const Pages = () => {
  const themePreference = useUserStore(state => state.preferences.theme)
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const [isDark, setIsDark] = useState(darkQuery.matches)

  // Register dark mode listener
  darkQuery.addEventListener('change', e => themePreference === 'system' && setIsDark(e.matches))
  // Detect dark mode updates
  useEffect(() => {
    setIsDark(themePreference === 'system' ? darkQuery.matches : themePreference === 'dark')
  }, [themePreference, darkQuery.matches])

  return (
    <ThemeProvider theme={theme(isDark)}>
      <Global styles={globalStyles} />

      <Suspense fallback={<NavigationFallback />}><Navigation /></Suspense>

      <Suspense fallback={<Main center>loading...</Main>}>
        <Routes>
          <Route path="/" element={<Dictionary />} />
          <Route path="/ilonimi" element={<Navigate to="/" replace={true} />} />
          <Route path="/ilonimi/:word" element={<Word />} />
          <Route path="/sitelenpona" element={<Glyphs />} />
          <Route path="/sitelenpona/:glyph" element={<Glyph />} />

          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Suspense fallback={<FooterFallback />}><Footer /></Suspense>
    </ThemeProvider>
  )
}

export default Pages