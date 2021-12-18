import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Button,
  Main,
} from 'components'

const NotFound = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('notFound')

  return (
    <Main center>
      <h1 style={{margin: 0}}>{t('title')}</h1>
      <p style={{margin: '1rem 0 2rem'}}>{t('description')}</p>
      <Button secondary onClick={() => navigate(-1)}>{t('link')}</Button>
    </Main>
  )
}

export default NotFound