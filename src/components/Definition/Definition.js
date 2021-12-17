import { Button, Highlight } from 'components'
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
  search,
}) => (
  <Wrapper>
    <Header>
      <Word><Highlight text={Array.isArray(word) ? word.join(', ') : word} search={search} /></Word>
      {/* <ListenButton
        title="Listen"
        onClick={() => console.log('listen')}
      >
        <KalamaIcon />
      </ListenButton> */}
      <div style={{ flex: 1 }} />
      {/* <Button secondary>Info</Button> */}
    </Header>

    <Content>
      {definitions.map(def => (
        <Fragment key={def.definition}>
          <Category>{def.category}</Category>
          <Def><Highlight text={def.definition} search={search} /></Def>
          {def.example && <Example>"{def.example}"</Example>}
        </Fragment>
      ))}
    </Content>
  </Wrapper>
)

export default Definition