<template>
  <div class="w-full bg-pink-300 px-4 py-10 md:px-6 lg:px-24">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Product List</h1>
      <router-link
        to="/shop"
        class="rounded-xl px-3 py-2 shadow-xl transition-colors hover:bg-pink-600 hover:text-white"
      >
        View All
      </router-link>
    </div>

    <div class="flex w-full flex-wrap gap-8 pt-10">
      <div
        v-for="item in products"
        :key="item.id"
        class="h-[410px] w-full overflow-hidden rounded-xl bg-white shadow-2xl md:w-[48%] lg:w-[23%]"
      >
        <div class="h-[70%] w-full">
          <img
            class="h-full w-full object-cover"
            :src="item.image"
            :alt="item.name"
          />
        </div>

        <div class="px-3 py-2">
          <h1 class="text-xl font-bold">{{ item.name }}</h1>
          <p class="pt-2 font-bold text-green-800">${{ item.price }}</p>

          <div class="pt-3">
            <router-link
              :to="`/products/${item.id}`"
              class="block rounded-xl bg-blue-500 px-3 py-2 text-center text-white transition-colors hover:bg-blue-700"
            >
              Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from "../data/Products";
</script>
