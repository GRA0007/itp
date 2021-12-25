import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button, Highlight, ListenButton } from 'components'

import {
  Header,
  Word,
  Wrapper,
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
  const { t } = useTranslation(['common', 'dictionary'])

  return (
    <Wrapper>
      <Header>
        <Word><Highlight text={Array.isArray(word) ? word.join(t('common:wordSeparator')) : word} search={search} /></Word>
        <ListenButton sound={word} />
        <div style={{ flex: 1 }} />
        <Button as={Link} to={`/ilonimi/${Array.isArray(word) ? word[0] : word}`} secondary>{t('dictionary:definition.info')}</Button>
      </Header>

      <Content>
        {definitions.map(def => (
          <Fragment key={`${def.category}-${def.definition}`}>
            <Category>{def.category}</Category>
            <Def><Highlight text={Array.isArray(def.definition) ? def.definition.join(t('common:definitionSeparator')) : def.definition} search={search} /></Def>
            {def.examples && showExamples && <Example>"{def.examples[0].toki}"</Example>}
          </Fragment>
        ))}
      </Content>
    </Wrapper>
  )
}

export default Definition