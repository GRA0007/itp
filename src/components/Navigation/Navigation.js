import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
//  LipuAnteIcon,
//  LipuNimiIcon,
//  KamaSonaIcon,
  SitelenPonaIcon,
  TokiPonaIcon,
} from 'icons'

//import { Button } from 'components'
import { NavItem } from './components'

import {
  Wrapper,
  Title,
  Items,
  MenuButton,
//  ButtonWrapper,
} from './navigationStyle'

const Navigation = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])
  
  return (
    <Wrapper className={isMenuOpen ? 'open' : ''}>
      <Title>{t('site_name')}</Title>

      <MenuButton
        type="button"
        title={t('navigation.menu')}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ><div/><div/><div/></MenuButton>

      <Items>
        <NavItem
          to="/"
          icon={<TokiPonaIcon />}
          label={t('navigation.pages.dictionary')}
        />
        <NavItem
          to="/sitelenpona"
          icon={<SitelenPonaIcon />}
          label={t('navigation.pages.glyphs')}
        />
        {/* <NavItem
          to="/kamasona"
          icon={<KamaSonaIcon />}
          label={t('navigation.pages.learn')}
        />
        <NavItem
          to="/lipunimi"
          icon={<LipuNimiIcon />}
          label={t('navigation.pages.reference')}
        />
        <NavItem
          to="/lipuante"
          icon={<LipuAnteIcon />}
          label={t('navigation.pages.resources')}
        /> */}

        <div style={{ flex: 1 }} />

        {/* <ButtonWrapper><Button>{t('navigation.login_signup')}</Button></ButtonWrapper> */}
      </Items>
    </Wrapper>
  )
}

export default Navigation