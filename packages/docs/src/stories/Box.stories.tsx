import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@igg-ui/react'

export default {
  title: 'Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
