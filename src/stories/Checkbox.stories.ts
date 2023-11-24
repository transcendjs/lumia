import type { Meta, StoryObj } from '@storybook/svelte'

import Checkbox from '$lib/components/Checkbox/Checkbox.svelte'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
} satisfies Meta<Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const UncheckedCheckbox: Story = {
  args: {
    label: 'Checkbox label'
  }
}
export const CheckedCheckbox: Story = {
  args: {
    label: 'Checkbox label',
    checked: true
  }
}
export const IndeterminateCheckbox: Story = {
  args: {
    label: 'Checkbox label',
    indeterminate: true
  }
}
export const ErrorCheckbox: Story = {
  args: {
    label: 'Checkbox label',
    error: true
  }
}
export const DisabledCheckbox: Story = {
  args: {
    label: 'Checkbox label',
    disabled: true
  }
}
export const RequiredCheckbox: Story = {
  args: {
    label: 'Checkbox label',
    required: true
  }
}
