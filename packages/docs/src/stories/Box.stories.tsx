import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@igg-ui/react'

export default {
  title: 'Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
