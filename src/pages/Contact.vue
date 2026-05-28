<template>
  <div class="min-h-screen bg-pink-50 flex items-center justify-center px-6 py-12">
    <div
      class="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
    >
      <div class="bg-pink-500 text-white p-10 flex flex-col justify-center">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>

        <p class="text-pink-100 mb-8 leading-7">
          We'd love to hear from you. Feel free to contact us for any skincare
          questions, product support, or collaboration.
        </p>

        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="bg-white/20 p-3 rounded-full">📍</div>
            <div>
              <h3 class="font-semibold">Location</h3>
              <p class="text-pink-100">Phnom Penh, Cambodia</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="bg-white/20 p-3 rounded-full">📧</div>
            <div>
              <h3 class="font-semibold">Email</h3>
              <p class="text-pink-100">skincare@example.com</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="bg-white/20 p-3 rounded-full">📞</div>
            <div>
              <h3 class="font-semibold">Phone</h3>
              <p class="text-pink-100">+855 12 345 678</p>
            </div>
          </div>
        </div>
      </div>

      <div class="p-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Send Message</h2>

        <form class="space-y-5">
          <div>
            <label class="block mb-2 text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label class="block mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label class="block mb-2 text-gray-700 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>

          <button
            class="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
