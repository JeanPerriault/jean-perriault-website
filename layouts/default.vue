<template>
  <v-app dark>

    <!-- Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <drawer-menu></drawer-menu>
    </v-navigation-drawer>

    <!-- Application bar -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      hide-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />

      <v-spacer />

      <language-switcher
        :locale="locale"
      >
      </language-switcher>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Content -->
    <v-content>
      <v-container
        class="pa-0"
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>

    <!-- Drawer -->
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
      <profile-head-contact></profile-head-contact>
    </v-navigation-drawer>

    <!-- Footer -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2005 - {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      root
      fixed
      bottom
      right
      small
      @click.stop="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import DrawerMenu from '~/components/DrawerMenu';
import LanguageSwitcher from '~/components/LanguageSwitcher';
import ProfileHeadContact from "~/components/profile/ProfileHeadContact";

// Check system dark mode
const mq = window.matchMedia('(prefers-color-scheme: dark)')
// console.error(mq)

export default {
  components: {
    DrawerMenu,
    LanguageSwitcher,
    ProfileHeadContact
  },
  data () {
    return {
      fab: false,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Jean Perriault'
    }
  },
  computed: {
    locale() {
      return this.$store.state.locale
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
