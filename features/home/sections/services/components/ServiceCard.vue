<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  features: Array
})
</script>

<template>
  <div class="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
    <div class="mb-6">
      <div class="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110 group-hover:text-white">
        {{ icon }}
      </div>
    </div>

    <h3 class="text-2xl font-bold text-gray-900 mb-4">
      {{ title }}
    </h3>

    <p class="text-gray-600 mb-6">
      {{ description }}
    </p>

    <ul class="space-y-2">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-start gap-2 text-sm text-gray-600"
      >
        <span class="text-blue-600 mt-1">✓</span>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
</template>
