import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { has, compare } from 'utils'

import {
  Button,
  Definition,
  Main,
  OptionsPanel,
  ScrollToTop,
  SearchWrapper,
  SwitchField,
  TextField,
  Wrapper,
} from 'components'

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

        <ScrollToTop />
      </Wrapper>
    </Main>
  )
}

export default Dictionary