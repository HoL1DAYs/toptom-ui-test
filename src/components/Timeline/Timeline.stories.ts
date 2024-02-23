import type { Meta, StoryObj } from '@storybook/vue3'

import '@/components/Timeline/styles.scss'

import Timeline from '@/components/Timeline/Timeline.vue'

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  argTypes: {
    mode: {
        type: 'string',
        description: 'Вариант цветов активных элементов',
        defaultValue: 'primary',
        options: ['primary', 'secondary'],
        control: {
          type: 'radio'
        }
      },
    text: {
      type: 'string',
      description: 'Текст, который должен отобразиться в таймлайне',
      defaultValue: 'Обычный заказ',
      options: ['Совместный заказ', 'Групповой заказ', 'Обычный заказ'],
      control: {
        type: 'radio'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Timeline>

export const Primary: Story = {
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args }
    },
    template: '<Timeline :mode="args.mode" :text="args.text"/>'
  }),
  args: {
    text: 'Обычный заказ'
  }
}
