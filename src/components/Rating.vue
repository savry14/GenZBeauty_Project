<template>
  <div class="w-full h-auto bg-pink-200 px-4 py-10 md:px-6 lg:px-24">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h1 class="text-2xl font-bold">Best Seller</h1>
      <button
        class="w-fit cursor-pointer rounded-xl px-3 py-2 shadow-xl hover:bg-pink-500 hover:text-white"
      >
        View All
      </button>
    </div>
    <!-- main card -->
    <div class="flex w-full flex-wrap items-start gap-6 pt-10 sm:pt-16">
      <!-- card -->
      <div
        v-for="item in productsToShow"
        :key="item.id"
        class="flex w-full flex-col overflow-hidden rounded-xl border-none bg-white transition-transform duration-200 hover:scale-105 sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
      >
        <!-- card-header -->
        <div class="aspect-[4/3] w-full overflow-hidden">
          <img
            class="block h-full w-full object-cover"
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
import { products } from "../data/Products";

const bestSellerIds = [1, 2, 4, 6];
const productsToShow = products.filter((item) => bestSellerIds.includes(item.id));
</script>
