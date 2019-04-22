<template>
  <v-card
    class="transparent"
    flat
  >
    <!--<v-responsive
      :aspect-ratio="16/9"
      max-height="700px"
      class="hidden-sm-and-down"
    >
      <v-img
        src="profilbilde_edited.jpg"
        class="img"
        round
      />
    </v-responsive>-->
    <div class="text-xs-center mt-5 hidden-sm-and-down">
      <v-avatar
        size="350px"
      >
        <img src="profilbilde_edited.jpg">
      </v-avatar>
    </div>
    <div class="text-xs-center mt-5 hidden-md-and-up">
      <v-avatar
        size="140px"
      >
        <img src="profilbilde_edited.jpg">
      </v-avatar>
    </div>
    <v-card-text>
      <h1
        style="text-align: center; color: #FDEE98"
      >
        Jesper Paulsen
      </h1>
      <h2
        style="text-align: center"
      >
        <v-icon color="primary">
          email
        </v-icon>
        <a href="mailto: jesper@jesper.no">
          jesper@jesper.no
        </a>
      </h2>
      <h3
        style="text-align: center; color: #FCB260"
      >
        Studying MSc in Computer Science @ NTNU
      </h3>
      <h3
        style="text-align: center; color: #FCB260"
      >
        Full-Stack developer @ <a
          href="https://www.learnlink.no"
          target="_blank"
        >
          Learnlink
        </a>
      </h3>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.img {
  border-radius: 100px;
}
</style>
