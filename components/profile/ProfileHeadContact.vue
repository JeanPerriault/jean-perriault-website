<template>
  <div class="profile-head-contact">
    <div
      class="profile-head-contact-sub-div"
      v-for="item in headContactItemList"
      :key="item.icon"
    >
      <a v-if="item.link" :href="item.link">
        <v-icon>{{ item.icon }}</v-icon>
        <span class="profile-head-contact-text">{{ item.text }}</span>
      </a>
      <template v-else>
        <v-icon >{{ item.icon }}</v-icon>
        <span class="profile-head-contact-text">{{ item.text }}</span>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-head-contact {
  display: none;
}

@media only screen and (min-width: 768px) {
  .profile-head-contact {
    display: block;
    min-width: 220px;

    .profile-head-contact-sub-div {
      display: flex;
      align-items: center;
      justify-content: left;
      margin-bottom: 5px;
      background: tomato;
      padding: 5px;
      border-radius: 5px;

      a, a:active {
        align-items: center;
        display: flex;
        color: white !important;
        text-decoration:none;
      }

      .profile-head-contact-text {
        margin-left: 5px;
      }
    }

    .profile-head-contact-sub-div:hover {
      transition: all .3s ease-in-out;
      font-size: 18px;
      .v-icon {
        font-size: 27px;
      }
    }
  }
}
</style>

<script>
export default {
  computed: {
    headContactItemList () {
       const linkedInProfileLink = (this.$store.state.locale !== 'en')
        ? 'https://www.linkedin.com/in/jeanperriault/?locale=fr_FR'
        : 'https://www.linkedin.com/in/jeanperriault/?locale=en_US';

      return [
        {
          icon: 'mdi-phone',
          text: '06.07.18.84.75'
        },
        {
          icon: 'mdi-map-marker-outline',
          text: '38190 Froges'
        },
        {
          icon: 'mdi-at',
          text: 'jeanperriault@free.fr',
          link: 'mailto:jeanperriault@free.fr'
        },
        {
          icon: 'mdi-linkedin',
          text: 'Linkedin',
          link: linkedInProfileLink
        },
        {
          icon: 'mdi-github-circle',
          text: 'Github',
          link: 'https://github.com/JeanPerriault'
        }
      ];
      return res;
    }
  }
}
</script>
