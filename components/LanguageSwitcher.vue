<template>
  <v-menu>
    <template v-slot:activator="{ on: menu }">
      <v-btn icon v-on="{ ...menu }">
        <v-icon>mdi-web</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(lang, i) in getLangs" :key="i" :to="lang.path">
        <v-list-item-title>{{ lang.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    locale: {
      type: String,
      required: true
    }
  },
  data: () => ({
  }),
  computed: {
    getLangs() {
      const langs = [
        {
          id: 'fr',
          label: 'Français',
          path: this.updateLanguageSwitcher('fr')
        },
        {
          id: 'en',
          label: 'English',
          path: this.updateLanguageSwitcher('en')
        },
        {
          id: 'es',
          label: 'Español',
          path: this.updateLanguageSwitcher('es')
        }
      ];
      return langs;
    }
  },
  methods: {
    updateLanguageSwitcher(lang) {
      let subpath = '';
      if (this.locale === 'fr') {
        subpath = this.$route.fullPath.substr(1);
      }
      else {
        subpath = this.$route.fullPath.replace(/^\/[^//]+/, '').substr(1);
      }

      if (lang === 'en') {
        return '/en/' + subpath;
      }
      else if (lang === 'es') {
        return '/es/' + subpath;
      }
      else {
        return '/' + subpath;
      }
    }
  }
};
</script>
