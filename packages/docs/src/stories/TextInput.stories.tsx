import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@igg-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm" color="gray">
            Email address
          </Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
