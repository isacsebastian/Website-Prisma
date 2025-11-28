<script setup lang="ts">
const { animateOnScroll } = useScrollAnimation()
const contentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateOnScroll(contentRef, 'fadeInLeft')
})
</script>

<template>
  <div ref="contentRef" class="space-y-6">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900">
      Creamos magia digital con
      <span class="text-primary-600">cada proyecto</span>
    </h2>

    <div class="space-y-4 text-neutral-600">
      <p class="text-lg">
        Somos un equipo apasionado de diseñadores y desarrolladores que combinan
        creatividad con tecnología de vanguardia para crear experiencias web
        excepcionales.
      </p>

      <p class="text-lg">
        Nos especializamos en animaciones suaves, interfaces intuitivas y
        código limpio que no solo se ve increíble, sino que también funciona
        perfectamente en todos los dispositivos.
      </p>
    </div>

    <Button variant="primary" size="md" to="/about">
      Conocer más
    </Button>
  </div>
</template>
