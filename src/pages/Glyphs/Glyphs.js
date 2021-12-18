import { useMemo, useState } from 'react'

import {
  Button,
  Glyph,
  Main,
  OptionsPanel,
  SearchWrapper,
  SwitchField,
  TextField,
} from 'components'

import { GlyphWrapper, Wrapper } from './glyphsStyle'

const list = [
  'a',
  'akesi',
  'ala',
  'alasa',
  'ale',
  'anpa',
  'ante',
  'anu',
  'awen',
  'e',
  'en',
  'esun',
  'ijo',
  'ike',
  'ilo',
  'insa',
  'jaki',
  'jan',
  'jelo',
  'jo',
  'kala',
  'kalama',
  'kama',
  'kasi',
  'ken',
  'kepeken',
  'kili',
  'kiwen',
  'ko',
  'kon',
  'kule',
  'kulupu',
  'kute',
  'la',
  'lape',
  'laso',
  'lawa',
  'len',
  'lete',
  'li',
  'lili',
  'linja',
  'lipu',
  'loje',
  'lon',
  'luka',
  'lukin',
  'lupa',
  'ma',
  'mama',
  'mani',
  'meli',
  'mi',
  'mije',
  'moku',
  'moli',
  'monsi',
  'mu',
  'mun',
  'musi',
  'mute',
  'nanpa',
  'nasa',
  'nasin',
  'nena',
  'ni',
  'nimi',
  'noka',
  'o',
  'olin',
  'ona',
  'open',
  'pakala',
  'pali',
  'palisa',
  'pan',
  'pana',
  'pi',
  'pilin',
  'pimeja',
  'pini',
  'pipi',
  'poka',
  'poki',
  'pona',
  'pu',
  'sama',
  'seli',
  'selo',
  'seme',
  'sewi',
  'sijelo',
  'sike',
  'sin',
  'sinpin',
  'sitelen',
  'sona',
  'soweli',
  'suli',
  'suno',
  'supa',
  'suwi',
  'tan',
  'taso',
  'tawa',
  'telo',
  'tenpo',
  'toki',
  'tomo',
  'tu',
  'unpa',
  'uta',
  'utala',
  'walo',
  'wan',
  'waso',
  'wawa',
  'weka',
  'wile',
]

const Glyphs = () => {
  const [q, setQ] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [options, setOptions] = useState({
    showLabels: true,
    showCompoundGlyphs: false,
    showNonEssentialGlyphs: false,
  })

  return (
    <Main>
      <Wrapper>
        <SearchWrapper>
          <TextField
            placeholder="Search..."
            value={q}
            onChange={e => setQ(e.currentTarget.value)}
            type="search"
            autoFocus
          />
          <Button
            secondary={!showOptions}
            onClick={() => setShowOptions(!showOptions)}
            inline
          >Options</Button>
        </SearchWrapper>

        {showOptions && (
          <OptionsPanel>
            <SwitchField
              label="Show labels"
              id="show-labels"
              value={options.showLabels}
              onChange={value => setOptions({ ...options, showLabels: value })}
            />
            <SwitchField
              label="Show compound glyphs (coming soon)"
              id="show-compound"
              value={options.showCompoundGlyphs}
              onChange={value => setOptions({ ...options, showCompoundGlyphs: value })}
              disabled
            />
            <SwitchField
              label="Show non-essential glyphs (coming soon)"
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
          list.filter(d => {
            if (!q || q === '') return true
            if (list.some(l => l.toLocaleLowerCase() === q.toLocaleLowerCase())) {
              return d.toLocaleLowerCase() === q.toLocaleLowerCase()
            }
            return d.toLocaleLowerCase().includes(q.toLocaleLowerCase())
          }).map(d =>
            <Glyph
              key={d}
              search={q}
              word={d}
              showLabel={options.showLabels}
            />
          ),
          [q, options],
        )}
      </GlyphWrapper>
    </Main>
  )
}

export default Glyphs