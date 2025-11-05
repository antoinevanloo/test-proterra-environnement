import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Droplets,
  Shield,
  Factory,
  Recycle,
  Wind,
  Sun,
  Leaf,
  Building2,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  droplets: Droplets,
  shield: Shield,
  factory: Factory,
  recycle: Recycle,
  wind: Wind,
  sun: Sun,
  leaf: Leaf,
  building2: Building2,
}

interface FeaturesGridBlockProps {
  title?: string
  subtitle?: string
  features: Array<{
    icon: keyof typeof iconMap
    title: string
    description: string
    link?: string
  }>
  columns?: '2' | '3' | '4'
}

const columnsClasses = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-2 lg:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
}

export function FeaturesGridBlock({
  title,
  subtitle,
  features,
  columns = '3',
}: FeaturesGridBlockProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}

        <div className={cn('grid gap-8', columnsClasses[columns])}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Droplets
            const content = (
              <>
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white">
                    <Icon size={32} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                {feature.link && (
                  <CardContent>
                    <Button variant="ghost" asChild className="w-full">
                      <Link href={feature.link}>
                        En savoir plus
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                )}
              </>
            )

            return (
              <Card
                key={index}
                className="group transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {content}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
