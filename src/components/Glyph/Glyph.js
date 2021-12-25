import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Highlight } from 'components'

import {
  Wrapper,
  Container,
  Label,
} from './glyphStyle'

const Glyph = ({
  glyph,
  showLabel = true,
  search,
}) => {
  const { t }= useTranslation()

  return (
    <Wrapper>
      <Container
        as={Link}
        to={`/sitelenpona/${Array.isArray(glyph) ? glyph[0] : glyph}`}
      >
        {Array.isArray(glyph) ? glyph[0] : glyph}
      </Container>

      {showLabel && <Label><Highlight text={Array.isArray(glyph) ? glyph.join(t('wordSeparator')).replace('-', ' ') : glyph.replace('-', ' ')} search={search} /></Label>}
    </Wrapper>
  )
}

export default Glyph