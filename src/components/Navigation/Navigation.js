import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  AnteLipuIcon,
  KamaSonaIcon,
  SitelenPonaIcon,
  TokiPonaIcon,
} from 'icons'

import {
  Wrapper,
  Title,
  StyledItem,
  Items,
  MenuButton,
  LanguageSelect,
} from './navigationStyle'

const Item = ({
  to,
  icon,
  label,
}) => (
  <StyledItem
    as={NavLink}
    to={to}
    aria-label={label}
  >
    {icon}
    <span>{label}</span>
  </StyledItem>
)

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <Wrapper className={isMenuOpen ? 'open' : ''}>
      <Title>ilo toki pona</Title>

      <MenuButton
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ><div/><div/><div/></MenuButton>

      <Items>
        <Item
          to="/"
          icon={<TokiPonaIcon />}
          label="Dictionary"
        />
        <Item
          to="/sitelenpona"
          icon={<SitelenPonaIcon />}
          label="Glyphs"
        />
        <Item
          to="/kamasona"
          icon={<KamaSonaIcon />}
          label="Learn"
        />
        <Item
          to="/antelipu"
          icon={<AnteLipuIcon />}
          label="Resources"
        />

        <div style={{ flex: 1 }} />

        <LanguageSelect>
          <option value="en">English</option>
          <option value="toki">toki pona</option>
        </LanguageSelect>
      </Items>
    </Wrapper>
  )
}

export default Navigation