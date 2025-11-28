<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  padding: true
})

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-full'
}

const containerClasses = computed(() => {
  const classes = [
    'w-full mx-auto',
    sizeClasses[props.size]
  ]

  if (props.padding) {
    classes.push('px-4 sm:px-6 lg:px-8')
  }

  return classes.join(' ')
})
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>
