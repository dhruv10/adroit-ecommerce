import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCOsHglPChm8IfjiGZst0NrxAa29eGYgFg",
  authDomain: "adroit-ecommerce.firebaseapp.com",
  databaseURL: "https://adroit-ecommerce.firebaseio.com",
  projectId: "adroit-ecommerce",
  storageBucket: "",
  messagingSenderId: "600000770038",
  appId: "1:600000770038:web:69f68ea53734cfb1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
