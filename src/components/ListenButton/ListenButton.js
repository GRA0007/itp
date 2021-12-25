import { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { KalamaIcon } from 'icons'

import { Wrapper } from './listenButtonStyle'

const ListenButton = ({ sound }) => {
  const { t } = useTranslation()
  const [file, setFile] = useState()
  const audio = useRef()

  useEffect(() => {
    if (!sound) return
    const fileName = Array.isArray(sound) ? sound[0] : sound
    const path = `/sounds/${fileName}.mp3`
    // Check if sound file exists
    fetch(path, { method: 'HEAD' }).then(res => {
      if (res.ok) {
        setFile(path)
      }
    })
  }, [sound])

  return file ? (
    <Wrapper
      title={t('controls.listen')}
      onClick={() => {
        if (!audio.current) {
          audio.current = new Audio(file)
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