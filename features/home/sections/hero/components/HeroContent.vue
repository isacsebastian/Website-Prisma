<template>
  <div class="space-y-6 md:space-y-8">
    <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
      Diseñamos experiencias
      <span class="text-blue-600">digitales únicas</span>
    </h1>

    <p class="text-lg md:text-xl text-gray-600 max-w-2xl">
      Somos una agencia web especializada en crear sitios web con animaciones
      increíbles que cautivan a tu audiencia y generan resultados.
    </p>

    <div class="flex flex-col sm:flex-row gap-4">
      <NuxtLink
        to="/contact"
        class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Comenzar proyecto
      </NuxtLink>
      <NuxtLink
        to="/portfolio"
        class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
      >
        Ver portafolio
      </NuxtLink>
    </div>
  </div>
</template>
