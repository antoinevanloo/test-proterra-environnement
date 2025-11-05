import React from 'react'
import { HeroBlock } from './HeroBlock'
import { RichTextBlock } from './RichTextBlock'
import { ImageBlock } from './ImageBlock'
import { GalleryBlock } from './GalleryBlock'
import { VideoBlock } from './VideoBlock'
import { CTABlock } from './CTABlock'
import { FeaturesGridBlock } from './FeaturesGridBlock'
import { StatsBlock } from './StatsBlock'
import { TestimonialsBlock } from './TestimonialsBlock'
import { ContactFormBlock } from './ContactFormBlock'
import { MapBlock } from './MapBlock'
import { FAQBlock } from './FAQBlock'

type Block =
  | { blockType: 'hero'; [key: string]: any }
  | { blockType: 'richText'; [key: string]: any }
  | { blockType: 'image'; [key: string]: any }
  | { blockType: 'gallery'; [key: string]: any }
  | { blockType: 'video'; [key: string]: any }
  | { blockType: 'cta'; [key: string]: any }
  | { blockType: 'featuresGrid'; [key: string]: any }
  | { blockType: 'stats'; [key: string]: any }
  | { blockType: 'testimonials'; [key: string]: any }
  | { blockType: 'contactForm'; [key: string]: any }
  | { blockType: 'map'; [key: string]: any }
  | { blockType: 'faq'; [key: string]: any }

interface RenderBlocksProps {
  blocks: Block[]
}

const blockComponents: Record<string, React.ComponentType<any>> = {
  hero: HeroBlock,
  richText: RichTextBlock,
  image: ImageBlock,
  gallery: GalleryBlock,
  video: VideoBlock,
  cta: CTABlock,
  featuresGrid: FeaturesGridBlock,
  stats: StatsBlock,
  testimonials: TestimonialsBlock,
  contactForm: ContactFormBlock,
  map: MapBlock,
  faq: FAQBlock,
}

export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponents[block.blockType]

        if (!BlockComponent) {
          console.warn(`Block type "${block.blockType}" not found`)
          return null
        }

        return <BlockComponent key={`${block.blockType}-${index}`} {...block} />
      })}
    </>
  )
}
