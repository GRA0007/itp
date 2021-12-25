import { useEffect, useState, Fragment, useMemo } from 'react'
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
  Buttons,
} from './wordStyle'

const Word = () => {
  const { t } = useTranslation(['common', 'dictionary', 'wordList', 'details'])
  const { word } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    const list = t('wordList:list', { returnObjects: true })
    setData(Array.isArray(list) ? list.find(w => compare(w.word, word)) : {})
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
        <IPA title={t('details:headings.ipa')}>{Array.isArray(data.ipa) ? data.ipa?.join(t('wordList:wordSeparator')) : data.ipa}</IPA>

        <H as="h2">{t('details:headings.definition')}</H>
        {data.definitions?.map(def => (
          <Fragment key={`${def.category}-${def.definition}`}>
            <Category>{def.category}</Category>
            <Def>{Array.isArray(def.definition) ? def.definition.join(t('wordList:definitionSeparator')) : def.definition}</Def>
          </Fragment>
        ))}

        {data.definitions?.some(d => d.hasOwnProperty('examples') && d.examples.length > 0) && (
          <>
            <Hr />
            <H as="h2">{t('details:headings.examples')}</H>
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
          <H as="h2" data-inline>{t('details:headings.glyphs')}</H>
          <Button secondary as={Link} to={`/sitelenpona/${Array.isArray(data.word) ? data.word?.[0] : data.word}`}>{t('details:actions.see_all')}</Button>
        </div>
        <Glyphs>
          {useMemo(() => Object.keys(fontList).sort(() => .5-Math.random()).filter((_, i) => i < 5).map(font => (
            <GlyphButton
              key={font}
              glyph={Array.isArray(data.word) ? data.word?.[0] : data.word}
              font={font}
            />
          )), [data])}
        </Glyphs>

        {data.hasOwnProperty('etymology') && (
          <>
            <Hr />
            <H as="h2">{t('details:headings.etymology')}</H>
            {(Array.isArray(data.etymology) ? data.etymology : [data.etymology])?.map(source => (
              <Etymology key={JSON.stringify(source)}>
                {source?.hasOwnProperty('language') ? (
                  <>{source?.language} <em>{source?.word}</em> {source.hasOwnProperty('translation') && <span>"{source?.translation}"</span>}</>
                ) : source}
              </Etymology>
            ))}
          </>
        )}

        {data.hasOwnProperty('synonyms') && (
          <>
            <Hr />
            <H as="h2">{t('details:headings.synonyms')}</H>
            <Buttons>
              {data.synonyms?.map(synonym => (
                <Button
                  secondary
                  as={Link}
                  to={`/ilonimi/${synonym}`}
                >{synonym}</Button>
              ))}
            </Buttons>
          </>
        )}

        {data.hasOwnProperty('antonyms') && (
          <>
            <Hr />
            <H as="h2">{t('details:headings.antonyms')}</H>
            <Buttons>
              {data.antonyms?.map(antonym => (
                <Button
                  secondary
                  as={Link}
                  to={`/ilonimi/${antonym}`}
                >{antonym}</Button>
              ))}
            </Buttons>
          </>
        )}

        {data.hasOwnProperty('sign') && (
          <>
            <Hr />
            <H as="h2">{t('details:headings.sign_language')}</H>
            <em>(images coming soon)</em>
            <p>{data.sign}</p>
          </>
        )}
      </Wrapper>
    </Main>
  )
}

export default Word