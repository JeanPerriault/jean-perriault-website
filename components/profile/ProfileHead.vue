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

    <div class="profile-head-contact">
      <div class="profile-head-contact-sub-div">
        <v-icon>mdi-phone</v-icon>
        <span class="profile-head-contact-text">06.07.18.84.75</span>
      </div>
      <div class="profile-head-contact-sub-div">
        <v-icon>mdi-at</v-icon>
        <span class="profile-head-contact-text">
          <a href="mailto:jeanperriault@free.fr">jeanperriault@free.fr</a>
        </span>
      </div>

      <div class="profile-head-contact-sub-div">
        <v-icon>mdi-map-marker-outline</v-icon>
        <span class="profile-head-contact-text">
          38190 Froges
        </span>
      </div>

      <div class="profile-head-contact-sub-div">
        <v-icon>mdi-linkedin</v-icon>
        <span class="profile-head-contact-text">Linkedin</span>
      </div>
      <div class="profile-head-contact-sub-div">
        <svg style="width:24px;height:24px;">
          <path
            fill="#FFF"
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
          ></path>
        </svg>
        <span class="profile-head-contact-text">Github</span>
      </div>
      <!-- <p>
        <v-icon style="vertical-align: middle">mdi-at</v-icon>
        This is a fine place for a warning to appear
      </p> -->
    </div>
  </div>
</template>

<style lang="scss">
.profile-photo {
  margin-top: -100px;
  border: 4px solid salmon;
  border-radius: 50%;
  width: 100px;
}

.profile-head-contact-text {
  display: none;
}

.profile-head {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: salmon;
  height: 150px;
}
.profile-head-photo {
  margin-top: 100px;
}

.profile-head-jumbo {
}
.profile-head-contact {
}
.profile-head-contact-sub-div {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 5px;
}

.profile-head-text {
  text-align: right;
}

@media only screen and (min-width: 768px) {
  .profile-head {
    height: 180px;

    .profile-head-photo {
      margin-top: 160px;
    }
  }
  .profile-head-contact-text {
    margin-left: 5px;
    display: block;

    a {
      color: white !important;
    }
  }
  .profile-photo {
    margin-top: -100px;
    width: 200px;
  }
}
</style>
