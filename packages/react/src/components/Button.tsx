import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursos: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$igg500',
        color: '$white',
        '&:not(:disabled):hover': {
          backgroundColor: '$igg300',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        border: '1px solid $gray300',
        color: '$igg300',
        '&:not(:disabled):hover': {
          backgroundColor: '$igg500',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        padding: '$2 $3',
        fontSize: '$sm',
      },
      md: {
        padding: '$3 $4',
        fontSize: '$md',
      },
      lg: {
        padding: '$4 $5',
        fontSize: '$lg',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
