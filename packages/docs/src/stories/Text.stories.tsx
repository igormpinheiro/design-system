import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@igg-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi ipsa voluptate dolorem beatae voluptatum quidem, et ex culpa quisquam aut, maiores totam. Natus non debitis dolor deleniti accusantium nulla.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
