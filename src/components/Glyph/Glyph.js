import { Link } from 'react-router-dom'

import { Highlight } from 'components'

import {
  Wrapper,
  Container,
  Label,
} from './glyphStyle'

const Glyph = ({
  word,
  showLabel = true,
  search,
}) => (
  <Wrapper>
    <Container
      as={Link}
      to="/sitelenpona"//to={`/sitelenpona/${word}`}
    >
      {word}
    </Container>

    {showLabel && <Label><Highlight text={Array.isArray(word) ? word.join(', ') : word} search={search} /></Label>}
  </Wrapper>
)

export default Glyph