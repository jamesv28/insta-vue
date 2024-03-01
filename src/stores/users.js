import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const handleLogin = () => {

  }

  const getUsers = () => {
    
  }

  const handleSignup = () => {

  }

  const handleSignout = () => {

  }

  return { user, getUsers, handleSignup,  handleSignout}
})
