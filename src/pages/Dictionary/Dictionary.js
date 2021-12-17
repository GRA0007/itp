import { useMemo, useState } from 'react'

import {
  Definition,
  Main,
  TextField,
} from 'components'

import { Wrapper } from './dictionaryStyle'

const list = [
  {
    word: ['a', 'kin'],
    definitions: [{
      category: 'particle',
      definition: '(emphasis, emotion or confirmation)',
    }],
  },
  {
    word: 'akesi',
    definitions: [{
      category: 'noun',
      definition: 'non-cute animal; reptile, amphibian, dinosaur, monster',
      example: 'akesi linja li moku e soweli suli mute',
    }],
  },
  {
    word: 'ala',
    definitions: [{
      category: 'adjective',
      definition: 'no, not, zero',
    }],
  },
  {
    word: 'alasa',
    definitions: [{
      category: 'verb',
      definition: 'to hunt, forage',
    }],
  },
  {
    word: ['ale', 'ali'],
    definitions: [
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
    ],
  },
  {
    word: 'anpa',
    definitions: [{
      category: 'adjective',
      definition: 'bowing down, downward, humble, lowly, dependent',
    }],
  },
  {
    word: 'ante',
    definitions: [{
      category: 'adjective',
      definition: 'different, altered, changed, other',
    }],
  },
  {
    word: 'anu',
    definitions: [{
      category: 'particle',
      definition: 'or',
    }],
  },
  {
    word: 'awen',
    definitions: [
      {
        category: 'adjective',
        definition: 'enduring, kept, protected, safe, waiting, staying',
      },
      {
        category: 'pre-verb',
        definition: 'to continue to',
      },
    ],
  },
  {
    word: 'e',
    definitions: [{
      category: 'particle',
      definition: '(before the direct object)',
    }],
  },
  {
    word: 'en',
    definitions: [{
      category: 'particle',
      definition: '(between multiple subjects)',
    }],
  },
  {
    word: 'esun',
    definitions: [{
      category: 'noun',
      definition: 'market, shop, fair, bazaar, business transaction',
    }],
  },
  {
    word: 'ijo',
    definitions: [{
      category: 'noun',
      definition: 'thing, phenomenon, object, matter',
    }],
  },
  {
    word: 'ike',
    definitions: [{
      category: 'adjective',
      definition: 'bad, negative; non-essential, irrelevant',
    }],
  },
  {
    word: 'ilo',
    definitions: [{
      category: 'noun',
      definition: 'tool, implement, machine, device',
    }],
  },
  {
    word: 'insa',
    definitions: [{
      category: 'noun',
      definition: 'centre, content, inside, between; internal organ, stomach',
    }],
  },
  {
    word: 'jaki',
    definitions: [{
      category: 'adjective',
      definition: 'disgusting, obscene, sickly, toxic, unclean, unsanitary',
    }],
  },
  {
    word: 'jan',
    definitions: [{
      category: 'noun',
      definition: 'human being, person, somebody',
    }],
  },
  {
    word: 'jelo',
    definitions: [{
      category: 'adjective',
      definition: 'yellow, yellowish',
    }],
  },
  {
    word: 'jo',
    definitions: [{
      category: 'verb',
      definition: 'to have, carry, contain, hold',
    }],
  },
  {
    word: 'kala',
    definitions: [{
      category: 'noun',
      definition: 'fish, marine animal, sea creature',
    }],
  },
  {
    word: 'kalama',
    definitions: [{
      category: 'verb',
      definition: 'to produce a sound; recite, utter aloud',
    }],
  },
  {
    word: 'kama',
    definitions: [
      {
        category: 'adjective',
        definition: 'arriving, coming, future, summoned',
      },
      {
        category: 'pre-verb',
        definition: 'to become, manage to, succeed in',
      },
    ],
  },
  {
    word: 'kasi',
    definitions: [{
      category: 'noun',
      definition: 'plant, vegetation; herb, leaf',
    }],
  },
  {
    word: 'ken',
    definitions: [
      {
        category: 'pre-verb',
        definition: 'to be able to, be allowed to, can, may',
      },
      {
        category: 'adjective',
        definition: 'possible',
      },
    ],
  },
  {
    word: 'kepeken',
    definitions: [{
      category: 'preposition',
      definition: 'to use, with, by means of',
    }],
  },
  {
    word: 'kili',
    definitions: [{
      category: 'noun',
      definition: 'fruit, vegetable, mushroom',
    }],
  },
  {
    word: 'kiwen',
    definitions: [{
      category: 'noun',
      definition: 'hard object, metal, rock, stone',
    }],
  },
  {
    word: 'ko',
    definitions: [{
      category: 'noun',
      definition: 'clay, clinging form, dough, semi-solid, paste, powder',
    }],
  },
  {
    word: 'kon',
    definitions: [{
      category: 'noun',
      definition: 'air, breath; essence, spirit; hidden reality, unseen agent',
    }],
  },
  {
    word: 'kule',
    definitions: [{
      category: 'adjective',
      definition: 'colourful, pigmented, painted',
    }],
  },
  {
    word: 'kulupu',
    definitions: [{
      category: 'noun',
      definition: 'community, company, group, nation, society, tribe',
    }],
  },
  {
    word: 'kute',
    definitions: [
      {
        category: 'noun',
        definition: 'ear',
      },
      {
        category: 'verb',
        definition: 'to hear, listen; pay attention to, obey',
      },
    ],
  },
  {
    word: 'la',
    definitions: [{
      category: 'particle',
      definition: '(between the context phrase and the main sentence)',
    }],
  },
  {
    word: 'lape',
    definitions: [{
      category: 'adjective',
      definition: 'sleeping, resting',
    }],
  },
  {
    word: 'laso',
    definitions: [{
      category: 'adjective',
      definition: 'blue, green',
    }],
  },
  {
    word: 'lawa',
    definitions: [
      {
        category: 'noun',
        definition: 'head, mind',
      },
      {
        category: 'verb',
        definition: 'to control, direct, guide, lead, own, plan, regulate, rule',
      },
    ],
  },
  {
    word: 'len',
    definitions: [{
      category: 'noun',
      definition: 'cloth, clothing, fabric, textile; cover, layer of privacy',
    }],
  },
  {
    word: 'lete',
    definitions: [{
      category: 'adjective',
      definition: 'cold, cool; uncooked, raw',
    }],
  },
  {
    word: 'li',
    definitions: [{
      category: 'particle',
      definition: '(between any subject except mi alone or sina alone and its verb; also to introduce a new verb for the same subject)',
    }],
  },
  {
    word: 'lili',
    definitions: [{
      category: 'adjective',
      definition: 'little, small, short; few; a bit; young',
    }],
  },
  {
    word: 'linja',
    definitions: [{
      category: 'noun',
      definition: 'long and flexible thing; cord, hair, rope, thread, yarn',
    }],
  },
  {
    word: 'lipu',
    definitions: [{
      category: 'noun',
      definition: 'flat object; book, document, card, paper, record, website',
    }],
  },
  {
    word: 'loje',
    definitions: [{
      category: 'adjective',
      definition: 'red, reddish',
    }],
  },
  {
    word: 'lon',
    definitions: [{
      category: 'preposition',
      definition: 'located at, present at, real, true, existing',
    }],
  },
  {
    word: 'luka',
    definitions: [
      {
        category: 'noun',
        definition: 'arm, hand, tactile organ',
      },
      {
        category: 'number',
        definition: 'five',
      },
    ],
  },
  {
    word: ['lukin', 'oko'],
    definitions: [
      {
        category: 'noun',
        definition: 'eye',
      },
      {
        category: 'verb',
        definition: 'to look at, see, examine, observe, read, watch',
      },
      {
        category: 'pre-verb',
        definition: 'to seek, look for, try to',
      },
    ],
  },
  {
    word: 'lupa',
    definitions: [{
      category: 'noun',
      definition: 'door, hole, orifice, window',
    }],
  },
  {
    word: 'ma',
    definitions: [{
      category: 'noun',
      definition: 'earth, land; outdoors, world; country, territory; soil',
    }],
  },
  {
    word: 'mama',
    definitions: [{
      category: 'noun',
      definition: 'parent, ancestor; creator, originator; caretaker, sustainer',
    }],
  },
  {
    word: 'mani',
    definitions: [{
      category: 'noun',
      definition: 'money, cash, savings, wealth; large domesticated animal',
    }],
  },
  {
    word: 'meli',
    definitions: [{
      category: 'noun',
      definition: 'woman, female, feminine person; wife',
    }],
  },
  {
    word: 'mi',
    definitions: [{
      category: 'noun',
      definition: 'I, me, we, us',
    }],
  },
  {
    word: 'mije',
    definitions: [{
      category: 'noun',
      definition: 'man, male, masculine person; husband',
    }],
  },
  {
    word: 'moku',
    definitions: [{
      category: 'verb',
      definition: 'to eat, drink, consume, swallow, ingest',
    }],
  },
  {
    word: 'moli',
    definitions: [{
      category: 'adjective',
      definition: 'dead, dying',
    }],
  },
  {
    word: 'monsi',
    definitions: [{
      category: 'noun',
      definition: 'back, behind, rear',
    }],
  },
  {
    word: 'mu',
    definitions: [{
      category: 'particle',
      definition: '(animal noise or communication)',
    }],
  },
  {
    word: 'mun',
    definitions: [{
      category: 'noun',
      definition: 'moon, night sky object, star',
    }],
  },
  {
    word: 'musi',
    definitions: [{
      category: 'adjective',
      definition: 'artistic, entertaining, frivolous, playful, recreational',
    }],
  },
  {
    word: 'mute',
    definitions: [
      {
        category: 'adjective',
        definition: 'many, a lot, more, much, several, very',
      },
      {
        category: 'noun',
        definition: 'quantity',
      },
    ],
  },
  {
    word: 'nanpa',
    definitions: [
      {
        category: 'particle',
        definition: '-th (ordinal number)',
      },
      {
        category: 'noun',
        definition: 'numbers',
      },
    ],
  },
  {
    word: 'nasa',
    definitions: [{
      category: 'adjective',
      definition: 'unusual, strange; foolish, crazy; drunk, intoxicated',
    }],
  },
  {
    word: 'nasin',
    definitions: [{
      category: 'noun',
      definition: 'way, custom, doctrine, method, path, road',
    }],
  },
  {
    word: 'nena',
    definitions: [{
      category: 'noun',
      definition: 'bump, button, hill, mountain, nose, protuberance',
    }],
  },
  {
    word: 'ni',
    definitions: [{
      category: 'adjective',
      definition: 'that, this',
    }],
  },
  {
    word: 'nimi',
    definitions: [{
      category: 'noun',
      definition: 'name, word',
    }],
  },
  {
    word: 'noka',
    definitions: [{
      category: 'noun',
      definition: 'foot, leg, organ of locomotion; bottom, lower part',
    }],
  },
  {
    word: 'o',
    definitions: [{
      category: 'particle',
      definition: 'hey! O! (vocative or imperative)',
    }],
  },
  {
    word: 'olin',
    definitions: [{
      category: 'verb',
      definition: 'to love, have compassion for, respect, show affection to',
    }],
  },
  {
    word: 'ona',
    definitions: [{
      category: 'noun',
      definition: 'he, she, it, they',
    }],
  },
  {
    word: 'open',
    definitions: [{
      category: 'verb',
      definition: 'to begin, start; open; turn on',
    }],
  },
  {
    word: 'pakala',
    definitions: [{
      category: 'adjective',
      definition: 'botched, broken, damaged, harmed, messed up',
    }],
  },
  {
    word: 'pali',
    definitions: [{
      category: 'verb',
      definition: 'to do, take action on, work on; build, make, prepare',
    }],
  },
  {
    word: 'palisa',
    definitions: [{
      category: 'noun',
      definition: 'long hard thing; branch, rod, stick',
    }],
  },
  {
    word: 'pan',
    definitions: [{
      category: 'noun',
      definition: 'cereal, grain; barley, corn, oat, rice, wheat; bread, pasta',
    }],
  },
  {
    word: 'pana',
    definitions: [{
      category: 'verb',
      definition: 'to give, send, emit, provide, put, release',
    }],
  },
  {
    word: 'pi',
    definitions: [{
      category: 'particle',
      definition: 'of',
    }],
  },
  {
    word: 'pilin',
    definitions: [
      {
        category: 'noun',
        definition: 'heart (physical or emotional)',
      },
      {
        category: 'adjective',
        definition: 'feeling (an emotion, a direct experience)',
      },
    ],
  },
  {
    word: 'pimeja',
    definitions: [{
      category: 'adjective',
      definition: 'black, dark, unlit',
    }],
  },
  {
    word: 'pini',
    definitions: [{
      category: 'adjective',
      definition: 'ago, completed, ended, finished, past',
    }],
  },
  {
    word: 'pipi',
    definitions: [{
      category: 'noun',
      definition: 'bug, insect, ant, spider',
    }],
  },
  {
    word: 'poka',
    definitions: [{
      category: 'noun',
      definition: 'hip, side; next to, nearby, vicinity',
    }],
  },
  {
    word: 'poki',
    definitions: [{
      category: 'noun',
      definition: 'container, bag, bowl, box, cup, cupboard, drawer, vessel',
    }],
  },
  {
    word: 'pona',
    definitions: [{
      category: 'adjective',
      definition: 'good, positive, useful; friendly, peaceful; simple',
    }],
  },
  {
    word: 'pu',
    definitions: [{
      category: 'adjective',
      definition: 'interacting with the official Toki Pona book',
    }],
  },
  {
    word: 'sama',
    definitions: [
      {
        category: 'adjective',
        definition: 'same, similar; each other; sibling, peer, fellow',
      },
      {
        category: 'preposition',
        definition: 'as, like',
      },
    ],
  },
  {
    word: 'seli',
    definitions: [{
      category: 'adjective',
      definition: 'fire; cooking element, chemical reaction, heat source',
    }],
  },
  {
    word: 'selo',
    definitions: [{
      category: 'noun',
      definition: 'outer form, outer layer; bark, peel, shell, skin; boundary',
    }],
  },
  {
    word: 'seme',
    definitions: [{
      category: 'particle',
      definition: 'what? which?',
    }],
  },
  {
    word: 'sewi',
    definitions: [
      {
        category: 'noun',
        definition: 'area above, highest part, something elevated',
      },
      {
        category: 'adjective',
        definition: 'awe-inspiring, divine, sacred, supernatural',
      },
    ],
  },
  {
    word: 'sijelo',
    definitions: [{
      category: 'noun',
      definition: 'body (of person or animal), physical state, torso',
    }],
  },
  {
    word: 'sike',
    definitions: [
      {
        category: 'noun',
        definition: 'round or circular thing; ball, circle, cycle, sphere, wheel',
      },
      {
        category: 'adjective',
        definition: 'of one year',
      },
    ],
  },
  {
    word: ['sin', 'namako'],
    definitions: [{
      category: 'adjective',
      definition: 'new, fresh; additional, another, extra',
    }],
  },
  {
    word: 'sina',
    definitions: [{
      category: 'noun',
      definition: 'you',
    }],
  },
  {
    word: 'sinpin',
    definitions: [{
      category: 'noun',
      definition: 'face, foremost, front, wall',
    }],
  },
  {
    word: 'sitelen',
    definitions: [{
      category: 'noun',
      definition: 'image, picture, representation, symbol, mark, writing',
    }],
  },
  {
    word: 'sona',
    definitions: [
      {
        category: 'verb',
        definition: 'to know, be skilled in, be wise about, have information on',
      },
      {
        category: 'pre-verb',
        definition: 'to know how to',
      },
    ],
  },
  {
    word: 'soweli',
    definitions: [{
      category: 'noun',
      definition: 'animal, beast, land mammal',
    }],
  },
  {
    word: 'suli',
    definitions: [{
      category: 'adjective',
      definition: 'big, heavy, large, long, tall; important; adult',
    }],
  },
  {
    word: 'suno',
    definitions: [{
      category: 'noun',
      definition: 'sun; light, brightness, glow, radiance, shine; light source',
    }],
  },
  {
    word: 'supa',
    definitions: [{
      category: 'noun',
      definition: 'horizontal surface, thing to put or rest something on',
    }],
  },
  {
    word: 'suwi',
    definitions: [{
      category: 'adjective',
      definition: 'sweet, fragrant; cute, innocent, adorable',
    }],
  },
  {
    word: 'tan',
    definitions: [{
      category: 'preposition',
      definition: 'by, from, because of',
    }],
  },
  {
    word: 'taso',
    definitions: [
      {
        category: 'particle',
        definition: 'but, however',
      },
      {
        category: 'adjective',
        definition: 'only',
      },
    ],
  },
  {
    word: 'tawa',
    definitions: [
      {
        category: 'preposition',
        definition: 'going to, toward; for; from the perspective of',
      },
      {
        category: 'adjective',
        definition: 'moving',
      },
    ],
  },
  {
    word: 'telo',
    definitions: [{
      category: 'noun',
      definition: 'water, liquid, fluid, wet substance; beverage',
    }],
  },
  {
    word: 'tenpo',
    definitions: [{
      category: 'noun',
      definition: 'time, duration, moment, occasion, period, situation',
    }],
  },
  {
    word: 'toki',
    definitions: [{
      category: 'verb',
      definition: 'to communicate, say, speak, say, talk, use language, think',
    }],
  },
  {
    word: 'tomo',
    definitions: [{
      category: 'noun',
      definition: 'indoor space; building, home, house, room',
    }],
  },
  {
    word: 'tu',
    definitions: [{
      category: 'number',
      definition: 'two',
    }],
  },
  {
    word: 'unpa',
    definitions: [{
      category: 'verb',
      definition: 'to have sexual or marital relations with',
    }],
  },
  {
    word: 'uta',
    definitions: [{
      category: 'noun',
      definition: 'mouth, lips, oral cavity, jaw',
    }],
  },
  {
    word: 'utala',
    definitions: [{
      category: 'verb',
      definition: 'to battle, challenge, compete against, struggle against',
    }],
  },
  {
    word: 'walo',
    definitions: [{
      category: 'adjective',
      definition: 'white, whitish; light-coloured, pale',
    }],
  },
  {
    word: 'wan',
    definitions: [
      {
        category: 'adjective',
        definition: 'unique, united',
      },
      {
        category: 'number',
        definition: 'one',
      },
    ],
  },
  {
    word: 'waso',
    definitions: [{
      category: 'noun',
      definition: 'bird, flying creature, winged animal',
    }],
  },
  {
    word: 'wawa',
    definitions: [{
      category: 'adjective',
      definition: 'strong, powerful; confident, sure; energetic, intense',
    }],
  },
  {
    word: 'weka',
    definitions: [{
      category: 'adjective',
      definition: 'absent, away, ignored',
    }],
  },
  {
    word: 'wile',
    definitions: [{
      category: 'pre-verb',
      definition: 'must, need, require, should, want, wish',
    }],
  },
]

const compare = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase() === b.toLocaleLowerCase())
  } else {
    return a.toLocaleLowerCase() === b.toLocaleLowerCase()
  }
}
const has = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase().includes(b.toLocaleLowerCase()))
  } else {
    return a.toLocaleLowerCase().includes(b.toLocaleLowerCase())
  }
}

const Dictionary = () => {
  const [q, setQ] = useState('')

  return (
    <Main>
      <Wrapper>
        <TextField
          placeholder="Search..."
          value={q}
          onChange={e => setQ(e.currentTarget.value)}
          type="search"
        />

        {useMemo(() =>
          list.filter(d => {
            if (!q || q === '') return true
            if (list.some(l => compare(l.word, q))) {
              return compare(d.word, q)
            }
            return has(d.word, q) || d.definitions.some(def => has(def.definition, q))
          }).map(d =>
            <Definition key={d.word} search={q} {...d} />
          ),
          [q],
        )}
      </Wrapper>
    </Main>
  )
}

export default Dictionary