import { Laptop, Layers, Smartphone, Zap, type LucideIcon } from 'lucide-react'

export const contact = {
  phone: '+91 98450 12345',
  phoneHref: 'tel:+919845012345',
  email: 'hello@automatestudio.dev',
} as const

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  { title: 'AI Automation', description: 'Replace repetitive work with intelligent workflows.', icon: Zap },
  { title: 'AI Solutions', description: 'Build applications that use your business data effectively.', icon: Layers },
  { title: 'Web Development', description: 'Custom web applications and platforms for your business.', icon: Laptop },
  { title: 'Mobile Development', description: 'Intuitive mobile apps that connect your customers and operations.', icon: Smartphone },
]
