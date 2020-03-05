import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Menu from '@/components/Menu';

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()
Vue.use(Vuetify)
const vuetify = new Vuetify()

describe('Menu', () => {

  beforeEach(() => {
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Menu, { router, localVue, vuetify })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the correct markup', () => {
    const wrapper = mount(Menu, { router, localVue, vuetify })
    expect(wrapper.html()).toContain(`<div role="list" class="v-list v-sheet v-sheet--tile theme--light"><a href="#/" class="v-list-item--active v-list-item v-list-item--link theme--light" tabindex="0" router="" role="listitem">
    <div class="v-list-item__action"><i aria-hidden="true" class="v-icon notranslate mdi mdi-apps theme--light"></i></div>
    <div class="v-list-item__content">
      <div class="v-list-item__title">Profil</div>
    </div>
  </a><a href="#/projets" class="v-list-item v-list-item--link theme--light" tabindex="0" router="" role="listitem">
    <div class="v-list-item__action"><i aria-hidden="true" class="v-icon notranslate mdi mdi-chart-bubble theme--light"></i></div>
    <div class="v-list-item__content">
      <div class="v-list-item__title">Projets</div>
    </div>
  </a></div>`)
  })
})
