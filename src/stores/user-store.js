// stores/user-store.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user-store', {
    state: () => ({
     users:[{
          username:"Angkeasel",
          email: "angkeasel@gmail.com",
          password:"12345"
     }]
    }),
    getters:{
       getUser:(state)=> state.users
    },

    actions: {

    },
})