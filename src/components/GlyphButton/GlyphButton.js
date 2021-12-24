import { useTranslation } from 'react-i18next'

import fontList from 'res/fonts'

import {
  Container,
} from './glyphButtonStyle'

const GlyphButton = ({
  glyph,
  font = Object.keys(fontList)[0],
}) => {
  const { t } = useTranslation('details')

  return (
    <Container
      href={fontList[font].source}
      target="_blank"
      rel="noreferrer nofollow"
      data-font={font}
      title={t('actions.visit_page', { name: fontList[font].name })}
    >
      <span aria-hidden="true">{Array.isArray(glyph) ? glyph[0] : glyph}</span>
      <label>{fontList[font].name}</label>
    </Container>
  )
}

export default GlyphButton