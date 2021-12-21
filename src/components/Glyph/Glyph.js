import { Link } from 'react-router-dom'

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
}) => (
  <Wrapper>
    <Container
      as={Link}
      to="/sitelenpona"//to={`/sitelenpona/${glyph}`}
    >
      {Array.isArray(glyph) ? glyph[0] : glyph}
    </Container>

    {showLabel && <Label><Highlight text={Array.isArray(glyph) ? glyph.join(', ') : glyph} search={search} /></Label>}
  </Wrapper>
)

export default Glyph