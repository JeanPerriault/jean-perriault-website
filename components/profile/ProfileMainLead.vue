<template>
  <section class="test0">
    <h2>
      <kbd>Force de proposition</kbd>, <kbd>ambitieux</kbd> et
      <kbd>exigeant</kbd> dans les projets entrepris,
      <kbd>disponible</kbd> et <kbd>pro-actif</kbd> avec les équipes et les clients
    </h2>
  </section>
</template>

<style lang="scss">
section.test0 {
  text-align: center;
}
.profile-quote {
  display: flex;
  background: $section-background-color;
  // transition: 0.3s;
  // transform: rotateY(40deg);
}
.profile-quote:hover {
  // transition: 0.3s;
  // transform: rotateY(0);
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
