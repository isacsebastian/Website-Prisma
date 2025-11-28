<template>
  <Section spacing="lg" background="white">
    <Container>
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 md:p-16 lg:p-20">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 bg-grid-pattern" />
        </div>

        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

        <div class="relative z-10 text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para crear algo
            <span class="text-blue-200">increíble?</span>
          </h2>

          <p class="text-lg md:text-xl text-white/90 mb-8">
            Trabajemos juntos para llevar tu proyecto al siguiente nivel con
            diseños únicos y animaciones que dejan huella.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Comenzar proyecto
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </NuxtLink>
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
