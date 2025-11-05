import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroBlockProps {
  title: string
  subtitle?: string
  backgroundType: 'gradient' | 'image'
  backgroundImage?: any
  cta?: Array<{
    text: string
    url: string
    style: 'primary' | 'secondary' | 'outline'
  }>
}

export function HeroBlock({ title, subtitle, backgroundType, backgroundImage, cta }: HeroBlockProps) {
  const bgClass =
    backgroundType === 'gradient'
      ? 'bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500'
      : 'bg-gray-900'

  return (
    <section className={`relative overflow-hidden ${bgClass} py-32 text-white`}>
      {backgroundType === 'image' && backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${backgroundImage.url})` }}
        />
      )}

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">{subtitle}</p>
          )}
          {cta && cta.length > 0 && (
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {cta.map((button, index) => (
                <Button key={index} variant={button.style as any} size="lg" asChild>
                  <Link href={button.url}>
                    {button.text}
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
