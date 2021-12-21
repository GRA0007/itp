import { useTranslation } from 'react-i18next'

import {
  Heading as H,
  Main,
  Wrapper,
  ExternalLink as A,
} from 'components'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <Main>
      <Wrapper>
        <H>{t('title')}</H>

        <p>Hi! I'm <A href="https://bengrant.dev">jan Benji</A> and I created ilo toki pona as a side project to help me learn toki pona.</p>

        <H as="h2">What is toki pona?</H>
        <p><A href="https://tokipona.org">toki pona</A> is a minimalistic language created by Sonja Lang (jan Sonja). It has just over 100 words, and is designed to help simplify your thinking. It also means it's really easy to learn!</p>

        <H as="h2">Why another dictionary?</H>
        <p>You are correct, you don't have to look far to find many online toki pona dictionaries. However, this will be more than just that.</p>
        <p>I plan to include information here from many different sources, including sitelen pona (the glyph writing system), and even <A href="https://commons.wikimedia.org/wiki/File:Sitelen_sitelen_contract.jpg">sitelen sitelen</A> eventually. I will also provide a service that makes it easy to memorise all the words and glyphs in toki pona, using spaced repetition.</p>
        <p>ilo toki pona is a large project that I want to build and maintain, and it's also a community project. I want your input on the content, so if you see something that could be improved, <A href="https://github.com/GRA0007/itp/issues/new/choose">let me know</A>!</p>
        <p>ilo toki pona is licensed under <A href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0</A>, with content from the language of toki pona created by Sonja Lang.</p>

        <H as="h2">How can I help?</H>
        <p>If you speak a language other than English, and you want to help translate ilo toki pona, <a href="mailto:ben@bengrant.dev?subject=itp%20translator">contact me</a>!</p>
        <p>If you are competent in toki pona, and you want to help with examples for the dictionary, or if you spot any issues or areas for improvement, <A href="https://github.com/GRA0007/itp/issues/new/choose">create a ticket</A> on the GitHub repository.</p>
        <p>If you are a developer, you can check out the <A href="https://github.com/GRA0007/itp">GitHub repository</A> and contribute directly.</p>
        <p>If toki pona makes you happy, the best way to show your gratitude is to buy jan Sonja's books, which you can find on the <A href="https://tokipona.org">official toki pona website</A>. If you would like to support me (jan Benji) for creating ilo toki pona specifically, I have a <A href="https://www.paypal.com/donate?business=N89X6YXRT5HKW&item_name=ilo+toki+pona&currency_code=AUD">donation link</A>.</p>

        {/* <H as="h2">Contributors</H> */}

        <H as="h2">Attributions</H>
        <p>Thanks to all the resources below that have contributed to the data available on ilo toki pona. If you believe any of these resources are being used in violation of their original terms, please contact me.</p>
        
        <H as="h3">Data</H>
        <ul>
          <li><A href="https://tokipona.org">The official toki pona website</A></li>
          <li><A href="https://en.wiktionary.org/wiki/Appendix:Toki_Pona">toki pona wiktionary</A></li>
          <li><A href="http://tokipona.org/nimi_pu.txt">Word data from tokipona.org</A></li>
        </ul>

        <H as="h3">Fonts</H>
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

        <H as="h3">E</H>
        <ul>
          <li><A href=""></A></li>
          <li><A href=""></A></li>
          <li><A href=""></A></li>
          <li><A href=""></A></li>
          <li><A href=""></A></li>
          <li><A href=""></A></li>
          <li><A href=""></A></li>
        </ul>
      </Wrapper>
    </Main>
  )
}

export default About