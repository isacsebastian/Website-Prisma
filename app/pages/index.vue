<script setup lang="ts">
// Importar todas las secciones del Home
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  PortfolioPreviewSection,
  CTASection
} from '~/features/home'

// Meta tags para SEO
useHead({
  title: 'Prisma - Agencia Web | Diseño y Animaciones',
  meta: [
    {
      name: 'description',
      content: 'Agencia web especializada en diseño y animaciones. Creamos experiencias digitales únicas que cautivan a tu audiencia.'
    },
    {
      property: 'og:title',
      content: 'Prisma - Agencia Web | Diseño y Animaciones'
    },
    {
      property: 'og:description',
      content: 'Agencia web especializada en diseño y animaciones. Creamos experiencias digitales únicas que cautivan a tu audiencia.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Portfolio Preview Section -->
    <PortfolioPreviewSection />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>
