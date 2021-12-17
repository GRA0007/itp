import { Button } from 'components'
import { KalamaIcon } from 'icons'
import { Fragment } from 'react'

import {
  Header,
  Word,
  Wrapper,
  ListenButton,
  Category,
  Def,
  Example,
  Content,
} from './definitionStyle'

const Definition = ({
  word,
  definitions = [],
}) => (
  <Wrapper>
    <Header>
      <Word>{Array.isArray(word) ? word.join(', ') : word}</Word>
      <ListenButton
        title="Listen"
        onClick={() => console.log('listen')}
      >
        <KalamaIcon />
      </ListenButton>
      <div style={{ flex: 1 }} />
      <Button secondary>Go to glyph</Button>
    </Header>

    <Content>
      {definitions.map(def => (
        <Fragment key={def.definition}>
          <Category>{def.category}</Category>
          <Def>{def.definition}</Def>
          {def.example && <Example>"{def.example}"</Example>}
        </Fragment>
      ))}
    </Content>
  </Wrapper>
)

export default Definition