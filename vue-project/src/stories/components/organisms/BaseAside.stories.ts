import type { Meta, StoryObj } from '@storybook/vue3'

import BaseAside from '@/components/organisms/BaseAside.vue'

const meta = {
  title: 'organisms/BaseAside',
  component: BaseAside,
  tags: ['autodocs']
} satisfies Meta<typeof BaseAside>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
