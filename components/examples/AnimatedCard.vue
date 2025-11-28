<script setup>
const props = defineProps({
  title: String,
  description: String
})

const cardRef = ref(null)
const { fadeIn } = useAnimations()

onMounted(() => {
  // Animar cuando el componente se monta
  fadeIn(cardRef.value, {
    delay: 0.2,
    duration: 0.8
  })
})
</script>

<template>
  <div
    ref="cardRef"
    class="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <h3 class="text-2xl font-bold text-gray-900 mb-4">
      {{ title }}
    </h3>
    <p class="text-gray-600">
      {{ description }}
    </p>
  </div>
</template>
