import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageBlockProps {
  image: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
}

const sizeClasses = {
  small: 'max-w-2xl',
  medium: 'max-w-4xl',
  large: 'max-w-6xl',
  full: 'max-w-full',
}

export function ImageBlock({ image, caption, size = 'large' }: ImageBlockProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <figure className={cn('mx-auto', sizeClasses[size])}>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src={image.url}
              alt={image.alt || ''}
              width={image.width || 1200}
              height={image.height || 800}
              className="w-full h-auto"
            />
          </div>
          {caption && (
            <figcaption className="mt-4 text-center text-sm text-gray-600">{caption}</figcaption>
          )}
        </figure>
      </div>
    </section>
  )
}
