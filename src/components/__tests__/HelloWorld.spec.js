import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('HelloWorld', () => {
  it('tests inputfield', () => {
    const wrapper = mount(HelloWorld)
    const input = wrapper.find('input')
    input.setValue('Hello Vitest')
    expect(input.element.value).toBe('Hello Vitest')
  })
})