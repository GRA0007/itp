import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Button,
  Definition,
  Main,
  OptionsPanel,
  SearchWrapper,
  SwitchField,
  TextField,
  Wrapper,
} from 'components'

const compare = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase() === b.toLocaleLowerCase())
  } else {
    return a.toLocaleLowerCase() === b.toLocaleLowerCase()
  }
}
const has = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase().includes(b.toLocaleLowerCase()))
  } else {
    return a.toLocaleLowerCase().includes(b.toLocaleLowerCase())
  }
}

const Dictionary = () => {
  const [q, setQ] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [options, setOptions] = useState({
    showExamples: true,
    showNonEssentialWords: false,
  })
  const { t } = useTranslation(['common', 'dictionary', 'wordList'])

  const list = t('wordList:list', { returnObjects: true })

  return (
    <Main>
      <Wrapper flex>
        <SearchWrapper>
          <TextField
            placeholder={t('common:search.placeholder')}
            value={q}
            onChange={e => setQ(e.currentTarget.value)}
            type="search"
            autoFocus
          />
          <Button
            secondary={!showOptions}
            onClick={() => setShowOptions(!showOptions)}
            inline
          >{t('common:search.options')}</Button>
        </SearchWrapper>

        {showOptions && (
          <OptionsPanel>
            <SwitchField
              label={t('dictionary:options.showExamples')}
              id="show-examples"
              value={options.showExamples}
              onChange={value => setOptions({ ...options, showExamples: value })}
            />
            <SwitchField
              label={t('dictionary:options.showNonEssentialWords')}
              id="show-non-essential"
              value={options.showNonEssentialWords}
              onChange={value => setOptions({ ...options, showNonEssentialWords: value })}
              disabled
            />
          </OptionsPanel>
        )}

        {useMemo(() =>
          Array.isArray(list) && list.filter(d => {
            if (!q || q === '') return true
            if (list.some(l => compare(l.word, q))) {
              return compare(d.word, q)
            }
            return has(d.word, q) || d.definitions.some(def => has(def.definition, q))
          }).map(d =>
            <Definition
              key={d.word}
              search={q}
              showExamples={options.showExamples}
              {...d}
            />
          ),
          [q, options, list],
        )}
      </Wrapper>
    </Main>
  )
}

export default Dictionary