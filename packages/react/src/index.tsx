import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$sm',
  color: '$white',
  backgroundColor: '$igg500',
  border: 0,
  fontWeight: 'bold',

  variants: {
    size: {
      small: {
        fontSize: '$xs',
        padding: '$1 $2',
      },
      medium: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      large: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
