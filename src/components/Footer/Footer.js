import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { SelectField } from 'components'

import {
  Wrapper,
  Links,
} from './footerStyle'

const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <Wrapper>
      <Links>
        <Link to="/about">{t('footer.about')}</Link>
        <Link to="/privacy">{t('footer.privacy')}</Link>
      </Links>

      <SelectField
        title={t('footer.language')}
        options={{
          en: 'English',
          //toki: 'toki pona',
          ...process.env.NODE_ENV === 'development' && { cimode: 'Debug' },
        }}
        value={i18n.language}
        onChange={e => i18n.changeLanguage(e.currentTarget.value)}
      />
    </Wrapper>
  )
}

export default Footer