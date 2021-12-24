import create from 'zustand'
import produce from 'immer'

const useUserStore = create(set => ({
  preferences: {
    theme: 'system',
    language: 'en',
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
  words: {
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
  },

  setPreference: (pref, value, category = 'preferences') => set(produce(state => {
    state[category]?.[pref] = value
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
      if (!state[category][word].hasOwnProperty(learn)) {
        state[category][word].learn = [item]
      } else {
        state[category][word].learn.push(item)
      }
    }
  })),
}))

export default useUserStore