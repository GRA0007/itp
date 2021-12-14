const YELLOW = 60
const BLUE = 240
// #FFFF78 and #111199

const theme = isDark => ({
  breakpointTablet: 'max-width: 800px',

  theme: 'light',
  background: '#FFF',
  text: `hsl(${BLUE} 50% 10%)`,
  primary: `hsl(${YELLOW} 100% 74%)`, 
  secondary: `hsl(${BLUE} 80% 33%)`,
  highlight: `hsl(${YELLOW} 100% 90%)`,
  focusRing: '#FF3A20',

  ...isDark && {
    theme: 'dark',
    background: '#111',
    text: `hsl(${YELLOW} 100% 97%)`,
    primary: `hsl(${BLUE} 80% 33%)`,
    secondary: `hsl(${YELLOW} 100% 74%)`,
    highlight: `hsl(${BLUE} 60% 45%)`,
  },
})

export { default as globalStyles } from './globalStyles'

export default theme