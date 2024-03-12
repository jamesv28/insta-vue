import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const errorMessage = ref("")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleLogin = (credentials) => {
    const {username, password, email} = credentials
    if (password.length < 6) {
      console.log('password too small')
      return errorMessage.value = 'Password must be validated'
    }
    if (username.length < 3) return errorMessage.value = 'Username is too short'
    if (validateEmail(email)) return errorMessage.value = 'Incorrect email'
  }

  const getUsers = () => {
    
  }

  const handleSignup = (credentials) => {
    const {username, password, email} = credentials
    if (password.length < 6) {
      return errorMessage.value = 'Password must be validated'
    }
    if (username.length < 3) {
      return errorMessage.value = 'Username is too short'
    }
    if (validateEmail(email)) {
     return errorMessage.value = 'Incorrect email'
    }

    errorMessage.value = ''
  }

  const handleSignout = () => {

  }

  return { 
    user, 
    getUsers, 
    handleSignup,  
    handleSignout,
    errorMessage
  }
})
