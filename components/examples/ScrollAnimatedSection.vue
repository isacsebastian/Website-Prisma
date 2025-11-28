<script setup>
const sectionRef = ref(null)
const { fadeIn, animateOnScroll } = useAnimations()

onMounted(() => {
  // Animar cuando se hace scroll hasta esta sección
  animateOnScroll(sectionRef.value, () => {
    fadeIn(sectionRef.value, {
      y: 50,
      duration: 1
    })
  })
})
</script>

<template>
  <section ref="sectionRef" class="py-20 bg-gradient-to-br from-blue-500 to-purple-600">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-white mb-6">
        Sección con Animación de Scroll
      </h2>
      <p class="text-xl text-white/90">
        Esta sección se anima cuando haces scroll hasta ella
      </p>
    </div>
  </section>
</template>
