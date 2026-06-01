<template>
  <header class="sticky top-0 z-20 relative">
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
      class="flex w-full items-center justify-between gap-3 bg-pink-300 px-4 py-2 shadow-lg md:px-8 lg:px-10"
    >
      <router-link to="/home" class="flex items-center gap-2">
        <img
          class="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          src="/src/assets/image/hero/logo.png"
          alt="GENZ-BEUTY logo"
        />
        <span class="text-lg font-bold text-black sm:text-xl md:text-2xl">
          GENZ-BEAUTY
        </span>
      </router-link>

      <ul class="hidden items-center gap-10 lg:ml-16 lg:flex xl:ml-24">
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
                class="block rounded-t-2xl px-5 py-4 hover:bg-pink-100"
              >
                Skin Care For Face
              </router-link>

              <router-link
                to="/categories/body"
                class="block rounded-b-2xl px-5 py-4 hover:bg-pink-100"
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

      <div class="ml-auto flex items-center gap-3 font-bold sm:gap-4">
        <button
          type="button"
          class="cursor-pointer rounded-full p-1 hover:bg-white/40"
          @click="toggleSearch"
          :aria-expanded="isSearchOpen"
          aria-label="Open product search"
        >
          <img src="/src/assets/image/icons/search.svg" alt="Search" />
        </button>
        <button
          type="button"
          class="relative cursor-pointer rounded-full p-1 hover:bg-white/40"
          @click="toggleCartPanel"
          :aria-expanded="isCartOpen"
          aria-label="Open cart history"
        >
          <img src="/src/assets/image/icons/bag.svg" alt="Cart" />
          <span
            v-if="count > 0"
            class="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white"
          >
            {{ count }}
          </span>
        </button>
        <button
          type="button" 
          class="inline-flex h-11 w-11 items-center justify-center  shadow-sm lg:hidden"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <router-link
          to="/login"
          class="hidden rounded-2xl border px-3 py-1 shadow-xl hover:border-[3px] sm:inline-flex"
        >
          Login
        </router-link>

        <router-link
          to="/register"
          class="hidden rounded-2xl border px-3 py-1 shadow-xl hover:border-[3px] sm:inline-flex"
        >
          Register
        </router-link>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="border-t border-pink-200 bg-pink-300 px-4 pb-4 pt-3 shadow-lg md:px-8 lg:hidden text-center"
    >
      <nav class="mx-auto flex max-w-3xl flex-col gap-2">
        <router-link
          v-for="item in menu"
          :key="item.name"
          :to="item.link"
          class="rounded-2xl bg-white/80 px-4 py-3 font-semibold text-gray-800 hover:bg-white"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>

        <div class="grid grid-cols-2 gap-2 pt-2 sm:hidden">
          <router-link
            to="/login"
            class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-center font-semibold text-gray-800"
            @click="isMobileMenuOpen = false"
          >
            Login
          </router-link>
          <router-link
            to="/register"
            class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-center font-semibold text-gray-800"
            @click="isMobileMenuOpen = false"
          >
            Register
          </router-link>
        </div>
      </nav>
    </div>

    <div
      v-if="isSearchOpen"
      class="absolute left-0 top-full w-full border-t border-pink-200 bg-pink-300 px-4 pb-4 pt-3 shadow-lg md:px-8 lg:px-10"
    >
      <form
        class="mx-auto flex w-full max-w-3xl flex-col gap-3 sm:flex-row"
        @submit.prevent="submitSearch"
      >
        <label class="sr-only" for="navbar-search">Search products</label>
        <input
          id="navbar-search"
          v-model="searchQuery"
          type="search"
          placeholder="Search product name or keyword..."
          class="w-full rounded-2xl border border-pink-200 bg-white px-4 py-3 text-base outline-none transition focus:border-pink-500"
        />
        <button
          type="submit"
          class="rounded-2xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 sm:shrink-0"
        >
          Search
        </button>
      </form>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isCartOpen"
        class="absolute right-2 top-full mt-3 w-[calc(100vw-1rem)] max-w-md rounded-3xl border border-pink-100 bg-white p-4 shadow-2xl sm:right-4 sm:w-[92vw] md:right-8 lg:right-10"
      >
        <div
          class="flex items-center justify-between border-b border-gray-100 pb-3"
        >
          <div>
            <h2 class="text-lg font-bold text-gray-900">Bag Activity</h2>
            <p class="text-sm text-gray-500">
              Recent add to cart and buy now actions
            </p>
          </div>
          <button
            type="button"
            class="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-200"
            @click="isCartOpen = false"
          >
            Close
          </button>
        </div>

        <div
          v-if="cartHistory.length === 0"
          class="py-8 text-center text-gray-500"
        >
          No bag activity yet. Add a product to see it here.
        </div>

        <div v-else class="mt-4 max-h-96 space-y-3 overflow-y-auto pr-1">
          <div
            v-for="entry in cartHistory"
            :key="entry.id"
            class="flex gap-3 rounded-2xl bg-pink-50 p-3"
          >
            <img
              :src="entry.image"
              :alt="entry.name"
              class="h-16 w-16 rounded-xl object-cover"
            />
            <div class="min-w-0 flex-1">
              <div class="flex items-start justify-between gap-2">
                <div class="min-w-0">
                  <p class="truncate font-semibold text-gray-900">
                    {{ entry.name }}
                  </p>
                  <p class="text-sm text-gray-600">{{ entry.action }}</p>
                </div>
                <span
                  class="shrink-0 rounded-full bg-white px-2 py-1 text-xs font-bold text-pink-600"
                >
                  x{{ entry.quantity }}
                </span>
              </div>
              <div
                class="mt-2 flex items-center justify-between text-sm text-gray-500"
              >
                <span>${{ entry.total }}</span>
                <span>{{ entry.createdAt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="notification"
        class="fixed left-1/2 top-4 z-[10000] w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-2xl sm:left-auto sm:right-4 sm:w-auto sm:translate-x-0 md:right-8"
      >
        {{ notification }}
      </div>
    </transition>
  </header>
</template>

<script setup>
import { inject, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const count = inject("count", ref(0));
const cartHistory = inject("cartHistory", ref([]));
const notification = inject("notification", ref(""));
const isLoading = ref(true);
const isSearchOpen = ref(false);
const isCartOpen = ref(false);
const isMobileMenuOpen = ref(false);
const searchQuery = ref("");
const route = useRoute();
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

watch(
  () => route.query.search,
  (value) => {
    searchQuery.value = typeof value === "string" ? value : "";
  },
  { immediate: true },
);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) {
    isCartOpen.value = false;
    isMobileMenuOpen.value = false;
  }
  if (isSearchOpen.value) {
    searchQuery.value =
      typeof route.query.search === "string" ? route.query.search : "";
  }
};

const toggleCartPanel = () => {
  isCartOpen.value = !isCartOpen.value;
  if (isCartOpen.value) {
    isSearchOpen.value = false;
    isMobileMenuOpen.value = false;
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    isSearchOpen.value = false;
    isCartOpen.value = false;
  }
};

const submitSearch = () => {
  const term = searchQuery.value.trim();
  const nextQuery = term ? { search: term } : {};
  const isSameRoute =
    route.path === "/shop" &&
    JSON.stringify(route.query) === JSON.stringify(nextQuery);

  if (isSameRoute) {
    isSearchOpen.value = false;
    return;
  }

  router.replace({
    path: "/shop",
    query: nextQuery,
  });

  isSearchOpen.value = false;
};

const menu = [
  { link: "/home", name: "Home" },
  { link: "/shop", name: "Shop" },
  { link: "/categories", name: "Categories" },
  { link: "/contact", name: "Contact" },
];
</script>
