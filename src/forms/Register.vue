<template>
  <div class="flex min-h-screen items-center justify-center bg-pink-50 px-4 py-10">
    <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
      <h1 class="mb-5 text-center text-3xl font-bold">
        Register
      </h1>

      <!-- Username -->
      <div class="mb-4">
        <label class="mb-1 block font-medium">Full Name</label>

        <input
          v-model="username"
          type="text"
          placeholder="Enter full name..."
          class="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none"
        >
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="mb-1 block font-medium">Email</label>

        <input
          v-model="email"
          type="email"
          placeholder="example@gmail.com"
          class="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none"
        >
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label class="mb-1 block font-medium">Password</label>

        <input
          v-model="password"
          type="password"
          placeholder="Enter password..."
          class="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none"
        >
      </div>

      <!-- Checkbox -->
      <div class="mb-4 flex items-start gap-3">
        <input type="checkbox" v-model="agree" class="mt-1">

        <p class="text-sm sm:text-base">I agree to the terms and conditions</p>
      </div>

      <!-- Button -->
      <button
        @click="register"
        class="w-full rounded-xl bg-blue-500 py-2 text-white transition-colors hover:bg-blue-400"
      >
        Create Account
      </button>
      <router-link to="/home" class="mt-4 block text-pink-500">
        Show information before register
      </router-link>
      <!-- Login -->
      <div class="mt-4 flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
        <p>Already have an account?</p>

        <router-link
          to="/login"
          class="text-blue-500 hover:underline"
        >
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const agree = ref(false)

const register = () => {

    if (
        username.value === '' ||
        email.value === '' ||
        password.value === ''
    ) {
        alert('Please fill all fields')
        return
    }

    if (!agree.value) {
        alert('Please agree to the terms')
        return
    }

    const user = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    localStorage.setItem('user', JSON.stringify(user))

    alert('Register Success')

    router.push('/login')
}
</script>
