import type { Meta, StoryObj } from '@storybook/vue3'

import CustomButton from '@/components/atoms/CustomButton.vue'

const meta = {
  title: 'atoms/CustomButton',
  component: CustomButton,

  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    customClass: { control: 'text' },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof CustomButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'デフォルトです'
  }
}

export const TextColor: Story = {
  args: {
    text: '文字を赤にします',
    customClass: 'text-red-500'
  }
}

export const Padding: Story = {
  args: {
    text: 'パディング',
    customClass: 'p-4'
  }
}

export const CustomeClass: Story = {
  args: {
    text: 'パディング ボーダーソリッド',
    customClass: 'p-4 border-solid border-2 border-indigo-600'
  }
}
