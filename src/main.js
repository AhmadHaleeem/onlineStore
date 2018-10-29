import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAVGnEtavrXJcF1IKHjSlMAoTiZbHvDnDc",
      authDomain: "onlinestore-470b2.firebaseapp.com",
      databaseURL: "https://onlinestore-470b2.firebaseio.com",
      projectId: "onlinestore-470b2",
      storageBucket: "onlinestore-470b2.appspot.com",
      messagingSenderId: "338285559151"
    }
    fb.initializeApp(config)
  }
})
