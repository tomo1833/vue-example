import type { Meta, StoryObj } from '@storybook/vue3'

import TodoContents from '@/components/pages/views/TodoContents.vue'

const meta = {
  title: 'pages/views/TodoContents',
  component: TodoContents,
  tags: ['autodocs']
} satisfies Meta<typeof TodoContents>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
