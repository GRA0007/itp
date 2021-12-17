import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  AnteLipuIcon,
  KamaSonaIcon,
  SitelenPonaIcon,
  TokiPonaIcon,
} from 'icons'

import { Button } from 'components'
import { NavItem } from './components'

import {
  Wrapper,
  Title,
  Items,
  MenuButton,
  ButtonWrapper,
} from './navigationStyle'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setIsMenuOpen(false), [location])
  
  return (
    <Wrapper className={isMenuOpen ? 'open' : ''}>
      <Title>ilo toki pona</Title>

      <MenuButton
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ><div/><div/><div/></MenuButton>

      <Items>
        <NavItem
          to="/"
          icon={<TokiPonaIcon />}
          label="Dictionary"
        />
        <NavItem
          to="/sitelenpona"
          icon={<SitelenPonaIcon />}
          label="Glyphs"
        />
        <NavItem
          to="/kamasona"
          icon={<KamaSonaIcon />}
          label="Learn"
        />
        <NavItem
          to="/antelipu"
          icon={<AnteLipuIcon />}
          label="Resources"
        />

        <div style={{ flex: 1 }} />

        <ButtonWrapper><Button>Login or sign up</Button></ButtonWrapper>
      </Items>
    </Wrapper>
  )
}

export default Navigation