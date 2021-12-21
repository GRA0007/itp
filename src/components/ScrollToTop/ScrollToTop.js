import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SewiIcon } from 'icons'

import { Wrapper, Button } from './scrollToTopStyle'

const ScrollToTop = () => {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const checkPosition = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', checkPosition)

    return () => window.removeEventListener('scroll', checkPosition)
  }, [])

  return (
    <Wrapper className={visible ? 'visible' : ''}>
      <Button
        type="button"
        title={t('navigation.scroll_to_top')}
        onClick={() =>
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }
      >
        <SewiIcon />
      </Button>
    </Wrapper>
  )
}

export default ScrollToTop