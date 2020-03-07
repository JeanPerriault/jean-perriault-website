<template>
  <section>
    <h1>{{ $t("profile.skills") }}</h1>
    <div class="containter">
      <div v-for="(item, index) in skills" :key="index" class="row2">
        <div class="name">
          <p>
            {{ item.name }}
          </p>
        </div>
        <!-- <div class="strength"> -->
        <v-progress-linear
          color="cyan"
          height="20"
          class="strength"
          :value="item.percent"
          striped
        >
        </v-progress-linear>
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .row2 {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;

    .name {
      max-width: 250px;
    }

    .strength {
      width: 250px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .container {
    .row2 {
      flex-direction: row;
    }
  }
}
</style>

<script>
export default {
  data: () => ({
    skills: [
      {
        name:
          "Javascript / VueJS / NuxtJS / AngularJS & Angular / HTML5 / CSS & SCSS / Grunt / npm & nodejs",
        percent: 90
      },
      {
        name: "Leadership",
        percent: 90
      },
      {
        name: "Design et ergonomie web",
        percent: 90
      },
      {
        name: "Java",
        percent: 90
      },
      {
        name: "C++",
        percent: 70
      },
      {
        name: "Intégration continue",
        percent: 90
      },
      {
        name: "Linux / macOS / Unix / Shell",
        percent: 90
      },
      {
        name: "Ptyhon",
        percent: 70
      }
    ]
  }),
  computed: {
    setTitleBackground() {}
  }
};
</script>
