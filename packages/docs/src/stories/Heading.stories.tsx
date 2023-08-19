import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@igg-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o componente Heading renderiza um `h2`. Você pode alterar o elemento HTML que será renderizado através da prop `as`.',
      },
    },
  },
}
