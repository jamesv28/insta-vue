import { ref } from 'vue'
import { defineStore } from 'pinia'
import {supabase} from '../auth/supabase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const errorMessage = ref("")
  const loading = ref(false)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleLogin = (credentials) => {
    
  }

  const getUsers = () => {
    
  }

  const handleSignup = async (credentials) => {
    const {username, password, email} = credentials
    if (password.length < 6) {
      return errorMessage.value = 'Password must be validated'
    }
    if (username.length < 3) {
      return errorMessage.value = 'Username is too short'
    }
    if (!validateEmail(email)) {
      console.log('in the email block')
     return errorMessage.value = 'Incorrect email'
    }

    loading.value = true

    const {data: userWithUsername} = await supabase
                .from('users')
                .select()
                .eq('username', username)
                .single()

    if(userWithUsername) {
      loading.value = false
      return errorMessage.value = 'User already exists'
    }

    errorMessage.value = ''

    const {error} = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      loading.value = false
      return errorMessage.value = error.message
    }

    await supabase.from('users').insert({
      email,
      username
    })
    loading.value = false
  }

  const handleSignout = () => {

  }

  const clearErrorMessage = () => {
    errorMessage.value = ''
  }
  
  return { 
    user, 
    getUsers, 
    handleSignup,  
    handleSignout,
    errorMessage,
    clearErrorMessage,
    loading
  }
})
