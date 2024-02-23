import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import type { ITimelineProps } from '@/components/Timeline'

import Timeline from '@/components/Timeline/Timeline.vue'

describe('Timeline', () => {
  it('renders properly', () => {
    const props: ITimelineProps = {
      mode: 'primary',
      text: 'Групповой заказ'
    }

    const wrapper = mount(Timeline, { props })
    expect(wrapper.text()).toContain('Групповой заказ')
  })
  it('renders properly', () => {
    const props: ITimelineProps = {
      mode: 'primary',
      text: 'Совместный заказ'
    }

    const wrapper = mount(Timeline, { props })
    expect(wrapper.text()).toContain('Совместный заказ')
  })
  it('renders properly', () => {
    const props: ITimelineProps = {
      mode: 'primary',
      text: 'Обычный заказ'
    }

    const wrapper = mount(Timeline, { props })
    expect(wrapper.text()).toContain('Обычный заказ')
  })
})
