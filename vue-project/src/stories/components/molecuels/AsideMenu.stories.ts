import type { Meta, StoryObj } from '@storybook/vue3'

import AsideMenu from '@/components/molecuels/AsideMenu.vue'

const meta = {
  title: 'molecuels/AsideMenu',
  component: AsideMenu,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    linkPath: { control: 'text', defaultValue: '/' },
    customClass: { control: 'text' }
  }
} satisfies Meta<typeof AsideMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'デフォルトです',
    linkPath: '/'
  }
}

export const TextColor: Story = {
  args: {
    text: '文字を赤にします',
    linkPath: '/',
    customClass: 'text-red-500'
  }
}

export const Padding: Story = {
  args: {
    text: 'パディング',
    linkPath: '/',
    customClass: 'p-4'
  }
}

export const CustomeClass: Story = {
  args: {
    text: 'パディング ボーダーソリッド',
    linkPath: '/',
    customClass: 'p-4 border-solid border-2 border-indigo-600'
  }
}
