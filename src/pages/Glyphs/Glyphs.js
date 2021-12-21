import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Button,
  Glyph,
  Main,
  OptionsPanel,
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
  const [options, setOptions] = useState({
    showLabels: true,
    showCompoundGlyphs: false,
    showNonEssentialGlyphs: false,
  })

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
              onChange={value => setOptions({ ...options, showLabels: value })}
            />
            <SwitchField
              label={t('glyphs:options.showCompoundGlyphs')}
              id="show-compound"
              value={options.showCompoundGlyphs}
              onChange={value => setOptions({ ...options, showCompoundGlyphs: value })}
              disabled
            />
            <SwitchField
              label={t('glyphs:options.showNonEssentialGlyphs')}
              id="show-non-essential"
              value={options.showNonEssentialGlyphs}
              onChange={value => setOptions({ ...options, showNonEssentialGlyphs: value })}
              disabled
            />
          </OptionsPanel>
        )}
      </Wrapper>

      <GlyphWrapper>
        {useMemo(() =>
          Array.isArray(list) && list.filter(d => {
            if (!q || q === '') return true
            if (list.some(l => l.glyph.toLocaleLowerCase() === q.toLocaleLowerCase())) {
              return d.glyph.toLocaleLowerCase() === q.toLocaleLowerCase()
            }
            return d.glyph.toLocaleLowerCase().includes(q.toLocaleLowerCase())
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
    </Main>
  )
}

export default Glyphs