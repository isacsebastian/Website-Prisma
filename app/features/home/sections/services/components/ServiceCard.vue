<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  features: string[]
}

defineProps<Props>()

const cardRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
</script>

<template>
  <div
    ref="cardRef"
    class="group relative p-8 bg-white rounded-2xl border border-neutral-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Icono -->
    <div class="mb-6">
      <div
        class="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-primary-600 group-hover:scale-110"
        :class="isHovered ? 'text-white' : 'text-primary-600'"
      >
        {{ icon }}
      </div>
    </div>

    <!-- Contenido -->
    <h3 class="text-2xl font-display font-bold text-neutral-900 mb-4">
      {{ title }}
    </h3>

    <p class="text-neutral-600 mb-6">
      {{ description }}
    </p>

    <!-- Features -->
    <ul class="space-y-2">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-start gap-2 text-sm text-neutral-600"
      >
        <span class="text-primary-600 mt-1">✓</span>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <!-- Efecto hover -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/5 to-secondary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
</template>
