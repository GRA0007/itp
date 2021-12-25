import { useTranslation } from 'react-i18next'
import Markdown from 'markdown-to-jsx'

import {
  Heading as H,
  Main,
  Wrapper,
  ExternalLink as A,
} from 'components'

const mdOptions = {
  overrides: {
    h1: {
      component: H,
      props: { as: 'h2' },
    },
    h2: {
      component: H,
      props: { as: 'h3' },
    },
    a: A,
  }
}

const About = () => {
  const { t } = useTranslation('about')

  return (
    <Main>
      <Wrapper>
        <H>{t('title')}</H>

        <Markdown options={mdOptions}>{t('content', { joinArrays: '\n\n' })}</Markdown>

        <Markdown options={mdOptions}>{t('attributions', { joinArrays: '\n\n' })}</Markdown>
        
        <H as="h3">{t('info')}</H>
        <ul>
          <li><A href="https://tokipona.org">The official toki pona website and books by Sonja Lang</A></li>
          <li><A href="https://en.wiktionary.org/wiki/Appendix:Toki_Pona">toki pona wiktionary</A></li>
          <li><A href="http://tokipona.org/nimi_pu.txt">Word data from tokipona.org</A></li>
        </ul>

        <H as="h3">{t('fonts')}</H>
        <ul>
          <li><A href="http://musilili.net/linja-pona/">linja pona</A></li>
          <li><A href="https://devurandom.xyz/tokipona/supalape.html">insa pi supa lape</A></li>
          <li><A href="https://nilakayas.neocities.org/karya/linja-ante.html">linja ante</A></li>
          <li><A href="https://greenguy5294.github.io/linjapipulukin/">linja pi pu lukin</A></li>
          <li><A href="https://github.com/pguimier/linjapitomolipu">linja pi tomo lipu</A></li>
          <li><A href="https://web.archive.org/web/20200908080324if_/https://github.com/increpare/linja_pimeja">linja pimeja</A></li>
          <li><A href="https://wyub.github.io/tokipona/linjasike">linja sike</A></li>
          <li><A href="https://linjasuwi.ap5.dev/">linja suwi</A></li>
          <li><A href="https://github.com/janMelon/linjawawa">linja wawa</A></li>
          <li><A href="https://github.com/pguimier/pali-sitelen/tree/master/plugins/sitelenlukatutu">sitelen luka tu tu</A></li>
          <li><A href="https://jackhumbert.github.io/sitelen-pona-pona/">sitelen pona pona</A></li>
          <li><A href="https://www.reddit.com/r/tokipona/comments/kjv25w/because_it_seemed_like_my_font_is_going_to_take_a/">sitelen sans</A></li>
          <li><A href="https://imgur.com/a/9B6Xx">toki pona OTF</A></li>
        </ul>

        {/* <Markdown options={mdOptions}>{t('contributors', { joinArrays: '\n\n' })}</Markdown> */}
      </Wrapper>
    </Main>
  )
}

export default About