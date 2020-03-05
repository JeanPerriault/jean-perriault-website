<template>
  <div class="profile-main">
    <ProfileMainLead></ProfileMainLead>
    <ProfileMainQuote></ProfileMainQuote>
    <ProfileMainProfile></ProfileMainProfile>
    <ProfileMainSkills></ProfileMainSkills>
  </div>
</template>

<style lang="scss">
.profile-main {
  margin-top: 100px;

  section {
    margin: 20px;
    padding: 20px;
    border-radius: 2px;
  }
}

@media only screen and (min-width: 768px) {
}
</style>

<script>
const mq = window.matchMedia('(prefers-color-scheme: dark)')
// console.error(mq)

import ProfileMainLead from "~/components/profile/ProfileMainLead";
import ProfileMainProfile from "~/components/profile/ProfileMainProfile";
import ProfileMainQuote from "~/components/profile/ProfileMainQuote";
import ProfileMainSkills from "~/components/profile/ProfileMainSkills";

export default {
  components: {
    ProfileMainLead,
    ProfileMainProfile,
    ProfileMainQuote,
    ProfileMainSkills
  },
  data: () => ({
    profile: ["lead", "manage", "ci", "agile"]
  }),
  computed: {
    setTitleBackground() {}
  }
};
</script>
