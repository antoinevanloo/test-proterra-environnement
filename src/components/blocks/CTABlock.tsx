import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CTABlockProps {
  title: string
  description?: string
  buttons: Array<{
    text: string
    url: string
    style: 'primary' | 'secondary' | 'outline'
  }>
  background?: 'navy' | 'lime' | 'white' | 'gray'
}

const backgroundClasses = {
  navy: 'bg-gradient-to-br from-proterra-navy-500 to-proterra-navy-600 text-white',
  lime: 'bg-gradient-to-br from-proterra-lime-500 to-proterra-lime-600 text-proterra-navy-900',
  white: 'bg-white text-gray-900',
  gray: 'bg-gray-50 text-gray-900',
}

export function CTABlock({ title, description, buttons, background = 'navy' }: CTABlockProps) {
  const isLight = background === 'white' || background === 'gray'

  return (
    <section className={cn('py-20', backgroundClasses[background])}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={cn('mb-4 text-3xl font-bold md:text-4xl', isLight && 'text-proterra-navy-500')}>
          {title}
        </h2>
        {description && (
          <p className={cn('mx-auto mb-8 max-w-2xl text-lg', isLight ? 'text-gray-600' : 'opacity-90')}>
            {description}
          </p>
        )}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {buttons.map((button, index) => (
            <Button key={index} variant={button.style as any} size="lg" asChild>
              <Link href={button.url}>
                {button.text}
                <ArrowRight size={20} />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
