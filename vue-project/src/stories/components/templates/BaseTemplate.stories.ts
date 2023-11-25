import type { Meta, StoryObj } from '@storybook/vue3'

import BaseTemplate from '@/components/templates/BaseTemplate.vue'

const meta = {
  title: 'tamplates/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs']
} satisfies Meta<typeof BaseTemplate>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
