<template>
  <div class="min-h-screen bg-pink-200 px-4 py-10 sm:px-6 lg:px-10">
    <!-- Title -->
    <h1 class="mb-5 text-center text-3xl font-bold text-black sm:text-4xl">
      {{ categoryTitle }}
    </h1>
    <p class="mx-auto max-w-4xl px-2 text-center text-sm leading-7 text-gray-700 sm:px-4 sm:text-base">
      {{ categoryDescription }}
    </p>

    <div class="flex h-auto w-full flex-wrap gap-6 pt-10 sm:pt-12">
      <!-- card -->
      <div
        v-for="item in currentProducts"
        :key="item.id"
        class="flex w-full flex-col overflow-hidden rounded-xl border-none bg-white transition-transform duration-200 hover:scale-105 sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
      >
        <!-- card-header -->
        <div class="aspect-[4/3] w-full">
          <img
            class="h-full w-full rounded-lg object-cover"
            :src="item.image"
            :alt="item.name"
          />
        </div>
        <!-- card-body -->
        <div class="flex flex-1 flex-col p-3">
          <h1 class="font-semibold text-xl line-clamp-1">{{ item.name }}</h1>
          <p class="py-1 line-clamp-2">
            {{ item.description }}
          </p>
          <p class="text-xl text-green-800">${{ item.price }}</p>
          <router-link :to="`/products/${item.id}`" class="mt-auto pt-3">
            <button
              class="mt-2 w-full cursor-pointer rounded-xl bg-blue-500 py-2 text-lg text-white hover:bg-blue-600"
            >
              View Detail
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { faceProducts, bodyProducts } from "../data/Category";

const route = useRoute();

// Current Products
const currentProducts = computed(() => {
  return route.path.includes("face") ? faceProducts : bodyProducts;
});

// Dynamic Title
const categoryTitle = computed(() => {
  return route.path.includes("face")
    ? "Skin Care For Face"
    : "Skin Care For Body";
});

const categoryDescription = computed(() => {
  return route.path.includes("face")
    ? "Skin Care For FaceHealthy, glowing skin starts with the right face care routine. Our face skincare products are specially designed to cleanse, hydrate, and protect your skin while keeping it soft, smooth, and refreshed. redients that your face will love."
    : "Body skincare is essential for keeping your skin healthy, soft, and refreshed every day. Our body care products help cleanse, moisturize, and protect your skin while improving smoothness and hydration.";
});
</script>
