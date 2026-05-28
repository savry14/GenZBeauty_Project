<template>
  <div class="min-h-screen bg-pink-200 p-10">
    <!-- Title -->
    <h1 class="text-4xl font-bold text-black text-center mb-5">
      {{ categoryTitle }}
    </h1>
    <p class="px-4">{{ categoryDescription }}</p>

    <div class="w-full h-auto pt-12 flex flex-wrap gap-6">
      <!-- card -->
      <div
        v-for="item in currentProducts"
        :key="item.id"
        class="w-full md:w-[48%] lg:w-[23%] h-[490px] rounded-xl border bg-white border-none transition-transform duration-200 hover:scale-105"
      >
        <!-- card-header -->
        <div class="w-full h-[60%]">
          <img
            class="w-full h-full object-cover rounded-lg"
            :src="item.image"
            :alt="item.name"
          />
        </div>
        <!-- card-body -->
        <div class="w-full h-[40%] p-3">
          <h1 class="font-semibold text-xl line-clamp-1">{{ item.name }}</h1>
          <p class="py-1 line-clamp-2">
            {{ item.description }}
          </p>
          <p class="text-xl text-green-800">${{ item.price }}</p>
          <router-link :to="`/products/${item.id}`">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 mt-2 w-full rounded-xl cursor-pointer"
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
