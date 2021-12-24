import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { has, compare } from 'utils'
import { useUserStore } from 'stores'

import {
  Button,
  Glyph,
  Main,
  OptionsPanel,
  ScrollToTop,
  SearchWrapper,
  SwitchField,
  TextField,
  Wrapper,
} from 'components'

import { GlyphWrapper } from './glyphsStyle'

const Glyphs = () => {
  const { t } = useTranslation(['common', 'glyphs', 'glyphList'])
  const [q, setQ] = useState('')
  const [showOptions, setShowOptions] = useState(false)

  const options = useUserStore(state => state.glyphsPrefs)
  const setOption = useUserStore(state => state.setPreference)

  const list = t('glyphList:list', { returnObjects: true })

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
              label={t('glyphs:options.showLabels')}
              id="show-labels"
              value={options.showLabels}
              onChange={value => setOption({ showLabels: value }, 'glyphsPrefs')}
            />
            <SwitchField
              label={t('glyphs:options.showCompoundGlyphs')}
              id="show-compound"
              value={options.showCompoundGlyphs}
              onChange={value => setOption({ showCompoundGlyphs: value }, 'glyphsPrefs')}
              disabled
            />
            <SwitchField
              label={t('glyphs:options.showNonEssentialGlyphs')}
              id="show-non-essential"
              value={options.showNonEssentialGlyphs}
              onChange={value => setOption({ showNonEssentialGlyphs: value }, 'glyphsPrefs')}
              disabled
            />
          </OptionsPanel>
        )}
      </Wrapper>

      <GlyphWrapper>
        {useMemo(() =>
          Array.isArray(list) && list.filter(d => {
            if (!q || q === '') return true
            if (list.some(l => compare(l.glyph, q))) {
              return compare(d.glyph, q)
            }
            return has(d.glyph, q)
          }).map(d =>
            <Glyph
              key={d}
              search={q}
              showLabel={options.showLabels}
              {...d}
            />
          ),
          [q, options, list],
        )}
      </GlyphWrapper>

      <ScrollToTop />
    </Main>
  )
}

export default Glyphs