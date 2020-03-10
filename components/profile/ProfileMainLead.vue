<template>
  <section class="profile-main-lead">
    <p
      class="display-1"
      v-html="$t('profile.lead')">
    </p>
  </section>
</template>

<style lang="scss">
.profile-main-lead {
  text-align: center;
}

@media only screen and (min-width: 768px) {
}
</style>

<script>
export default {
  data: () => ({
    profile: ['lead', 'manage', 'ci', 'agile']
  }),
  computed: {
    setTitleBackground() {}
  }
};
</script>
