import { Link } from 'react-router-dom'

import fontList from 'res/fonts'

import {
  Container,
} from './glyphButtonStyle'

const GlyphButton = ({
  glyph,
  font = fontList[0],
}) => (
  <Container
    as={Link}
    to="/sitelenpona"//to={`/sitelenpona/${glyph}`}
    data-font={font}
  >
    {Array.isArray(glyph) ? glyph[0] : glyph}
  </Container>
)

export default GlyphButton