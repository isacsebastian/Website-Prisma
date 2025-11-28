<script setup>
const projects = [
  {
    title: 'E-commerce Moderno',
    category: 'Web Development',
    tags: ['Vue.js', 'Nuxt', 'TailwindCSS']
  },
  {
    title: 'Dashboard Analytics',
    category: 'UI/UX Design',
    tags: ['React', 'Charts', 'GSAP']
  },
  {
    title: 'Landing Page Tech',
    category: 'Animation',
    tags: ['GSAP', 'ScrollTrigger', 'WebGL']
  }
]
</script>

<template>
  <Section spacing="lg" background="neutral">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Proyectos
          <span class="text-blue-600">Destacados</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre algunos de nuestros trabajos más recientes
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <PortfolioCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :category="project.category"
          :tags="project.tags"
        />
      </div>

      <div class="text-center">
        <NuxtLink
          to="/portfolio"
          class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ver todos los proyectos
        </NuxtLink>
      </div>
    </Container>
  </Section>
</template>
