import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-proterra-navy-500 text-white hover:bg-proterra-navy-600 active:scale-95 shadow-md hover:shadow-lg',
        primary:
          'bg-proterra-lime-500 text-proterra-navy-900 hover:bg-proterra-lime-600 active:scale-95 shadow-md hover:shadow-lg',
        secondary:
          'bg-proterra-blue-500 text-white hover:bg-proterra-blue-600 active:scale-95 shadow-md hover:shadow-lg',
        destructive: 'bg-red-500 text-white hover:bg-red-600 active:scale-95',
        outline:
          'border-2 border-proterra-navy-500 text-proterra-navy-500 hover:bg-proterra-navy-50 active:scale-95',
        outlineWhite:
          'border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm active:scale-95',
        ghost: 'hover:bg-accent hover:text-accent-foreground active:scale-95',
        link: 'text-proterra-lime-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
