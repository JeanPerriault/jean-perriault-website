<template>
  <section class="test1">
    <div class="profile-quote">
      <div style="padding-top: 15px;">
        <v-icon>mdi-format-quote-close</v-icon>
      </div>
      <div
        style="border-left: 3px solid white; height: 130px; margin-top:22px;margin-left:4px;"
      ></div>

      <blockquote
        class="blockquote"
        style="font-style: italic; margin-left: 5px; padding-left: 5px;"
      >
        <p v-html="$t('profile.quote1')"></p>
        <p v-html="$t('profile.quote2')"></p>
        <p v-html="$t('profile.quote3')"></p>
      </blockquote>
    </div>
  </section>
</template>

<style lang="scss">
section.test1 {
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
