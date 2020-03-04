import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Vuetify from 'vuetify'
import LanguageSwitcher from '@/components/LanguageSwitcher';

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
Vue.use(Vuetify)
const router = new VueRouter()
const vuetify = new Vuetify()

describe('LanguageSwitcher', () => {
  let store

  let state = () => ({
    locales: ['fr', 'en', 'es'],
    locale: 'fr'
  });

  beforeEach(() => {
    store = new Vuex.Store({
      state
    })

  })

  test('is a Vue instance', () => {
    const wrapper = mount(LanguageSwitcher, { store, router, localVue, vuetify })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
