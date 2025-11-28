<script setup lang="ts">
const stats = [
  { value: '100+', label: 'Proyectos completados' },
  { value: '50+', label: 'Clientes satisfechos' },
  { value: '5+', label: 'Años de experiencia' },
  { value: '98%', label: 'Tasa de satisfacción' }
]

const { animateGroupOnScroll } = useScrollAnimation()
const statsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateGroupOnScroll(statsRef, '.stat-item', 0.1)
})
</script>

<template>
  <div ref="statsRef" class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="stat-item text-center"
    >
      <div class="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {{ stat.value }}
      </div>
      <div class="text-sm md:text-base text-neutral-600">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>
