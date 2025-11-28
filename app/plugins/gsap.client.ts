import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Configuración global de GSAP
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    })

    // Defaults para animaciones
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.5
    })

    // Refresh ScrollTrigger después de cargar imágenes
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        ScrollTrigger.refresh()
      })
    }
  }

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
