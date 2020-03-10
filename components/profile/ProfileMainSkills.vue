<template>
  <v-row>
    <template v-for="(skill, index) in skills">
      <v-col :key="index">
        <v-card
          class="pa-2 display-1 text-center"
          outlined
          tile
        >
          <div
            class="pa-5"
          >
          {{ skill.name }}
          </div>
          <v-progress-linear
            color="cyan"
            height="25"
            class="strength"
            :value="skill.percent"
            striped
          >
            <template v-slot="{ value }">
              <strong class="title">{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
        </v-card>
      </v-col>
      <v-responsive
        v-if="index === 2"
        :key="`width-${index}`"
        width="100%"
      ></v-responsive>
    </template>
  </v-row>
</template>

<style lang="scss">
@media only screen and (min-width: 768px) {
}
</style>

<script>
export default {
  data(){
    return {
      skills: [
        {
          name: "Javascript / HTML5 / CSS & SCSS / Grunt / npm & nodejs",
          percent: 90
        },
        {
          name: "VueJS / NuxtJS",
          percent: 90
        },
        {
          name: "AngularJS & Angular",
          percent: 80
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
          percent: 80
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
          percent: 80
        },
        {
          name: "Ptyhon",
          percent: 70
        }
      ]
    }
  }
};
</script>
