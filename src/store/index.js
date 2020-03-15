const LOCAL_THEME = 'baptistemenard.theme'
const Theme = {
  DARK: 'dark',
  LIGHT: 'light',
}

export default {
  state: {
    theme: localStorage.getItem(LOCAL_THEME) || Theme.DARK
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
        localStorage.setItem(LOCAL_THEME, Theme.LIGHT)
        return state.theme = Theme.LIGHT
      }

      localStorage.setItem(LOCAL_THEME, Theme.DARK)
      state.theme = Theme.DARK
    }
  },
}