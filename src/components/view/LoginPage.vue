<template>
  <div class="h-screen flex flex-col justify-center bg-indigo-600">
    <div
      class="mx-auto w-450 md:w-600 h-96 shadow-xl border-2 rounded-lg text-center bg-white"
    >
      LoginPage
      <hr />
      <div class="flex flex-col container text-center space-y-4 p-4">
        <p>Welcome to twitter</p>
        <form @submit.prevent="handleLogin" class="w-full justify-center">
          <div class="container justify-start mt-3 w-full">
            <label for="email" class="p-2"> Email</label>
            <input
              type="text"
              id="email"
              v-model="email"
              placeholder=" Enter Email.."
              class="text-base border w-300 focus: outline-none focus: border-grey-600"
            />
          </div>
          <div class="container justify-start mt-3 mb-3 w-full">
            <label for="password" class="p-2"> Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder=" Enter Password.."
              class="text-base border w-300 focus: outline-none focus: border-grey-600"
            />
          </div>
          <button
            class="w-full bg-black text-white rounded-xl p-2 mb-3"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useUserStore } from "../../stores/user-store";
export default {
  setup() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.checkLogin(this.email, this.password)) {
        console.log("login successfully....");
        this.$router.push('/home')
      }
      this.email ="",
      this.password = ""
    },
    checkLogin(email, password) {
      let check = false;
      this.getUser.forEach((element) => {
        if (element.email == email && element.password == password) {
          check = true;
        }
      });
      return check;
    },
  },
  computed: {
    ...mapState(useUserStore, ["getUser"]),
  },
};
</script>