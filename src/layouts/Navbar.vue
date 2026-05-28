<template>
  <header class="sticky top-0 z-20">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div class="flex flex-col items-center">
        <div
          class="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"
        ></div>
        <h4 class="mt-4 text-xl text-white">Loading...</h4>
      </div>
    </div>

    <div
      class="flex w-full items-center justify-between bg-pink-300 px-4 py-2 shadow-lg md:px-8 lg:px-10"
    >
      <router-link to="/home" class="flex items-center gap-2">
        <img
          class="h-15 w-15 rounded-full"
          src="/src/assets/image/hero/logo.png"
          alt="GENZ-BEUTY logo"
        />
        <span class="text-2xl font-bold text-black md:text-3xl">
          GENZ-BEAUTY
        </span>
      </router-link>

      <ul class="hidden items-center gap-6 lg:flex">
        <li
          v-for="item in menu"
          :key="item.name"
          class="relative text-xl font-semibold"
        >
          <div v-if="item.name === 'Categories'" class="group relative">
            <router-link :to="item.link" class="cursor-pointer hover:underline">
              {{ item.name }}
            </router-link>
            <div
              class="absolute left-0 top-8 invisible w-64 rounded-2xl bg-white shadow-xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100"
            >
              <router-link
                to="/categories/face"
                class="block px-5 py-4 hover:bg-pink-100 rounded-t-2xl"
              >
                Skin Care For Face
              </router-link>

              <router-link
                to="/categories/body"
                class="block px-5 py-4 hover:bg-pink-100 rounded-b-2xl"
              >
                Skin Care For Body
              </router-link>
            </div>
          </div>
          <router-link v-else :to="item.link" class="hover:underline">
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <div class="flex items-center gap-4 font-bold">
        <button type="button" class="cursor-pointer">
          <img src="/src/assets/image/icons/search.svg" alt="Search" />
        </button>
        <button type="button" class="relative cursor-pointer">
          <img src="/src/assets/image/icons/bag.svg" alt="Cart" />
          <span
            v-if="count > 0"
            class="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white"
          >
            {{ count }}
          </span>
        </button>

        <router-link
          to="/login"
          class="rounded-2xl border px-3 py-1 shadow-xl hover:border-[3px]"
        >
          Login
        </router-link>

        <router-link
          to="/register"
          class="rounded-2xl border px-3 py-1 shadow-xl hover:border-[3px]"
        >
          Register
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";

const count = inject("count", ref(0));
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

const menu = [
  { link: "/home", name: "Home" },
  { link: "/shop", name: "Shop" },
  { link: "/categories", name: "Categories" },
  { link: "/contact", name: "Contact" },
];
</script>
