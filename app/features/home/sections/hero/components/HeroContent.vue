<script setup lang="ts">
const { fadeIn, fadeInLeft } = useAnimation()
const contentRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!titleRef.value || !descriptionRef.value || !ctaRef.value) return

  fadeInLeft(titleRef.value, { duration: 500, delay: 0.2 })
  fadeIn(descriptionRef.value, { duration: 500, delay: 0.4 })
  fadeIn(ctaRef.value, { duration: 500, delay: 0.6 })
})
</script>

<template>
  <div ref="contentRef" class="space-y-6 md:space-y-8">
    <h1
      ref="titleRef"
      class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-neutral-900 leading-tight"
    >
      Diseñamos experiencias
      <span class="text-primary-600">digitales únicas</span>
    </h1>

    <p
      ref="descriptionRef"
      class="text-lg md:text-xl text-neutral-600 max-w-2xl"
    >
      Somos una agencia web especializada en crear sitios web con animaciones
      increíbles que cautivan a tu audiencia y generan resultados.
    </p>

    <div ref="ctaRef" class="flex flex-col sm:flex-row gap-4">
      <Button variant="primary" size="lg" to="/contact">
        Comenzar proyecto
      </Button>
      <Button variant="outline" size="lg" to="/portfolio">
        Ver portafolio
      </Button>
    </div>
  </div>
</template>
