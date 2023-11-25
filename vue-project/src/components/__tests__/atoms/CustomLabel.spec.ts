import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CustomLabel from '@/components/atoms/CustomLabel.vue'

describe('CustomLabelのテスト', () => {
  it('正常:CustomLabelが正しく表示されることを確認', () => {
    const wrapper = mount(CustomLabel, { props: { text: 'テキストラベル' } })
    expect(wrapper.text()).toContain('テキストラベル')
  })
})
