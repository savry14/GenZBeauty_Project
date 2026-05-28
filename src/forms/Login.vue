<template>
  <div class="flex h-screen items-center justify-center bg-pink-100">
    <div class="w-96 rounded-xl bg-white p-6 shadow">
      <h1 class="mb-4 text-center text-2xl font-bold">Login</h1>

      <div class="mb-4">
        <label>Email</label>

        <input
          type="email"
          placeholder="Email"
          class="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <label>Password</label>

        <input
          type="password"
          placeholder="Password"
          class="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none"
        />
      </div>

      <button
        @click="login"
        class="w-full rounded-xl bg-blue-500 py-2 text-white"
      >
        Login
      </button>

      <router-link to="/home" class="text-pink-600">
        Show information before login
      </router-link>

      <p class="mt-3 text-center">
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
