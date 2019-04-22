<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-card
      class="transparent"
      flat
      dark
    >
      <h1 style="text-align: center">
        Education
      </h1>
    </v-card>
    <v-flex
      v-for="school in education"
      :key="school.startTime.seconds"
      xs12
    >
      <v-card
        class="transparent"
        flat
        dark
      >
        <v-card-text>
          <v-layout
            colomn
          >
            <v-flex
              xs5
              class="mx-1"
            >
              <h3>{{ school.school }}</h3>
              <h6>{{ convertTime(school.startTime.seconds) }} - {{ convertTime(school.endTime.seconds) }}</h6>
            </v-flex>
            <v-flex
              class="mx-1"
              xs6
            >
              <h4>{{ school.programme }}</h4>
              <h6>{{ school.comment }} </h6>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider />
      </v-card>
    </v-flex>
    <v-card
      class="transparent"
      flat
      dark
    >
      <h1 style="text-align: center">
        Experience
      </h1>
    </v-card>
    <v-flex
      v-for="company in experience"
      :key="company.startTime.seconds"
      xs12
    >
      <v-card
        class="transparent"
        flat
        dark
      >
        <v-card-text>
          <v-layout
            colomn
          >
            <v-flex
              xs5
              class="mx-1"
            >
              <h3>{{ company.company }}</h3>
              <h6>{{ convertTime(company.startTime.seconds) }} - {{ convertTime(company.endTime.seconds) }}</h6>
            </v-flex>
            <v-flex
              class="mx-1"
              xs6
            >
              <h4>{{ company.role }}</h4>
              <h6>{{ company.comment }} </h6>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from 'moment'

export default {
  name: 'CV',
  data() {
    return {
      education: [],
      experience: []
    }
  },
  mounted() {
    this.$fs.collection('education').orderBy('startTime', 'desc').get()
      .then(educationSnapshot => {
        educationSnapshot.forEach(school => {
          school = school.data()
          this.education.push(school)
        })
      })
    this.$fs.collection('experience').orderBy('startTime', 'desc').get()
      .then(experienceSnapshot => {
        experienceSnapshot.forEach(experience => {
          experience = experience.data()
          this.experience.push(experience)
        })
      })
  },
  methods: {
    convertTime(time) {
      if (time === 0) return ''
      else return moment.unix(time).format('MMMM YYYY')
    }
  }
}
</script>

<style scoped>

</style>
