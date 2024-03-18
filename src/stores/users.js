import { ref } from 'vue'
import { defineStore } from 'pinia'
import {supabase} from '../auth/supabase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const errorMessage = ref("")
  const loading = ref(false)
  const userLoading = ref(false)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleLogin = async (credentials) => {
      const {email, password} =credentials
      if(!validateEmail(email)) {
        errorMessage.value = "Not a valid email"
      }

      if(!password.length) {
        errorMessage.value = 'You must enter in a valid password'
      }

      loading.value = true

      const {error} = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if(error) {
        loading.value = false
        errorMessage.value = error.message
      }

      const {data: existingUser} = await supabase
      .from("users")
      .select()
      .eq('email', email)
      .single()
    
    user.value = {
      email: existingUser.email,
      username: existingUser.username,
      id: existingUser.id
    }
    loading.value = false;
    errorMessage.value = ""  }

  const getUser = async () => {
    userLoading.value = true
    const res = await supabase.auth.getUser()


    if(!res.data.user) {
      userLoading.value = false
      return user.value = null
    }

    const {data: userWithEmail} = await supabase
      .from('users')
      .select()
      .eq('email', res.data.user.email)
      .single()

    user.value = {
      username: userWithEmail.username,
      email: userWithEmail.email,
      id: userWithEmail.id
    }

    userLoading.value = false

  }

  const handleSignup = async (credentials) => {
    const {email, password, username} = credentials;

    if(password.length < 6){
      return errorMessage.value = "Password length is too short"
    }

    if(username.length < 4){
      return errorMessage.value = "Username length is too short"
    }

    if(!validateEmail(email)){
      return errorMessage.value = "Email is invalid"
    }

    loading.value = true

    const {data: userWithUsername} = await supabase
      .from("users")
      .select()
      .eq('username', username)
      .single()

    
    if(userWithUsername){
      loading.value = false
      return errorMessage.value = "User already registered"
    }

    errorMessage.value = ""

    const {error} = await supabase.auth.signUp({
      email,
      password
    })

    if(error){
      loading.value = false
      return errorMessage.value = error.message
    }
    
    await supabase.from("users").insert({
      username,
      email
    });

    const {data: newUser} = await supabase
      .from("users")
      .select()
      .eq('email', email)
      .single()

    
    user.value = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username
    }

    loading.value = false
  }

  const handleSignout = async () => {
    await supabase.auth.signOut()
    user.value = null
  }

  const clearErrorMessage = () => {
    errorMessage.value = ''
  }
  
  return { 
    user, 
    getUser, 
    handleSignup,  
    handleSignout,
    errorMessage,
    clearErrorMessage,
    loading,
    handleLogin,
    userLoading
  }
})
