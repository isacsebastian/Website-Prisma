<script setup lang="ts">
const { animateOnScroll } = useScrollAnimation()
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateOnScroll(ctaRef, 'scaleIn')
})
</script>

<template>
  <Section spacing="lg" background="white">
    <Container>
      <div
        ref="ctaRef"
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-600 p-12 md:p-16 lg:p-20"
      >
        <!-- Pattern decorativo -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 bg-grid-pattern" />
        </div>

        <!-- Elementos decorativos -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

        <!-- Contenido -->
        <div class="relative z-10 text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            ¿Listo para crear algo
            <span class="text-primary-200">increíble?</span>
          </h2>

          <p class="text-lg md:text-xl text-white/90 mb-8">
            Trabajemos juntos para llevar tu proyecto al siguiente nivel con
            diseños únicos y animaciones que dejan huella.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              class="bg-white text-primary-600 hover:bg-neutral-50"
            >
              Comenzar proyecto
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/services"
              class="border-white text-white hover:bg-white/10"
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </Section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
