import type { Meta, StoryObj } from '@storybook/vue3'

import BaseHeader from '@/components/organisms/BaseHeader.vue'

const meta = {
  title: 'organisms/BaseHeader',
  component: BaseHeader,
  tags: ['autodocs']
} satisfies Meta<typeof BaseHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
