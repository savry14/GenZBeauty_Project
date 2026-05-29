<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section
          class="overflow-hidden rounded-[2rem] bg-pink-400 text-white shadow-2xl"
        >
          <div class="relative h-full p-6 sm:p-8 lg:p-10">
            <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-black/10 blur-3xl"></div>

            <p class="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
              Let&apos;s talk skincare
            </p>

            <h1 class="max-w-md text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              We would love to hear from you
            </h1>

            <p class="mt-5 max-w-lg text-base leading-7 text-pink-100">
              Reach out if you need product advice, order support, partnership
              details, or just want help choosing the right skincare routine.
            </p>

            <div class="mt-10 space-y-4">
              <div class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p class="text-sm uppercase tracking-[0.2em] text-pink-100">Location</p>
                <p class="mt-1 text-lg font-semibold">Phnom Penh, Cambodia</p>
              </div>

              <div class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p class="text-sm uppercase tracking-[0.2em] text-pink-100">Email</p>
                <p class="mt-1 text-lg font-semibold">skincare@example.com</p>
              </div>

              <div class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p class="text-sm uppercase tracking-[0.2em] text-pink-100">Phone</p>
                <p class="mt-1 text-lg font-semibold">+855 12 345 678</p>
              </div>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div class="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p class="text-2xl font-black">24/7</p>
                <p class="mt-1 text-sm text-pink-100">Support</p>
              </div>
              <div class="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p class="text-2xl font-black">48h</p>
                <p class="mt-1 text-sm text-pink-100">Reply time</p>
              </div>
              <div class="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p class="text-2xl font-black">100%</p>
                <p class="mt-1 text-sm text-pink-100">Care</p>
              </div>
            </div>
          </div>
        </section>

        <section class="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
          <div class="mb-8">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Contact Form
            </p>
            <h2 class="mt-2 text-3xl font-bold text-gray-900">
              Send us a message
            </h2>
            <p class="mt-3 max-w-xl text-gray-600">
              Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid gap-5 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700" for="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  v-model="form.fullName"
                  type="text"
                  placeholder="Enter your name"
                  class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700" for="email">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your email"
                  class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700" for="subject">
                Subject
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="What is this about?"
                class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700" for="message">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                placeholder="Write your message..."
                class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
              ></textarea>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-gray-500">
                We usually reply within 1 to 2 business days.
              </p>

              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-2xl bg-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-700 active:scale-[0.99]"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  fullName: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Contact form submitted:", { ...form });

  form.fullName = "";
  form.email = "";
  form.subject = "";
  form.message = "";

  alert("Thanks! Your message has been prepared for submission.");
};
</script>
