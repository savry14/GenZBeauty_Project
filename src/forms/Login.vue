<template>
  <div class="flex min-h-screen items-center justify-center bg-pink-100 px-4 py-10">
    <div class="w-full max-w-md rounded-xl bg-white p-6 shadow sm:p-8">
      <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl">Login</h1>

      <div class="mb-4">
        <label class="mb-1 block font-medium">Email</label>

        <input
          type="email"
          placeholder="Email"
          class="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <label class="mb-1 block font-medium">Password</label>

        <input
          type="password"
          placeholder="Password"
          class="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none"
        />
      </div>

      <button
        @click="login"
        class="w-full rounded-xl bg-blue-500 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Login
      </button>

      <router-link to="/home" class="mt-4 block text-pink-600">
        Show information before login
      </router-link>

      <p class="mt-3 text-center text-sm sm:text-base">
        No account?
        <router-link to="/register" class="text-pink-600">
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  router.push("/home");
};
</script>
