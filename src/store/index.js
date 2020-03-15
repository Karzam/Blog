const LOCAL_THEME = 'baptistemenard.theme'
const Theme = {
  DARK: 'dark',
  LIGHT: 'light',
}

const getSavedTheme = () => {
  if (!process || !process.isClient) {
    return Theme.LIGHT
  }

  return localStorage.getItem(LOCAL_THEME) || Theme.DARK
}

const saveTheme = (theme) => {
  if (!process || !process.isClient) {
    return Theme.LIGHT
  }

  return localStorage.setItem(LOCAL_THEME, theme)
}

export default {
  state: {
    theme: getSavedTheme(),
  },
  getters: {
    theme(state) {
      return state.theme
    }
  },
  actions: {
    switchTheme ({ commit }) {
      commit('switchTheme')
    }
  },
  mutations: {
    switchTheme(state) {
      if (state.theme === Theme.DARK) {
        saveTheme(Theme.LIGHT)
        return state.theme = Theme.LIGHT
      }

      saveTheme(Theme.DARK)
      state.theme = Theme.DARK
    }
  },
}