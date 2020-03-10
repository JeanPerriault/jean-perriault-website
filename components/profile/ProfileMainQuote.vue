<template>
  <section class="profile-main-quote">
    <div class="profile-quote">
      <div style="padding-top: 15px;">
        <v-icon>mdi-format-quote-close</v-icon>
      </div>
      <div
        style="border-left: 3px solid white; height: 130px; margin-top:22px;margin-left:4px;"
      >
      </div>

      <blockquote
        class="blockquote"
        style="font-style: italic; margin-left: 5px; padding-left: 5px;"
      >
        <p class="headline" v-html="$t('profile.quote1')"></p>
        <p class="headline" v-html="$t('profile.quote2')"></p>
        <p class="headline" v-html="$t('profile.quote3')"></p>
      </blockquote>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile-main-quote {
  background: $section-background-color;
  border: 1px solid $section-border-color;
  perspective: 1000px;
  perspective-origin: left;
}
.profile-quote {
  display: flex;
  transition: 0.3s;
  transform: rotateY(14deg);
}
.profile-quote:hover {
  transition: 0.3s;
  transform: rotateY(0);
}

@media only screen and (min-width: 768px) {
}
</style>

<script>
export default {
  data: () => ({
    profile: ["lead", "manage", "ci", "agile"]
  }),
  computed: {
    setTitleBackground() {}
  }
};
</script>
