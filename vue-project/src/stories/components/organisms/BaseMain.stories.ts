import type { Meta, StoryObj } from '@storybook/vue3'

import BaseMain from '@/components/organisms/BaseMain.vue'

const meta = {
  title: 'organisms/BaseMain',
  component: BaseMain,
  tags: ['autodocs']
} satisfies Meta<typeof BaseMain>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
