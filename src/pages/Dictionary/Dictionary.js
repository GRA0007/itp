import {
  Definition,
  Main,
  TextField,
} from 'components'
import { Wrapper } from './dictionaryStyle'

const Dictionary = () => {
  return (
    <Main>
      <Wrapper>
        <TextField placeholder="Search..." />
        <Definition
          word={['a', 'kin']}
          definitions={[{
            category: 'particle',
            definition: '(emphasis, emotion or confirmation)',
          }]}
        />
        <Definition
          word="akesi"
          definitions={[{
            category: 'noun',
            definition: 'non-cute animal; reptile, amphibian, dinosaur, monster',
            example: 'akesi linja li moku e soweli suli mute',
          }]}
        />
        <Definition
          word="ala"
          definitions={[{
            category: 'adjective',
            definition: 'no, not, zero',
          }]}
        />
        <Definition
          word="alasa"
          definitions={[{
            category: 'verb',
            definition: 'to hunt, forage',
          }]}
        />
        <Definition
          word={['ale', 'ali']}
          definitions={[
            {
              category: 'adjective',
              definition: 'all; abundant, countless, bountiful, every, plentiful',
            },
            {
              category: 'noun',
              definition: 'abundance, everything, life, universe',
            },
            {
              category: 'number',
              definition: '100',
            },
          ]}
        />
      </Wrapper>
    </Main>
  )
}

export default Dictionary