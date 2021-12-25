import { useTranslation } from 'react-i18next'

import { KalamaIcon } from 'icons'

import { Wrapper } from './listenButtonStyle'

const ListenButton = ({ sound }) => {
  const { t } = useTranslation()

  return (
    <Wrapper
      title={t('controls.listen')}
      onClick={() => console.log(`listen ${sound}`)}
    >
      <KalamaIcon />
    </Wrapper>
  )
}

export default ListenButton