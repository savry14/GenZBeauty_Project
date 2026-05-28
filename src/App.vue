<template>
  <router-view />
</template>

<script setup>
import { provide, ref } from "vue";

const cartCount = ref(0);

const addToCart = (amount = 1) => {
  cartCount.value += amount;
};

provide("count", cartCount);
provide("addToCart", addToCart);
</script>
