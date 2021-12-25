import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'

const useUserStore = create(persist(set => ({
  preferences: {
    theme: 'system',
    language: 'en_US',
  },
  dictionaryPrefs: {
    showExamples: true,
    showNonEssentialWords: false,
  },
  glyphsPrefs: {
    showLabels: true,
    showCompoundGlyphs: false,
    showNonEssentialGlyphs: false,
  },
  /*words: {
    akesi: {
      notes: 'akesi linja = danger noodle',
      learn: [
        {
          level: 0,
          date: 1234,
          correct: true,
        },
        {
          level: 1,
          date: 1234,
          correct: false,
        },
        {
          level: 0,
          date: 1234,
          correct: true,
        },
        {
          level: 1,
          date: 1234,
          correct: true,
        },
      ]
    }
  },
  glyphs: {
    akesi: {
      notes: 'buggo',
    },
  },*/

  setPreference: (pref, category = 'preferences') => set(state => ({
    [category]: {
      ...state[category],
      ...pref,
    }
  })),

  setNote: (word, note, category = 'words') => set(produce(state => {
    if (state.hasOwnProperty(category)) {
      if (!state[category].hasOwnProperty(word)) {
        state[category][word] = {}
      }
      state[category][word].notes = note
    }
  })),

  addLearnHistory: (word, item, category = 'words') => set(produce(state => {
    if (state.hasOwnProperty(category)) {
      if (!state[category].hasOwnProperty(word)) {
        state[category][word] = {}
      }
      if (!state[category][word].hasOwnProperty('learn')) {
        state[category][word].learn = [item]
      } else {
        state[category][word].learn.push(item)
      }
    }
  })),
}), {
  name: 'itp-userdata'
}))

export default useUserStore