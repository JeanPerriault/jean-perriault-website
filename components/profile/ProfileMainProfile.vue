<template>
  <section class="profile-main-profile">
    <div class="profile-main-profile-div">
      <h1>{{ $t("profile.profile") }}</h1>
      <ul>
        <li
          class="title"
          v-for="(item, index) in profile"
          :key="index"
          :style="{ marginLeft: (index+1) * 10 + 'px'}"
        >
          {{ $t("profile." + item) }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.profile-main-profile {
  background: salmon;
  border: 1px solid tomato;
}

.profile-main-profile-div {
  background: salmon;
  transform: rotate(2deg);
}

.profile-main-profile-div:hover {
  transition: all .5s ease-in-out;
  transform: rotate(0deg);
  li {
    transition: all .5s ease-in-out;
    margin-left: 10px !important;
  }
}

@media only screen and (min-width: 768px) {
}
</style>

<script>
export default {
  data: () => ({
    profile: ["leader", "manage", "ci", "agile"]
  }),
  computed: {
    setTitleBackground() {}
  }
};
</script>
