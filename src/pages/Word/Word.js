import { useEffect, useState, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

import { compare } from 'utils'
import fontList from 'res/fonts'

import { KalamaIcon } from 'icons'

import {
  Heading as H,
  Main,
  Wrapper,
  Divider as Hr,
  Button,
  GlyphButton,
} from 'components'

import {
  Category,
  Def,
  Title,
  Example,
  IPA,
  ListenButton,
  Etymology,
  Glyphs,
} from './wordStyle'

const Word = () => {
  const { t } = useTranslation(['common', 'dictionary', 'wordList'])
  const { word } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    const list = t('wordList:list', { returnObjects: true })
    setData(list.find(w => compare(w.word, word)))
  }, [word, t])

  return (
    <Main>
      <Wrapper>
        <Title>
          <h1>{Array.isArray(data.word) ? data.word?.join(t('wordList:wordSeparator')) : data.word}</h1>
          <ListenButton
            title={t('dictionary:definition.listen')}
            onClick={() => console.log('listen')}
          >
            <KalamaIcon />
          </ListenButton>
        </Title>
        <IPA>{Array.isArray(data.ipa) ? data.ipa?.join(t('wordList:wordSeparator')) : data.ipa}</IPA>

        <H as="h2">Definition</H>
        {data.definitions?.map(def => (
          <Fragment key={`${def.category}-${def.definition}`}>
            <Category>{def.category}</Category>
            <Def>{Array.isArray(def.definition) ? def.definition.join(t('wordList:definitionSeparator')) : def.definition}</Def>
          </Fragment>
        ))}

        {data.definitions?.some(d => d.hasOwnProperty('examples') && d.examples.length > 0) && (
          <>
            <Hr />
            <H as="h2">Examples</H>
            {data.definitions?.map(def => def.examples?.map(ex =>
              <Example key={`${def.category}-${ex.toki}`}>
                <span>
                  {ex.toki}
                </span>
                <span className="translation">{ex.translation}</span>
              </Example>
            ))}
          </>
        )}

        <Hr />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <H as="h2" data-inline>Glyphs</H>
          <Button secondary as={Link} to={`/sitelenpona/${Array.isArray(data.word) ? data.word?.[0] : data.word}`}>See all</Button>
        </div>
        <Glyphs>
          {fontList.sort(() => .5-Math.random()).filter((_, i) => i < 5).map(font => (
            <GlyphButton
              glyph={Array.isArray(data.word) ? data.word?.[0] : data.word}
              font={font}
            />
          ))}
        </Glyphs>

        {data.hasOwnProperty('etymology') && (
          <>
            <Hr />
            <H as="h2">Etymology</H>
            {(Array.isArray(data.etymology) ? data.etymology : [data.etymology])?.map(source => (
              <Etymology key={JSON.stringify(source)}>
                {source?.hasOwnProperty('language') ? (
                  <>{source?.language} <em>{source?.word}</em> {source.hasOwnProperty('translation') && <span>"{source?.translation}"</span>}</>
                ) : source}
              </Etymology>
            ))}
          </>
        )}
      </Wrapper>
    </Main>
  )
}

export default Word