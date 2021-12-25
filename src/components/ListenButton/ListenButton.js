import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { KalamaIcon } from 'icons'

import { Wrapper } from './listenButtonStyle'

import sounds from 'res/sounds'

const ListenButton = ({ sound }) => {
  const { t } = useTranslation()
  const audio = useRef()

  return Object.keys(sounds).includes(sound) ? (
    <Wrapper
      title={t('controls.listen')}
      onClick={() => {
        if (!audio.current) {
          audio.current = new Audio(`/sounds/${sounds[sound]}.mp3`)
        }
        audio.current.currentTime = 0
        audio.current.play()
      }}
    >
      <KalamaIcon />
    </Wrapper>
  ) : null
}

export default ListenButton