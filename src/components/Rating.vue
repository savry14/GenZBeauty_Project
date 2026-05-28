<template>
  <div
    class="w-full h-auto lg:px-24 md:px-6 px-4 py-10 position-absolute bg-pink-200"
  >
    <div class="flex justify-between">
      <h1 class="font-bold text-2xl">Best Seller</h1>
      <button
        class="shadow-xl px-3 py-2 rounded-xl hover:bg-pink-500 hover:text-white cursor-pointer"
      >
        View All
      </button>
    </div>
    <!-- main card -->
    <div class="w-full h-auto pt-16 flex flex-wrap gap-6">
      <!-- card -->
      <div
        v-for="item in productsToShow"
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
import { products } from "../data/Products";

const bestSellerIds = [1, 2, 4, 6];
const productsToShow = products.filter((item) => bestSellerIds.includes(item.id));
</script>
