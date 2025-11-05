import { cn } from '@/lib/utils'

interface RichTextBlockProps {
  content: any
  maxWidth?: 'prose' | 'normal' | 'wide' | 'full'
}

const widthClasses = {
  prose: 'max-w-prose',
  normal: 'max-w-4xl',
  wide: 'max-w-6xl',
  full: 'max-w-full',
}

export function RichTextBlock({ content, maxWidth = 'normal' }: RichTextBlockProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            'prose prose-lg prose-proterra mx-auto',
            widthClasses[maxWidth],
            'prose-headings:text-proterra-navy-500',
            'prose-a:text-proterra-blue-500 prose-a:no-underline hover:prose-a:underline',
            'prose-strong:text-proterra-navy-500',
            'prose-ul:list-disc prose-ol:list-decimal'
          )}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}
