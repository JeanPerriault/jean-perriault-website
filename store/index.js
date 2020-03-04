
export const state = () => ({
  locales: ['fr', 'en', 'es'],
  locale: 'fr'
});


export const mutations = {
  /**
   *
   * @param {*} state
   * @param {*} locale
   */
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
};
