import { useTranslation } from 'react-i18next'

import { SelectField } from 'components'

import {
  Wrapper,
} from './footerStyle'

const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <Wrapper>
      <a href="https://bengrant.dev">{t('footer.attribution')}</a>

      <div style={{ flex: 1 }} />

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