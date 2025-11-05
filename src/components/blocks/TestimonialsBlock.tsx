import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

interface TestimonialsBlockProps {
  title?: string
  testimonials: Array<{
    id: string
    name: string
    role?: string
    company?: string
    quote: string
    rating?: number
  }>
}

export function TestimonialsBlock({ title, testimonials }: TestimonialsBlockProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold text-proterra-navy-500 md:text-4xl">
            {title}
          </h2>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <CardHeader>
                <Quote size={40} className="absolute right-4 top-4 text-proterra-lime-500/20" />

                {testimonial.rating && (
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating!
                            ? 'fill-proterra-lime-500 text-proterra-lime-500'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <blockquote className="mb-6 text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-proterra-navy-500">{testimonial.name}</div>
                  {(testimonial.role || testimonial.company) && (
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ', '}
                      {testimonial.company}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
