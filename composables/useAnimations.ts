import { gsap } from 'gsap'

/**
 * Composable simple para animaciones GSAP
 * Uso: const { fadeIn, slideIn } = useAnimations()
 */
export const useAnimations = () => {
  /**
   * Fade in básico
   */
  const fadeIn = (element: any, options = {}) => {
    if (!element) return

    return gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      ...options
    })
  }

  /**
   * Slide desde la izquierda
   */
  const slideInLeft = (element: any, options = {}) => {
    if (!element) return

    return gsap.from(element, {
      opacity: 0,
      x: -50,
      duration: 0.6,
      ease: 'power2.out',
      ...options
    })
  }

  /**
   * Slide desde la derecha
   */
  const slideInRight = (element: any, options = {}) => {
    if (!element) return

    return gsap.from(element, {
      opacity: 0,
      x: 50,
      duration: 0.6,
      ease: 'power2.out',
      ...options
    })
  }

  /**
   * Scale in (crecer)
   */
  const scaleIn = (element: any, options = {}) => {
    if (!element) return

    return gsap.from(element, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: 'back.out(1.2)',
      ...options
    })
  }

  /**
   * Animación con scroll trigger
   */
  const animateOnScroll = (element: any, animation: any) => {
    if (!element) return

    const { $ScrollTrigger } = useNuxtApp()

    return $ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      once: true,
      onEnter: () => animation()
    })
  }

  return {
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    animateOnScroll
  }
}
