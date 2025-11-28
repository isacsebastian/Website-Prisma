import { gsap } from 'gsap'
import type { Ref } from 'vue'

export const useScrollAnimation = () => {
  const { createScrollTrigger, prefersReducedMotion } = useAnimation()

  /**
   * Animar elementos al hacer scroll
   */
  const animateOnScroll = (
    elementRef: Ref<HTMLElement | null>,
    animationType: 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' = 'fadeIn'
  ) => {
    if (!elementRef.value || prefersReducedMotion.value) return

    const animations = {
      fadeIn: { opacity: 0, y: 30 },
      fadeInLeft: { opacity: 0, x: -50 },
      fadeInRight: { opacity: 0, x: 50 },
      scaleIn: { opacity: 0, scale: 0.8 }
    }

    const timeline = gsap.timeline()
    timeline.from(elementRef.value, {
      ...animations[animationType],
      duration: 0.5,
      ease: 'power2.out'
    })

    createScrollTrigger(timeline, {
      trigger: elementRef.value,
      start: 'top 80%'
    })
  }

  /**
   * Animar grupo de elementos con stagger
   */
  const animateGroupOnScroll = (
    containerRef: Ref<HTMLElement | null>,
    selector: string,
    stagger: number = 0.1
  ) => {
    if (!containerRef.value || prefersReducedMotion.value) return

    const timeline = gsap.timeline()
    timeline.from(containerRef.value.querySelectorAll(selector), {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger,
      ease: 'power2.out'
    })

    createScrollTrigger(timeline, {
      trigger: containerRef.value,
      start: 'top 80%'
    })
  }

  /**
   * Parallax scroll effect
   */
  const parallaxScroll = (
    elementRef: Ref<HTMLElement | null>,
    speed: number = 0.5
  ) => {
    if (!elementRef.value || prefersReducedMotion.value) return

    gsap.to(elementRef.value, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: elementRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  return {
    animateOnScroll,
    animateGroupOnScroll,
    parallaxScroll
  }
}
