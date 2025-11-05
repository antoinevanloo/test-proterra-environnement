import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryBlockProps {
  title?: string
  images: Array<{
    image: {
      url: string
      alt?: string
    }
    caption?: string
  }>
  columns?: '2' | '3' | '4'
}

const columnsClasses = {
  '2': 'sm:grid-cols-2',
  '3': 'sm:grid-cols-2 lg:grid-cols-3',
  '4': 'sm:grid-cols-2 lg:grid-cols-4',
}

export function GalleryBlock({ title, images, columns = '3' }: GalleryBlockProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold text-proterra-navy-500 md:text-4xl">
            {title}
          </h2>
        )}

        <div className={cn('grid gap-6', columnsClasses[columns])}>
          {images.map((item, index) => (
            <figure key={index} className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image.url}
                  alt={item.image.alt || ''}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              {item.caption && (
                <figcaption className="p-4 text-center text-sm text-gray-600">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
