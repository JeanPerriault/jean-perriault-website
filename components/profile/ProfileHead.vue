<template>
  <div class="profile-head">
    <div class="profile-head-photo">
      <img class="profile-photo" src="/jean_perriault.jpg" />
    </div>

    <div class="profile-head-jumbo">
      <div class="d-none d-lg-block">
        <p class="display-3">Jean Perriault</p>
        <p class="display-2">{{ $t('profile-head.developer') }}</p>
      </div>
      <div class="d-lg-none">
        <p class="display-1">Jean Perriault</p>
        <p class="display-1">{{ $t('profile-head.developer') }}</p>
      </div>
    </div>

    <profile-head-contact></profile-head-contact>
  </div>
</template>

<style lang="scss" scoped>

.profile-head {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: salmon;
  height: 150px;

  .profile-head-photo {
    margin-top: 100px;

    .profile-photo {
      margin-top: -100px;
      border: 4px solid salmon;
      border-radius: 50%;
      width: 100px;
    }
  }

  .profile-head-jumbo {
    text-align: center;
  }
}

@media only screen and (min-width: 768px) {
  .profile-head {
    height: 180px;

    .profile-head-photo {
      margin-top: 160px;

      .profile-photo {
        margin-top: -100px;
        width: 200px;
      }
    }
  }
}
</style>

<script>
import ProfileHeadContact from "~/components/profile/ProfileHeadContact";
export default {
  components: {
    ProfileHeadContact
  }
}
</script>
