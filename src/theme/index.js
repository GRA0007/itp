const COLORS = {
  black: '#111111',
  white: '#FFFFFF',
  blue: '#111199',
  purple: '#4E4EEB',
  yellow: '#FFFF78',
  darkYellow: '#828259',
  gray: '#9B9B9B',
  darkGray: '#6B6B6B',
  lightGray: '#B9B9B9',
}

const theme = isDark => ({
  breakpointTablet: 'max-width: 800px',

  ...COLORS,

  // Light
  theme: 'light',
  background: COLORS.white,
  text: COLORS.black,
  primary: COLORS.yellow,
  secondary: COLORS.blue,
  surface: COLORS.purple,
  strongGray: COLORS.darkGray,
  weakGray: COLORS.lightGray,

  ...isDark && { // Dark
    theme: 'dark',
    background: COLORS.black,
    text: COLORS.white,
    primary: COLORS.blue,
    secondary: COLORS.yellow,
    surface: COLORS.yellow,
    strongGray: COLORS.lightGray,
    weakGray: COLORS.darkGray,
  },
})

export { default as globalStyles } from './globalStyles'

export default theme