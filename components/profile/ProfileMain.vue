<template>
  <v-container>
    <div class="profile-main">
      <ProfileMainLead></ProfileMainLead>
      <ProfileMainQuote></ProfileMainQuote>
      <ProfileMainSkills></ProfileMainSkills>
      <ProfileMainProfile></ProfileMainProfile>
    </div>
  </v-container>
</template>

<style lang="scss">
.profile-main {
  margin-top: 100px;

  section {
    margin: 30px 0;
    padding: 20px;
    border-radius: 2px;
  }
}

@media only screen and (min-width: 768px) {
}
</style>

<script>
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
  }
};
</script>
