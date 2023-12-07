import type { Meta, StoryObj } from '@storybook/svelte'

import DateTimePicker from '$lib/components/DatePicker/DateTimePicker.svelte'

const meta = {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    value: {
      control: { type: 'date' }
    },
    type: {
      control: { type: 'select' },
      options: ['datetime', 'date']
    },
    disabled: {
      control: { type: 'boolean' }
    },
    messageKind: {
      control: { type: 'select' },
      options: ['none', 'normal', 'error']
    },
    messageText: {
      control: { type: 'text' }
    },
    messageAllowed: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<DateTimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const DateTimePickerDefault: Story = {
  args: {
    label: 'Label'
  }
}
export const DateTimePickerWithErrorDefault: Story = {
  args: {
    label: 'Label',
    value: new Date(),
    messageKind: 'error',
    messageText: 'Error text'
  }
}
export const DateTimePickerWithHelperDefault: Story = {
  args: {
    label: 'Label',
    value: new Date(),
    messageKind: 'normal',
    messageText: 'Helper text'
  }
}
export const DateTimePickerDisabledDefault: Story = {
  args: {
    label: 'Label',
    value: new Date(),
    disabled: true
  }
}
export const DateTimePickerDateOnlyDefault: Story = {
  args: {
    label: 'Label',
    type: 'date'
  }
}
