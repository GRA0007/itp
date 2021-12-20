import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import { /* Button, */ Highlight } from 'components'
///import { KalamaIcon } from 'icons'

import {
  Header,
  Word,
  Wrapper,
//  ListenButton,
  Category,
  Def,
  Example,
  Content,
} from './definitionStyle'

const Definition = ({
  word,
  definitions = [],
  search,
  showExamples = true,
}) => {
  const { t } = useTranslation('wordList')

  return (
    <Wrapper>
      <Header>
        <Word><Highlight text={Array.isArray(word) ? word.join(t('wordSeparator')) : word} search={search} /></Word>
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
            <Def><Highlight text={Array.isArray(def.definition) ? def.definition.join(t('definitionSeparator')) : def.definition} search={search} /></Def>
            {def.examples && showExamples && <Example>"{def.examples[0].toki}"</Example>}
          </Fragment>
        ))}
      </Content>
    </Wrapper>
  )
}

export default Definition