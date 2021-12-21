import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button, Highlight } from 'components'
import { KalamaIcon } from 'icons'

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
  showExamples = true,
}) => {
  const { t } = useTranslation(['wordList', 'dictionary'])

  return (
    <Wrapper>
      <Header>
        <Word><Highlight text={Array.isArray(word) ? word.join(t('wordList:wordSeparator')) : word} search={search} /></Word>
        <ListenButton
          title={t('dictionary:definition.listen')}
          onClick={() => console.log('listen')}
        >
          <KalamaIcon />
        </ListenButton>
        <div style={{ flex: 1 }} />
        <Button as={Link} to={`/ilonimi/${Array.isArray(word) ? word[0] : word}`} secondary>{t('dictionary:definition.info')}</Button>
      </Header>

      <Content>
        {definitions.map(def => (
          <Fragment key={`${def.category}-${def.definition}`}>
            <Category>{def.category}</Category>
            <Def><Highlight text={Array.isArray(def.definition) ? def.definition.join(t('wordList:definitionSeparator')) : def.definition} search={search} /></Def>
            {def.examples && showExamples && <Example>"{def.examples[0].toki}"</Example>}
          </Fragment>
        ))}
      </Content>
    </Wrapper>
  )
}

export default Definition