import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CustomLabel from '@/components/atoms/CustomLabel.vue'

describe('CustomLabelのテスト', () => {
  it('正常:CustomLabelが正しく表示されることを確認', () => {
    const wrapper = mount(CustomLabel, { props: { text: 'テキストラベル' } })
    expect(wrapper.text()).toContain('テキストラベル')

    const spanElement = wrapper.find('span')
    const classList = spanElement.classes()

    expect(classList).toContain('base-text')
  })

  it('正常:CustomeClassが正しく設定されていることを確認', () => {
    const wrapper = mount(CustomLabel, { props: { text: 'テキスト', customClass: 'bg-gray-100' } })
    expect(wrapper.text()).toContain('テキスト')

    const spanElement = wrapper.find('span')
    const classList = spanElement.classes()

    expect(classList).toContain('base-text')
    expect(classList).toContain('bg-gray-100')
  })
})
