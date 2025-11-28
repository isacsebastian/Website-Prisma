<script setup>
defineProps({
  title: String,
  category: String,
  tags: Array
})
</script>

<template>
  <div class="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
      <div class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-20">
        {{ title }}
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-blue-400 text-sm font-semibold mb-2">
          {{ category }}
        </div>
        <h3 class="text-white text-2xl font-bold mb-3">
          {{ title }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in tags"
            :key="tag"
            class="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
      <span class="text-blue-600 text-xl">→</span>
    </div>
  </div>
</template>
