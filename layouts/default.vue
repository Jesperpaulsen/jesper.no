<template>
  <v-app>
    <particles>
      <nuxt />
    </particles>
    <v-footer
      :fixed="fixed"
      app
    >
      <v-flex
        xs12
        class="text-xs-center"
      >
        Jesper Paulsen &copy; 2019
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Particles from '../components/Particles'
export default {
  components: { Particles },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
