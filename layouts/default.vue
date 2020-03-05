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
      <menu></menu>
    </v-navigation-drawer>

    <!-- Application bar -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
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
    </v-navigation-drawer>

    <!-- Footer -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2005 - {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from '~/components/Menu';
import LanguageSwitcher from '~/components/LanguageSwitcher';

export default {
  components: {
    LanguageSwitcher
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Jean Perriault',
      locale: this.$store.state.locale
    }
  }
}
</script>
