<template>
  <v-container
    justify-center
    align-center
    @mousedown="mouseClicked"
  >
    <v-layout
      row
      wrap
      justify-center
    >
      <v-flex
        xs12
        md6
      >
        <about-me />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-layout
          row
          justify-center
        >
          <v-flex xs3>
            <v-btn dark flat @click="pickedTab = 'CONTACT'">
              Contact
            </v-btn>
          </v-flex>
          <v-flex xs3>
            <v-btn dark flat @click="pickedTab = 'CV'">
              CV
            </v-btn>
          </v-flex>
        </v-layout>
        <v-flex
          xs12
          class="mx-5 my-5 hidden-sm-and-down"
        >
          <contact v-if="pickedTab === 'CONTACT'" />
          <CV v-if="pickedTab === 'CV'" />
        </v-flex>
        <v-flex
          xs12
          class="mx-5 hidden-md-and-up"
        >
          <contact v-if="pickedTab === 'CONTACT'" />
          <CV v-if="pickedTab === 'CV'" />
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AboutMe from './AboutMe'
import Contact from './Contact'
import CV from './CV'

export default {
  name: 'Menu',
  components: { AboutMe, Contact, CV },
  data() {
    return {
      pickedTab: 'CONTACT'
    }
  },
  methods: {
    mouseClicked(event) {
      this.$store.commit('updateMousePosition', event)
    }
  }
}
</script>

<style scoped>

</style>
