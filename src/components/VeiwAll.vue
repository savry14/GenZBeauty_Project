<template>
  <div class="w-full bg-pink-300 px-4 py-10 md:px-6 lg:px-24">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h1 class="text-2xl font-bold sm:text-3xl">Product List</h1>
      <router-link
        to="/shop"
        class="w-fit rounded-xl px-3 py-2 shadow-xl transition-colors hover:bg-pink-600 hover:text-white"
      >
        View All
      </router-link>
    </div>

    <div class="flex w-full flex-wrap gap-6 pt-10 sm:gap-8">
      <div
        v-for="item in products"
        :key="item.id"
        class="flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
      >
        <div class="aspect-[4/3] w-full">
          <img
            class="h-full w-full object-cover"
            :src="item.image"
            :alt="item.name"
          />
        </div>

        <div class="flex flex-1 flex-col px-3 py-3">
          <h1 class="text-xl font-bold">{{ item.name }}</h1>
          <p class="pt-2 line-clamp-2 text-gray-600">{{ item.description }}</p>
          <p class="pt-2 font-bold text-green-800">${{ item.price }}</p>

          <div class="mt-auto pt-3">
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
