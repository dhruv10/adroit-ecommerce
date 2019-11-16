<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div>
      <input ref="emailInput" class="input" type="email" placeholder="Text input" />
      <input ref="passInput" class="input" type="password" placeholder="Text input" />
      <br>
      <input @click="logInUser()" ref="loginBtn" class="button" type="submit" value="LogIn" />
      <input @click="signUpUser()" ref="signinBtn" class="button" type="submit" value="SignIn" />
      <input @click="signOutUser()" ref="signoutBtn" class="button" type="submit" value="Log Out" />
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    this.emailInput = this.$refs.emailInput;
    this.passInput = this.$refs.passInput;
    this.loginBtn = this.$refs.loginBtn;
    this.signinBtn = this.$refs.signinBtn;
    this.signoutBtn = this.$refs.signoutBtn;

    const auth = firebase.auth();
    auth.onAuthStateChanged(userLogInState => {
      if (userLogInState) {
        console.log("User loggedIn: ", userLogInState);
      } else {
        console.log("Not loggedIn");
      }
    });
  },
  methods: {
    logInUser() {
      // console.log(this.emailInput.value)
      const email = this.emailInput.value;
      const pass = this.passInput.value;
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass);

      promise
        .then(user => console.log("LoggedIn user: ", user))
        .catch(e => console.log(e.message));
    },
    signUpUser() {
      const email = this.emailInput.value;
      const pass = this.passInput.value;
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email, pass);

      promise
        .then(user => console.log("User created: ", user))
        .catch(e => console.log(e.message));
    },
    signOutUser() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  font-size: 20px;
}
</style>

