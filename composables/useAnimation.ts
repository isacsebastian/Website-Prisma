import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { AnimationConfig, ScrollTriggerConfig } from '~/types'

export const useAnimation = () => {
  const prefersReducedMotion = ref(false)

  onMounted(() => {
    if (import.meta.client) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      prefersReducedMotion.value = mediaQuery.matches

      mediaQuery.addEventListener('change', (e) => {
        prefersReducedMotion.value = e.matches
      })
    }
  })

  /**
   * Animación de fade in con desplazamiento
   */
  const fadeIn = (
    target: gsap.TweenTarget,
    config: Partial<AnimationConfig> = {}
  ) => {
    if (prefersReducedMotion.value) return

    return gsap.from(target, {
      opacity: 0,
      y: 30,
      duration: config.duration ? config.duration / 1000 : 0.5,
      ease: config.ease || 'power2.out',
      delay: config.delay,
      stagger: config.stagger
    })
  }

  /**
   * Animación de fade in desde la izquierda
   */
  const fadeInLeft = (
    target: gsap.TweenTarget,
    config: Partial<AnimationConfig> = {}
  ) => {
    if (prefersReducedMotion.value) return

    return gsap.from(target, {
      opacity: 0,
      x: -50,
      duration: config.duration ? config.duration / 1000 : 0.5,
      ease: config.ease || 'power2.out',
      delay: config.delay,
      stagger: config.stagger
    })
  }

  /**
   * Animación de fade in desde la derecha
   */
  const fadeInRight = (
    target: gsap.TweenTarget,
    config: Partial<AnimationConfig> = {}
  ) => {
    if (prefersReducedMotion.value) return

    return gsap.from(target, {
      opacity: 0,
      x: 50,
      duration: config.duration ? config.duration / 1000 : 0.5,
      ease: config.ease || 'power2.out',
      delay: config.delay,
      stagger: config.stagger
    })
  }

  /**
   * Animación de escala
   */
  const scaleIn = (
    target: gsap.TweenTarget,
    config: Partial<AnimationConfig> = {}
  ) => {
    if (prefersReducedMotion.value) return

    return gsap.from(target, {
      opacity: 0,
      scale: 0.8,
      duration: config.duration ? config.duration / 1000 : 0.5,
      ease: config.ease || 'back.out(1.7)',
      delay: config.delay,
      stagger: config.stagger
    })
  }

  /**
   * Crear ScrollTrigger
   */
  const createScrollTrigger = (
    animation: gsap.core.Timeline | gsap.core.Tween,
    config: ScrollTriggerConfig
  ) => {
    if (prefersReducedMotion.value) return

    return ScrollTrigger.create({
      trigger: config.trigger,
      start: config.start || 'top 80%',
      end: config.end,
      scrub: config.scrub,
      pin: config.pin,
      markers: config.markers || false,
      animation
    })
  }

  /**
   * Limpiar todas las animaciones y ScrollTriggers
   */
  const cleanup = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }

  onBeforeUnmount(() => {
    cleanup()
  })

  return {
    fadeIn,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    createScrollTrigger,
    cleanup,
    prefersReducedMotion
  }
}
