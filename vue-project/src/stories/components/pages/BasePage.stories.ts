import type { Meta, StoryObj } from '@storybook/vue3'

import BasePage from '@/components/pages/BasePage.vue'

const meta = {
  title: 'pages/BasePage',
  component: BasePage,
  tags: ['autodocs']
} satisfies Meta<typeof BasePage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
