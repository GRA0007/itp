import { useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

import { compare } from 'utils'
import fontList from 'res/fonts'

import {
  Heading as H,
  Main,
  Wrapper,
  Divider as Hr,
  Button,
  GlyphButton,
  ListenButton,
} from 'components'

import {
  Sitelen,
  Title,
} from './glyphStyle'

import {
  Glyphs,
  Buttons,
} from '../Word/wordStyle'

const Glyph = () => {
  const { t } = useTranslation(['common', 'wordList', 'glyphList', 'details'])
  const { glyph } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    const list = t('glyphList:list', { returnObjects: true })
    setData(Array.isArray(list) ? list.find(g => compare(g.glyph, glyph)) : {})
  }, [glyph, t])

  return (
    <Main>
      <Wrapper>
        <Sitelen>{Array.isArray(data.glyph) ? data.glyph[0] : data.glyph}</Sitelen>
        <Title>
          <h1>{Array.isArray(data.glyph) ? data.glyph?.join(t('common:wordSeparator')).replace('-', ' ') : data.glyph?.replace('-', ' ')}</h1>
          <ListenButton sound={data.glyph} />
        </Title>

        <H as="h2">{t('details:headings.words_in_this_glyph')}</H>
        <Buttons>
          {(data.words ?? (Array.isArray(data.glyph) ? data.glyph : [data.glyph]))?.map(word => (
            <Button
              key={word}
              secondary
              as={Link}
              to={`/ilonimi/${word}`}
            >{word}</Button>
          ))}
        </Buttons>

        {data.words && (
          <>
            <Hr />
            <H as="h2">{t('details:headings.meaning')}</H>
            <p>{Array.isArray(data.meaning) ? data.meaning.join(t('common:definitionSeparator')) : data.meaning}</p>
          </>
        )}

        <Hr />
        <H as="h2">{t('details:headings.other_styles')}</H>
        <p>{t('details:content.other_styles')}</p>
        <Glyphs>
          {useMemo(() => Object.keys(fontList).map(font => (
            <GlyphButton
              key={font}
              glyph={Array.isArray(data.glyph) ? data.glyph?.[0] : data.glyph}
              font={font}
            />
          )), [data])}
        </Glyphs>
      </Wrapper>
    </Main>
  )
}

export default Glyph