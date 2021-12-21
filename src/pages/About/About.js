import { useTranslation } from 'react-i18next'

import {
  Heading as H,
  Main,
  Wrapper,
} from 'components'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <Main>
      <Wrapper>
        <H>{t('title')}</H>

        <p>Hi! I'm <a href="https://bengrant.dev" target="_blank" rel="noreferrer nofollow">jan Benji</a> and I created ilo toki pona as a side project to help me learn toki pona.</p>

        <H as="h2">What is toki pona?</H>
        <p><a href="https://tokipona.org" target="_blank" rel="noreferrer nofollow">toki pona</a> is a minimalistic language created by Sonja Lang (jan Sonja). It has just over 100 words, and is designed to help simplify your thinking. It also means it's really easy to learn!</p>

        <H as="h2">Why another dictionary?</H>
        <p>You are correct, you don't have to look far to find many online toki pona dictionaries. However, this will be more than just that.</p>
        <p>I plan to include information here from many different sources, including sitelen pona (the glyph writing system), and even <a href="https://commons.wikimedia.org/wiki/File:Sitelen_sitelen_contract.jpg" target="_blank" rel="noreferrer nofollow">sitelen sitelen</a> eventually. I will also provide a service that makes it easy to memorise all the words and glyphs in toki pona, using spaced repetition.</p>
        <p>ilo toki pona is a large project that I want to build and maintain, and it's also a community project. I want your input on the content, so if you see something that could be improved, <a href="https://github.com/GRA0007/itp/issues/new/choose" target="_blank" rel="noreferrer nofollow">let me know</a>!</p>

        <H as="h2">How can I help?</H>
        <p>If you speak a language other than English, and you want to help translate ilo toki pona, <a href="mailto:ben@bengrant.dev?subject=itp%20translator">contact me</a>!</p>
        <p>If you are competent in toki pona, and you want to help with examples for the dictionary, or if you spot any issues or areas for improvement, <a href="https://github.com/GRA0007/itp/issues/new/choose" target="_blank" rel="noreferrer nofollow">create a ticket</a> on the GitHub repository.</p>
        <p>If you are a developer, you can check out the <a href="https://github.com/GRA0007/itp" target="_blank" rel="noreferrer nofollow">GitHub repository</a> and contribute directly.</p>
        <p>If toki pona makes you happy, the best way to show your gratitude is to buy jan Sonja's books, which you can find on the <a href="https://tokipona.org" target="_blank" rel="noreferrer nofollow">official toki pona website</a>. If you would like to support me (jan Benji) for creating ilo toki pona specifically, I have a <a href="https://www.paypal.com/donate?business=N89X6YXRT5HKW&item_name=ilo+toki+pona&currency_code=AUD" target="_blank" rel="noreferrer nofollow">donation link</a>.</p>

        {/* <H as="h2">Contributors</H> */}
      </Wrapper>
    </Main>
  )
}

export default About