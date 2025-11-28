<script setup lang="ts">
// About Section del Home
</script>

<template>
  <Section spacing="lg" background="neutral">
    <Container>
      <div class="space-y-16">
        <!-- Contenido principal -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AboutContent />

          <!-- Imagen/Visual -->
          <div class="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-secondary-400 to-primary-600">
              <div class="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-20">
                ABOUT
              </div>
            </div>
          </div>
        </div>

        <!-- Estadísticas -->
        <AboutStats />
      </div>
    </Container>
  </Section>
</template>
