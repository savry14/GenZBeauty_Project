<template>
  <router-view />
</template>

<script setup>
import { computed, provide, ref } from "vue";

const cartCount = ref(0);
const cartHistory = ref([]);
const notification = ref("");
let notificationTimer = null;

const pushNotification = (message) => {
  notification.value = message;

  if (notificationTimer) {
    clearTimeout(notificationTimer);
  }

  notificationTimer = setTimeout(() => {
    notification.value = "";
    notificationTimer = null;
  }, 2500);
};

const recordActivity = (product, amount = 1, action = "Added to cart") => {
  if (!product) {
    return;
  }

  cartCount.value += amount;

  cartHistory.value.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    productId: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: amount,
    action,
    total: Number((product.price * amount).toFixed(2)),
    createdAt: new Date().toLocaleString(),
  });

  pushNotification(`${action}: ${amount} x ${product.name}`);
};

provide("count", cartCount);
provide("cartHistory", cartHistory);
provide("notification", notification);
provide("recordActivity", recordActivity);
provide("pushNotification", pushNotification);
provide("cartTotal", computed(() => cartCount.value));
</script>
