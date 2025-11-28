<script setup lang="ts">
const services = [
  {
    icon: '🎨',
    title: 'Diseño Web',
    description: 'Diseños modernos y atractivos que reflejan la identidad de tu marca.',
    features: [
      'UI/UX Design',
      'Responsive Design',
      'Brand Identity',
      'Prototipado'
    ]
  },
  {
    icon: '⚡',
    title: 'Desarrollo Frontend',
    description: 'Código limpio y optimizado con las últimas tecnologías.',
    features: [
      'Vue.js & Nuxt.js',
      'React & Next.js',
      'Animaciones GSAP',
      'Performance'
    ]
  },
  {
    icon: '🚀',
    title: 'Animaciones',
    description: 'Experiencias interactivas que cautivan a tu audiencia.',
    features: [
      'Micro-interacciones',
      'Scroll animations',
      'Loading animations',
      'Page transitions'
    ]
  }
]

const { animateGroupOnScroll } = useScrollAnimation()
const servicesRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (titleRef.value) {
    const { animateOnScroll } = useScrollAnimation()
    animateOnScroll(titleRef, 'fadeIn')
  }

  animateGroupOnScroll(servicesRef, '.service-card', 0.15)
})
</script>

<template>
  <Section spacing="lg" background="white">
    <Container>
      <!-- Header -->
      <div ref="titleRef" class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
          Nuestros
          <span class="text-primary-600">Servicios</span>
        </h2>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
          Ofrecemos soluciones completas para llevar tu presencia digital al
          siguiente nivel
        </p>
      </div>

      <!-- Grid de servicios -->
      <div ref="servicesRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          class="service-card"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :features="service.features"
        />
      </div>
    </Container>
  </Section>
</template>
