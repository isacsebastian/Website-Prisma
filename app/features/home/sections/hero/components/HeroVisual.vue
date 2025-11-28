<script setup lang="ts">
const { scaleIn } = useAnimation()
const visualRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!visualRef.value) return
  scaleIn(visualRef.value, { duration: 500, delay: 0.3 })
})
</script>

<template>
  <div ref="visualRef" class="relative">
    <div class="relative aspect-square md:aspect-auto md:h-[600px] w-full">
      <!-- Placeholder para animación/imagen hero -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-2xl overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-10" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-white text-6xl font-bold opacity-20">
            PRISMA
          </div>
        </div>
      </div>

      <!-- Elementos decorativos -->
      <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
