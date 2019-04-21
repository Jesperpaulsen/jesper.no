import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import Vue from 'vue'

export default ({ app: { context } }) => {
  const config = {
    apiKey: context.env.VUE_APIKEY,
    authDomain: context.env.VUE_AUTHDOMAIN,
    databaseURL: context.env.VUE_DATABASEURL,
    projectId: context.env.VUE_PROJECTID,
    storageBucket: context.env.VUE_STORAGEBUCKET,
    messagingSenderId: context.env.VUE_MESSAGINGSENDERID
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }

  Vue.prototype.$fs = firebase.firestore()
}
