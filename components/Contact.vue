<template>
  <div>
    <v-card
      class="transparent"
      flat
    >
      <v-flex xs12>
        <v-card-text>
          <h1
            style="text-align: center; color: #FDEE98; font-size: xx-large"
          >
            Let's connect!
          </h1>
          <p class="text-xs-center" style="color: white; font-style: italic">
            Disclaimer: This page is work in progress. Check back soon :)
          </p>
          <h2
            style="text-align: center"
            class="my-3"
          >
            <v-icon color="primary">
              email
            </v-icon>
            <a href="mailto: jesper@jesper.no">
              jesper@jesper.no
            </a>
          </h2>
          <v-flex
            xs12
            class="my-5"
          >
            <v-layout row wrap justify-space-around align-start>
              <v-flex xs12 sm6 md4>
                <v-card class="elevation-0 transparent">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/jesperpaulsen/"
                      target="_blank"
                    >
                      <v-img src="Logo-2CRev-66px-TM.png" height="50px" contain />
                    </a>
                  </div>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-card class="elevation-0 transparent">
                  <div>
                    <a href="https://github.com/Jesperpaulsen/" target="_blank">
                      <v-img src="GitHub_Logo_white.png" height="50px" contain />
                    </a>
                  </div>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md2>
                <v-card class="elevation-0 transparent">
                  <div>
                    <a href="https://soundcloud.com/jesper-gayosso-paulsen-171611789" target="_blank">
                      <v-img src="orange_white_32-94fc761.png" height="50px" contain />
                    </a>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-card-text>
      </v-flex>
    </v-card>
    <v-card class="hidden-md-and-up">
      HELLO
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>

</style>
