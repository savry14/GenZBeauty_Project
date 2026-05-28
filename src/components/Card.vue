<template>
  <div class="w-full h-auto lg:px-24 md:px-6 px-4 py-10 bg-pink-200">
    <!-- title -->
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-3xl">Product List</h1>

      <button
        @click="showAll = !showAll"
        class="cursor-pointer shadow-xl rounded-xl px-3 py-2 hover:bg-pink-600 hover:text-white"
      >
        {{ showAll ? "Show Less" : "View All" }}
      </button>
    </div>

    <!-- main card -->
    <div class="w-full h-auto pt-16 flex flex-wrap gap-6">
      <!-- card -->
      <div
        v-for="item in visibleProducts"
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

    <div
      class="w-full h-auto bg-pink-300 mt-10 shadow-xl py-7 px-10 rounded-3xl"
    >
      <!-- maincard -->
      <div class="w-full py-7">
        <!-- card -->
        <div class="w-full flex justify-between">
          <!-- left -->
          <div class="font-bold w-[35%]">
            <p>Glow Every Day</p>
            <h1 class="text-4xl">Skincare That</h1>
            <h1 class="text-4xl">
              <mark class="bg-pink-300 text-pink-600">Loves</mark> You Back
            </h1>
            <p class="py-2">
              Flat 20% off on our best-seller products. <br />Limited time
              offer!
            </p>
            <button
              class="bg-blue-300 hover:bg-blue-600 hover:text-white rounded-3xl px-5 py-2 mt-3 text-black"
            >
              Show Now
            </button>
          </div>
          <!-- center -->
          <div class="w-[50%]">
            <img
              class="w-full rounded-2xl h-70"
              src="/src/assets/image/categories/image.jpeg"
              alt=""
            />
          </div>
          <!-- right -->
          <div class="w-[30%] pl-40">
            <h1 class="font-bold text-4xl text-pink-600">10K+</h1>
            <p>Happy Customers</p>
            <h1 class="pt-12 text-4xl font-bold text-pink-600">4.8</h1>
            <p>Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed } from "vue";

const showAll = ref(false);

const visibleProducts = computed(() => {
  return showAll.value ? products : products.slice(0, 4);
});

const products = [
  {
    id: 1,
    name: "Centella Calm Moisturiser",
    description:
      "A soothing gel-cream with centella asiatica extract that reduces redness and reinforces the skin barrier for lasting comfort.",
    image:
      "https://www.skincupid.co.uk/cdn/shop/files/292_7efaf363-2963-47c1-b62f-e92af07a032e_2.png?v=1727183155&width=1280",
    price: 36.99,
  },
  {
    id: 2,
    name: "Niacinamide Pore Refiner",
    description:
      "A 10% niacinamide serum that minimises pores, controls sebum, and smooths skin texture for a refined, matte finish.",
    image:
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=600&q=80",
    price: 32.99,
  },
  {
    id: 3,
    name: "Retinol Night Renewal Cream",
    description:
      "A rich overnight cream with encapsulated retinol that accelerates cell turnover and visibly reduces fine lines by morning.",
    image: "https://sherostore.ae/cdn/shop/files/retino2l.jpg?v=1760366708",
    price: 72.99,
  },
  {
    id: 4,
    name: "Green Tea Antioxidant Serum",
    description:
      "A lightweight antioxidant serum with green tea EGCG and fermented extracts to protect skin from environmental stressors.",
    image:
      "https://www.pinkavenueskincare.ca/cdn/shop/files/Pink_Avenue_Green_Tea_AOX_Serum_Toronto_Canada_flat_lay.png?v=1768236524&width=2048",
    price: 41.99,
  },
  {
    id: 5,
    name: "Manuka Honey Overnight Mask",
    description:
      "An indulgent sleeping mask with raw Manuka honey and squalane that deeply repairs and reveals dewy, plump skin by morning.",
    image:
      "https://wairekahoney.co.nz/cdn/shop/products/Manuka_Honey___F_5820d115313ec_600x600.jpg?v=1622428928",
    price: 58.99,
  },
  {
    id: 6,
    name: "SPF 50 Daily Sunscreen Fluid",
    description:
      "A weightless SPF 50 fluid with a dry-touch finish that protects against UVA/UVB rays without leaving a white cast.",
    image:
      "https://bondisands.eu/cdn/shop/files/Lifestyle-BS033_BS039_2000x.png?v=1740432198",
    price: 27.99,
  },
  {
    id: 7,
    name: "AHA BHA Exfoliating Toner",
    description:
      "A dual-acid toner combining glycolic and salicylic acid to gently exfoliate, unclog pores, and reveal smoother, clearer skin.",
    image:
      "https://www.nirvanabotanics.com/cdn/shop/files/Nightly-Exfoliating-Treatment_01_1800x1800.jpg?v=1756128524",
    price: 38.99,
  },
  {
    id: 8,
    name: "Collagen Peptide Eye Cream",
    description:
      "A firming eye cream with collagen peptides and caffeine that visibly reduces puffiness, dark circles, and fine lines.",
    image:
      "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/5/1/51JdBcgpw0L._SL1000_.jpg",
    price: 45.99,
  },
];
</script>
