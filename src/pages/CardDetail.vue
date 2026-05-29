<template>
  <div class="bg-pink-200 px-4 py-5 sm:px-5 lg:px-10">
    <div class="sticky top-0 z-10 w-full px-0 py-2 sm:w-auto sm:px-4 sm:py-5">
      <router-link to="/shop">
        <button
          class="group flex cursor-pointer items-center gap-2 text-gray-800 transition-colors hover:text-black"
        >
          <svg
            class="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 12H5M12 5l-7 7 7 7"
            />
          </svg>
          <span class="text-xl font-medium">Back to Products</span>
        </button>
      </router-link>
    </div>

    <div
      v-if="!product"
      class="mx-auto max-w-4xl rounded-xl bg-white p-6 text-center shadow-xl"
    >
      <h1 class="text-2xl font-bold sm:text-3xl">Product not found</h1>
      <p class="mt-3 text-gray-600">Please go back and try another item.</p>
    </div>

    <div
      v-else
      class="container mx-auto flex max-w-5xl flex-col gap-6 rounded-xl bg-white p-4 shadow-xl sm:gap-8 md:flex-row md:p-8"
    >
      <div class="w-full md:w-1/2">
        <img
          :src="product.image"
          :alt="product.name"
          class="h-72 w-full rounded-lg object-cover sm:h-96"
        />
      </div>

      <div class="w-full md:w-1/2">
        <h1 class="mt-2 text-3xl font-bold sm:mt-5 sm:text-4xl">{{ product.name }}</h1>

        <p class="mt-3 text-gray-600">{{ product.description }}</p>

        <h2 class="mt-3 text-2xl font-bold text-green-500">
          ${{ product.price }}
        </h2>

        <div class="mt-5 flex flex-col gap-2">
          <p class="text-base font-semibold text-gray-800">Quantity</p>
          <div class="flex items-center gap-2">
            <button
              @click="qty > 1 && qty--"
              class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-100 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              -
            </button>

            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-800"
            >
              {{ qty }}
            </div>

            <button
              @click="qty++"
              class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-100 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-5">
          <button
            @click="addProductToCart"
            class="w-full rounded-lg bg-green-500 p-3 text-white transition-transform duration-200 hover:scale-105 hover:bg-green-600 sm:flex-1"
          >
            Add To Cart 
          </button>
          <button
            @click="buyNow"
            class="w-full rounded-lg bg-red-500 p-3 text-white transition-transform duration-200 hover:scale-105 hover:bg-red-700 sm:w-32"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from "vue";
import { useRoute } from "vue-router";
import { products } from "../data/Products";

const recordActivity = inject("recordActivity", () => {});

const qty = ref(1);
const route = useRoute();

const addProductToCart = () => {
  if (product.value) {
    recordActivity(product.value, qty.value, "Added to cart");
  }
};

const buyNow = () => {
  if (product.value) {
    recordActivity(product.value, qty.value, "Bought now");
  }
};

const product = computed(() => {
  const productId = Number.parseInt(route.params.id, 10);
  return products.find((item) => item.id === productId);
});
</script>
