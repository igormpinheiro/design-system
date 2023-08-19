import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@igg-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/igormpinheiro.png',
    alt: 'Igor Pinheiro',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
