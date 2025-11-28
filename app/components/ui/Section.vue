<script setup lang="ts">
interface Props {
  background?: 'white' | 'neutral' | 'primary' | 'transparent'
  spacing?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  background: 'transparent',
  spacing: 'lg'
})

const backgroundClasses = {
  white: 'bg-white',
  neutral: 'bg-neutral-50',
  primary: 'bg-primary-50',
  transparent: 'bg-transparent'
}

const spacingClasses = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-20 lg:py-24 xl:py-32'
}

const sectionClasses = computed(() => {
  return [
    'relative',
    backgroundClasses[props.background],
    spacingClasses[props.spacing]
  ].join(' ')
})
</script>

<template>
  <section :class="sectionClasses">
    <slot />
  </section>
</template>
