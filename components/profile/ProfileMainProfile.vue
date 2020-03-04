<template>
  <section class="test2">
    <div class="profile-main-profile">
      <h1>{{ $t("profile.profile") }}</h1>
      <ul>
        <li v-for="item in profile" :key="item">
          {{ $t("profile." + item) }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
section.test2 {
  background: salmon;
  border: 1px solid tomato;
  // perspective: 1000px;
  // perspective-origin: right;
  // text-align: right;
}

.profile-main-profile {
  background: salmon;
  // transition: 0.3s;
  // transform: rotate(-14deg);
}

.profile-main-profile:hover {
  // transition: 0.3s;
  // transform: rotate(0);
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
