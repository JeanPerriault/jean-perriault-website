
<template>
  <transition appear>
    <div>
      <profile-head></profile-head>
      <profile-main></profile-main>
    </div>
  </transition>
</template>

<style lang="scss">
  @media only screen and (min-width: 768px) {}
</style>

<script>
import ProfileHead from '~/components/profile/ProfileHead';
import ProfileMain from '~/components/profile/ProfileMain';

export default {
  components: {
    ProfileHead,
    ProfileMain
  },
  transition: 'bounce'
}
</script>
