import type { Meta, StoryObj } from '@storybook/svelte'

import RadioButton from '$lib/components/RadioButton/RadioButton.svelte'

const name: string = 'radio_group'
const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: { name }
} satisfies Meta<RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const UncheckedRadioButton: Story = {
  args: {
    label: 'Radio label'
  }
}
export const CheckedRadioButton: Story = {
  args: {
    label: 'Radio label',
    checked: true
  }
}
export const ErrorRadioButton: Story = {
  args: {
    label: 'Radio label',
    error: true
  }
}
export const DisabledRadioButton: Story = {
  args: {
    label: 'Radio label',
    disabled: true
  }
}
export const CheckedDisabledRadioButton: Story = {
  args: {
    label: 'Radio label',
    checked: true,
    disabled: true
  }
}
