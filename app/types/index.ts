// Types globales del proyecto

export interface AnimationConfig {
  duration: 200 | 300 | 500
  ease: string
  delay?: number
  stagger?: number
}

export interface ScrollTriggerConfig {
  trigger: string | HTMLElement
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export interface CTASection {
  title: string
  description: string
  primaryAction: {
    text: string
    link: string
  }
  secondaryAction?: {
    text: string
    link: string
  }
}
