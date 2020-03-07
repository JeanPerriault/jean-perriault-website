import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuetify from 'vuetify'
import LanguageSwitcher from '@/components/LanguageSwitcher';

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()
Vue.use(Vuetify)
const vuetify = new Vuetify()

describe('LanguageSwitcher', () => {

  beforeEach(() => {
  })

  test('is a Vue instance', () => {
    const wrapper = mount(LanguageSwitcher, { router, localVue, vuetify, propsData: {
      locale: 'fr'
    }})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the correct markup', () => {
    const wrapper = mount(LanguageSwitcher, { router, localVue, vuetify, propsData: {
      locale: 'fr'
    }})
    expect(wrapper.html()).toContain(`<div class="v-menu"><button type="button" class="v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-web theme--light"></i></span></button>
  <!---->
</div>`)
  })
})
