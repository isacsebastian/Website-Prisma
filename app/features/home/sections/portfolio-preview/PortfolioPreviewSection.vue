<script setup lang="ts">
const projects = [
  {
    title: 'E-commerce Moderno',
    category: 'Web Development',
    image: '/portfolio/project-1.webp',
    tags: ['Vue.js', 'Nuxt', 'TailwindCSS']
  },
  {
    title: 'Dashboard Analytics',
    category: 'UI/UX Design',
    image: '/portfolio/project-2.webp',
    tags: ['React', 'Charts', 'GSAP']
  },
  {
    title: 'Landing Page Tech',
    category: 'Animation',
    image: '/portfolio/project-3.webp',
    tags: ['GSAP', 'ScrollTrigger', 'WebGL']
  }
]

const { animateGroupOnScroll } = useScrollAnimation()
const portfolioRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (titleRef.value) {
    const { animateOnScroll } = useScrollAnimation()
    animateOnScroll(titleRef, 'fadeIn')
  }

  animateGroupOnScroll(portfolioRef, '.portfolio-card', 0.15)
})
</script>

<template>
  <Section spacing="lg" background="neutral">
    <Container>
      <!-- Header -->
      <div ref="titleRef" class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
          Proyectos
          <span class="text-primary-600">Destacados</span>
        </h2>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
          Descubre algunos de nuestros trabajos más recientes
        </p>
      </div>

      <!-- Grid de proyectos -->
      <div ref="portfolioRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <PortfolioCard
          v-for="project in projects"
          :key="project.title"
          class="portfolio-card"
          :title="project.title"
          :category="project.category"
          :image="project.image"
          :tags="project.tags"
        />
      </div>

      <!-- CTA -->
      <div class="text-center">
        <Button variant="primary" size="lg" to="/portfolio">
          Ver todos los proyectos
        </Button>
      </div>
    </Container>
  </Section>
</template>
