import jstz from 'jstz'

const LANG_KEY = 'language'

const initLang = (() => {
  const timezone = jstz.determine().name().split('/')[1];
  let lang = window.localStorage.getItem(LANG_KEY) || (timezone == 'Sofia' ? 'bg' : window.navigator.language.slice(0, 2))
  return lang || process.env.VUE_APP_I18N_LOCALE || 'en'
})()

export default {
  namespaced: true,
  state: {
    lang: initLang
  },
  mutations: {
    onLangChanged(state, payload) {
      window.localStorage.setItem(LANG_KEY, payload.lang)
      payload.i18n.locale = payload.lang
      state.lang = payload.lang
    }
  },
  actions: {
    changeLanguage({ commit }, payload) {
      commit('onLangChanged', payload)
    }
  }
};